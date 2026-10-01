import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
    return (
        <section className="relative isolate w-full overflow-hidden bg-[#003BE2] py-10 sm:py-12 md:py-[60px] lg:py-[75px] xl:py-[85px] text-white">

            {/* 1. Global Grid Background Layer */}
            <div className="hero-grid-bg pointer-events-none absolute inset-0 z-0 opacity-20" />

            {/* 2. Floating Decorative Shapes (z-10 layer) */}
            <div className="pointer-events-none absolute inset-0 z-10 select-none overflow-hidden">
                
                {/* Shape 1: Top Left - Lime Zigzag Spiral */}
                <div className="absolute top-0 left-0 w-20 sm:w-32 md:w-48 lg:w-60 xl:w-72 transition-all">
                    <Image
                        src="/cta/left-top.svg"
                        alt="Decorative Shape 1"
                        width={385}
                        height={385}
                        className="h-auto w-full object-contain"
                    />
                </div>

                {/* Shape 2: Top Left (Inner) - White Spring Ribbon */}
                <div className="absolute top-2 left-[18%] sm:left-[15%] md:left-[14%] lg:left-[13%] xl:left-[12.2%] w-8 sm:w-14 md:w-24 lg:w-36 xl:w-[175px]">
                    <Image
                        src="/cta/left-right.svg"
                        alt="Decorative Shape 2"
                        width={175}
                        height={175}
                        className="h-auto w-full object-contain"
                    />
                </div>

                {/* Shape 3: Bottom Left - White Cone/Triangle */}
                <div className="absolute bottom-[20px] sm:bottom-[35px] md:bottom-[50px] lg:bottom-[60px] xl:bottom-[71px] -left-2 sm:left-0 w-10 sm:w-16 md:w-24 lg:w-32 xl:w-[140px]">
                    <Image
                        src="/cta/left-bottom2.svg"
                        alt="Decorative Shape 3"
                        width={140}
                        height={140}
                        className="h-auto w-full object-contain"
                    />
                </div>

                {/* Shape 4: Bottom Left (Center-ish) - Lime Donut / Ring */}
                <div className="absolute bottom-0 left-0 sm:left-[8px] xl:left-[12px] w-20 sm:w-36 md:w-52 lg:w-68 xl:w-80">
                    <Image
                        src="/cta/left-bottom.svg"
                        alt="Decorative Shape 4"
                        width={320}
                        height={320}
                        className="h-auto w-full object-contain"
                    />
                </div>

                {/* Shape 5: Top Right - Yellow Pyramid/Cone */}
                <div className="absolute top-0 right-[22%] sm:right-[20%] md:right-[18%] xl:right-[182px] w-10 sm:w-16 md:w-24 lg:w-32 xl:w-[168px]">
                    <Image
                        src="/cta/right-top-lime.svg"
                        alt="Decorative Shape 5"
                        width={180}
                        height={180}
                        className="h-auto w-full object-contain"
                    />
                </div>

                {/* Shape 6: Top/Middle Right - Large White Cylinder/Pill Block */}
                <div className="absolute top-1 sm:top-2 md:top-[12px] xl:top-[17px] right-0 w-16 sm:w-30 md:w-44 lg:w-48 xl:w-[206px] h-auto xl:h-[206px]">
                    <Image
                        src="/cta/right-topwhite.svg"
                        alt="Decorative Shape 6"
                        width={180}
                        height={180}
                        className="h-auto w-full object-contain"
                    />
                </div>

                {/* Shape 7: Bottom Right - Lime Wave/Spring */}
                <div className="absolute bottom-0 right-0 sm:right-[10px] xl:right-[16px] w-20 sm:w-36 md:w-52 lg:w-64 xl:w-[304px]">
                    <Image
                        src="/cta/right-bottom-lime.svg"
                        alt="Decorative Shape 7"
                        width={300}
                        height={300}
                        className="h-auto w-full object-contain"
                    />
                </div>
            </div>

            {/* 3. Main Content Layer (z-20 layer) */}
            <div className="relative z-20 mx-auto w-full px-4 sm:px-6 md:px-10 text-center">
                
                {/* Heading */}
                <h2 className="font-poppins text-xl font-semibold leading-snug tracking-[-1%] text-[#F5F5F6] xs:text-xl md:text-3xl md:leading-[120%] lg:text-4xl xl:text-[44px]">
                    Unlock Your Potential as a <br className="hidden xs:inline sm:inline" />
                    Creator with ByteSpace
                </h2>

                {/* Description Paragraph */}
                <p className="my-4 sm:my-6 lg:my-8 xl:my-10 mx-auto w-full text-[11px] font-normal leading-relaxed text-[#D1D1D1] xs:text-xs sm:text-base md:text-lg max-w-[280px] xs:max-w-[340px] sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-[964px]">
                    Experience the collaboration of numerous creators and an expanding selection of courses.
                    Register now and become a part of a community comprising over 10,000 local and international creators.
                    Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
                </p>

                {/* Button Wrapper */}
                <div className="flex justify-center">
                    <Link
                        href="/join"
                        className="inline-flex items-center justify-center rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium bg-brand-lime hover:bg-[#c2f000] text-brand-dark font-medium text-sm transition-all duration-500 cursor-pointer shrink-0"
                    >
                        Join as Creator
                    </Link>
                </div>
            </div>
        </section>
    );
}