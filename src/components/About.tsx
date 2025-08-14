import React from 'react';
import { Code2, Brain, Cloud, Database, Award, Users } from 'lucide-react';

const skills = [
  { name: 'C# & .NET Core', category: 'backend' },
  { name: 'Python & Django', category: 'backend' },
  { name: 'FastAPI & Flask', category: 'backend' },
  { name: 'AI Agent Integration', category: 'ai' },
  { name: 'LangChain & RAG', category: 'ai' },
  { name: 'AWS & Azure', category: 'cloud' },
  { name: 'Docker & Kubernetes', category: 'cloud' },
  { name: 'PostgreSQL & MongoDB', category: 'database' }
];

const facts = [
  { icon: Award, label: '6+ Years Experience', value: 'Senior Level' },
  { icon: Code2, label: 'Major Projects', value: '10+ Completed' },
  { icon: Brain, label: 'AI Integrations', value: '3+ Systems' },
  { icon: Users, label: 'Team Leadership', value: '10+ Developers' }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Passionate about building scalable systems and integrating intelligent AI solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="relative">
                <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-cyan-400/30 p-2">
                  <img
                    src="/rechi.jpeg"
                    alt="Alerechi Ordu"
                    className="w-full h-full object-cover object-top rounded-full border-4 border-cyan-400/40 shadow-lg scale-105"
                  />
                </div>
              </div>
              
              <div className="text-center lg:text-left">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Senior Backend Engineer with 6+ years of experience architecting scalable systems and integrating cutting-edge AI solutions. 
                  Specialized in building robust APIs, microservices, and intelligent automation systems that power enterprise applications.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  My expertise spans from traditional backend technologies like C# and Python to modern AI agent integration, 
                  helping organizations leverage the power of artificial intelligence to streamline operations and enhance user experiences.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {facts.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="text-center p-4 rounded-lg bg-slate-700/50 border border-slate-600/50 hover:border-cyan-400/50 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">{value}</div>
                    <div className="text-sm text-gray-400">{label}</div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Core Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-pointer ${
                        skill.category === 'backend' ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30 hover:bg-blue-500/30' :
                        skill.category === 'ai' ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30 hover:bg-purple-500/30' :
                        skill.category === 'cloud' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-500/30' :
                        'bg-green-500/20 text-green-300 border border-green-400/30 hover:bg-green-500/30'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};