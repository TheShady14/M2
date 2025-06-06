"use client";

import React from "react";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function MediaSquaredHero() {
  return (
    <div className="w-full h-full flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Heading */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="block text-white">Elevate Your</span>
              <span className="block text-white">Media Strategy</span>
              <span className="block text-white">with</span>
              <span className="block relative">
                <AuroraText className="text-white">Media Squared</AuroraText>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white mt-2"></div>
              </span>
            </h1>
          </div>

          {/* Right Column - Subheading and Description */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Discover
              <br />
              <AuroraText className="inline-block text-white">
                Media Squared
              </AuroraText>
            </h2>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg">
              The pioneering platform designed to transform how media spaces in
              malls are booked, managed, and optimised. Connect with us to
              revolutionise your advertising approach and harness the full
              potential of mall kiosk spaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
