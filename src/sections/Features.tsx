"use client";

import { DotLottieCommonPlayer, DotLottiePlayer } from "@dotlottie/react-player";
import productImage from "@/assets/product-image.png";
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
import { animate, motion, useMotionTemplate, useMotionValue, ValueAnimationTransition } from "framer-motion";

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

// Define the props type for FeatureTab
type FeatureTabProps = Omit<(typeof tabs)[number], 'isNew'> & ComponentPropsWithoutRef<"div"> & { 
  selected: boolean; 
  onMouseOver: (event: React.MouseEvent<HTMLDivElement>) => void; // Specify onMouseOver prop
};

const FeatureTab = ({ icon, title, selected, onMouseOver }: FeatureTabProps) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!tabRef.current) return;

    const { height, width } = tabRef.current.getBoundingClientRect();
    const circumference = height * 2 + width * 2;
    const times = [0, width / circumference, (width + height) / circumference, (width * 2 + height) / circumference, 1];

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [selected, xPercentage, yPercentage]); // Include motion values in dependencies

  const handleMouseOver = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log("Tab hovered:", title);
    dotLottieRef.current?.seek(0); // Use optional chaining
    dotLottieRef.current?.play(); // Use optional chaining
    onMouseOver(event);
  };

  return (
    <div
      ref={tabRef}
      onMouseOver={handleMouseOver}
      className={`relative flex items-center p-2.5 gap-2.5 rounded-xl border border-white/15 lg:flex-1 cursor-pointer transition-all duration-200`}
    >
      {selected && (
        <motion.div
          style={{
            WebkitMaskImage: maskImage,
            maskImage,
          }}
          className="absolute inset-0 -m-px border border-[#A369FF] rounded-xl"
        />
      )}
      <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
        <DotLottiePlayer
          ref={dotLottieRef}
          src={icon}
          className="h-5 w-5"
          autoplay={false}
        />
      </div>
      <div className="font-medium">{title}</div>
    </div>
  );
};

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section className="py-10 md:py-16">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tight">
          Elevate Your SEO Efforts
        </h2>
        <p className="mt-5 text-lg md:text-xl max-w-2xl mx-auto text-white/70 text-center tracking-tight">
          From small startups to large enterprises, our AI-driven tool revolutionizes how businesses approach SEO.
        </p>

        {/* Features List */}
        <div className="mt-10 flex flex-col lg:flex-row gap-3">
          {tabs.map((tab, tabIndex) => (
            <FeatureTab
              {...tab}
              selected={selectedTab === tabIndex}
              onMouseOver={() => setSelectedTab(tabIndex)} // No longer has error
              key={tab.title}
            />
          ))}
        </div>

        {/* Product Image */}
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <div
            className="aspect-video bg-cover border border-white/20 rounded-lg text-center"
            style={{ backgroundImage: `url(${productImage.src})` }}
          />
        </div>
      </div>
    </section>
  );
};
