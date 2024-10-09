import React from 'react';

import Image from 'next/image'

import s1 from './images/s1.svg'
import s2 from './images/s2.svg'
import s3 from './images/s3.svg'
import s4 from './images/s4.svg'
import s5 from './images/s5.svg'
import s6 from './images/s6.svg'
import s7 from './images/s7.svg'
import s8 from './images/s8.svg'
import s9 from './images/s9.svg'


const DesignjoySections = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 space-y-8">
      {/* First Section */}
      <div className="bg-[#fafafa] rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0">
   
          <Image src={s2} alt={''}/>

        </div>
        <div className="absolute top-0 right-0">
          <Image src={s3} alt={''}/>

        </div>
        
        <div className="text-center max-w-2xl mx-auto pt-16 pb-8">
          <img src="/designjoy-logo.svg" alt="Designjoy Logo" className="h-6 mx-auto mb-6" />
          <h1 className="text-6xl font-bold mb-4">Scribbbles</h1>
          <p className="text-gray-600 text-2xl mb-8">
            A collection of funky vectorized scribbbles to spice up your design projects.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg font-medium">
            Download now
          </button>
          <p className="text-sm text-gray-500 mt-6">
            Used by over 30,000 designers & top brands.
          </p>
          
          <div className="flex justify-center items-center space-x-8 mt-8  grayscale opacity-50">
            <Image src={s1} alt="Google" className="h-6" />
            <Image src={s4} alt="Amazon" className="h-6" />
            <Image src={s5} alt="Legal Zoom" className="h-6" />
            <Image src={s6} alt="Verizon" className="h-6" />
            <Image src={s7} alt="Chase" className="h-6" />
            <Image src={s8} alt="Freelancer" className="h-6" />
          </div>
        </div>

      </div>


    </div>
  );
};

export default DesignjoySections;