import { Button } from "@/components/Button"; // Assuming Button is a custom component
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";


export const CallToAction = () => {
  return (
    <section className="py-20 md:py-24 ">
      <div className="container ">
        <div
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative"
          style={{
            backgroundImage: `url(${starsBg.src})`,
          }}
        >
          {/* Overlay background with grid lines */}
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></div>

          {/* Content within the Call to Action section */}
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">
              AI-driven SEO for everyone.
            </h2>
            <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="flex justify-center mt-8">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};