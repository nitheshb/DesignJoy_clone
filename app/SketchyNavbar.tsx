"use client"; 
import Link from 'next/link'
import Image from 'next/image'

import './index.css'

const SketchyNavbar = () => {
  const navItems = [
    { name: 'How it works', href: '/how-it-works' },
    { name: 'Benefits', href: '/benefits' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQs', href: '/faqs' },
  ]

  return (
    <div className=" nav-menu-2 fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-[740px] px-4">
      <nav className="">
        <div className="absolute inset-0 rounded-full shadow-inner opacity-10"></div>
        
        <div className="absolute inset-0 rounded-full bg-white/5"></div>

        <div className="relative flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex-shrink-0">
            <div className="w-10 h-10 bg-white rounded-full flex text-center  items-center justify-center">
              <div className="px-6 py-2 bg-neutral-800 text-white rounded-full font-bold   hover:bg-neutral-700 transition-colors">⌣</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2 space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white  hover:bg-yellow-400 hover:text-black p-2 rounded-full transition-colors text-base font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button className="px-6 py-2 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors">
            Login
          </button>
        </div>
      </nav>
    </div>
  )
}

export default SketchyNavbar


