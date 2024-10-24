"use client";

import { DotLottiePlayer } from "@dotlottie/react-player";
import Image from "next/image";
import productImage from "@/assets/product-image.png";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
  },
];

export const Features = () => {
  return (
    <section className="py-10 md:py-16 ">
      <div className="container ">
        <h2 className="text-5xl md:text-6xl  font-medium text-center  tracking-tight">
          Elevate Your SEO Efforts
        </h2>
        <p className="mt-5 text-lg md:text-xl max-w-2xl mx-auto text-white/70 text-center tracking-tight">
          From small startups to large enterprises, our AI-driven tool revolutionizes how businesses approach SEO.
        </p>

        {/* Features List */}
        <div className="mt-10 flex flex-col lg:flex-row gap-3">
          {tabs.map((tab) => (
            <div key={tab.title} className="flex items-center p-2.5 gap-2.5 rounded-xl border border-white/15 lg:flex-1">
              <div className=" h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
                <DotLottiePlayer src={tab.icon} className="h-5 w-5" autoplay />
              </div>
              <div className=" font-medium">{tab.title}</div>
              {tab.isNew && (
                <span className=" text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
                  New
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Product Image */}
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <div className="aspect-video bg-cover border border-white/20  rounded-lg text-center "
            style={
            {
              backgroundImage:`url(${productImage.src})`,
              }}
          >
          
          </div>
        </div>
      </div>
    </section>
  );
};
