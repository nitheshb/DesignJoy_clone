/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";

// Images
import s2 from "./images/s2.svg";
import s3 from "./images/s3.svg";
import whatsappIcon from "./images/whatsapp.svg";

const DesignjoySections = () => {
  return (
    <div className="space-y-8">
      {/* Section block */}
      <motion.div
        transition={{ duration: 1, ease: "easeInOut" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="bg-[#fafafa] rounded-2xl relative overflow-hidden px-6 sm:px-8 py-16">
          {/* Decorative Backgrounds */}
          <div className="absolute top-0 left-0 opacity-80 z-0 hidden sm:block">
            <Image src={s2} alt="decor-left" className="w-28 md:w-36" />
          </div>
          <div className="absolute top-0 right-0 opacity-80 z-0 hidden sm:block">
            <Image src={s3} alt="decor-right" className="w-28 md:w-36" />
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center max-w-2xl mx-auto">
          
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-gray-900 leading-tight">
              Carbon and Codes Innovation
            </h1>
            <p className="text-gray-600 text-lg sm:text-2xl mb-8">
              A collection of team to spice up your design projects.
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <Button
                href="tel:+353892510895"
                className="whitespace-nowrap"
              >
                📞 Call: +353 892510895
              </Button>

              <Button
                href="https://wa.me/+353892510895"
                variant="green"
              >
                <Image
                  src={whatsappIcon}
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                WhatsApp Us
              </Button>
            </div>

            {/* Address */}
            <p className="text-sm text-gray-500 mt-4">
              D01 V4A3, North Dock, Dublin Landing, Dublin 2, Ireland
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DesignjoySections;
