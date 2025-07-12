"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import d1 from "./images/d1.png";
import d2 from "./images/d2.png";
import d3 from "./images/d3.png";
import d4 from "./images/d4.png";
import d5 from "./images/d5.png";
import d6 from "./images/d6.png";
import d7 from "./images/d7.svg";
import d8 from "./images/d8.svg";
import line from "./images/line.svg";

const imageUrls = [d1, d2, d3, d4, d5, d6];

const categories = [
  {
    text: "Enterprise Applications",
    gradient: "linear-gradient(to right, #EC4899, #F472B6)",
    borderColor: "#EC4899",
  },
  {
    text: "Mobile Apps",
    gradient: "linear-gradient(to right, #3B82F6, #2563EB)",
    borderColor: "#2563EB",
  },
  {
    text: "DevOps",
    gradient: "linear-gradient(to right, #10B981, #059669)",
    borderColor: "#059669",
  },
  {
    text: "UI/UX",
    gradient: "linear-gradient(to right, #F59E0B, #D97706)",
    borderColor: "#D97706",
  },
  {
    text: "AI-Agents",
    gradient: "linear-gradient(to right, #8B5CF6, #7C3AED)",
    borderColor: "#7C3AED",
  },
  {
    text: "Chatbots",
    gradient: "linear-gradient(to right, #06B6D4, #0891B2)",
    borderColor: "#0891B2",
  },
  {
    text: "Automation",
    gradient: "linear-gradient(to right, #EF4444, #DC2626)",
    borderColor: "#DC2626",
  },
  {
    text: "Branding",
    gradient: "linear-gradient(to right, #FACC15, #EAB308)",
    borderColor: "#EAB308",
  },
];

const Tag = ({
  text,
  gradient,
  borderColor,
}: {
  text: string;
  gradient: string;
  borderColor: string;
}) => (
  <span
    className="px-4 py-2 text-sm rounded-full text-white font-medium shadow-md"
    style={{
      backgroundImage: gradient,
      border: `2px solid ${borderColor}`,
    }}
  >
    {text}
  </span>
);

const PortfolioSection = () => {
  return (
    <div className="relative max-w-8xl mx-auto px-4 py-20 overflow-hidden">
      {/* Decorations */}
      <div className="absolute left-0 top-0 hidden sm:block">
        <Image src={d7} alt="left" width={200} height={200} />
      </div>

      <motion.div
        className="hidden sm:flex items-center justify-center"
        transition={{ duration: 1 }}
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image src={line} alt="line" />
      </motion.div>

      <div className="absolute right-0 top-0 hidden sm:block">
        <div className="relative w-[200px] h-[200px]">
          <Image src={d8} alt="right" fill className="object-contain" />
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-black rounded-full"
                style={{
                  top: `${Math.sin((i * 30 * Math.PI) / 180) * 40 + 80}px`,
                  left: `${Math.cos((i * 30 * Math.PI) / 180) * 40 + 80}px`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Headline */}
      <div className="text-center pt-20">
        <motion.h1
          className="text-[28px] sm:text-5xl md:text-6xl font-bold mb-10 leading-tight"
          transition={{ duration: 1 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Apps, Websites, AI, DevOps <br /> — We build for the future
        </motion.h1>

        {/* Tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-12"
          transition={{ duration: 1 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((tag, i) => (
            <Tag
              key={i}
              text={tag.text}
              gradient={tag.gradient}
              borderColor={tag.borderColor}
            />
          ))}
        </motion.div>

        {/* Portfolio Images */}
        <div className="relative max-w-6xl mx-auto px-2 sm:px-4">
          <motion.div
            transition={{ duration: 1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Mobile scroll */}
            <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 sm:hidden">
              {imageUrls.map((img, i) => (
                <div
                  key={i}
                  className="relative min-w-[220px] h-[420px] rounded-xl overflow-hidden flex-shrink-0 snap-center"
                >
                  <Image
                    src={img}
                    alt={`item ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Grid on Desktop */}
            <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 gap-6">
              {imageUrls.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[625/1235] bg-gray-100 rounded-lg overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`item ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default function DesignJoyLanding() {
  return (
    <main className="min-h-screen">
      <PortfolioSection />
    </main>
  );
}
