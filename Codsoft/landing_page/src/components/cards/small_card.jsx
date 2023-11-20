import React from "react";

export default function SmallCard(props) {
  return (
    <div>
      <a
        class="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
        href="#"
      >
        <div class="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
          <img
            class="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
            src={props.img}
            alt="Image Description"
          />
        </div>
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            {props.title}
          </h3>
          <p class="mt-1 text-gray-500 dark:text-gray-400">{props.content}</p>
        </div>
      </a>
    </div>
  );
}
