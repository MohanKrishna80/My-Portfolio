import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Contact = () => {
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
    <section ref={sectionRef} id="contact" className="contact-section">
      <h3 className="contact-title">Let's Connect</h3>

      <div className="icons-wrapper">
        <div className="icon left">
          <a
            href="https://www.linkedin.com/in/mohan-krishna80/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={40} />
          </a>
        </div>

        <div className="icon bottom">
          <a
            href="https://github.com/MohanKrishna80/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={40} />
          </a>
        </div>

        <div className="icon top">
          <a href="mailto:mohankrishnamohankrishna28@gmail.com">
            <Mail size={40} />
          </a>
        </div>

        <div className="icon right">
          <a href="tel:+919553391580">
            <Phone size={40} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
