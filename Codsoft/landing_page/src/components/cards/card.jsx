import React from "react";

export default function Card() {
  return (
    <div className="mx-20 my-32">
      <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        {/* <!-- Select (Mobile only) --> */}
        <div class="sm:hidden">
          <label for="hs-card-nav-tabs" class="sr-only">
            Select a nav
          </label>
          <select
            name="hs-card-nav-tabs"
            id="hs-card-nav-tabs"
            class="block w-full border-t-0 border-x-0 border-gray-300 rounded-t-xl focus:ring-blue-600 focus:border-blue-600"
          >
            <option selected>Best support</option>
            <option>Company</option>
            <option>Team Members</option>
            <option>Billing</option>
          </select>
        </div>
        {/* <!-- End Select (Mobile only) --> */}

        {/* <!-- Nav Tabs (Device only) --> */}
        <div class="hidden sm:block">
          <nav
            class="relative z-0 flex border-b rounded-xl divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700"
            aria-label="Tabs"
          >
            <a
              class="group relative min-w-0 flex-1 bg-white py-4 px-4 border-b-2 border-b-blue-600 text-gray-900 rounded-ss-xl text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:text-gray-300"
              aria-current="page"
              href="#"
            >
              Best support
            </a>

            <a
              class="group relative min-w-0 flex-1 bg-white py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:hover:text-gray-400"
              href="#"
            >
              Company
            </a>

            <a
              class="group relative min-w-0 flex-1 bg-white py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:hover:text-gray-400"
              href="#"
            >
              Team Members
            </a>

            <a
              class="group relative min-w-0 flex-1 bg-white py-4 px-4 text-gray-500 hover:text-gray-700 rounded-se-xl text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:hover:text-gray-400"
              href="#"
            >
              Billing
            </a>
          </nav>
        </div>
        {/* <!-- End Nav Tabs (Device only) --> */}

        <div
          style={{
            backgroundImage: `url(
              https://thumbs.dreamstime.com/b/call-center-operator-headset-consulting-client-telemarketing-phone-sales-131129895.jpg)`,
          }}
          class="p-4 text-center md:py-7 md:px-5 bg-cover"
        >
          <h3 class="text-lg font-bold text-gray-800 dark:text-white drop-shadow">
            Best In Class support
          </h3>
          <p class="mt-2 text-gray-500 dark:text-white ml-[40vw] text-justify drop-shadow">
            At Profssional Designs, our commitment to excellence extends
            seamlessly into our support services. We pride ourselves on a
            customer-centric approach, ensuring that your unique needs are not
            only heard but met with precision. Our expert support team is
            well-versed in their fields, guaranteeing that whether you have
            technical inquiries or require troubleshooting assistance, you are
            in capable hands. We proactively address challenges, providing swift
            and responsive solutions to minimize disruptions. With 24/7
            availability, we stand by your side whenever you need assistance. At
            Profssional Designs, our support is not just a service – it's a
            commitment to your success, ensuring that your experience with us is
            nothing short of exceptional.
          </p>
        </div>
      </div>
    </div>
  );
}
