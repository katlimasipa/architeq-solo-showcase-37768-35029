import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import gtTestingImg from "@/assets/gt-testing.png";
import thehacImg from "@/assets/thehac.png";
import crmDashboardImg from "@/assets/crm-dashboard.png";
import houseOfBeautyImg from "@/assets/house-of-beauty.png";
const projects = [{
  title: "GT Testing",
  category: "Construction & Pest Control",
  result: "Online presence from zero",
  year: "2024",
  description: "GT Testing is a construction and pest control company that had no online presence. I built their website and created a Google Business Profile to establish their digital footprint.",
  image: gtTestingImg
}, {
  title: "The Home of Accounting Consulting",
  category: "Financial Services",
  result: "Complete website redesign",
  year: "2024",
  description: "The Home of Accounting Consulting needed a modern website redesign to better reflect their professional accounting services and attract more clients.",
  image: thehacImg
}, {
  title: "Engineering CRM Dashboard",
  category: "Engineering Software",
  result: "Streamlined operations",
  year: "2024",
  description: "A comprehensive CRM dashboard built for engineering companies to manage their day-to-day activities, track projects, and monitor performance metrics.",
  image: crmDashboardImg
}, {
  title: "H & N House of Beauty",
  category: "Beauty Services",
  result: "+200% growth",
  year: "2023",
  description: "H & N House of Beauty has seen an incredible 200% increase in business since I built their website and established their Google Business Profile.",
  image: houseOfBeautyImg
}];
const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up");
        }
      });
    }, {
      threshold: 0.1
    });
    const items = sectionRef.current?.querySelectorAll(".portfolio-item");
    items?.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);
  return <section id="portfolio" ref={sectionRef} className="py-32 px-6 bg-white border-t border-black/10">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="space-y-6 animate-slide-up">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
            Featured Work
          </h2>
          <p className="text-xl md:text-2xl text-secondary max-w-2xl">
            Real projects, real results for businesses worldwide
          </p>
        </div>

        {/* Projects grid */}
        <div className="space-y-16">
          {projects.map((project, index) => <div key={project.title} className="portfolio-item opacity-0 group cursor-pointer border-t border-black/10 pt-8" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} onClick={() => setSelectedProject(project)} style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Project number and year */}
                <div className="md:col-span-2">
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-secondary/30 group-hover:text-foreground transition-colors duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    
                  </div>
                </div>

                {/* Title and category */}
                <div className="md:col-span-6 space-y-3">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight group-hover:tracking-tighter transition-all duration-500">
                    {project.title}
                  </h3>
                  <p className="text-lg text-secondary">{project.category}</p>
                </div>

                {/* Result badge */}
                <div className="md:col-span-4 flex justify-end">
                  <div className="inline-block">
                    <div className={`px-8 py-4 border-2 border-black transition-all duration-500 ${hoveredIndex === index ? "bg-black text-white scale-105" : "bg-white text-black"}`}>
                      <span className="text-lg font-semibold">{project.result}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanding line on hover */}
              <div className="mt-8">
                <div className="h-px bg-black origin-left transition-all duration-700" style={{
              transform: hoveredIndex === index ? "scaleX(1)" : "scaleX(0)"
            }}></div>
              </div>
            </div>)}
        </div>
      </div>

      {/* Project Details Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={open => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProject && <div className="animate-fade-in space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
                  <span className="text-sm text-secondary">{selectedProject.year}</span>
                </div>
                <p className="text-xl text-secondary">{selectedProject.category}</p>
              </div>
              <p className="text-lg leading-relaxed">{selectedProject.description}</p>
              <div className="pt-2">
                <div className="inline-block px-6 py-3 bg-black text-white font-semibold">
                  {selectedProject.result}
                </div>
              </div>
            </div>}
        </DialogContent>
      </Dialog>
    </section>;
};
export default Portfolio;