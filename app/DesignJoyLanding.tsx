
"use client";

import React, { useState } from 'react';
import Image from 'next/image';

import Button from './Button';



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
import { motion } from 'framer-motion';


const imageUrls = [d1, d2, d3, d4, d5, d6];


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


{/*       
      <div className='flex items-center justify-center '>
        <Image src={line} alt={''}   />
        </div> */}


        <motion.div
className='flex items-center justify-center '
  transition={{ duration: 1, ease: "easeInOut" }}
  initial={{ opacity: 0, y: -50 }} 
  whileInView={{ opacity: 1, y: 0 }} 
  viewport={{ once: true, amount: 0.5 }}
>

<Image src={line} alt={''}   />



</motion.div>










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

    
      <div className="text-center pt-20">


      <motion.h1
      className="text-5xl md:text-6xl font-bold mb-12"
          transition={{ duration: 1, ease: "easeInOut" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
                    Apps, websites,<br />logos & more


          </motion.h1>



        {/* <h1 className="text-5xl md:text-6xl font-bold mb-12">
          Apps, websites,<br />logos & more
        </h1> */}



<motion.div
          transition={{ duration: 1, ease: "easeInOut" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >


<div className="flex   max-w-2xl mx-auto flex-wrap justify-center  gap-2 mb-16">
          {categories.map((category, index) => (
            <span
              key={index}
              className={`${category.color} text-sm px-4 py-2 rounded-full cursor-pointer hover:opacity-90 transition-opacity`}
            >
              {category.name}
            </span>
          ))}
        </div>


          </motion.div>

        




  







          <div className='relative max-w-6xl mx-auto px-4 py-16'>






          <motion.div
          transition={{ duration: 1, ease: "easeInOut" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >



          
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






          </motion.div>


</div>



<motion.div
          transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          
        >


<Button>
See more work

        </Button>


</motion.div>

        

{/* 
        <Button>
          See more work
        </Button> */}
      </div>
    </div>
  );
};





// Main App Component
export default function DesignJoyLanding() {
  return (
    <main className="min-h-screen">
      <PortfolioSection />
      
    </main>
  );
}
