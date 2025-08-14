import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const specialties = [
  "C# Developer",
  "Python Engineer", 
  "AI Agent Integrator",
  "Backend Architect",
  "API Specialist"
];

export const Hero: React.FC = () => {
  const [currentSpecialty, setCurrentSpecialty] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const specialty = specialties[currentSpecialty];
    let timeouts: NodeJS.Timeout[] = [];

    if (isTyping) {
      specialty.split('').forEach((char, i) => {
        const timeout = setTimeout(() => {
          setDisplayText(specialty.substring(0, i + 1));
          if (i === specialty.length - 1) {
            setTimeout(() => setIsTyping(false), 1500);
          }
        }, i * 100);
        timeouts.push(timeout);
      });
    } else {
      const timeout = setTimeout(() => {
        specialty.split('').reverse().forEach((_, i) => {
          const deleteTimeout = setTimeout(() => {
            setDisplayText(specialty.substring(0, specialty.length - i - 1));
            if (i === specialty.length - 1) {
              setCurrentSpecialty((prev) => (prev + 1) % specialties.length);
              setIsTyping(true);
            }
          }, i * 50);
          timeouts.push(deleteTimeout);
        });
      }, 1500);
      timeouts.push(timeout);
    }

    return () => timeouts.forEach(clearTimeout);
  }, [currentSpecialty, isTyping]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Alerechi Ordu
            </span>
          </h1>
          
          <div className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4 h-10">
            Senior <span className="text-cyan-400 font-semibold">{displayText}</span>
            <span className="animate-pulse">|</span>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Engineering Scalable Systems & Intelligent AI Integrations
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="#projects" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <span className="flex items-center gap-2">
                View My Work
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </a>
            
            <a href="#contact" className="group border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Hire Me
              </span>
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "https://github.com/Rechidesigns", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/alerechiordu/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:alerechiordu@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </div>
    </section>
  );
};