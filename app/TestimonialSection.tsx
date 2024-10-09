import React from 'react';
import Image from 'next/image';

import ts1 from './images/ts1.svg'
import ts2 from './images/ts2.svg'
import line from './images/line.svg'
import profile from './images/profile.png'

export default function TestimonialSection() {
  return (
    <div className="relative w-full bg-white max-w-8xl mx-auto px-4 py-16">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-20">
        <div className="relative w-40 h-40">
        <Image src={ts1} alt={''} width={500} height={500}/>

          {/* <div className="absolute w-32 h-32 bg-yellow-400 rounded-full" /> */}
          {/* <div className="absolute w-32 h-32 bg-emerald-400 rounded-full transform translate-x-8 translate-y-8">
            <div className="absolute inset-0 flex items-center">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex-1 h-1 bg-black transform -rotate-45" />
              ))}
            </div>
          </div> */}
          {/* <div className="absolute top-0 right-0 w-16 h-16">
            <div className="grid grid-cols-4 gap-1">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-black rounded-full" />
              ))}
            </div>
          </div> */}
        </div>
      </div>




      <div className="absolute right-0 top-20">
        <div className="w-40 h-40 relative">
        <Image src={ts2} alt={''} width={500}  height={300}/>
          {/* <div className="absolute right-0 w-32 h-32 bg-red-500 rounded-r-full overflow-hidden">
             <div className="absolute inset-0 flex flex-col">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex-1 border-b-2 border-black transform rotate-12" />
              ))}
            </div> 
          </div> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto text-center pt-8">
        <p className="text-sm mb-4">They said it best</p>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          "Designjoy shows that they know the art of subtlety."
        </h2>

        <div className="flex items-center justify-center mb-16">
          <Image 
            src="/webflow-logo.png" 
            alt="Webflow" 
            width={120} 
            height={40}
            className="h-8 w-auto"
          />
        </div>


        <div className='flex items-center justify-center mb-16'>
        <Image src={line} alt={''}   />
        </div>



        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          It's "you'll never go back" better
        </h2>

        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Designjoy replaces unreliable freelancers and expensive agencies for one flat monthly fee, with designs delivered so fast that it will blow your mind.
        </p>

        <button className="bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors mb-16">
          See plans
        </button>

        <div className="grid md:grid-cols-2 gap-12 items-center text-left">
          <div>
            <blockquote className="text-2xl mb-4">
              "Design is everything, and these guys have nailed it."
            </blockquote>
            <div className="flex items-center justify-between">
            <div>
                <p className="font-semibold">Kevin O'Leary</p>
                <p className="text-gray-600">Shark Tank</p>
              </div>
              <div className="mr-4">
                <div className=" w-16 h-16 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0">
                    {/* <div className="w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-full h-full rounded-full border-4 border-emerald-400 bg-yellow-400" />
                    </div> */}
                    <Image src={profile} alt={'' } width={200} height={200}/>
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
              <p>Manage your design board using Trello. View active, queued and completed tasks with ease.</p>
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