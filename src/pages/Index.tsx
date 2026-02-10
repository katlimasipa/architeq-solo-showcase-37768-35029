import { useEffect, useMemo } from "react";
import { ArrowRight, Instagram, MessageCircle } from "lucide-react";
import Contact from "@/components/Contact";
import gtTestingImg from "@/assets/gt-testing.png";
import thehacImg from "@/assets/thehac.png";
import crmDashboardImg from "@/assets/crm-dashboard.png";
import houseOfBeautyImg from "@/assets/house-of-beauty.png";

const projects = [
  {
    title: "GT Testing",
    category: "Construction & Pest Control",
    image: gtTestingImg,
  },
  {
    title: "The Home of Accounting Consulting",
    category: "Financial Services",
    image: thehacImg,
  },
  {
    title: "Engineering CRM Dashboard",
    category: "Engineering Software",
    image: crmDashboardImg,
  },
  {
    title: "H & N House of Beauty",
    category: "Beauty Services",
    image: houseOfBeautyImg,
  },
];

const skills = [
  "Website Design",
  "Website Redesign",
  "Branding & Strategy",
  "Digital Marketing",
  "Website Maintenance",
  "Google Business Profile",
];

const Index = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* MOBILE LAYOUT (stacked) */}
      <div className="lg:hidden">
        {/* Header / Info */}
        <div className="px-6 pt-10 pb-8 space-y-8">
          {/* Name + Available */}
          <div className="flex items-center gap-4 flex-wrap">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter">
              Katlego Masipa
            </h1>
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-foreground">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium">Available Now</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <p className="text-lg sm:text-xl font-semibold text-foreground">
              Design that takes businesses from zero to elite.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              A web designer working from South Africa. I partner with businesses to create high-impact websites and connect them with global audiences.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Start Project <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/27694900189"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-foreground rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              Let's Chat
            </a>
          </div>

          {/* Skills */}
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              What I'm best at
            </p>
            <div className="grid grid-cols-2 gap-2">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="px-3 py-2 border border-border text-sm rounded-lg"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="px-6 pb-8 space-y-6">
          {projects.map((project) => (
            <div key={project.title} className="space-y-3">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[16/10] object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <footer className="py-10 px-6 border-t border-border">
          <div className="space-y-4 text-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Architeq Web Agency
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://wa.me/27694900189"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:opacity-70 transition-opacity"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/architeqwebagency/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:opacity-70 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* DESKTOP LAYOUT (split panel) */}
      <div className="hidden lg:flex h-screen">
        {/* LEFT PANEL - Fixed */}
        <div className="w-[42%] xl:w-[38%] h-screen fixed top-0 left-0 flex flex-col justify-between p-10 xl:p-14 overflow-hidden">
          {/* Top section */}
          <div className="space-y-10">
            {/* Name + Available */}
            <div className="flex items-center gap-4">
              <h1 className="text-3xl xl:text-4xl font-bold tracking-tighter">
                Katlego Masipa
              </h1>
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-foreground">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium">Available Now</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-xl xl:text-2xl font-semibold text-foreground leading-snug">
                Design that takes businesses from zero to elite.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                A web designer working from South Africa. I partner with businesses to create high-impact websites and connect them with global audiences.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3">
              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Start Project <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/27694900189"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-foreground rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
              >
                Let's Chat
              </a>
            </div>
          </div>

          {/* Bottom section - Skills + Footer */}
          <div className="space-y-8 mt-10">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                What I'm best at
              </p>
              <div className="grid grid-cols-2 gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-2.5 border border-border text-sm rounded-lg"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Mini footer */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                © {currentYear} Architeq Web Agency
              </p>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/27694900189"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:opacity-70 transition-opacity"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/architeqwebagency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:opacity-70 transition-opacity"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL - Scrollable */}
        <div className="w-[58%] xl:w-[62%] ml-[42%] xl:ml-[38%] overflow-y-auto">
          {/* Projects */}
          <div className="p-8 xl:p-12 space-y-10">
            {projects.map((project) => (
              <div key={project.title} className="space-y-4 group">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[16/10] object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact section */}
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Index;
