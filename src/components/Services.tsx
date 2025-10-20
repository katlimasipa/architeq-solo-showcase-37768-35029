import { useEffect, useRef } from "react";

const services = [
  {
    number: "01",
    title: "Website Design",
    tool: "Framer",
    description: "Award-level websites built in just 7 days. Every pixel crafted for conversion.",
  },
  {
    number: "02",
    title: "MVP & SaaS Development",
    tool: "Lovable.dev",
    description: "Launch your idea in 4–6 weeks with no-code power. From prototype to production.",
  },
  {
    number: "03",
    title: "Branding & Strategy",
    tool: "Visual Identity",
    description: "Crafting visuals that match your business personality. Memorable and distinctive.",
  },
  {
    number: "04",
    title: "Digital Marketing",
    tool: "Growth Systems",
    description: "Helping you reach clients that actually convert. Results-driven campaigns.",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const headerEl = entry.target.querySelector('.scroll-animate');
            if (headerEl) {
              headerEl.classList.add('opacity-100', 'translate-y-0');
              headerEl.classList.remove('opacity-0', 'translate-y-10');
            }
            
            entry.target.querySelectorAll('.service-item').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('opacity-100', 'translate-x-0');
                el.classList.remove('opacity-0', 'translate-x-20');
              }, index * 150);
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
    <section id="services" ref={sectionRef} className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="flex items-end justify-between border-b border-black pb-8 opacity-0 translate-y-10 transition-all duration-700 scroll-animate">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
            Services
          </h2>
          <p className="text-lg text-secondary hidden md:block">
            What I offer
          </p>
        </div>

        {/* Services list */}
        <div className="space-y-1">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="service-item group border-b border-black/10 py-12 hover:bg-black/[0.02] transition-all duration-700 opacity-0 translate-x-20"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start px-6">
                {/* Number */}
                <div className="md:col-span-2">
                  <span className="text-5xl md:text-6xl font-bold text-secondary/30 group-hover:text-foreground transition-colors duration-500">
                    {service.number}
                  </span>
                </div>

                {/* Title and tool */}
                <div className="md:col-span-5 space-y-2">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight group-hover:translate-x-4 transition-transform duration-500">
                    {service.title}
                  </h3>
                  <p className="text-sm uppercase tracking-widest text-secondary">
                    {service.tool}
                  </p>
                </div>

                {/* Description */}
                <div className="md:col-span-5">
                  <p className="text-lg md:text-xl text-secondary leading-relaxed group-hover:text-foreground transition-colors duration-500">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
