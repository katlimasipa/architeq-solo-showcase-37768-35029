import { Instagram } from "lucide-react";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-black/10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left space-y-3">
            <p className="text-secondary">
              © 2025 Architeq Web Agency
            </p>
            <a 
              href="mailto:architeqwebagency@gmail.com"
              className="text-foreground font-medium hover:opacity-70 transition-opacity block"
            >
              architeqwebagency@gmail.com
            </a>
            <div className="flex flex-col gap-2 justify-center md:justify-start">
              <a 
                href="https://wa.me/27694900189"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:opacity-70 transition-opacity flex items-center gap-2 justify-center md:justify-start"
              >
                <MessageCircle className="w-5 h-5 text-foreground" />
                <span className="font-medium">069 490 0189</span>
              </a>
              <a 
                href="https://www.instagram.com/architeqwebagency/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:opacity-70 transition-opacity flex items-center gap-2 justify-center md:justify-start"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-foreground" />
                <span className="font-medium">@architeqwebagency</span>
              </a>
            </div>
          </div>
          <p className="text-foreground font-medium text-center md:text-right">
            Built by Katlego Masipa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
