import React from 'react';

const features: string[] = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
];

export function FeatureList() {
  return (
    <ul className="flex flex-col gap-[18px]">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue text-white flex-shrink-0">
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className=" text-lg font-medium text-brand-dark md:text-base">
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
}