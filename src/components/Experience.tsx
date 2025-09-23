import React from 'react';
import { MapPin, Calendar, TrendingUp, Users, Award, Target } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: 'Avetium Consult',
    position: 'Senior Backend Engineer',
    location: 'Nigeria - Hybrid',
    period: '2024 - Present',
    type: 'Full-time',
    description: 'Leading backend architecture and integration initiatives for enterprise clients.',
    achievements: [
      'Architected and deployed microservices serving 300K+ users',
      'Reduced API response times by 60% through advanced caching and optimization',
      'Led a team of 8 developers in implementing enterprise-grade solutions',
      'Integrated Stripe and Zoho for seamles intelligent organisation sychronisation of employees from zoho CRM'
    ],
    technologies: ['C#', '.NET Core', 'Python', 'FastAPI', 'Digital Ocean', 'Azure', 'PostgreSQL'],
    icon: Target
  },
  {
    id: 2,
    company: 'AI Auction Solution',
    position: 'Lead Developer & System Architect',
    location: 'United Kindome - Remote',
    period: '2023 - 2024',
    type: 'Full-time',
    description: 'Developed scalable auction platform with real-time bidding and AI-powered recommendation systems.',
    achievements: [
      'Built real-time auction system handling 50K+ concurrent users',
      'Implemented ML-based recommendation engine increasing user engagement by 40%',
      'Designed backend architecture with CI/CD reducing deployment time by 70%',
      'Mentored 5 junior developers and established coding standards'
    ],
    technologies: ['Python', 'Django', 'Redis', 'WebSockets', 'Docker', 'Kubernetes', 'MongoDB'],
    icon: TrendingUp
  },
  {
    id: 3,
    company: 'Limestone Technologies',
    position: 'Backend Developer',
    location: 'Nigeria - Hybrid',
    period: '2021 - 2023',
    type: 'Full-time',
    description: 'Developed enterprise APIs for proptech services applications using Kubernates.',
    achievements: [
      'Designed REST APIs serving 5K+ users daily managing their properties',
      'Implemented automated testing reducing bug reports by 80%',
      'Established CI/CD pipelines reducing deployment time from hours to minutes using Docker and Kubernetes',
      'Achieved 99.9% uptime for critical financial services'
    ],
    technologies: ['C#', '.NET Framework', 'SQL Server', 'Azure', 'Kubernates', 'Docker'],
    icon: Award
  },
  {
    id: 4,
    company: 'Univelcity',
    position: 'Backend Developer',
    location: 'Nigeria - Onsite',
    period: '2018 - 2021',
    type: 'Full-time',
    description: 'Developed web applications and APIs for startup clients across various industries.',
    achievements: [
      'Built 20+ web applications from concept to production',
      'Collaborated with cross-functional teams of 3-5 members',
      'Implemented responsive designs and modern UI/UX patterns',
      'Maintained 95%+ client satisfaction rating'
    ],
    technologies: ['Python', 'Flask', 'JavaScript', 'PostgreSQL', 'HTML/CSS', 'Bootstrap'],
    icon: Users
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Professional Experience
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              8+ years of building scalable systems and leading development teams
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400"></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => {
                const IconComponent = experience.icon;
                return (
                  <div
                    key={experience.id}
                    className="relative pl-20"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-slate-900 z-10"></div>
                    
                    {/* Content Card */}
                    <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 group">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex items-start gap-4 mb-4 lg:mb-0">
                          <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg border border-slate-600">
                            <IconComponent className="w-6 h-6 text-cyan-400" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                              {experience.position}
                            </h3>
                            <div className="flex items-center gap-4 text-gray-400 mt-1">
                              <span className="font-semibold text-cyan-400">{experience.company}</span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {experience.location}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end">
                          <div className="flex items-center gap-2 text-gray-400 mb-2">
                            <Calendar className="w-4 h-4" />
                            <span>{experience.period}</span>
                          </div>
                          <span className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-400/30">
                            {experience.type}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs bg-slate-700/50 text-gray-300 rounded-full border border-slate-600/50 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="inline-block p-6 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-2">Ready for the Next Challenge</h3>
              <p className="text-gray-400">
                Looking to leverage my expertise in backend engineering and AI integration to drive innovation at your organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};