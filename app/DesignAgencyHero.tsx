"use client"; 
import Image from 'next/image'
import Link from 'next/link'

 import hero1 from './images/hero1.svg'
 import hero2 from './images/hero2.svg'


 import hr1 from './images/hr1.svg'
 import hr2 from './images/hr2.svg'
 import hr3 from './images/hr3.svg'
 import hr4 from './images/hr4.svg'
 import hr5 from './images/hr5.svg'
 import hr6 from './images/hr6.svg'
 import hr7 from './images/hr7.svg'
import Button from './Button';

import './index.css';


const DesignAgencyHero = () => {
  const companies = [
    { name: 'nectar', logo: hr1 },
    { name: 'beehiiv', logo: hr2 },
    { name: 'Memberstack', logo: hr3 },
    { name: 'cometchat', logo: hr4 },
    { name: 'Buy me a coffee', logo: hr5, },
    { name: 'Buy me a coffee', logo: hr6, },
    { name: 'Buy me a coffee', logo: hr7, },
  ]

  return (
    <div className="min-h-screen ">
      <main className="relative overflow-hidden">
      
        <div className="absolute left-0 top-20 ">
          <Image
            src={hero2}
            alt="Decorative shape"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        
        <div className="absolute right-0 top-[30%]">
          <Image
            src={hero1}
            alt="Decorative shape"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>




        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 text-center relative z-10">
          <h1 className="text-[100px] leading-[80px] max-w-3xl mx-auto font-semibold mb-4">
            A design agency
            <br />
            with a twist
          </h1>
          
          <p className="mt-6 text-[24px] text-gray-600 max-w-2xl mx-auto">
            Design subscriptions for everyone. Pause or cancel anytime.
          </p>

          <div className="mt-10">
            <Button
              href="#plans"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors"
            >
              See plans
            </Button>
          </div>

          <div className="mt-4 flex items-center justify-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <span className="text-sm text-gray-600">Available now</span>
          </div>
        </div>



         <div className=" logo-marquee__wrapper max-w-3xl mx-auto  bg-gray-900 rounded-full py-4 px-8">
         <marquee>
           <div className="flex  items-center justify-between space-x-8">
                
                {companies.map((company, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className='font-bold text-[#3E89FF]  mb-2'>.</div>

                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={150}
                    height={70}
                    className="object-contain"
                  />
                </div>
              ))}
           </div>
           </marquee>

        </div> 


{/* <div
      style={{
        maxWidth: '768px', // Adjust to your needs
        margin: '0 auto',
        backgroundColor: '#1F2937', // gray-900
        borderRadius: '9999px', // rounded-full
        padding: '16px 32px', // py-4 px-8
        overflow: 'hidden',
      }}
    >
      <div className="flex marquee" style={{ display: 'flex', width: '100%', animation: 'scroll 15s linear infinite' }}>
        <div className="flex items-center space-x-8">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Image
                src={company.logo}
                alt={company.name}
                width={130}
                height={60}
                className="h-6 w-auto object-contain"
              />
            </div>
          ))}
          
  
        </div>
      </div>
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div> */}

      </main>
    </div>
  )
}

export default DesignAgencyHero