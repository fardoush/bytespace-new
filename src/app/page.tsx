import Image from "next/image";
import HeroBanner from "./components/home/HeroBanner";
import BrandLogoSlider from "./components/home/BrandLogoSlider";
import ExploreDiverse from "./components/home/ExploreDiverse";
import TestimonialSection from "./components/home/TestimonialSection";
import DiscoverCourses from "./components/home/DiscoverCourses";

export default function Home() {
  return (
    <div className=" ">
     <HeroBanner/>
     <BrandLogoSlider/>
     <DiscoverCourses/>
     <ExploreDiverse/>
     <TestimonialSection/>
    </div>
  );
}
