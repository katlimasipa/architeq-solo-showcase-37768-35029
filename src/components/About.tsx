import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-animate').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
                el.classList.remove('opacity-0', 'translate-y-10', '-translate-x-10', 'translate-x-10');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 bg-white border-t border-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left column - Title */}
          <div className="space-y-8 scroll-animate opacity-0 -translate-x-10 transition-all duration-700">
            <div className="space-y-4">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
                About
              </h2>
              <div className="w-20 h-1 bg-black"></div>
            </div>
            <p className="text-xl text-secondary">
              Solo designer, global impact
            </p>
          </div>

          {/* Right column - Content */}
          <div className="space-y-8 text-lg md:text-xl leading-relaxed scroll-animate opacity-0 translate-x-10 transition-all duration-700">
            <p className="text-secondary">
              I'm a solo web designer and developer working from South Africa, 
              building digital products for businesses around the world.
            </p>
            <p className="text-foreground font-medium">
              My mission: to help businesses of any size get an elite online presence 
              using the power of no-code tools.
            </p>
            <p className="text-secondary">
              I specialize in <span className="text-foreground font-medium">Framer</span>, 
              
              {" "}<span className="text-foreground font-medium">Figma</span>, and 
              {" "}<span className="text-foreground font-medium">UX Pilot</span> — 
              combining speed with stunning design to deliver results that look 
              expensive and professional.
            </p>
            <p className="text-foreground font-semibold text-2xl pt-8 border-t border-black/10">
              Every website is handcrafted, modern, and results-driven.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
