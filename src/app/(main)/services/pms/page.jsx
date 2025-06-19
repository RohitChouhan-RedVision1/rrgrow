import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Image from "next/image";
import { getServiceData, getSiteData } from "@/lib/functions";

export const metadata = {
  title: "Portfolio Management Services (PMS)",
  description:
    "Achieve superior, risk‑adjusted returns through professionally managed, customized equity portfolios built by SEBI‑registered PMS experts.",
};

const PortfolioManagementServices = async () => {
  const services = await getServiceData();
  const sitedata = await getSiteData();

  return (
    <div>
      {/* Hero Section */}
      <div className="flex bg-center bg-no-repeat bg-cover bg-[url('/images/pms/pms-hero.webp')] bg-gray-500 overflow-hidden text-start justify-start items-center h-64">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-bold">
            Portfolio Management Services
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto main_section">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Left Sticky Sidebar */}
          <div className="space-y-6 md:sticky top-24 self-start h-fit">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold text-[--rv-primary] mb-4">
                Our Service
              </h3>
              <ul className="space-y-3">
                {services.map((service, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center border-b pb-2 hover:text-[--rv-primary] group"
                  >
                    <Link
                      href={`/services/${service.link}`}
                      className="flex-1 transition-colors duration-300"
                    >
                      + {service.name}
                    </Link>
                    <span className="text-xl -rotate-45 transition-transform duration-300 group-hover:rotate-0">
                      →
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Main Content */}
          <div className="md:col-span-2">
            {/* Feature Image */}
            <div className="rounded-xl overflow-hidden mb-6">
              <Image
                src="/service/pms.webp"
                alt="Portfolio Management Services"
                width={800}
                height={400}
                className="rounded-xl w-full object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Professional Portfolio Construction Tailored to Your Goals
            </h2>

            <p className="mb-4">
              <strong className="text-[--rv-primary] text-lg">W</strong>ith
              Portfolio Management Services (PMS), you own a curated basket of
              high‑conviction stocks—managed by seasoned professionals who
              combine top‑down macro views with bottom‑up research to pursue
              outperformance. At{" "}
              <strong>{sitedata.websiteName}</strong>, our SEBI‑registered PMS
              team designs and actively rebalances portfolios that align with
              your return objectives, liquidity needs, and risk appetite.
            </p>

            <p className="mb-4">
              Each strategy is supported by disciplined risk controls,
              meticulous stock selection, and transparent reporting—so you stay
              informed and in control while we do the heavy lifting.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-4">
              {[
                "Customized Equity Portfolios",
                "Active, Research‑Driven Management",
                "Risk‑Optimized Asset Allocation",
                "Transparent Performance Reporting",
                "Direct Ownership of Securities",
                "SEBI‑Registered PMS Experts",
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm font-medium text-[rv-secondary]"
                >
                  <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                  {benefit}
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-8">
              <Link href="/contact-us">
                <Button className="primarybutton px-8 py-3 text-base">
                  Discuss Your Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioManagementServices;
