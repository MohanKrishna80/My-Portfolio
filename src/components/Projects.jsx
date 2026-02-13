import { useEffect, useRef } from "react";

const Projects = ({ projects }) => {
  const sectionRef = useRef(null);

  /* Scroll Trigger Animation */
  useEffect(() => {
    const section = sectionRef.current;

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
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="projects-animate py-28 px-6 max-w-7xl mx-auto"
    >
      <h3 className="text-4xl font-bold text-center mb-20">
        Featured Projects
      </h3>

      <div className="grid md:grid-cols-3 gap-12">
        {projects.map((project, index) => {
          const direction = index % 2 === 0 ? "project-left" : "project-right";

          return (
            <div
              key={index}
              className={`project-card ${direction}
              p-10 rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-xl
              border border-black/10 dark:border-white/10
              hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20
              hover:scale-[1.02] transition`}
            >
              <h4 className="text-2xl font-semibold mb-6">
                {project.title}
              </h4>

              <p className="mb-8 text-gray-700 dark:text-gray-300">
                {project.desc}
              </p>

              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded-xl text-white bg-purple-600 hover:bg-purple-500 transition"
                >
                  Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded-xl border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
