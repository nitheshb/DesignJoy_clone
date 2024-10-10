
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
// import FAQSection from "./FAQSection";
// import MembershipSection from "./MembershipSection";
// //import Scroll from "./Scroll";

// import './globals.css'

// export default function Home() {
//   return (
//     <div
//     style={{
//         marginTop: 0,
//         paddingBottom: '14px',
//         paddingLeft: '14px',
//         paddingRight: '14px',
//     }}
// >

// <div className="container mx-auto    sm:px-6 xl:px-0">
//       {/* Responsive hero section */}
//       <div className="mb-8">
//         <DesignAgencyHero/>
//       </div>
//       <div className="space-y-16">
      
//         <DesignLandingSection/>
//         <TestimonialSection/>
//         <MembershipBenefits/>
//         <DesignJoyLanding/>
//         <MembershipSection/>
//         <FAQSection/>
//         <DesignjoySections/>
//         <MarqueeDemo/>
//         <DesignjoySectionone/>
//       </div>
//     </div>

//     </div>

//   );
// }


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

import './globals.css';

export default function Home() {
  return (
    <div
      style={{
        marginTop: 0,
        paddingBottom: '14px',
        paddingLeft: '14px',
        paddingRight: '14px',
      }}
    >
      <div className="container mx-auto sm:px-6 xl:px-0  rounded-md">
        {/* Responsive hero section */}
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
  );
}

