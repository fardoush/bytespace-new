import React from 'react';
import Image from 'next/image';
import { FeatureList } from './FeatureList';
import HappyClientCard from './HappyClientCard';

export function CourseManagementBlock() {
  return (
    <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-2 lg:gap-12">
      {/* Left Visual Composite */}
      <div className="relative mx-auto w-full max-w-[520px] lg:max-w-[550px] order-2 lg:order-1 flex justify-center">
        {/* Main Composite Container maintaining Figma aspect ratio */}
        <div className="relative w-full aspect-[541/596]">
          {/* Main Creator Student Image (435px x 596px centered in Figma) */}
          <div className=" mt-0 lg:mt-[31px] z-30 absolute inset-y-0  -translate-x-[29px] w-full h-full z-4">
            <Image
              src="/student2.png"
              alt="Course Creator Visual"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Lime Vector Shape (215px x 215px on top-right in Figma) */}
          <div className="absolute top-[113px] right-0 sm:right-[6%] w-[41.3%] aspect-square pointer-events-none z-30">
            <Image
              src="/student-lime-shape1.svg"
              alt="Decorative Lime Vector"
              fill
              className="object-contain "
            />
          </div>

          {/* Revenue Badges Stack (Left side overlay) */}
          <div className="absolute top-[12%] left-0 z-20 flex flex-col gap-3 scale-85 sm:scale-95 md:scale-100 origin-top-left">
            {/* Total Revenue Card */}
            <div className="z-1 rounded-2xl bg-brand-blue p-4 text-white shadow-xl w-[140px] sm:w-[232px] flex flex-col gap-1">
              <span className="text-base leading-[120%] font-medium  text-[#F5F5F6]">
                Total Revenue
              </span>
              <span className="text-[10px] leading-[120%] font-normal  text-[#F5F5F6]">
                July 1-28
              </span>
              <span className="text-lg sm:text-[20px] font-semibold leading-[120%] font-poppins text-[#F5F5F6] my-1">
                $120.29
              </span>
              {/* Progress bar line */}
              <div className="w-full bg-white h-2 rounded-full overflow-hidden">
                <div className="bg-[#D4FB20] h-full w-[70%] rounded-full" />
              </div>
            </div>

            {/* Year to Date Card (134px x 135px in Figma) */}
            <div className="z-1 rounded-2xl bg-brand-blue p-4 text-white shadow-xl w-[134px] flex flex-col gap-1">
              <span className="text-base leading-[120%] font-medium  text-[#F5F5F6]">
                Year to Date
              </span>
              <span className="text-[10px] leading-[120%] font-normal text-[#F5F5F6]">
                2023
              </span>
              <span className="text-[20px] sm:text-2xl font-semibold leading-[120%] -tracking-[0.1px] text-[#F5F5F6] mt-0.5">
                $1,200.38
              </span>
              {/* Green +12$ Badge */}
              <div className="self-start mt-1 bg-[#CBFC01] text-brand-dark text-[10px] font-medium px-2 py-0.5 rounded-full">
                +12$
              </div>
            </div>
          </div>

          {/* Happy Students Floating Badge (Bottom Right overlay) */}
          <div className="absolute bottom-[6%] right-[2%] sm:right-[5%] z-30 scale-75 sm:scale-90 md:scale-100 origin-bottom-right">
            <HappyClientCard />
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex flex-col w-full lg:max-w-[577px] order-1 lg:order-2">
        <h2 className="text-3xl font-semibold leading-[120%] tracking-tight text-black md:text-4xl lg:text-[44px]">
          Create & Manage <br/> Courses Easily.
        </h2>
        <p className="my-6 lg:my-10 text-base font-normal leading-[160%] text-[#4F4F4F] lg:text-[18px]">
          <span className="font-bold text-black">ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses.
        </p>
        <FeatureList />
      </div>
    </div>
  );
}