// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="bg-slate-800/50 border-t border-slate-700/50 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-slate-900 font-bold text-xs">
              AM
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Aimal Mazhar
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/aimalkhan656"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 transform"
            >
              <i className="fab fa-github text-lg"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/aimal-mazhar-7768a0319"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 transform"
            >
              <i className="fab fa-linkedin text-lg"></i>
            </a>    
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-700/30 text-center">
          <p className="text-gray-500 text-xs">
            Built with <i className="fas fa-heart text-emerald-400"></i> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;