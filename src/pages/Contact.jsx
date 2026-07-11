// pages/Contact.jsx
function Contact() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-emerald-400">Connect</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a question, project idea, or just want to say hi? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8">
            <h3 className="text-white font-bold text-lg mb-6 text-center">Contact Info</h3>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl hover:bg-slate-900/70 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-400/10 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-emerald-400 text-xl"></i>
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-xs">Email</p>
                  <a 
                    href="mailto:aimalmazhar526@gmail.com"
                    className="text-white text-sm font-medium hover:text-emerald-400 transition-colors"
                  >
                    aimalmazhar526@gmail.com
                  </a>
                </div>
                <button
                  onClick={() => window.location.href = "mailto:aimalmazhar526@gmail.com"}
                  className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium"
                >
                  Send Email →
                </button>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl hover:bg-slate-900/70 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-green-400/10 flex items-center justify-center flex-shrink-0">
                  <i className="fab fa-whatsapp text-green-400 text-xl"></i>
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-xs">WhatsApp</p>
                  <a 
                    href="https://wa.me/923314056418" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white text-sm font-medium hover:text-green-400 transition-colors"
                  >
                    0331-4056418
                  </a>
                </div>
                <a
                  href="https://wa.me/923314056418"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors text-sm font-medium"
                >
                  Chat Now →
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl hover:bg-slate-900/70 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-purple-400/10 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-purple-400 text-xl"></i>
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-xs">Location</p>
                  <p className="text-white text-sm font-medium">Karachi, Pakistan</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Karachi,Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                >
                  View Map →
                </a>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-slate-700/50">
                <p className="text-gray-400 text-xs text-center mb-4">Connect with me on social media</p>
                <div className="flex justify-center gap-6">
                  <a 
                    href="https://github.com/aimalkhan656" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <i className="fab fa-github text-2xl"></i>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/aimal-mazhar-7768a0319" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <i className="fab fa-linkedin text-2xl"></i>
                  </a>
                  <a 
                    href="https://twitter.com/yourhandle" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <i className="fab fa-twitter text-2xl"></i>
                  </a>
                  <a 
                    href="https://instagram.com/yourhandle" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    <i className="fab fa-instagram text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;