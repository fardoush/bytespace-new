import React from 'react';
import Image from "next/image";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCards = ({ testimonial }: TestimonialCardProps) => {
  const { name, role, avatar, content } = testimonial;
  return (
    <div className="flex h-full w-full flex-col rounded-3xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] ">
      {/* Profile Image */}
      <div className="relative h-[80px] w-[80px] shrink-0 overflow-hidden rounded-full ">
        <Image
          src={avatar}
          alt={`${name}'s profile photo`}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>

      {/* Name & Role */}
      <figcaption className="flex flex-col my-6">
        <h3 className="text-xl leading-[24px] font-semibold text-black">
          {name}
        </h3>
        <p className="text-lg leading-[28.8px] font-normal text-[#003BE2]">
          {role}
        </p>
      </figcaption>

      {/* Review Content */}
      <blockquote className="text-lg font-normal leading-[160%] text-[#4F4F4F]">
        &quot;{content}&quot;
      </blockquote>
    </div>
  );
};

export default TestimonialCards;