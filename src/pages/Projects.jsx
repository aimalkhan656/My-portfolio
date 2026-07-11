// pages/Projects.js
import { useState } from "react";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Employee Management System",
      description: "A comprehensive system for managing employee records with full CRUD operations, built with C# and SQL Server.",
      longDescription: "This project was developed as a desktop application using C# Windows Forms and SQL Server database. It allows administrators to add, update, delete, and view employee records with a user-friendly interface. The system includes features like employee search, department management, and salary tracking.",
      tech: ["C#", "SQL Server", "Windows Forms", "ADO.NET"],
      icon: "fa-users-cog",
      color: "bg-emerald-500",
      features: [
        "Add new employee records",
        "Update existing employee information",
        "Delete employee records",
        "Search employees by name or department",
        "Generate employee reports"
      ],
      github: "https://github.com/aimalkhan656/EmployeeManagementSystem",
      demo: "https://demo.com",
    },
    {
      id: 2,
      title: "Business Idea Generator",
      description: "AI-powered web application that generates innovative business ideas using OpenAI API.",
      longDescription: "A modern web application that leverages the OpenAI API to generate unique business ideas based on user preferences. Users can specify their interests, industry, and target audience, and the AI generates tailored business concepts with market analysis and implementation suggestions.",
      tech: ["React", "Python", "OpenAI API", "Tailwind", "Flask"],
      icon: "fa-lightbulb",
      color: "bg-yellow-500",
      features: [
        "AI-powered idea generation",
        "Customizable parameters",
        "Save favorite ideas",
        "Export ideas as PDF",
        "Industry-specific suggestions"
      ],
      github: "https://github.com/aimalkhan656",
      demo: "https://demo.com",
    },
    {
      id: 3,
      title: "My Portfolio",
      description: "Modern, responsive portfolio website with dark theme, animations, and interactive components.",
      longDescription: "A professional portfolio website built with React and Tailwind CSS featuring a dark theme, smooth animations, and interactive components. The dashboard includes sections for projects, certificates, skills, and contact with a modern, clean design that showcases my work and achievements.",
      tech: ["React", "Tailwind", "React Router", "Framer Motion"],
      icon: "fa-portrait",
      color: "bg-purple-500",
      features: [
        "Fully responsive design",
        "Dark theme with gradients",
        "Interactive components",
        "Certificate viewer",
        "Project details modals"
      ],
      github: "https://github.com/aimalkhan656/EmployeeManagementSystem",
      demo: "https://demo.com",
    },
    {
          
      id: 4,
      title: "Medical Tracker System",
      description: "A comprehensive C# desktop application for managing patient records, appointments, and medical history efficiently.",
      longDescription: "Medical Tracker is a complete patient management system developed using C# and SQL Server. It helps healthcare providers track patient information, schedule appointments, manage medical histories, and generate reports.",
      tech: ["C#", "SQL Server", "Windows Forms", "Entity Framework", "LINQ"],
      icon: "fa-heartbeat",
      color: "bg-red-500",
      features: [
        "Patient registration and record management",
        "Appointment scheduling and tracking",
        "Medical history and prescription records",
        "Doctor and staff management",
        "Reports and analytics dashboard",
        "Secure login and role-based access"
      ],
      github: "https://github.com/aimalkhan656/medical-tracker",
      demo: "https://demo.com",
    },
  ];

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
        <div className="bg-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl" onClick={(e) => e.stopPropagation()}>
          <div className="sticky top-0 bg-slate-800 z-10 p-6 border-b border-slate-700 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-2xl ${project.color} flex items-center justify-center text-slate-900 text-xl`}>
                <i className={`fas ${project.icon}`}></i>
              </div>
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
              <i className="fas fa-times text-2xl"></i>
            </button>
          </div>
          <div className="p-6">
            <div className="bg-slate-700/30 rounded-2xl p-6 mb-6">
              <h4 className="text-emerald-400 font-semibold text-sm mb-2">Project Overview</h4>
              <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-white font-semibold text-sm mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-slate-700/50 text-gray-300 px-3 py-1.5 rounded-lg text-xs border border-slate-600/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-white font-semibold text-sm mb-3">Key Features</h4>
              <div className="grid md:grid-cols-2 gap-2">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 bg-slate-700/30 rounded-xl p-2.5">
                    <i className="fas fa-check-circle text-emerald-400 text-xs"></i>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 bg-slate-700/50 hover:bg-slate-700 text-white px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 text-center">
                <i className="fab fa-github mr-2"></i> View Code
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-slate-900 px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 text-center">
                <i className="fas fa-external-link-alt mr-2"></i> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-emerald-400">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Click "View Details" to learn more about each project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 overflow-hidden hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2"
            >
              <div className={`h-2 ${project.color}`}></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl ${project.color} flex items-center justify-center text-slate-900 text-2xl shadow-lg`}>
                    <i className={`fas ${project.icon}`}></i>
                  </div>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-400 transition-colors">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-400 transition-colors">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-xs border border-slate-600/50">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-gray-500 text-xs flex items-center">+{project.tech.length - 3} more</span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-slate-700/50 hover:bg-slate-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-emerald-500 group-hover:text-slate-900"
                >
                  <i className="fas fa-info-circle"></i>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </div>
  );
}

export default Projects;