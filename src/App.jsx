import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { skills, projects } from "./data/data";

function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <div
      className="
      min-h-screen w-full overflow-x-hidden
      
      bg-gradient-to-r 
      from-indigo-100 via-white to-purple-100
      
      dark:from-indigo-900 dark:via-black dark:to-purple-900
      
      bg-[length:200%_200%]
      animate-gradient
      
      text-gray-900 dark:text-white
      transition-all duration-500
    "
    >
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
