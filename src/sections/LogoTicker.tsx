"use client";

import Image from "next/image"; // Import Image from next/image
import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  const logos = [acmeLogo, echoLogo, celestialLogo, apexLogo, quantumLogo];

  return (
    <section className="py-20 md:py-18">
      <div className="container ">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2 className="text-center text-2xl font-bold mb-4">
              Trusted by top innovative teams
            </h2>
          </div>

          <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0%" }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="flex gap-14 pr-14 -translate-x-1/2"
            >
              {logos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo} // Use logo directly since imported
                  alt={`Logo ${index + 1}`}
                  height={24} // Specify height for the Image component
                  width={100} // Specify width; adjust as needed
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
