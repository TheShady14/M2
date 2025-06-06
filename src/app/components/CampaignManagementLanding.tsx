"use client";

import React from "react";
import Image from "next/image";

const CampaignManagementLanding = () => {
  return (
    <div className="w-full h-full flex items-center justify-center px-6 py-12 bg-white">
      <div className="max-w-7xl w-full">
        <div className="flex justify-between items-center mb-12">
          <Image
            src="/assets/media-logo.png"
            alt="Media by Smollon Logo"
            width={160}
            height={40}
            className="h-10 w-auto"
          />
          <p className="text-lg font-semibold text-gray-800">
            Empowering Small Business Owners
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8 text-left">
            <div>
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight mb-4">
                Accessible
                <br />
                and Flexible
                <br />
                <span className="font-bold">
                  Campaign
                  <br />
                  Management
                </span>
              </h1>
              <div className="w-20 h-1 bg-gray-900 mb-8"></div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              For agencies, our platform simplifies the process of managing and
              monitoring advertising campaigns across multiple mall locations.
              Gain real-time insights, adjust strategies dynamically, and
              deliver measurable impact for your clients — all from one place.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-300 via-sky-300 to-emerald-300" />
            <div className="relative z-10 flex items-center justify-center h-full">
              <Image
                src="/assets/business-owner-2.png"
                alt="Business owner managing campaigns"
                width={400}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignManagementLanding;
