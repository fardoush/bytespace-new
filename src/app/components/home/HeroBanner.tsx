import { Search } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import UiCards from '../shared/UiCards';
import LearningProgressCard from '../shared/LearningProgressCard';
import HappyClientCard from '../shared/HappyClientCard';


const HeroBanner = () => {
    return (
        <section id='home'  className=" hero-banner relative isolate  overflow-hidden bg-brand-blue min-h-[700px] md:min-h-[760px] lg:min-h-[850px] md:pt-[49px] pt-0 px-5">
            {/* Grid BG  */}
            <div className="hero-grid-bg absolute inset-0 -z-10 opacity-20 pointer-events-none" />

            {/* left lime shape  */}
            <div className=" hero-shape-left-lime absolute left-[-60px] top-[104px] -z-0 hidden sm:block">
                <Image
                    className="h-[160px] w-[160px] lg:h-[385px] lg:w-[385px]"
                    src="/left-shape-lime.svg"
                    alt="Left shape lime ornament"
                    width={385}
                    height={385}
                    priority
                />
            </div>
            {/* right lime shape  */}
            <div className=" hero-shape-right-lime absolute right-[-80px] top-[104px] -z-0 hidden sm:block">
                <Image
                    className="h-[160px] w-[160px] lg:h-[385px] lg:w-[385px]"
                    src="/banner-right-shape-lime.svg"
                    alt="Left shape lime ornament"
                    width={370}
                    height={370}
                    priority
                />
            </div>

            {/* left white shape  */}
            <div className="hero-shape-left-white absolute left-[183px] top-[42%] -z-0 hidden sm:block">
                <Image
                    className=" h-[175px] w-[175px]"
                    src="/banner-left-white-shape.svg"
                    alt="Left shape lime ornament"
                    width={175}
                    height={175}
                    priority
                />
            </div>
            {/* right white shape  */}
            <div className="hero-shape-right-white absolute right-[144px] top-[40.5%] -z-0 hidden sm:block">
                <Image
                    className=" h-[188px] w-[188px]"
                    src="/banner-right-white-shape.svg"
                    alt="Left shape lime ornament"
                    width={188}
                    height={188}
                    priority
                />
            </div>
            {/* circle shape  */}
            <div className="hero-shape-circle absolute left-[18px] bottom-0 -z-0 hidden sm:block">
                <Image
                    className=" h-[342px] w-[342px]"
                    src="/banner-circle-shape.svg"
                    alt="Left circle shape"
                    width={342}
                    height={342}
                    priority
                />
            </div>
            {/* right bottom white shape  */}
            <div className=" hero-shape-bottom-white absolute right-[3px] bottom-[22px] -z-0 hidden sm:block">
                <Image
                    className="h-[330px] w-[330px]"
                    src="/banner-bottom-white-shape.svg"
                    alt="Left circle shape"
                    width={330}
                    height={330}
                    priority
                />
            </div>

            {/* Main Content  */}
            <div className="relative mx-auto flex flex-col items-center text-center">
                <h1 className=" md:max-w-[950px] text-3xl font-bold lg:leading-[1.2] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    Get Access to Hundreds
                    <br className="hidden sm:block" />
                    Courses Available
                </h1>
                <p className="mt-4 md:mt-8  max-w-lg md:max-w-md lg:max-w-[850px] text-sm leading-6 text-white/90 sm:text-base md:text-lg">
                    Unlock your creativity, gain valuable knowledge, and grow your
                    business with our wide range of courses.
                </p>
                {/* Search  */}
                <div className="mt-6 md:mt-10 lg:mt-[60px] w-full max-w-[581px] flex flex-col gap-4 sm:flex-row sm:items-center">

                    <div className=" px-4 sm:px-6 flex  h-[44px] md:h-[52px] flex-1 items-center rounded-full bg-white ">
                        <Search size={22} className='sm:mr-3 shrink-0 text-[#82868E] ' />
                        <input type="text"
                 placeholder="Course, topic, creator" className="  py-3 md:py-0 w-full bg-transparent text-sm text-[#242528] outline-none placeholder:text-[#82868E] sm:text-base" />
                    </div>
                    <button className="h-[44px] md:h-[52px] bg-brand-lime rounded-full px-8 text-sm font-medium  text-[#242528] transition hover:scale-105  sm:text-lg">Search</button>

                </div>
            </div>

            {/* Hero visual  */}
            <div className="relative  mx-auto w-full xl:max-w-[1149px] mt-10">

                {/* Lime Circle */}
                <div className="lime-circle-shape absolute left-1/2 -bottom-[10%] -z-10 w-[93%] xl:w-[1149px] -translate-x-1/2 h-[234px] md:h-[328px]  lg:h-[363px]" >
                    <Image
                        src="/banner-image-shape.svg"
                        alt="Student"
                        width={1149}
                        height={562}
                        className="h-auto w-full object-container h-[234px] md:h-[328px] lg:h-[350px] "
                        priority
                    />
                </div>

                {/* Student Image */}
                <div className="student-img-inner  relative bottom-[-10px] left-1/2 z-20 w-[280px] -translate-x-1/2  w-[498px] lg:w-[578px]">
                    <Image
                        src="/banner-img.png"
                        alt="Student"
                        width={578}
                        height={541}
                        className="h-auto w-full object-cover md:h-[378px] lg:h-[411px]"
                        priority
                    />
                </div>

                <div className="">
                    {/* UI Cards  */}
                    <div className="ui-card absolute left-[7%] top-[75px] lg:top-[97px] z-30 hidden sm:block md:left-[19%] lg:left-[21%]">
                        <UiCards />
                    </div>

                    {/* Learning Progress */}
                    <div className="learning-progress-card absolute right-[13%] top-[72px] lg:top-[107px] z-30 hidden  sm:block md:right-[23%] lg:right-[25%]">
                        <LearningProgressCard />
                    </div>

                    {/* Happy Students */}
                    <div className=" happy-card absolute md:bottom-[37px] bottom-[56px] left-[19%] z-30 hidden rounded-2xl sm:block md:left-[15%] lg:left-[15%]">

                        <HappyClientCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;