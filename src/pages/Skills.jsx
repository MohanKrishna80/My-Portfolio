import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaJsSquare } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML5 & CSS3", icon: <><FaHtml5 className="text-orange-500 w-10 h-10" /> <FaCss3Alt className="text-blue-600 w-10 h-10 ml-2" /></> },
    { name: "JavaScript (ES6+)", icon: <FaJsSquare className="text-yellow-400 w-10 h-10" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400 w-10 h-10" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-600 w-10 h-10" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 w-10 h-10" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500 w-10 h-10" /> },
  ];

  return (
    <div className="py-20 px-6 bg-blue-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:scale-105 transition flex flex-col items-center justify-center gap-4"
          >
            <div className="flex items-center justify-center gap-2">
              {skill.icon}
            </div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
