import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from '@/assets/logo-celestial.png';
import quantumLogo from '@/assets/logo-quantum.png';
import echoLogo from '@/assets/logo-echo.png';

export const LogoTicker = () => {
  const logos = [acmeLogo, echoLogo, celestialLogo, apexLogo, quantumLogo];

  return (
    <section className="py-20 md:py-18 ">
      <div className="container lg:gap-20">

        <div className="flex items-center gap-5">

          <div className="flex-1 md:flex-none">
            <h2 className="text-center text-2xl font-bold mb-4">Trusted by top innovative teams</h2>
          </div>

          <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">

            <div className="flex flex-none gap-14">
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src} // Use logo directly since imported
                  alt={`Logo ${index + 1}`}
                  className="h-6 w-auto" // Adjust height as needed
                />
              ))}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
