


import React from 'react';
import Image from 'next/image'

import dic1 from './images/dlc1.svg'
import dic2 from './images/dlc2.svg'

import Button from './Button';
import { motion } from 'framer-motion';


//import { ArrowPathIcon } from 'lucide-react';

export default function DesignLandingSection() {
  return (
    <div className="relative  w-full  mx-auto  py-16 pt-0">
      {/* Decorative Images */}
      <div className="absolute left-0 top-0">
        <div className="w-32 h-32 relative">
          <div className="absolute inset-0">
            <Image src={dic2} alt={''}/>
            {/* <div className="w-24 h-24 bg-emerald-400 rounded-full" /> */}
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-6 bg-red-500 rounded-full transform rotate-45" style={{ background: '#ff6b6b' }} /> */}
          </div>
        </div>
      </div>
      
      <div className="absolute right-0 top-0">
        <div className="w-32 h-32 relative">
          <div className="absolute inset-0">
          <Image src={dic1} alt={''}/>
            {/* <div className="w-24 h-24 bg-pink-400 rounded-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-yellow-300 rounded-full" />
                  ))}
                </div>
              </div>
            </div> */}
            <div className="absolute top-1/2 right-0 w-12 h-16 border-r-2 border-black transform -rotate-45" />
          </div>
        </div>
      </div>



      <div className="max-w-3xl mx-auto text-center">
        {/* <h1 className="text-5xl  text-black font-bold mb-8">
          We didnt reinvent the wheel. Just design.
        </h1> */}
        {/* <h2 className="text-[64px] leading-[60px] max-w-3xl mx-auto font-semibold mb-8">
        We didnt reinvent the wheel. Just design.
        </h2> */}

<motion.h2
  className="text-[64px] leading-[60px] max-w-3xl mx-auto font-semibold mb-8"

  transition={{ duration: 1, ease: "easeInOut" }}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
>
  Every thing you need to build your product, all in one place.
</motion.h2>






<motion.div
  className="text-[64px] leading-[60px] max-w-3xl mx-auto font-semibold mb-8"

  transition={{ duration: 1, ease: "easeInOut" }}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}


>

<div className="text-xl leading-[10px] text-black mb-16 space-y-5">
          <p>Design as you know it is out the door.</p>
          <p>Design as you want it just arrived.</p>
        </div>

</motion.div>




<motion.div
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-emerald-400 rounded-full flex items-center justify-center mb-4">
      

        <div className="w-12 h-8 bg-gray-300 triangle triangle-t" />

          
          
        </div>
        <h3 className="text-center text-black text-[26px] font-semibold">Design.</h3>
        <p className="text-center text-black">Ensuring it is simple and easy to use.</p>
      </div>

  
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-pink-400 rounded-full flex items-center justify-center mb-4">
          <div className="w-12 h-8 bg-yellow-300 rounded" />
        </div>

        <h3 className="text-center text-black text-[26px] font-semibold">Build.</h3>
        <p className="text-center text-black">Stable build with wrapping speed delivery</p>
      </div>

  
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-blue-400 rounded-full flex items-center justify-center mb-4">
          <div className="w-12 h-12 border-4 border-white rounded-full" />
        </div>
        <h3 className="text-center text-black text-[26px] font-semibold">Launch.</h3>
        <p className="text-center text-black">Audience, beta users and iterate.</p>
      </div>
    </div>


          </motion.div>




          <motion.div
          transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          
        >


      <Button>
                Call: +91 9849000525
              </Button>
          </motion.div>




         
      


        

      </div>
    </div>
  );
}