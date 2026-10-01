import React from 'react';

interface StatItem {
  value: string;
  label: string;
}

const statsData: StatItem[] = [
  { value: '12K', label: 'Students' },
  { value: '70+', label: 'Courses' },
  { value: '16', label: 'Creators' },
];

export function StatsGroup() {
  return (
    <div className="flex items-center gap-8 md:gap-[56px]">
      {statsData.map((stat, idx) => (
        <div key={idx} className="flex flex-col">
          <span className=" text-3xl font-semibold tracking-tight text-[#003BE2] lg:text-4xl lg:leading-[44px]">
            {stat.value}
          </span>
          <span className=" text-sm font-normal text-[#4B4C53] md:text-base lg:text-lg">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}