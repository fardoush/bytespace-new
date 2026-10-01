import React from 'react';
import { GrowthBlock } from '../shared/GrowthBlock';
import { CourseManagementBlock } from '../shared/CourseManagementBlock';

const ByteSpaceGrowthSection = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24 px-4 sm:px-6 md:px-10 bg-white">
      {/* Background Gradient Blurs (5 Spots) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* 1. Top Left Lime Glow */}
        <div className="absolute top-[-5%] left-[5%] w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full bg-[#CBFC01]/20 blur-[100px] sm:blur-[140px]" />

        {/* 2. Top Right Blue Glow */}
        <div className="absolute top-[2%] right-[-5%] w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full bg-[#003BE2]/20 blur-[90px] sm:blur-[130px]" />

        {/* 3. Middle Left Blue/Purple Glow */}
        <div className="absolute top-[40%] left-[-8%] w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] rounded-full bg-[#003BE2]/20 blur-[100px] sm:blur-[140px]" />

        {/* 4. Bottom Left Lime Glow */}
        <div className="absolute bottom-[-5%] left-[-5%] w-[350px] h-[350px] sm:w-[520px] sm:h-[520px] rounded-full bg-[#CBFC01]/20 blur-[100px] sm:blur-[150px]" />

        {/* 5. Bottom Right Blue Glow */}
        <div className="absolute bottom-[2%] right-[-5%] w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] rounded-full bg-[#003BE2]/30 blur-[100px] sm:blur-[140px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto w-full lg:max-w-[1200px]">
        <div className="flex flex-col gap-10 lg:gap-[72px]">
          {/* Top Section */}
          <GrowthBlock />

          {/* Bottom Section */}
          <CourseManagementBlock />
        </div>
      </div>
    </section>
  );
};

export default ByteSpaceGrowthSection;