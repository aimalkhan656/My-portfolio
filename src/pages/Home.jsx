// pages/Home.jsx
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import * as THREE from 'three';

function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Software Engineer | Frontend Developer | Problem Solver";
  const globeContainer = useRef(null);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 50);
    return () => clearInterval(typing);
  }, []);

  // 3D Globe Setup
  useEffect(() => {
    if (!globeContainer.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    
    const container = globeContainer.current;
    const size = container.clientWidth || 300;
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create Globe
    const geometry = new THREE.SphereGeometry(1.2, 64, 64);
    
    // Create canvas texture for globe
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Draw globe background
    const gradient = ctx.createRadialGradient(512, 256, 0, 512, 256, 512);
    gradient.addColorStop(0, '#1a3a3a');
    gradient.addColorStop(0.5, '#0d2b2b');
    gradient.addColorStop(1, '#061515');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1024, 512);

    // Draw continents/land masses with glow
    const continents = [
      { x: 400, y: 200, w: 120, h: 80 },
      { x: 550, y: 180, w: 80, h: 100 },
      { x: 700, y: 220, w: 60, h: 60 },
      { x: 300, y: 300, w: 100, h: 60 },
      { x: 500, y: 320, w: 150, h: 80 },
      { x: 200, y: 150, w: 100, h: 70 },
      { x: 150, y: 250, w: 80, h: 100 },
    ];

    continents.forEach(cont => {
      // Glow
      const grad = ctx.createRadialGradient(
        cont.x + cont.w/2, cont.y + cont.h/2, 0,
        cont.x + cont.w/2, cont.y + cont.h/2, Math.max(cont.w, cont.h)
      );
      grad.addColorStop(0, 'rgba(52, 211, 153, 0.3)');
      grad.addColorStop(1, 'rgba(52, 211, 153, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(cont.x - 50, cont.y - 50, cont.w + 100, cont.h + 100);

      // Land
      ctx.fillStyle = 'rgba(52, 211, 153, 0.6)';
      ctx.shadowColor = 'rgba(52, 211, 153, 0.5)';
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.ellipse(cont.x, cont.y, cont.w/2, cont.h/2, 0, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw grid lines
    ctx.strokeStyle = 'rgba(52, 211, 153, 0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 18; i++) {
      ctx.beginPath();
      ctx.moveTo(i * 60, 0);
      ctx.lineTo(i * 60, 512);
      ctx.stroke();
    }
    for (let i = 0; i < 9; i++) {
      ctx.beginPath();
      ctx.moveTo(0, i * 64);
      ctx.lineTo(1024, i * 64);
      ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.MeshPhongMaterial({
      map: texture,
      transparent: true,
      opacity: 0.9,
      shininess: 30,
      emissive: new THREE.Color(0x34d399),
      emissiveIntensity: 0.05,
    });

    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Atmosphere glow
    const glowGeometry = new THREE.SphereGeometry(1.35, 64, 64);
    const glowMaterial = new THREE.MeshPhongMaterial({
      color: 0x34d399,
      transparent: true,
      opacity: 0.08,
      side: THREE.BackSide,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);

    // Add outer ring
    const ringGeometry = new THREE.TorusGeometry(1.6, 0.02, 16, 100);
    const ringMaterial = new THREE.MeshPhongMaterial({
      color: 0x34d399,
      transparent: true,
      opacity: 0.3,
      emissive: new THREE.Color(0x34d399),
      emissiveIntensity: 0.1,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 3;
    scene.add(ring);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(1.7, 0.015, 16, 100),
      new THREE.MeshPhongMaterial({
        color: 0x22d3ee,
        transparent: true,
        opacity: 0.2,
        emissive: new THREE.Color(0x22d3ee),
        emissiveIntensity: 0.1,
      })
    );
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 6;
    scene.add(ring2);

    // Particles/stars
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 2000;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 100;
    }
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starsMaterial = new THREE.PointsMaterial({
      color: 0x34d399,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Floating skill tags around globe
    const skillTags = ['React', 'Python', 'JavaScript', 'C#', 'Java', 'Tailwind', 'Django', 'HTML', 'CSS', 'Git'];
    const tagGroup = new THREE.Group();
    
    skillTags.forEach((skill, index) => {
      const phi = (index / skillTags.length) * Math.PI * 2;
      const theta = Math.random() * Math.PI;
      const radius = 2.2;
      
      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);
      
      // Create a small sphere for each skill
      const sphereGeo = new THREE.SphereGeometry(0.06, 8, 8);
      const sphereMat = new THREE.MeshPhongMaterial({
        color: 0x34d399,
        emissive: 0x34d399,
        emissiveIntensity: 0.5,
      });
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      sphere.position.set(x, y, z);
      
      // Add connecting line
      const lineGeo = new THREE.BufferGeometry();
      const linePositions = new Float32Array([
        0, 0, 0,
        x * 0.8, y * 0.8, z * 0.8
      ]);
      lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x34d399,
        transparent: true,
        opacity: 0.2,
      });
      const line = new THREE.Line(lineGeo, lineMat);
      tagGroup.add(line);
      tagGroup.add(sphere);
    });
    
    scene.add(tagGroup);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0x34d399, 0.5);
    directionalLight2.position.set(-5, -3, -5);
    scene.add(directionalLight2);

    camera.position.z = 3.5;

    // Animation
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width - 0.5;
      mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    };

    container.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      targetRotX += (mouseY * 0.5 - targetRotX) * 0.05;
      targetRotY += (mouseX * 0.5 - targetRotY) * 0.05;

      globe.rotation.x += 0.002 + targetRotX * 0.002;
      globe.rotation.y += 0.005 + targetRotY * 0.002;
      
      glow.rotation.x = globe.rotation.x;
      glow.rotation.y = globe.rotation.y;
      
      ring.rotation.z += 0.003;
      ring2.rotation.z += 0.002;
      
      tagGroup.rotation.x = globe.rotation.x;
      tagGroup.rotation.y = globe.rotation.y;

      stars.rotation.x += 0.0001;
      stars.rotation.y += 0.0002;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      const newSize = container.clientWidth || 300;
      renderer.setSize(newSize, newSize);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const stats = [
    { label: "Projects", value: "5+", icon: "fa-code", color: "emerald" },
    { label: "Internships", value: "1", icon: "fa-briefcase", color: "blue" },
    { label: "CGPA", value: "3.4", icon: "fa-graduation-cap", color: "purple" },
    { label: "Awards", value: "2", icon: "fa-trophy", color: "yellow" },
  ];

  const skills = [
    { name: "React", icon: "fa-react", color: "text-cyan-400" },
    { name: "Tailwind", icon: "fa-css3-alt", color: "text-blue-400" },
    { name: "JavaScript", icon: "fa-js", color: "text-yellow-400" },
    { name: "C#", icon: "fa-code", color: "text-purple-400" },
    { name: "Java", icon: "fa-coffee", color: "text-red-400" },
    { name: "Python", icon: "fa-python", color: "text-green-400" },
    { name: "Django", icon: "fa-server", color: "text-emerald-400" },
    { name: "HTML5", icon: "fa-html5", color: "text-orange-400" },
    { name: "CSS3", icon: "fa-css3", color: "text-blue-300" },
    { name: "Git", icon: "fa-git-alt", color: "text-orange-500" },
    { name: "GitHub", icon: "fa-github", color: "text-white" },
    { name: "Figma", icon: "fa-figma", color: "text-purple-400" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-6xl mx-auto px-6 py-20 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
           
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
                Hi, I'm <span className="text-emerald-400">Aimal</span>
              </h1>
              <p className="text-gray-400 text-lg mb-4 h-8">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>
              <p className="text-gray-400 max-w-lg leading-relaxed">
                I'm a passionate software engineering student building innovative solutions and crafting beautiful digital experiences.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Link
                  to="/projects"
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/25"
                >
                  View My Work
                </Link>
                <Link
                  to="/contact"
                  className="border border-slate-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-slate-800 hover:border-emerald-400"
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                {/* 3D Globe */}
                <div 
                  ref={globeContainer} 
                  className="w-72 h-72 md:w-80 md:h-80 cursor-pointer"
                  style={{ touchAction: 'none' }}
                ></div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-slate-800 rounded-xl p-3 border border-slate-700 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                    <span className="text-xs text-gray-300">Open to work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-400/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <i className={`fas ${stat.icon} text-emerald-400 text-xl`}></i>
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <i className="fas fa-code text-emerald-400"></i>
          Tech Stack
          <span className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent"></span>
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1"
            >
              <i className={`fab ${skill.icon} ${skill.color} text-3xl mb-2 group-hover:scale-110 transition-transform duration-300`}></i>
              <p className="text-gray-300 text-xs">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;