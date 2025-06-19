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
  title: "Fixed Income Investments",
  description:
    "Preserve capital and earn stable returns with fixed income investment solutions tailored to your financial goals.",
};

const FixedIncome = async () => {
  const services = await getServiceData();
  const sitedata = await getSiteData();

  return (
    <div>
      {/* Hero Section */}

<div className="flex bg-center bg-no-repeat bg-cover bg-[url('/images/pay-premium/pay-premium.webp')] bg-gray-500 overflow-hidden text-start justify-start items-center h-64">
        <div className="max-w-screen-xl mx-auto ">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-bold">
            Fixed Incomes
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
                src="/service/fixed-income.webp"
                alt="Fixed Income Investments"
                width={800}
                height={400}
                className="rounded-xl w-full object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Reliable Returns with Low Volatility
            </h2>

            <p className="mb-4">
              <strong className="text-[--rv-primary] text-lg">F</strong>ixed
              income investments are ideal for capital preservation, income
              stability, and portfolio diversification. At{" "}
              <strong>{sitedata.websiteName}</strong>, we help you select
              high‑quality fixed income instruments—including bonds, corporate
              FDs, NCDs, debt mutual funds, and government securities—that align
              with your financial goals and liquidity needs.
            </p>

            <p className="mb-4">
              Whether you're a conservative investor seeking consistent income
              or looking to balance equity exposure, our experts structure
              fixed income portfolios that optimize safety and yield.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-4">
              {[
                "Capital Preservation with Predictable Returns",
                "Access to Bonds, NCDs, and Corporate FDs",
                "Risk‑Adjusted Income Strategies",
                "Liquidity and Tenure Flexibility",
                "Diversification Across Credit Ratings",
                "Research‑Driven Product Selection",
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
                  Explore Fixed Income Options
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedIncome;
