import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="hero-section" className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-white overflow-hidden">
      {/* Parallax background element */}
      <div className="absolute inset-0 pointer-events-none" style={{
      transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
      transition: "transform 0.3s ease-out"
    }}>
        <div className="absolute top-20 right-20 w-96 h-96 border border-black/5 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 border border-black/5 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          {/* Left Column */}
          <div className="space-y-12 text-center lg:text-left">
            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none animate-slide-up">
                Katlego
              </h1>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none animate-slide-up" style={{
              animationDelay: "0.1s"
            }}>
                Masipa
              </h1>
            </div>

            {/* Subtitle with reveal animation */}
            <div className="space-y-6 animate-fade-in" style={{
            animationDelay: "0.3s"
          }}>
              <p className="text-xl md:text-2xl text-secondary leading-relaxed">
                Founder & Creative Director
              </p>
              <p className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
                Architeq Web Agency
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12 text-center lg:text-left">
            {/* Description */}
            <p className="text-lg md:text-xl text-secondary leading-relaxed animate-fade-in" style={{
            animationDelay: "0.5s"
          }}>Building powerful, no-code websites, SaaS platforms, and MVPs for local &amp; international businesses — from South Africa to the world.</p>

            {/* Time badges */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start items-center animate-fade-in" style={{
            animationDelay: "0.7s"
          }}>
              <div className="text-left">
                <div className="text-5xl md:text-6xl font-bold">7</div>
                <div className="text-sm md:text-base text-secondary mt-2 uppercase tracking-wider">Days for Websites</div>
              </div>
              <div className="w-px h-16 bg-border"></div>
              <div className="text-left">
                <div className="text-5xl md:text-6xl font-bold">4-6</div>
                <div className="text-sm md:text-base text-secondary mt-2 uppercase tracking-wider">Weeks for MVPs</div>
              </div>
            </div>

            {/* CTA */}
            <div className="animate-fade-in" style={{
            animationDelay: "0.9s"
          }}>
              <span onClick={scrollToContact} className="text-link text-xl md:text-2xl font-medium cursor-pointer inline-block hover:tracking-wide transition-all duration-500">
                Let's Build Your Dream Website →
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator (hidden on mobile) */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-secondary">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;