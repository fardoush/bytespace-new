"use client";
import React from "react";
import TestimonialCards, { Testimonial } from "../shared/TestimonialCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/clients/client1.jpg",
    content:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/clients/clients2.jpg",
    content:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/clients/client3.jpg",
    content:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
  {
    id: 4,
    name: "Emily R.",
    role: "UI/UX Designer",
    avatar: "/clients/client4.jpg",
    content:
      "The practical insights and real-world projects available on ByteSpace helped me transition my career into UI/UX design smoothly. The community feedback loop is top-notch!",
  },
  {
    id: 5,
    name: "Michael K.",
    role: "Software Developer",
    avatar: "/clients/client5.jpg",
    content:
      "Teaching on ByteSpace allowed me to reach thousands of aspiring developers worldwide. The analytics and course management tools make content creation effortless.",
  },
  {
    id: 6,
    name: "Sophia T.",
    role: "Product Manager",
    avatar: "/clients/client6.jpg",
    content:
      "The flexibility of learning at my own pace paired with high-quality course content made ByteSpace my preferred platform for upskilling my entire product team.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="relative isolate w-full  overflow-hidden bg-white py-10 md:py-24 lg:pb-[58px] lg:pt-[74px]">
      <div className=" w-full xl:max-w-[1440px] mx-auto ">

        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {/*Bottom-Left Blue Glow */}
          <div
            className="absolute -bottom-[250px] -left-[200px] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,#003BE2_0%,transparent_70%)] opacity-[0.4] blur-[80px]"
          />

          {/* Top Center Light Lime Glow */}
          <div
            className="absolute -top-[70px] left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#CBFC01_0%,transparent_65%)] opacity-[0.9] blur-[90px]"
          />

          {/* Top Right Lime Glow */}
          <div
            className="absolute -right-[200px] top-[93px] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,#CBFC01_0%,transparent_65%)] opacity-[0.40] blur-[100px]"
          />
        </div>

        <div className="w-full mx-auto xl:max-w-[1440px] px-5 md:px-10 xl:px-[120px]">
          {/* Header */}
          <div className="mb-8 flex flex-col items-start justify-between gap-6 md:mb-10 lg:mb-[72px] lg:flex-row lg:gap-12">
            <h2 className="xl:mt-[39px] w-full xl:max-w-[577px] text-[32px] font-semibold leading-[120%] tracking-[-0.01em] text-black sm:text-3xl xl:text-[44px]">
              Discover What Our Community Is Saying
            </h2>

            <p className="w-full xl:max-w-[580px] text-base font-normal leading-[160%] text-[#4F4F4F] md:text-lg">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>

          {/* 🎠 Swiper Slider */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="!h-auto">
                <TestimonialCards testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

    </section>
  );
};

export default TestimonialSection;