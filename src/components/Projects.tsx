import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Zap, Shield, Bot } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI-Powered Enterprise API Gateway',
    description: 'Scalable API gateway with intelligent routing, rate limiting, and AI-driven analytics for enterprise clients.',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['C#', '.NET Core', 'Redis', 'PostgreSQL', 'Docker'],
    category: 'Enterprise',
    icon: Zap,
    github: '#',
    demo: '#',
    highlights: ['99.9% uptime', '10M+ requests/day', 'AI-driven insights']
  },
  {
    id: 2,
    title: 'Intelligent Document Processing System',
    description: 'AI agent integration for automated document analysis, extraction, and workflow automation using LangChain and RAG.',
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'FastAPI', 'LangChain', 'OpenAI', 'PostgreSQL'],
    category: 'AI Integration',
    icon: Bot,
    github: '#',
    demo: '#',
    highlights: ['95% accuracy', 'Multi-format support', 'Real-time processing']
  },
  {
    id: 3,
    title: 'Microservices Security Platform',
    description: 'Comprehensive security platform with OAuth 2.0, JWT management, and distributed authentication for microservices.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['C#', '.NET Core', 'Azure', 'Docker', 'Kubernetes'],
    category: 'Security',
    icon: Shield,
    github: '#',
    demo: '#',
    highlights: ['Zero-trust architecture', 'Multi-tenant support', 'SOC 2 compliant']
  },
  {
    id: 4,
    title: 'Real-time Analytics Engine',
    description: 'High-performance data processing engine with real-time streaming and predictive analytics capabilities.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Django', 'Apache Kafka', 'InfluxDB', 'AWS'],
    category: 'Data Engineering',
    icon: Zap,
    github: '#',
    demo: '#',
    highlights: ['Real-time processing', 'ML predictions', 'Scalable architecture']
  }
];

const categories = ['All', 'Enterprise', 'AI Integration', 'Security', 'Data Engineering'];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Showcasing enterprise-grade solutions and innovative AI integrations
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.id}
                  className="group relative bg-slate-800/80 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="p-2 bg-slate-800/80 rounded-lg border border-slate-600">
                        <IconComponent className="w-5 h-5 text-cyan-400" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
                        {project.category}
                      </span>
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        <a
                          href={project.demo}
                          className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-slate-700 text-gray-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2">
                      {project.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <ArrowRight className="w-4 h-4 text-cyan-400 mr-2" />
                          {highlight}
                        </div>
                      ))}
                    </div>

                    {hoveredProject === project.id && (
                      <div className="absolute inset-0 border-2 border-cyan-400/50 rounded-xl pointer-events-none transition-opacity duration-300">
                        <div className="absolute inset-0 bg-cyan-400/5 rounded-xl"></div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              View All Projects
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};