import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote: "Best services and a Great Web Agency I can recommend, I've gotten the best service and the best outcome everything running smoothly to the tee.",
    author: "PHILLY JAROAM",
    role: "Google Review",
    rating: 5,
  },
  {
    quote: "I had such a great experience with Katlego. He made the whole process of building my website super easy and enjoyable, and the final result looks amazing. The site is clean, simple to use, and exactly what I wanted. He was friendly, helpful, and always quick to respond whenever I had questions. Definitely recommend them to anyone who needs a website!",
    author: "Kebogile Mokgoebo",
    role: "Google Review",
    rating: 5,
  },
];

const Testimonials = () => {
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
            
            entry.target.querySelectorAll('.testimonial-item').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('opacity-100', 'translate-x-0');
                el.classList.remove('opacity-0', 'translate-x-20');
              }, index * 200);
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
    <section id="testimonials" ref={sectionRef} className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="opacity-0 translate-y-10 transition-all duration-700 scroll-animate">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8">
            Client Success
          </h2>
          <p className="text-xl md:text-2xl text-secondary max-w-2xl">
            Trusted by businesses across South Africa and beyond
          </p>
        </div>

        {/* Testimonials */}
        <div className="space-y-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="testimonial-item border-l-2 border-black pl-12 py-8 opacity-0 translate-x-20 transition-all duration-700"
            >
              <div className="max-w-4xl space-y-8">
                <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed font-medium">
                  "{testimonial.quote}"
                </p>
                <div className="space-y-2 pt-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-xl font-bold">
                    {testimonial.author}
                  </p>
                  <p className="text-lg text-secondary">
                    {testimonial.role}
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

export default Testimonials;
