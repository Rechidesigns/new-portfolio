import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CTO at TechVision Corp',
    company: 'TechVision Corp',
    content: 'Alerechi transformed our entire backend infrastructure. His expertise in AI integration and scalable architecture helped us reduce processing time by 70% while handling 10x more traffic. Exceptional problem-solving skills and leadership.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    position: 'Engineering Director',
    company: 'DataStream Solutions',
    content: 'Working with Alerechi was a game-changer. His deep understanding of both traditional backend technologies and modern AI solutions enabled us to build a cutting-edge document processing system that exceeded all expectations.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: 3,
    name: 'Emily Chen',
    position: 'Product Manager',
    company: 'InnovateTech',
    content: 'Alerechi\'s ability to translate complex technical requirements into scalable solutions is remarkable. He led our API modernization project, delivering ahead of schedule and under budget. His team leadership skills are outstanding.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: 4,
    name: 'David Thompson',
    position: 'Senior DevOps Engineer',
    company: 'CloudScale Inc',
    content: 'I\'ve worked alongside many backend engineers, but Alerechi stands out for his innovative approach to system design and his mentorship abilities. He helped our team adopt modern practices that improved our deployment frequency by 300%.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Client Testimonials
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              What industry leaders say about working with me
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-8">
                    <div className="bg-slate-800/80 rounded-xl p-8 border border-slate-700 relative">
                      <Quote className="absolute top-6 left-6 w-8 h-8 text-cyan-400/30" />
                      
                      <div className="pt-6">
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        
                        <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                          "{testimonial.content}"
                        </p>
                        
                        <div className="flex items-center gap-4">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-14 h-14 rounded-full border-2 border-cyan-400/30"
                          />
                          <div>
                            <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                            <p className="text-cyan-400 font-medium">{testimonial.position}</p>
                            <p className="text-gray-400 text-sm">{testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 p-3 bg-slate-800/80 border border-slate-700 rounded-full text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 p-3 bg-slate-800/80 border border-slate-700 rounded-full text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-cyan-400 scale-125'
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};