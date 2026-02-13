import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const section = footerRef.current;

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
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="footer-section mt-20 border-t border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left footer-content">

          {/* Brand */}
          <div className="footer-item">
            <h3 className="text-2xl font-bold mb-4">
              Mohan Krishna
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Frontend Developer building modern, scalable and
              high-performance web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-item">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <a href="#skills" className="hover:text-purple-500 transition">
                Skills
              </a>
              <a href="#projects" className="hover:text-purple-500 transition">
                Projects
              </a>
              <a href="#contact" className="hover:text-purple-500 transition">
                Contact
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="footer-item">
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-start gap-6">
              <a
                href="https://https://www.linkedin.com/in/mohan-krishna80/.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-500 transition"
              >
                <Linkedin size={24} />
              </a>

              <a
                href="https://https://github.com/MohanKrishna80.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-500 transition"
              >
                <Github size={24} />
              </a>

              <a
                href="mohankrishnamohankrishna28@gmail.com"
                className="hover:text-purple-500 transition"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-black/10 dark:border-white/10 text-center text-sm text-gray-600 dark:text-gray-400 footer-bottom">
          © {new Date().getFullYear()} Mohan Krishna. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
