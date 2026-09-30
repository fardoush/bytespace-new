import Image from "next/image";
import HeroBanner from "./components/home/HeroBanner";
import BrandLogoSlider from "./components/home/BrandLogoSlider";

export default function Home() {
  return (
    <div className=" ">
     <HeroBanner/>
     <BrandLogoSlider/>
    </div>
  );
}
