import React from 'react';
import Image from 'next/image';

import ts1 from './images/ts1.svg';
import ts2 from './images/ts2.svg';
import line from './images/line.svg';
import profile from './images/profile.png';

import Button from './Button';

export default function TestimonialSection() {
  return (
    <div className="relative w-full max-w-8xl mx-auto px-4 py-16">
      



    
      <div className="max-w-6xl mx-auto text-center pt-8">
        <p className="text-sm mb-4">They said it best</p>
        <h2 className="text-[54px] leading-[60px] max-w-3xl mx-auto font-semibold mb-4">
          "Designjoy shows that they know the art of subtlety."
        </h2>






      
        <div className="flex items-center justify-center mb-8 md:mb-16">
          <Image src="/webflow-logo.png" alt="Webflow" width={120} height={40} className="h-8 w-auto" />
        </div>


        {/* <div className="absolute left-0 top-0 md:top-46">
        <div className="relative w-24 h-24 md:w-40 md:h-40 lg:w-64 lg:h-64">
          <Image src={ts1} alt={''} layout="fill" objectFit="contain" />
        </div>
      </div> */}


        <div className="absolute left-0 top-[20%]">
          <div className="relative w-24 h-24 md:w-40 md:h-40 lg:w-64 lg:h-64">
            <Image src={ts1} alt="Left Testimonial Image" />
          </div>
        </div>

  


{/* 
<div className="absolute right-0 top-[20%] ">
  <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[32rem] lg:h-[32rem]">
    <Image src={ts2} alt="Right Testimonial Image"  layout="fill"  objectFit="cover"   />
  </div>
</div>  */}


<div className="absolute right-0 top-[25%] ">
  <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-[20rem] lg:h-[20rem]"> {/* Further decreased sizes */}
    <Image src={ts2} alt="Right Testimonial Image" objectFit="cover" />
  </div>
</div>











        <div className="flex items-center justify-center mb-8 md:mb-16">
          <Image src={line} alt={''} width={20} height={10} />
        </div>




        {/* <div className="absolute right-0 top-10 md:top-20">
        <div className="relative w-24 h-24 md:w-40 md:h-40 lg:w-64 lg:h-64">
          <Image src={ts2} alt={''} layout="fill" objectFit="contain" />
        </div>
      </div> */}

   
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          It's "you'll never go back" better
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Designjoy replaces unreliable freelancers and expensive agencies for one flat monthly fee, with designs delivered so fast that it will blow your mind.
        </p>

        <Button className="mb-16">See plans</Button>

        <div className="grid md:grid-cols-2 max-w-7xl mx-auto gap-8 items-center text-left">

      
          <div className="bg-white rounded-lg px-4 py-5 shadow-md">
            <div className="space-y-8">
              <h2 className="text-lg md:text-[30px] leading-tight tracking-tight font-semibold mb-4">
                "Design is everything, and these guys have nailed it."
              </h2>
              <div className="grid grid-cols-2 items-center ">
                <div className="space-y-1">
                  <p className="text-[13px]">Kevin O'Leary</p>
                  <p className="text-[12px] text-gray-600">Shark Tank</p>
                </div>
               <div className="relative  aspect-[16/10] rounded-xl ">
                <div className="absolute right-0 bottom-0 ">
                 <Image src={profile} alt={'' }   className="  object-cover rounded-lg" width={200} height={380}/>
                </div>
             </div> 
              </div>
            </div>
          </div>

       
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Totally async</h3>
              <p>Don't like meetings? We don't either; so much so that we've outlawed them completely.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Manage with Trello</h3>
              <p>Manage your design board using Trello. View active, queued, and completed tasks with ease.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Invite your team</h3>
              <p>Invite your entire team, so anyone can submit requests and track their progress.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


