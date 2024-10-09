 import hero1 from './images/hero1.svg'
 import hero2 from './images/hero2.svg'
// import { FC } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const NavLink: FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
//   <Link 
//     href={href} 
//     className="px-4 py-2 rounded-full text-white hover:text-black hover:bg-[#FFD700] transition-all duration-200"
//   >
//     {children}
//   </Link>
// );

// const DesignAgencyHero: FC = () => {
//   return (
//     <div className="relative w-full bg-white max-w-8xl mx-auto min-h-screen">
//       {/* Sticky Navigation Bar */}
//       <div className="fixed left-1/2 -translate-x-1/2 bottom-8 z-50">
//         <nav className="bg-gray-900 rounded-full px-6 py-4 shadow-xl flex items-center gap-6">
//           {/* Logo/Smile icon */}
//           <div className="text-white text-2xl bg-gray-800 p-2 rounded-full w-44 h-24 flex items-center justify-center">
//             <span className="rotate-180" style={{ display: 'inline-block' }}>⌣</span>
//           </div>
          
//           {/* Navigation Links */}
//           <NavLink href="#how">How it works</NavLink>
//           <NavLink href="#benefits">Benefits</NavLink>
//           <NavLink href="#services">Services</NavLink>
//           <NavLink href="#pricing">Pricing</NavLink>
//           <NavLink href="#faqs">FAQs</NavLink>
          
//           {/* Login Button */}
//           <Link 
//             href="/login" 
//             className="text-white bg-gray-800 px-6 py-2 rounded-full hover:bg-gray-700 transition-all duration-200 ml-2"
//           >
//             Login
//           </Link>
//         </nav>
//       </div>

//       {/* Left Shape */}
//       <div className="absolute left-0 top-[25%]">
//         <div className="w-64 h-64 relative">
//           <div className="absolute inset-0">
//             <Image src={hero2} alt="" />
//           </div>
//         </div>
//       </div>
      
//       {/* Right Shape */}
//       <div className="absolute right-0 top-[25%]">
//         <div className="w-44 h-44 relative">
//           <div className="absolute inset-0">
//             <Image src={hero1} alt="" />
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
//         <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-7xl">
//           A design agency
//           <br />
//           with a twist
//         </h1>
//         <p className="mt-6 text-xl text-gray-600">
//           Design subscriptions for everyone. Pause or cancel anytime.
//         </p>
//         <div className="mt-10">
//           <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
//             See plans
//           </button>
//         </div>
//         <div className="mt-4 flex items-center gap-2">
//           <div className="w-2 h-2 rounded-full bg-red-500"></div>
//           <span className="text-sm text-gray-600">Available now</span>
//         </div>

//         {/* Partner Logos */}
//         <div className="mt-20 bg-gray-900 rounded-full py-4 px-8">
//           <div className="flex items-center justify-center gap-8">
//             {['nectar', 'beehiiv', 'Memberstack', 'cometchat', 'Buy me a coffee'].map((logo, index) => (
//               <div key={index} className="text-white opacity-75 hover:opacity-100 transition-opacity">
//                 {logo}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DesignAgencyHero;


import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DesignAgencyHero: FC = () => {
  return (
    <div className="relative w-full bg-white max-w-8xl mx-auto min-h-screen">
    


{/* <div className="fixed left-1/2 -translate-x-1/2 bottom-8 z-50 w-3/4">
  <nav className="bg-gray-900 rounded-full px-8 py-4 shadow-xl flex items-center justify-center gap-8">
    
    <div className="text-white text-2xl bg-gray-800 p-2 rounded-full">
      <span className="rotate-180" style={{ display: 'inline-block' }}>⌣</span>
    </div>
    

    <Link href="#how" className="text-white hover:bg-gray-700 px-4 py-2 rounded-full transition-colors">
      How it works
    </Link>
    <Link href="#benefits" className="text-white hover:bg-gray-700 px-4 py-2 rounded-full transition-colors">
      Benefits
    </Link>
    <Link href="#services" className="text-white hover:bg-gray-700 px-4 py-2 rounded-full transition-colors">
      Services
    </Link>
    <Link href="#pricing" className="text-white hover:bg-gray-700 px-4 py-2 rounded-full transition-colors">
      Pricing
    </Link>
    <Link href="#faqs" className="text-white hover:bg-gray-700 px-4 py-2 rounded-full transition-colors">
      FAQs
    </Link>
    
    
    <Link href="/login" className="text-white bg-gray-800 px-6 py-2 rounded-full hover:bg-gray-600 transition-colors">
      Login
    </Link>
  </nav>
</div> */}


<div className="fixed left-1/2 -translate-x-1/2 bottom-8 z-50" style={{ width: '60%' }}>
  <nav className="bg-gray-900 rounded-full px-4 py-4 shadow-xl flex items-center justify-center gap-6">
    
    <div className="text-white bg-gray-800 px-8 py-2 rounded-full hover:bg-gray-600 transition-colors">
      
      <span  style={{ display: 'inline-block', transform: 'rotate(270deg)' }}>(</span>


    </div>
    
    
    <Link href="#how" className="text-white hover:bg-gray-700 px-4 py-2 rounded-full transition-colors">
      How it works
    </Link>
    <Link href="#benefits" className="text-white hover:bg-gray-700 px-4 py-2 rounded-full transition-colors">
      Benefits
    </Link>
    <Link href="#services" className="text-white hover:bg-gray-700 px-4 py-2 rounded-full transition-colors">
      Services
    </Link>
    <Link href="#pricing" className="text-white hover:bg-gray-700 px-4 py-2 rounded-full transition-colors">
      Pricing
    </Link>
    <Link href="#faqs" className="text-white hover:bg-gray-700 px-4 py-2 rounded-full transition-colors">
      FAQs
    </Link>
    
    {/* Login Button */}
    <Link href="/login" className="text-white bg-gray-800 px-6 py-2 rounded-full hover:bg-gray-600 transition-colors">
      Login
    </Link>
  </nav>
</div>



      
      <div className="absolute left-0 top-[25%]">
        <div className="w-64 h-64 relative">
          <div className="absolute inset-0">
            <Image src={hero2} alt="" />
          </div>
        </div>
      </div>
      
      {/* Right Shape */}
      <div className="absolute right-0 top-[25%]">
        <div className="w-44 h-44 relative">
          <div className="absolute inset-0">
            <Image src={hero1} alt="" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-7xl">
          A design agency
          <br />
          with a twist
        </h1>
        <p className="mt-6 text-xl text-gray-600">
          Design subscriptions for everyone. Pause or cancel anytime.
        </p>
        <div className="mt-10">
          <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
            See plans
          </button>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <span className="text-sm text-gray-600">Available now</span>
        </div>

        {/* Partner Logos */}
        <div className="mt-20 bg-gray-900 rounded-full py-4 px-8">
          <div className="flex items-center justify-center gap-8">
            {['nectar', 'beehiiv', 'Memberstack', 'cometchat', 'Buy me a coffee'].map((logo, index) => (
              <div key={index} className="text-white opacity-75 hover:opacity-100 transition-opacity">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignAgencyHero;