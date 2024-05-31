import Image from "next/image";
import React from "react";
import TecEve from "@/assets/tecEve.png";
import EssaEve from "@/assets/eesaevent.jpg";
import wdcEve from "@/assets/wdcEve.png";

const RecentEvents = () => {
  return (
    <div className="bg-gray-2 dark:bg-dark pt-20  dark:bg-transparent bg-transparent lg:pt-[120px] lg:pb-20">
      <h4 className="scroll-m-20 mb-10  text-4xl font-extrabold tracking-tight lg:text-4xl text-center">
        Recent Events
      </h4>
      <div className="container mx-auto ">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 md:w-1/2 xl:w-1/3">
            <div className="mb-10 overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3">
              <Image src={TecEve} alt="image" class="w-full" />
              <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                  <a
                    href="javascript:void(0)"
                    className="text-dark dark:text-white hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                    The English Club
                  </a>
                </h3>
                <p className="text-base leading-relaxed text-body-color dark:text-dark-6 mb-7">
                  Lorem ipsum dolor sit amet pretium consectetur adipiscing
                  elit. Lorem consectetur adipiscing elit.
                </p>
                <a
                  href="javascript:void(0)"
                  className="inline-block py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6">
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 xl:w-1/3">
            <div class="mb-10 overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3">
              <Image src={EssaEve} alt="image" class="w-full" />
              <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                  <a
                    href="javascript:void(0)"
                    class="text-dark dark:text-white hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                    Department of Electrical Engineering
                  </a>
                </h3>
                <p class="text-base leading-relaxed text-body-color mb-7">
                  Lorem ipsum dolor sit amet pretium consectetur adipiscing
                  elit. Lorem consectetur adipiscing elit.
                </p>
                <a
                  href="javascript:void(0)"
                  class="inline-block py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6">
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 xl:w-1/3">
            <div class="mb-10 overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3">
              <Image src={wdcEve} alt="image" class="w-full" />
              <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                  <a
                    href="javascript:void(0)"
                    class="text-dark dark:text-white hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                    Women&apos;s Development Cell
                  </a>
                </h3>
                <p class="text-base leading-relaxed text-body-color mb-7">
                  Lorem ipsum dolor sit amet pretium consectetur adipiscing
                  elit. Lorem consectetur adipiscing elit.
                </p>
                <a
                  href="javascript:void(0)"
                  class="inline-block py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentEvents;
