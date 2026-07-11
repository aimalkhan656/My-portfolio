// components/Header.jsx
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) =>
    location.pathname === path
      ? "text-emerald-400"
      : "text-gray-300 hover:text-emerald-400";

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? "bg-slate-900/95 backdrop-blur-md border-b border-emerald-500/20 shadow-2xl" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-11 h-11 rounded-full bg-emerald-500 flex items-center justify-center text-slate-900 font-bold text-lg shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
              AM
            </div>
            <div className="absolute -inset-1 rounded-full bg-emerald-400/20 blur-xl animate-pulse group-hover:animate-none"></div>
          </div>
          <div>
            <span className="text-xl font-bold text-white tracking-tight">
              Aimal<span className="text-emerald-400">.</span>
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className={`${isActive("/")} transition duration-300 relative group`}>
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/about" className={`${isActive("/about")} transition duration-300 relative group`}>
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/projects" className={`${isActive("/projects")} transition duration-300 relative group`}>
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/contact" className={`${isActive("/contact")} transition duration-300 relative group`}>
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full"></span>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
          >
            Hire Me
          </Link>
          <button className="md:hidden text-white text-2xl">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;