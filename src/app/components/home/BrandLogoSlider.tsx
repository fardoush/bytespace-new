"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


interface BrandPartner {
    id: number;
    name: string;
    img: string;
}

const BrandLogoSlider: React.FC = () => {
    const rawPartners: BrandPartner[] = [
        { id: 1, name: "brand logo 1", img: "/brand-logo/logo1.svg" },
        { id: 2, name: "brand logo 2", img: "/brand-logo/logo2.svg" },
        { id: 3, name: "brand logo 3", img: "/brand-logo/logo3.svg" },
        { id: 4, name: "brand logo 4", img: "/brand-logo/logo4.svg" },
        { id: 5, name: "brand logo 5", img: "/brand-logo/logo5.svg" },
        { id: 6, name: "brand logo 6", img: "/brand-logo/logo3.svg" },
        { id: 7, name: "brand logo 7", img: "/brand-logo/logo4.svg" },
    ];


    const brandPartners = [
        ...rawPartners,
        ...rawPartners.map((p) => ({ ...p, id: p.id + 100 })),
    ];

    return (
        <section className="w-full  mx-auto bg-[#F5F5F6] py-10 md:py-14 lg:py-[80px] px-5 md:px-10 xl:px-[154px]">
            <div className="w-full xl:max-w-[1132px] mx-auto">
                <div className="relative w-full">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={2}
                        loop={true}
                        speed={4000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            480: { slidesPerView: 3, spaceBetween: 24 },
                            768: { slidesPerView: 4, spaceBetween: 30 },
                            1024: { slidesPerView: 5, spaceBetween: 30 },
                        }}

                        className="brand-swiper-wrapper [&_.swiper-wrapper]:!ease-linear"
                    >
                        {brandPartners.map((partner, index) => (
                            <SwiperSlide
                                key={`${partner.id}-${index}`}
                                className="flex items-center justify-center"
                            >
                                <div
                                    className="flex items-center justify-center transition-all duration-300 cursor-pointer w-full h-auto sm:w-[167px] sm:h-[41px] relative"
                                    title={partner.name}
                                >
                                    <Image
                                        src={partner.img}
                                        alt={partner.name}
                                        width={170}
                                        height={42}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default BrandLogoSlider;