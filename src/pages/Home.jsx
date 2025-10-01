import { useNavigate } from "react-router-dom";
import profileImage from "../assets/mohan2.jpg";


export default function Home() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="relative min-h-screen flex flex-col md:flex-row items-center px-6 md:px-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">

      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Text Section */}
      <div className="md:w-1/2 z-10 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-800">
          Hi, I'm{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Mohan Krishna
          </span>
        </h1>

        {/* 👇 Animated Typing Text */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
          Front-End Developer
        </h2>

        <p className="max-w-lg text-lg mb-8 text-gray-600">
          I build responsive, interactive, and user-friendly web applications using React and modern web technologies.
        </p>

        <button
          onClick={handleContactClick}
          className="relative bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 after:content-[''] after:absolute after:inset-0 after:rounded-xl after:shadow-[0_0_20px_rgba(0,123,255,0.5)] after:opacity-0 hover:after:opacity-100 hover:after:transition-opacity"
        >
          Contact Me
        </button>
      </div>

      {/* Profile Image */}
      <div className="md:w-1/2 flex justify-center mt-12 md:mt-0 z-10">
        <img
          src={profileImage}
          alt="Mohan Krishna"
          className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full shadow-2xl hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}
