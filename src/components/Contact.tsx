import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Phone, Globe, Mail } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.contact-animate').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
                el.classList.remove('opacity-0', 'translate-y-10', '-translate-x-10', 'translate-x-10');
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    project: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.project) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    // Create mailto link with form data
    const subject = encodeURIComponent(`New Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nProject Details:\n${formData.project}`
    );
    const mailtoLink = `mailto:architeqwebagency@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;

    toast({
      title: "Message Sent!",
      description: "I'll reply within 24 hours. Let's make your project real!",
    });
    
    setFormData({ name: "", email: "", phone: "", service: "", project: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6 bg-white border-t border-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left column - Title */}
          <div className="space-y-12 contact-animate opacity-0 -translate-x-10 transition-all duration-700">
            <div className="space-y-6">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
                Let's Build Something Great
              </h2>
              <div className="w-20 h-1 bg-black"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-secondary leading-relaxed">
              Ready to transform your digital presence? Let's talk.
            </p>

            {/* Contact info */}
            <div className="space-y-6 pt-12">
              <a 
                href="mailto:architeqwebagency@gmail.com"
                className="flex items-center gap-4 text-xl group"
              >
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-link font-medium">architeqwebagency@gmail.com</span>
              </a>
              
              <a 
                href="tel:0694900189"
                className="flex items-center gap-4 text-xl group"
              >
                <Phone className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-link font-medium">069 490 0189</span>
              </a>
              
              <a 
                href="https://architeqwebagency.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-xl group"
              >
                <Globe className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-link font-medium">architeqwebagency.pages.dev</span>
              </a>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="contact-animate opacity-0 translate-x-10 transition-all duration-700">
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Name field */}
              <div className="relative">
                <label 
                  htmlFor="name"
                  className={`absolute left-0 transition-all duration-300 text-lg ${
                    focusedField === "name" || formData.name
                      ? "-top-6 text-sm text-secondary"
                      : "top-4 text-secondary"
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full pt-4 pb-4 bg-transparent border-b-2 border-black/20 focus:border-black outline-none text-xl transition-all duration-300"
                />
              </div>

              {/* Email field */}
              <div className="relative">
                <label 
                  htmlFor="email"
                  className={`absolute left-0 transition-all duration-300 text-lg ${
                    focusedField === "email" || formData.email
                      ? "-top-6 text-sm text-secondary"
                      : "top-4 text-secondary"
                  }`}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full pt-4 pb-4 bg-transparent border-b-2 border-black/20 focus:border-black outline-none text-xl transition-all duration-300"
                />
              </div>

              {/* Phone field */}
              <div className="relative">
                <label 
                  htmlFor="phone"
                  className={`absolute left-0 transition-all duration-300 text-lg ${
                    focusedField === "phone" || formData.phone
                      ? "-top-6 text-sm text-secondary"
                      : "top-4 text-secondary"
                  }`}
                >
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full pt-4 pb-4 bg-transparent border-b-2 border-black/20 focus:border-black outline-none text-xl transition-all duration-300"
                />
              </div>

              {/* Service dropdown */}
              <div className="relative">
                <label 
                  htmlFor="service"
                  className={`absolute left-0 transition-all duration-300 text-lg ${
                    focusedField === "service" || formData.service
                      ? "-top-6 text-sm text-secondary"
                      : "top-4 text-secondary"
                  }`}
                >
                  What service are you interested in?
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("service")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full pt-4 pb-4 bg-transparent border-b-2 border-black/20 focus:border-black outline-none text-xl transition-all duration-300 cursor-pointer"
                >
                  <option value="" disabled></option>
                  <option value="Get a quote">Get a quote</option>
                  <option value="Web design services">Web design services</option>
                  <option value="Website maintenance">Website maintenance</option>
                  <option value="Website redesign">Website redesign</option>
                  <option value="MVP">MVP</option>
                  <option value="Google Business Profile">Google Business Profile</option>
                </select>
              </div>

              {/* Project field */}
              <div className="relative">
                <label 
                  htmlFor="project"
                  className={`absolute left-0 transition-all duration-300 text-lg ${
                    focusedField === "project" || formData.project
                      ? "-top-6 text-sm text-secondary"
                      : "top-4 text-secondary"
                  }`}
                >
                  Tell me about your project
                </label>
                <textarea
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("project")}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  className="w-full pt-4 pb-4 bg-transparent border-b-2 border-black/20 focus:border-black outline-none text-xl transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-8">
                <button
                  type="submit"
                  className="text-link text-2xl md:text-3xl font-medium hover:tracking-wide transition-all duration-500"
                >
                  Send Message →
                </button>
                <p className="text-sm text-secondary mt-6">
                  I'll reply within 24 hours — let's make your project real.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
