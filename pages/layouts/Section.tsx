// layouts/Section.tsx
import React, { useEffect, useState } from "react";

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(id);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [id]);

  return (
    <section
      id={id}
      className={`min-h-screen flex items-center justify-center transition-opacity duration-1000 ${isVisible ? "opacity-100 animate-fadeIn" : "opacity-0"}`}
    >
      <div className="max-w-4xl w-full">
        <div>{children}</div>
      </div>
    </section>
  );
};

export default Section;
