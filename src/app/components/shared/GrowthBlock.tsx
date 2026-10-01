import React from 'react';
import Image from 'next/image';
import { StatsGroup } from './StatsGroup';
import LearningProgressCard from './LearningProgressCard';

export function GrowthBlock() {
  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
      {/* Left Content */}
      <div className="flex flex-col  w-full lg:max-w-[577px]">
        <h2 className="text-3xl font-semibold leading-[120%] tracking-tight text-brand-dark md:text-4xl lg:text-[44px]">
          Your Path to Professional Growth Starts Here!
        </h2>
        <p className=" my-6 lg:my-10 w-full lg:max-w-[477px] text-base font-normal leading-[160%] text-[#4B4C53] lg:text-lg">
          Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
        </p>
        <StatsGroup />
      </div>

      {/* Right Side Visual Composite */}
      <div className="relative mx-auto w-full max-w-[577px] flex justify-center">
        <div className="relative w-full aspect-[577/540]">
          {/* Main Student Image */}
          <Image
            src="/student1.png"
            alt="Professional Growth Visual"
            fill
            className="object-contain z-10"
            priority
          />

          {/* Lime Shape (Right Side) */}
          <div className="absolute top-[32%] lg::top-[18%] -right-[3%] sm:-right-[8%] xl:-right-[50px] w-[20%] sm:w-[25%] xl:w-[200px] aspect-square pointer-events-none z-30">
            <Image
              src="/student-top-shape.svg"
              alt="Decorative Vector"
              fill
              className="object-contain"
            />
          </div>

          {/* Top Left Course Card Overlay Image */}
          <div className="absolute -top-[2%] left-0 w-[45%] sm:w-[55%] xl:w-[373px] aspect-[373/384] pointer-events-none z-0">
            <Image
              src="/Course_Card_1.png"
              alt="Course Card Overlay"
              fill
              className="object-contain"
            />
          </div>

          {/* Learning Progress Card (Floating Badge) */}
          <div className="absolute top-[42%] right-0 sm:-right-[10px] xl:-right-[7px] z-20 scale-75 sm:scale-90 md:scale-100 origin-top-right">
            <LearningProgressCard />
          </div>
        </div>
      </div>
    </div>
  );
}