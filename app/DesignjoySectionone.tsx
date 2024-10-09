import React from 'react'



import Image from 'next/image'

import s10 from './images/s10.svg'
import s11 from './images/s11.svg'



const DesignjoySectionone = () => {
  return (
          <div className="bg-[#fafafa] rounded-2xl  relative overflow-hidden">
          <><div className="absolute top-4 left-0">
                  {/* <div className="w-16 h-16 bg-orange-500 rounded-full opacity-80"></div> */}
                  <Image src={s10} alt={''}/>
              </div><div className="absolute top-4 right-0">
                      {/* <div className="w-16 h-16 border-4 border-blue-500 rounded-full"></div> */}
                  <Image src={s11} alt={''}/>

                  </div><div className="text-center max-w-2xl mx-auto pt-16 pb-8">
                      <h1 className="text-4xl font-bold mb-4">See if Designjoy is right<br />for you. (It totally is.)</h1>
                      <p className="text-gray-600 mb-8">
                          Get a guided tour through Designjoy, and find out how you and your team can change the way you source design, forever.
                      </p>
                      <button className="bg-black text-white px-6 py-3 rounded-lg font-medium">
                          Book a call
                      </button>
                  </div><div className="flex justify-center mt-16">
                      <img src="/api/placeholder/200/60" alt="Designjoy Logo" className="h-12" />
                  </div><div className="flex justify-center space-x-8 mt-16 text-sm text-gray-500">
                      <a href="#" className="hover:text-black">Latest projects</a>
                      <a href="#" className="hover:text-black">Pricing</a>
                      <a href="#" className="hover:text-black">Contact</a>
                      <a href="#" className="hover:text-black">Client login</a>
                  </div><div className="flex justify-center space-x-8 mt-4 text-sm text-gray-500">
                      <a href="#" className="hover:text-black">Get started</a>
                      <a href="#" className="hover:text-black">Terms & conditions</a>
                      <a href="#" className="hover:text-black">Privacy policy</a>
                  </div></>
        </div>
  )
}

export default DesignjoySectionone
