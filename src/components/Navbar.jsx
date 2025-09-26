import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h2 className="text-2xl font-bold text-blue-600">MyPortfolio</h2>
        <ul className="flex gap-6">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/projects" className="hover:text-blue-600">Projects</Link></li>
          <li><Link to="/skills" className="hover:text-blue-600">Skills</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
