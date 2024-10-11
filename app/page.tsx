import DesignAgencyHero from "./DesignAgencyHero";
import DesignJoyLanding from "./DesignJoyLanding";
import DesignjoySectionone from "./DesignjoySectionone";
import DesignjoySections from "./DesignjoySections";
import DesignLandingSection from "./DesignLandingSection";
import { MarqueeDemo } from './Box';
import MembershipBenefits from "./MembershipBenefits";
import TestimonialSection from "./TestimonialSection";
import FAQSection from "./FAQSection";
import MembershipSection from "./MembershipSection";

import Image from "next/image";
import './globals.css';
import bg from './images/bg.svg'
import logo from './images/logo.svg'
import SketchyNavbar from "./SketchyNavbar";
export default function Home() {
  return (

    <div>
      <div className="flex justify-center mt-4">
      <Image src={logo}  alt="logo" />
      </div>
      <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: "0 0, 0 0",
        backgroundSize: "auto, auto",
        backgroundColor:"#FEFDFC",
        borderRadius: "56px",
        maxWidth: "1440px",
        marginLeft: "auto",
        marginRight: "auto",
        border: "25px solid #fff", 
      }}
    >
      <div className="container mx-auto sm:px-6 xl:px-0  rounded-md">
        <SketchyNavbar/>
        <div className="mb-8">
          <DesignAgencyHero />
        </div>
        <div className="space-y-16">
          <DesignLandingSection />
          <TestimonialSection />
          <MembershipBenefits />
          <DesignJoyLanding />
          <MembershipSection />
          <FAQSection />
          <DesignjoySections />
          <MarqueeDemo />
          <DesignjoySectionone />
        </div>
      </div>
    </div>
    </div>



  );
}


