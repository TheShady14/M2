"use client";

import Image from "next/image";
import { Building2, MonitorSmartphone, Handshake } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";

const audiences = [
  {
    title: "For Malls",
    description:
      "Drive new revenue streams and simplify kiosk operations. Fill spaces faster and unlock valuable data for smarter planning.",
    icon: Building2,
  },
  {
    title: "For Small Businesses",
    description:
      "Access high-traffic mall spaces with flexible terms. Perfect for boosting visibility and customer engagement affordably.",
    icon: MonitorSmartphone,
  },
  {
    title: "For Agencies",
    description:
      "Manage mall activations at scale with dynamic campaign tools, real-time analytics, and multi-location control.",
    icon: Handshake,
  },
];

const brands = ["standard-bank", "pick-n-pay", "mtn", "engen", "excellerate"];

export default function MediaSquaredOverview() {
  return (
    <div className="flex items-center justify-center h-full px-4 py-8">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl p-8 md:p-16 space-y-16">
        {/* Headline Section */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <BlurFade inView>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900"></h2>
          </BlurFade>
          <BlurFade inView delay={0.1}>
            <p className="text-lg md:text-xl text-gray-700"></p>
          </BlurFade>
        </div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, i) => (
            <BlurFade key={audience.title} delay={0.15 * i} inView>
              <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200 space-y-4 hover:scale-[1.02] transition">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <audience.icon className="text-purple-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {audience.title}
                </h3>
                <p className="text-gray-700">{audience.description}</p>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Trusted Brands */}
        <div className="text-center space-y-6">
          <BlurFade inView>
            <h4 className="text-2xl font-medium text-gray-800">
              Trusted by South Africa’s Biggest Brands
            </h4>
          </BlurFade>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-center items-center">
            {brands.map((brand, index) => (
              <BlurFade key={brand} delay={0.1 * index} inView>
                <Image
                  src={`/icons/${brand}.svg`}
                  alt={`${brand} logo`}
                  width={100}
                  height={40}
                  className="grayscale opacity-70 hover:opacity-100 transition"
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
