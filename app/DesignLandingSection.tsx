


import React from 'react';
import Image from 'next/image'

import dic1 from './images/dlc1.svg'
import dic2 from './images/dlc2.svg'

//import { ArrowPathIcon } from 'lucide-react';

export default function DesignLandingSection() {
  return (
    <div className="relative bg-white w-full max-w-8xl mx-auto  py-16">
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
        <h1 className="text-5xl  text-black font-bold mb-8">
          We didnt reinvent the wheel. Just design.
        </h1>
        <div className="text-xl text-black mb-16 space-y-2">
          <p>Design as you know it is out the door.</p>
          <p>Design as you want it just arrived.</p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-emerald-400 rounded-full flex items-center justify-center mb-4">
          

              

              
              
            </div>
            <p className="text-center text-black">Subscribe to a plan & request as many designs as youd like.</p>
          </div>

      
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-pink-400 rounded-full flex items-center justify-center mb-4">
              <div className="w-12 h-8 bg-yellow-300 rounded" />
            </div>
            <p className="text-center text-black">Receive your design within two business days on average.</p>
          </div>

      
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-blue-400 rounded-full flex items-center justify-center mb-4">
              <div className="w-12 h-12 border-4 border-white rounded-full" />
            </div>
            <p className="text-center text-black">Well revise the designs until youre 100% satisfied.</p>
          </div>
        </div>

        
        <button className="bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors">
          See plans
        </button>
      </div>
    </div>
  );
}