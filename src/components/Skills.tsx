import React from 'react';
import { Code2, Brain, Cloud, Database, Cpu, Globe } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: Code2,
    skills: ['C#', '.NET Core', 'Python', 'Django REST Framework', 'FastAPI', 'Flask', 'JavaScript', 'Express.JS'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'AI & Automation',
    icon: Brain,
    skills: ['AI Agent Integration', 'LangChain', 'Ollama', 'API Orchestration', 'Machine Learning', 'NLP', 'OpenAI APIs', 'Hugging Face', 'llama3'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Redis', 'Microservices'],
    gradient: 'from-cyan-500 to-teal-500'
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'MSSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'InfluxDB', 'DynamoDB'],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Architecture & Design',
    icon: Cpu,
    skills: ['System Design', 'Microservices', 'Event-Driven Architecture', 'Domain-Driven Design', 'CQRS', 'API Gateway', 'Load Balancing', 'Caching'],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Integration & APIs',
    icon: Globe,
    skills: ['REST APIs', 'GraphQL', 'gRPC', 'WebSockets', 'Message Queues', 'Event Streaming', 'Third-party Integrations', 'Webhook Systems'],
    gradient: 'from-indigo-500 to-violet-500'
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Skills & Technology Stack
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive expertise across modern backend technologies and AI integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map(({ title, icon: Icon, skills, gradient }, index) => (
              <div
                key={title}
                className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-500 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${gradient} bg-opacity-20 mr-4`}>
                    <Icon className={`w-6 h-6 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-slate-700/50 text-gray-300 rounded-full border border-slate-600/50 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
              <p className="text-gray-400 max-w-md">
                Continuously exploring emerging technologies in AI, cloud computing, and distributed systems to stay at the forefront of backend engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};