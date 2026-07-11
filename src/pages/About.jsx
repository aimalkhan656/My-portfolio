// pages/About.jsx
import { useState } from "react";

function About() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "DecodeLabs Virtual Internship",
      org: "Frontend Development",
      date: "May-June 2026",
      description: "Completed a 1-month virtual internship focusing on real-world frontend development projects, collaborative tasks, and hands-on problem solving.",
      credential: "FD0626530",
      image: "/images/Decodelabs.jpeg",
    },
    {
      id: 2,
      title: "Techathon 2.0 Winner - 60,000 GBP Funding",
      org: "Pitching Competition Winner",
      date: "2026",
      description: "Won the pitching competition at Techathon 2.0, securing 60,000 GBP in-kind funding and physical space at BIC-BUKC incubation center. The award includes mentorship, resources, and incubation support for business development.",
      credential: "TEAM-SAS Pitchworks",
      image: "/images/SAS.jpeg",
      prize: "60,000 GBP",
      incubation: "BIC-BUKC Space",
    },
    {
      id: 3,
      title: "Idea Rethinking",
      org: "Techathon 2.0 Participation",
      date: "2026",
      description: "Active participation in Idea Rethinking session at Techathon 2.0, demonstrating creative problem-solving and collaboration skills.",
      credential: "PARTICIPANT",
      image: "/images/Techathon.jpeg",
    },
  ];

  const CertificateModal = ({ cert, onClose }) => {
    if (!cert) return null;
    
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
        <div className="bg-white rounded-none max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
          {/* Actual Certificate Design */}
          <div className="relative bg-white p-8 md:p-12">
            {/* Certificate Border */}
            <div className="border-4 border-double border-amber-800/60 p-6 md:p-10 relative">
              {/* Inner Border */}
              <div className="border border-amber-800/30 p-4 md:p-6">
                {/* Decorative Corner Lines */}
                <div className="absolute top-2 left-2 w-8 h-8 border-t-4 border-l-4 border-amber-700/30"></div>
                <div className="absolute top-2 right-2 w-8 h-8 border-t-4 border-r-4 border-amber-700/30"></div>
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-4 border-l-4 border-amber-700/30"></div>
                <div className="absolute bottom-2 right-2 w-8 h-8 border-b-4 border-r-4 border-amber-700/30"></div>

                <div className="text-center">
                  {/* Organization Logo/Header */}
                  <div className="mb-4">
                    {cert.id === 2 ? (
                      <>
                        <p className="text-xs text-gray-500 tracking-[0.2em] uppercase mb-1">Techathon 2.0</p>
                        <p className="text-[10px] text-gray-400 tracking-[0.15em] uppercase">Pitching Competition</p>
                        <div className="flex justify-center gap-4 mt-2">
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-semibold border border-yellow-300">
                            🏆 60,000 GBP Funding
                          </span>
                          <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold border border-green-300">
                            🏢 BIC-BUKC Space
                          </span>
                        </div>
                      </>
                    ) : cert.id === 1 ? (
                      <>
                        <p className="text-xs text-gray-500 tracking-[0.2em] uppercase mb-1">DecodeLabs</p>
                        <p className="text-[10px] text-gray-400 tracking-[0.15em] uppercase">Virtual Internship Program</p>
                      </>
                    ) : (
                      <>
                        <p className="text-xs text-gray-500 tracking-[0.2em] uppercase mb-1">Techathon 2.0</p>
                        <p className="text-[10px] text-gray-400 tracking-[0.15em] uppercase">Participation Certificate</p>
                      </>
                    )}
                  </div>

                  {/* Decorative Line */}
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-px w-12 bg-amber-800/20"></div>
                    <span className="text-amber-700/30 text-xs">✦</span>
                    <div className="h-px w-12 bg-amber-800/20"></div>
                  </div>

                  {/* Main Title */}
                  <h2 className="text-2xl md:text-3xl font-serif text-amber-900 tracking-wider mb-2">
                    {cert.id === 2 ? "🏆 Winner's Certificate" : "Certificate of Completion"}
                  </h2>
                  <p className="text-sm text-gray-600 tracking-widest uppercase border-t border-b border-amber-800/20 py-2 inline-block px-8">
                    {cert.title}
                  </p>

                  {/* Recipient Name */}
                  <div className="my-6">
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">This Certificate Is Proudly Presented To</p>
                    <h3 className="text-3xl md:text-4xl font-serif text-amber-900 tracking-wider">
                      Aimal Mazhar
                    </h3>
                    <p className="text-sm text-amber-700/70 mt-1">{cert.org}</p>
                    {cert.id === 2 && (
                      <div className="mt-3 flex justify-center gap-4 flex-wrap">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-bold">
                          💰 {cert.prize} Funding
                        </span>
                        <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-4 py-1.5 rounded-full text-sm font-bold">
                          🏢 {cert.incubation}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Certificate Image */}
                  {cert.image && (
                    <div className="my-6">
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full max-h-[400px] object-contain rounded-lg shadow-lg border border-gray-200"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWRlZGVkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIiBmaWxsPSIjOTk5Ij5JbWFnZSBub3QgZm91bmQ8L3RleHQ+PC9zdmc+';
                          e.target.alt = 'Image not found';
                        }}
                      />
                    </div>
                  )}

                  {/* Description */}
                  <div className="max-w-2xl mx-auto my-6">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto my-6 bg-gray-50 p-4">
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-wider">Duration</p>
                      <p className="text-sm font-medium text-gray-700">{cert.date}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-wider">Date of Issue</p>
                      <p className="text-sm font-medium text-gray-700">June 16, 2026</p>
                    </div>
                    {cert.id === 2 && (
                      <div className="col-span-2">
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider">Award</p>
                        <p className="text-sm font-bold text-yellow-700">60,000 GBP In-Kind Funding + Incubation Space</p>
                      </div>
                    )}
                  </div>

                  {/* Footer with Seal and Signature */}
                  <div className="flex flex-col md:flex-row items-center justify-between mt-8 pt-6 border-t border-amber-800/20">
                    <div className="text-center md:text-left">
                      <div className="w-12 h-12 rounded-full bg-amber-100 border-2 border-amber-700/30 flex items-center justify-center mx-auto md:mx-0">
                        <span className="text-amber-700 text-xs font-serif">SEAL</span>
                      </div>
                      <p className="text-[10px] text-gray-400 mt-1">Official Mark</p>
                    </div>

                    <div className="text-center mt-4 md:mt-0">
                      <div className="w-32 h-px bg-gray-300 mx-auto"></div>
                      <p className="text-xs text-gray-500 mt-1">Authorized Signatory</p>
                      <p className="text-[10px] text-gray-400">
                        {cert.id === 2 ? "Techathon 2.0 Committee" : "DecodeLabs"}
                      </p>
                    </div>

                    <div className="text-center mt-4 md:mt-0">
                      <div className="flex items-center gap-2 justify-center">
                        <span className="text-amber-700 text-xs">✦</span>
                        <span className="text-[10px] text-gray-400 tracking-widest uppercase">
                          {cert.id === 2 ? "Innovation • Excellence • Impact" : "Excellence • Integrity • Growth"}
                        </span>
                        <span className="text-amber-700 text-xs">✦</span>
                      </div>
                      <p className="text-[10px] text-gray-400 mt-1">Credential ID: {cert.credential}</p>
                    </div>
                  </div>

                  {/* QR Code Placeholder */}
                  <div className="mt-4 flex justify-center">
                    <div className="w-12 h-12 border border-gray-300 flex items-center justify-center">
                      <span className="text-[8px] text-gray-400">QR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <div className="bg-gray-50 p-4 flex justify-end border-t border-gray-200">
            <button 
              onClick={onClose}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded transition-colors text-sm font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Profile Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="relative">
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 p-1">
                  {/* Profile Picture - Replace the AM div with img tag */}
                  <img 
                    src="/images/profile.jpeg" 
                    alt="Aimal Mazhar"
                    className="w-full h-full rounded-2xl object-cover"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center text-6xl font-bold text-white">
                          AM
                        </div>
                      `;
                    }}
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-slate-800 rounded-full p-3 border border-emerald-500/30">
                  <i className="fas fa-check-circle text-emerald-400 text-xl"></i>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a dedicated Software Engineering student in my 4th semester at Bahria University with a
                strong academic background (CGPA: 3.4/4.0). I'm passionate about creating innovative solutions
                and building beautiful, functional web applications.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                With experience in frontend development and a strong foundation in computer science principles,
                I'm always eager to learn new technologies and take on challenging projects.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-700/30 rounded-xl p-4">
                  <p className="text-gray-400 text-xs">📧 Email</p>
                  <p className="text-white text-sm font-medium">aimalmazhar526@gmail.com</p>
                </div>
                <div className="bg-slate-700/30 rounded-xl p-4">
                  <p className="text-gray-400 text-xs">📍 Location</p>
                  <p className="text-white text-sm font-medium">Karachi, Pakistan</p>
                </div>
                <div className="bg-slate-700/30 rounded-xl p-4">
                  <p className="text-gray-400 text-xs">🎓 Education</p>
                  <p className="text-white text-sm font-medium">Bahria University</p>
                </div>
                <div className="bg-slate-700/30 rounded-xl p-4">
                  <p className="text-gray-400 text-xs">💼 Experience</p>
                  <p className="text-white text-sm font-medium">1 Internship</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-500/50 p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <i className="fas fa-certificate text-emerald-400"></i>
            Certificates & Achievements
            <span className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent"></span>
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="group bg-slate-700/30 rounded-2xl p-5 border border-slate-400/50 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-400/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-certificate text-emerald-400 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm group-hover:text-emerald-400 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-gray-400 text-xs">{cert.org}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-xs flex items-center gap-2">
                  <i className="fas fa-calendar-alt text-emerald-400"></i>
                  {cert.date}
                </p>
                {cert.id === 2 && (
                  <div className="mt-2 flex gap-2 flex-wrap">
                    <span className="bg-yellow-400/20 text-yellow-400 text-[10px] px-2 py-0.5 rounded-full border border-yellow-400/20">
                      🏆 60,000 GBP
                    </span>
                    <span className="bg-blue-400/20 text-blue-400 text-[10px] px-2 py-0.5 rounded-full border border-blue-400/20">
                      🏢 BIC-BUKC
                    </span>
                  </div>
                )}
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-emerald-400 text-xs font-mono">{cert.credential}</span>
                  <span className="text-gray-500 text-xs group-hover:text-emerald-400 transition-colors">
                    View <i className="fas fa-arrow-right ml-1"></i>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience & Education */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-500/50 p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="fas fa-briefcase text-emerald-400"></i>
              Experience
            </h3>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-emerald-400/30">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-emerald-400 rounded-full"></div>
                <p className="text-emerald-400 text-xs font-semibold">May-June 2026</p>
                <h4 className="text-white font-semibold">Frontend Developer Intern</h4>
                <p className="text-gray-400 text-sm">DecodeLabs</p>
                <p className="text-gray-500 text-xs mt-1">Virtual internship focusing on real-world projects</p>
              </div>
              <div className="relative pl-6 border-l-2 border-yellow-400/30">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-yellow-400 rounded-full"></div>
                <p className="text-yellow-400 text-xs font-semibold">2026</p>
                <h4 className="text-white font-semibold">Techathon 2.0 Winner</h4>
                <p className="text-gray-400 text-sm">Pitching Competition Champion</p>
                <p className="text-yellow-400 text-xs mt-1">🏆 60,000 GBP Funding • 🏢 BIC-BUKC Incubation Space</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-500/50 p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="fas fa-graduation-cap text-emerald-400"></i>
              Education
            </h3>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-cyan-400/30">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-cyan-400 rounded-full"></div>
                <p className="text-cyan-400 text-xs font-semibold">2024-Present</p>
                <h4 className="text-white font-semibold">B.S. Software Engineering</h4>
                <p className="text-gray-400 text-sm">Bahria University Karachi</p>
                <p className="text-gray-500 text-xs mt-1">CGPA: 3.4/4.0</p>
              </div>
              <div className="relative pl-6 border-l-2 border-cyan-400/30">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-cyan-400 rounded-full"></div>
                <p className="text-cyan-400 text-xs font-semibold">2022-2024</p>
                <h4 className="text-white font-semibold">FSc Pre-Engineering</h4>
                <p className="text-gray-400 text-sm">Grade: A+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Modal */}
        <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      </div>
    </div>
  );
}

export default About;