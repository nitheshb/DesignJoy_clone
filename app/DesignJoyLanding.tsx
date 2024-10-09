
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
//import { ChevronDown, ArrowRight } from 'lucide-react';

import d1 from './images/d1.png'
import d2 from './images/d2.png'
import d3 from './images/d3.png'
import d4 from './images/d4.png'
import d5 from './images/d5.png'
import d6 from './images/d6.png'
import d7 from './images/d7.svg'
import d8 from './images/d8.svg'
import line from './images/line.svg'

import m1 from './images/m1.svg'
import m2 from './images/m2.svg'
import m3 from './images/m3.svg'


const imageUrls = [d1, d2, d3, d4, d5, d6];


// Portfolio Section Component
const PortfolioSection = () => {
  const categories = [
    { name: 'Landing pages', color: 'bg-pink-400' },
    { name: 'Mobile apps', color: 'bg-blue-500' },
    { name: 'Logos', color: 'bg-emerald-400' },
    { name: 'Branding', color: 'bg-yellow-400' },
    { name: 'Slide Decks', color: 'bg-red-500' },
    { name: 'Webflow', color: 'bg-purple-600' },
    { name: 'Social media', color: 'bg-red-500' },
    { name: 'Icons', color: 'bg-yellow-400' },
    { name: 'Brand Guides', color: 'bg-blue-500' },
    { name: 'Blog Graphics', color: 'bg-emerald-400' },
    { name: '+ more', color: 'bg-black' },
  ];

  return (
    <div className="relative max-w-8xl mx-auto px-4 py-16">
      <div className="absolute left-0 top-0">
        <div className=" relative">
          <Image src={d7} alt={''} width={200} height={200}  />
        </div>
      </div>


      
      <div className='flex items-center justify-center '>
        <Image src={line} alt={''}   />
        </div>









      <div className="absolute right-0 top-0">
        <div className="relative">
  

         <Image src={d8} alt={''} width={200} height={200}/>


          <div className="absolute top-0 right-0 w-16 h-16">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="absolute w-1 h-1 bg-black rounded-full" 
                   style={{
                     top: `${Math.sin(i * 30 * Math.PI / 180) * 20 + 20}px`,
                     left: `${Math.cos(i * 30 * Math.PI / 180) * 20 + 20}px`
                   }} />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center pt-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-12">
          Apps, websites,<br />logos & more
        </h1>

        {/* Categories */}
        <div className="flex   max-w-2xl mx-auto flex-wrap justify-center gap-2 mb-16">
          {categories.map((category, index) => (
            <span
              key={index}
              className={`${category.color} text-sm px-4 py-2 rounded-full cursor-pointer hover:opacity-90 transition-opacity`}
            >
              {category.name}
            </span>
          ))}
        </div>



        <div className='relative max-w-6xl mx-auto px-4 py-16'>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {imageUrls.map((url, i) => (
        <div key={i} className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
          <Image
            src={url}
            alt={`Portfolio item ${i + 1}`}
            layout="fill"
            objectFit="cover" 
          />
        </div>
      ))}
    </div>

        </div>




        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
          See more work
        </button>
      </div>
    </div>
  );
};

// Membership Section Component
// const MembershipSection = () => {
//   return (
//     <div className="relative max-w-6xl mx-auto px-4 py-16">
//       <div className="grid md:grid-cols-2 gap-12 items-center">
//         {/* Left Column - Join Card */}
//         <div className="bg-black   text-white p-8 rounded-3xl relative overflow-hidden">
//           <div className="absolute top-0 right-0">
//             {/* <div className="w-16 h-16 bg-emerald-400 rounded-full opacity-50" /> */}
//             <Image src={m3} alt={''} />
//           </div>
//           <span className="inline-block px-4 py-1 bg-pink-400 rounded-full text-sm mb-6">
//             Slots available
//           </span>
//           <h2 className="text-6xl font-bold mb-8">Join<br />Designjoy</h2>
          
//           <div className="space-y-4 mt-32">
//             <button className="w-full bg-gray-800 p-4 rounded-xl text-left group hover:bg-gray-700 transition-colors">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <h3 className="font-semibold mb-1">Book a 15-min intro call</h3>
//                   <p className="text-sm text-gray-400">Learn more about how DesignJoy works</p>
//                 </div>
//                 {/* <ArrowRight className="transform group-hover:translate-x-1 transition-transform" /> */}4
//                 <Image src={m1} alt={''} />
//               </div>
//             </button>
            
//             <button className="w-full bg-gray-800 p-4 rounded-xl text-left group hover:bg-gray-700 transition-colors">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <h3 className="font-semibold mb-1">Refer a friend & earn</h3>
//                   <p className="text-sm text-gray-400">Earn 5% monthly recurring commissions</p>
//                 </div>
//                 {/* <ArrowRight className="transform group-hover:translate-x-1 transition-transform" /> */}
//                 <Image src={m1} alt={''} />
//               </div>
//             </button>
//           </div>
//         </div>

//         {/* Right Column - Pricing */}
//         <div>
//           <h2 className="text-4xl font-bold mb-6">Membership</h2>
//           <div className="flex gap-2 mb-6">
//             <button className="bg-yellow-400 px-4 py-2 rounded-full">Standard</button>
//             <button className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2">
//               Pro
//               <span className="text-yellow-400">⚡</span>
//             </button>
//           </div>
          
//           <div className="mb-8">
//             <h3 className="text-4xl font-bold mb-2">$4,995<span className="text-xl">/m</span></h3>
//             <p className="text-gray-600">One request at a time. Pause or cancel anytime.</p>
//           </div>

//           <h4 className="font-semibold mb-4">What's included</h4>
//           <div className="grid grid-cols-2 gap-4 mb-8">
//             {[
//               'One request at a time',
//               'Average 48 hour delivery',
//               'Unlimited brands',
//               'Webflow development',
//               'Unlimited stock photos',
//               'Pause or cancel anytime'
//             ].map((feature, index) => (
//               <div key={index} className="flex items-center gap-2">
//                 <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
//                 <span>{feature}</span>
//               </div>
//             ))}
//           </div>

//           <div className="flex items-center gap-4">
//             <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
//               Get started
//             </button>
//             <button className="text-gray-600 hover:text-black transition-colors">
//               or book a call
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };



// Main App Component
export default function DesignJoyLanding() {
  return (
    <main className="min-h-screen">
      <PortfolioSection />
      
    </main>
  );
}
