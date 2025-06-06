"use client";

import React from "react";
import Image from "next/image";

const MallPresenceLanding = () => {
  return (
    <div className="w-full h-full bg-white">
      {/* Header */}
      <header className="px-8 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/assets/media-logo.png"
            alt="Media by Smollon Logo"
            width={160}
            height={40}
            className="h-10 w-auto"
          />
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold text-gray-800">
            Empowering Small Business Owners
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-center h-full">
        <div className="w-full max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-300 via-pink-300 to-purple-400" />
                <div className="relative z-10 flex items-center justify-center h-full">
                  <Image
                    src="/assets/business-owner.png"
                    alt="Smiling business owner with crossed arms"
                    width={400}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-6xl font-light text-gray-900 leading-tight mb-4">
                  Accessible
                  <br />
                  and Flexible
                  <br />
                  <span className="font-bold">Mall Presence</span>
                </h1>
                <div className="w-20 h-1 bg-gray-900 mb-8"></div>
              </div>

              <div className="max-w-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  With Media Squared, small businesses can affordably access
                  high-traffic mall spaces, allowing for flexible, short-term
                  bookings that align with business needs and budget
                  constraints. Enhance your visibility, test new markets, and
                  engage directly with a broad customer base, all supported by
                  data to refine your marketing strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MallPresenceLanding;
