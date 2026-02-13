import { useEffect, useRef, useState } from "react";
import profileImg from "../assets/mohan2.jpg";

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

  /* ===== Load + Scroll Re-trigger Animation ===== */
  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;

    // Run animation on initial load
    requestAnimationFrame(() => {
      section.classList.add("show");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("show");
          } else {
            // remove so animation replays when revisiting
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

        {/* LEFT CONTENT (slides from left) */}
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
