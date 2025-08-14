import React from 'react';
import { Heart, Code2, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Alerechi <span className="text-cyan-400">Ordu</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Senior Backend Engineer & AI Agent Integration Specialist. 
              Building scalable systems and intelligent solutions that power the future.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { icon: Github, href: 'https://github.com/Rechidesigns', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/alerechiordu/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:alerechiordu@gmail.com', label: 'Email' }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2 bg-slate-800 border border-slate-700 rounded-lg text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-110"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Backend Development</li>
              <li>API Architecture</li>
              <li>AI Integration</li>
              <li>System Design</li>
              <li>Technical Consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by Alerechi Ordu</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-800 border border-slate-700 rounded-lg text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};