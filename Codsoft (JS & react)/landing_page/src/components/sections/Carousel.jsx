import React from "react";

export default function Carousel() {
  return (
    <div
      data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true
  }'
      class="relative"
    >
      <div className="absolute top-32 left-10 z-50">
        <h1 className="text-6xl my-6 text-white">Design Company Experts</h1>
        <button
          type="button"
          class="m-2 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Get In touch Today
        </button>
        <button
          type="button"
          class="m-2 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Learn More
        </button>
      </div>
      <div class="hs-carousel relative overflow-hidden w-full min-h-[550px] bg-white rounded-lg">
        <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
          <div class="hs-carousel-slide">
            <div class="flex justify-center h-full bg-gray-100 p-6">
              <span class="self-center text-4xl transition duration-700">
                <img
                  className="w-screen"
                  src="https://i.pinimg.com/originals/e2/3b/8d/e23b8d22d3c4c16f22ccd1a9101822bd.jpg"
                />
              </span>
            </div>
          </div>
          <div class="hs-carousel-slide">
            <div class="flex justify-center h-full bg-gray-200 p-6">
              <span class="self-center text-4xl transition duration-700">
                <img src="https://www.teamployer.com/hubfs/Cannabis%20PEO%20vs.%20HRIS%20The%20Fundamental%20Differences.png" />
              </span>
            </div>
          </div>
          <div class="hs-carousel-slide">
            <div class="flex justify-center h-full bg-gray-300 p-6">
              <span class="self-center text-4xl transition duration-700">
                <img src="https://dakesolutions.com/wp-content/uploads/2021/05/crello-184406968-stock-photo-multicultural-businesspeople-looking-tablet-office-2048x1367.jpeg" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
        <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
        <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
        <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
      </div>
    </div>
  );
}
