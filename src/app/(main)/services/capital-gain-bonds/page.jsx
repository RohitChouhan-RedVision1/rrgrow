import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Image from "next/image";
import { getServiceData, getSiteData } from "@/lib/functions";

export const metadata = {
  title: "Capital Gain Bonds (54EC)",
  description:
    "Save on capital gains tax with 54EC bonds while earning safe and steady returns backed by government institutions.",
};

const CapitalGainBonds = async () => {
  const services = await getServiceData();
  const sitedata = await getSiteData();

  return (
    <div>
      {/* Hero Section */}
      <div className="flex bg-center bg-no-repeat bg-cover bg-[url('/images/pay-premium/pay-premium.webp')] bg-gray-500 overflow-hidden text-start justify-start items-center h-64">
        <div className="max-w-screen-xl mx-auto ">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-bold">
            Capital Gain Bonds
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
                src="/service/capital-gain-bonds.webp"
                alt="Capital Gain Bonds 54EC"
                width={800}
                height={400}
                className="rounded-xl w-full object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Save Tax, Earn Stable Returns with 54EC Bonds
            </h2>

            <p className="mb-4">
              <strong className="text-[--rv-primary] text-lg">I</strong>f you've
              recently earned capital gains from selling real estate or other
              long‑term assets, <strong>Section 54EC Bonds</strong> offer an
              effective way to defer your tax liability. At{" "}
              <strong>{sitedata.websiteName}</strong>, we assist you in investing
              in tax‑saving bonds issued by REC, NHAI, PFC, and IRFC—
              government-backed institutions offering safety and steady interest.
            </p>

            <p className="mb-4">
              These bonds not only help you avoid paying long‑term capital gains
              tax (up to ₹50 Lakhs per financial year), but also deliver fixed
              returns over a 5-year lock-in period, making them ideal for
              risk‑averse investors.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-4">
              {[
                "Exemption Under Section 54EC",
                "Lock-in Period of 5 Years",
                "Interest ~5.25% p.a. (Taxable)",
                "Max Investment: ₹50 Lakhs",
                "Issued by Govt-backed PSUs",
                "Capital Protection & Tax Deferral",
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
                  Invest in Capital Gain Bonds
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapitalGainBonds;
