import Image from "next/image";
import HeroBanner from "./components/home/HeroBanner";
import BrandLogoSlider from "./components/home/BrandLogoSlider";
import ExploreDiverse from "./components/home/ExploreDiverse";

export default function Home() {
  return (
    <div className=" ">
     <HeroBanner/>
     <BrandLogoSlider/>
     <ExploreDiverse/>
    </div>
  );
}
