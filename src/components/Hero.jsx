import { useEffect, useRef, useState } from "react";
import profileImg from "../assets/mohan2.jpg";
import resume from "../assets/mohan_resume (5).pdf";

const Hero = () => {
  const heroRef = useRef(null);
  const [text, setText] = useState("");
  const fullText = "Frontend Developer";

  /* ===== Typing Animation ===== */
  useEffect(() => {
    let index = 0;
    let isDeleting = false;

    const type = () => {
      if (!isDeleting) {
        setText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) {
          setTimeout(() => (isDeleting = true), 1200);
        }
      } else {
        setText(fullText.slice(0, index - 1));
        index--;
        if (index === 0) isDeleting = false;
      }
    };

    const interval = setInterval(type, 100);
    return () => clearInterval(interval);
  }, []);

  /* ===== Animation ===== */
  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;

    requestAnimationFrame(() => {
      section.classList.add("show");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("show");
          } else {
            section.classList.remove("show");
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-animate py-24 px-6 max-w-7xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="hero-left text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Building{" "}
            <span className="text-purple-600 dark:text-purple-400">
              High-Performance
            </span>
            <br /> Frontend Applications
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            {text}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-8">
            I build scalable, modern and beautiful web applications using
            React and Tailwind CSS with strong focus on performance and UI design.
          </p>

          {/* ✅ BUTTONS ADDED HERE */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            
            <a
              href={resume}
              download
              className="bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-purple-600 text-purple-600 px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-purple-50 hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right flex justify-center">
          <div className="relative glow-wrapper">
            <img
              src={profileImg}
              alt="Mohan Krishna"
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full relative z-10"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;