/* eslint-disable @next/next/no-img-element */

"use client";
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
import bg from './images/bg.svg';
import logo from './images/logo.svg';
import SketchyNavbar from "./SketchyNavbar";
import { LampComponent } from "./LampComponent";
import { HeroParallax } from "./connect-parallax";
import { products } from "@/lib/constant";


import { useState, useEffect } from 'react';

export default function Home() {


 const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Get the scroll position
      const rotationValue = scrollY / 5; // Adjust the divisor to control the speed of rotation
      setRotation(rotationValue); // Update the rotation state
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Logo */}
      <div className="flex justify-center p-4">
        <Image 
          src={logo} 
          alt="logo" 
          className="w-[132px] h-[22px]" 
        />


        
      </div>

      {/* Background Container */}
      <div 
        className="
          w-full 
          max-w-[97%] 
          
        
          mx-auto 
          rounded-[36px] 
        
          
          
          overflow-hidden
        "
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundPosition: "0 0, 0 0",
          backgroundSize: "auto, auto",
          backgroundColor: "#f6f2ea",
        }}
      >
        {/* Content Container */}
        <div className=" mx-auto px-4 sm:px-6 xl:px-0">
          {/* Navbar */}
          <SketchyNavbar />

          {/* Hero Section */}
          <div className="mb-8 md:mb-12 lg:mb-16">
            <DesignAgencyHero />
          </div>

          {/* Sections Container */}
          <div className="space-y-12 md:space-y-16 lg:space-y-20">

         {/* <InfiniteMovingCards
        className="md:mt-[18rem] mt-[-100px]"
        items={clients}
        direction="right"
        speed="slow"
      /> */}


         

  
       

      <section className="relative">

{/* <div 
    style={{
      position: "absolute",
      top: '-55px',
      left: "20%",
      transform: "translateX(-50%)",
      zIndex: 1000, 
      color: "black",
      fontWeight: "bold",
      textAlign: "center",
    }}
>
<div
      className="hero-badge-container"
      style={{
        position: "relative",
        display: "inline-block",
        width: "fit-content",
        willChange: "transform",
        transform:
          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-30deg) skew(0deg)",
        transformStyle: "preserve-3d",
        
      }}
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    >
    
      <img
        src="https://cdn.prod.website-files.com/5837424ae11409586f837994/65da6378a1ebd53e3cbf8aca_Vector.svg"
        loading="lazy"
        alt=""
        className="hero-badge"
        // style={{
        //   willChange: "transform",
        //   transform:
        //     "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg)",
        //   transformStyle: "preserve-3d",
        //   display: "block",
        // }}
      />
      <div
        className="badge__text"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "black", 
          fontWeight: "200",
          textAlign: "center",
        }}
      >
        Latest
        <br />
        projects
      </div>
    </div>
</div> */}




<div
      style={{
        position: "absolute",
        top: '-55px',
        left: "20%",
        transform: "translateX(-50%)",
        zIndex: 1000, 
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      <div
        className="hero-badge-container"
        style={{
          position: "relative",
          display: "inline-block",
          width: "fit-content",
          willChange: "transform",
          transform: `translate3d(0px, 0px, 0px) rotateZ(${rotation}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src="https://cdn.prod.website-files.com/5837424ae11409586f837994/65da6378a1ebd53e3cbf8aca_Vector.svg"
          loading="lazy"
          alt="Badge"
          className="hero-badge"
        />
        <div
          className="badge__text"
          style={{
            position: "fixed",  // Change from absolute to fixed
            top: "50%",  // You can adjust this value as needed
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "black", 
            fontWeight: "200",
            textAlign: "center",
            zIndex: 1100,  // Make sure it's above other elements
          }}
        >
          Latest
          <br />
          projects
        </div>
      </div>
    </div>



        <HeroParallax products={products}></HeroParallax>
      </section>







      

            <DesignLandingSection />
            <TestimonialSection />
            <MembershipBenefits />
            <DesignJoyLanding />
            <MembershipSection />
            <FAQSection />
            <DesignjoySections />
            <MarqueeDemo />
            <DesignjoySectionone />
            <LampComponent />
          </div>
        </div>
      </div>
    </div>
  );
}