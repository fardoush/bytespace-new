import Image from "next/image";
import HeroBanner from "./components/home/HeroBanner";
import BrandLogoSlider from "./components/home/BrandLogoSlider";
import ExploreDiverse from "./components/home/ExploreDiverse";
import TestimonialSection from "./components/home/TestimonialSection";
import DiscoverCourses from "./components/home/DiscoverCourses";
import CTASection from "./components/home/CtaSection";
import ByteSpaceGrowthSection from "./components/home/ByteSpaceGrowthSection";


export default function Home() {
  return (
    <div className=" ">
     <HeroBanner/>
     <BrandLogoSlider/>
     <DiscoverCourses/>
     <ExploreDiverse/>
     <ByteSpaceGrowthSection/>
     <CTASection/>
     <TestimonialSection/>
    </div>
  );
}
