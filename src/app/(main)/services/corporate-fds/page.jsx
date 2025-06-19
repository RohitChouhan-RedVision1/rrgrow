import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Image from "next/image";
import { getServiceData, getSiteData } from "@/lib/functions";

export const metadata = {
  title: "Corporate Fixed Deposits (FDs)",
  description:
    "Earn higher interest with Corporate Fixed Deposits while maintaining low risk. Choose from top-rated NBFC and corporate issuers.",
};

const CorporateFDs = async () => {
  const services = await getServiceData();
  const sitedata = await getSiteData();

  return (
    <div>
      {/* Hero Section */}
      <div className="flex bg-center bg-no-repeat bg-cover bg-[url('/images/pay-premium/pay-premium.webp')] bg-gray-500 overflow-hidden text-start justify-start items-center h-64">
        <div className="max-w-screen-xl mx-auto ">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-bold">
            Corporate Fixed Deposits (FDs)
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
                src="/service/corporate-fds.webp"
                alt="Corporate Fixed Deposits"
                width={800}
                height={400}
                className="rounded-xl w-full object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Higher Returns with Trusted Corporate FDs
            </h2>

            <p className="mb-4">
              <strong className="text-[--rv-primary] text-lg">C</strong>orporate
              Fixed Deposits (FDs) are a smart alternative to traditional bank FDs,
              offering higher interest rates with flexible tenure options. At{" "}
              <strong>{sitedata.websiteName}</strong>, we curate top-rated
              fixed deposit opportunities from reputed companies and NBFCs, helping
              you balance safety with superior returns.
            </p>

            <p className="mb-4">
              Whether you're seeking a predictable monthly income or long-term
              capital preservation, corporate FDs are ideal for conservative investors
              looking for more than what banks offer—without venturing into equities.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-4">
              {[
                "Higher Interest than Bank FDs",
                "Rated by CRISIL/ICRA",
                "Flexible Tenure (1–5 Years)",
                "Quarterly / Annual Payout Options",
                "Online Application & Tracking",
                "Low Minimum Investment (₹10,000+)",
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
                  Explore FD Options
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateFDs;
