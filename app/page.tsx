// //import Image from "next/image";


// import DesignAgencyHero from "./DesignAgencyHero";
// import DesignJoyLanding from "./DesignJoyLanding";
// import DesignjoySectionone from "./DesignjoySectionone";
// import DesignjoySections from "./DesignjoySections";
// import DesignLandingSection from "./DesignLandingSection";
// import { MarqueeDemo } from './Box'

// //import Header from "./Header";

// import MembershipBenefits from "./MembershipBenefits";
// import TestimonialSection from "./TestimonialSection";
// //import Scroll from "./Scroll";

// export default function Home() {
//   return (
//     <div className="">
//       <DesignAgencyHero/>
//       {/* <Header/> */}
//       {/* <Scroll/> */}
//       <DesignLandingSection/>
//       <TestimonialSection/>
//       <MembershipBenefits/>
//       <DesignJoyLanding/>
//       <DesignjoySections/>
//       <MarqueeDemo/>
//       <DesignjoySectionone/>
    

//     </div>
//   );
// }




//import Image from "next/image";
import DesignAgencyHero from "./DesignAgencyHero";
import DesignJoyLanding from "./DesignJoyLanding";
import DesignjoySectionone from "./DesignjoySectionone";
import DesignjoySections from "./DesignjoySections";
import DesignLandingSection from "./DesignLandingSection";
import { MarqueeDemo } from './Box'
//import Header from "./Header";
import MembershipBenefits from "./MembershipBenefits";
import TestimonialSection from "./TestimonialSection";
import FAQSection from "./FAQSection";
import MembershipSection from "./MembershipSection";
//import Scroll from "./Scroll";

export default function Home() {
  return (
    <div className="container mx-auto   sm:px-6 xl:px-0">
      {/* Responsive hero section */}
      <div className="mb-8">
        <DesignAgencyHero/>
      </div>
      <div className="space-y-16">
      
        <DesignLandingSection/>
        <TestimonialSection/>
        <MembershipBenefits/>
        <DesignJoyLanding/>
        <MembershipSection/>
        <FAQSection/>
        <DesignjoySections/>
        <MarqueeDemo/>
        <DesignjoySectionone/>
      </div>
    </div>
  );
}
