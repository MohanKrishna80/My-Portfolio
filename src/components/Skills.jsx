import { useEffect, useRef } from "react";

const Skills = ({ skills }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

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
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="skills-animate py-28 px-6 max-w-6xl mx-auto text-center"
    >
      <h3 className="text-4xl font-bold mb-16">Technical Skills</h3>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-box p-8 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-xl
            border border-black/10 dark:border-white/10 transition"
          >
            {/* Icon + Name */}
            <div className="flex items-center justify-center gap-3 mb-2 text-xl">
              <span>{skill.icon}</span>
              <h4 className="font-semibold">{skill.name}</h4>
            </div>

            {/* Progress Bar */}
            <div className="skill-progress">
              <div
                className="skill-progress-fill"
                style={{ "--level": skill.level }}
              ></div>
            </div>

            <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
              {skill.level}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
