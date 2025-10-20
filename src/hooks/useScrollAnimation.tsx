import { useEffect, useRef } from "react";

type AnimationType = 
  | "fade-in" 
  | "slide-up" 
  | "slide-left" 
  | "slide-right" 
  | "scale-in"
  | "rotate-in"
  | "blur-in";

interface UseScrollAnimationOptions {
  threshold?: number;
  delay?: number;
  animationType?: AnimationType;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, delay = 0, animationType = "fade-in" } = options;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const animationClasses = {
      "fade-in": "opacity-0 animate-fade-in",
      "slide-up": "opacity-0 translate-y-20 animate-slide-up",
      "slide-left": "opacity-0 -translate-x-20 animate-slide-in-left",
      "slide-right": "opacity-0 translate-x-20 animate-slide-in-right",
      "scale-in": "opacity-0 scale-95 animate-scale-in",
      "rotate-in": "opacity-0 rotate-12 animate-fade-in",
      "blur-in": "opacity-0 blur-sm animate-fade-in",
    };

    // Set initial state
    element.style.transitionDelay = `${delay}ms`;
    element.className += ` ${animationClasses[animationType]}`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove("opacity-0", "translate-y-20", "-translate-x-20", "translate-x-20", "scale-95", "rotate-12", "blur-sm");
            }, delay);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, delay, animationType]);

  return ref;
};
