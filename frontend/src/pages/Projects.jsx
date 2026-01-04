import { useState } from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import qkart from '@/images/qkart.png';
import medify from '@/images/medify.png';
import expense from '@/images/expense.png';
import chatbot from '@/images/chatbotai.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      title: 'Q-KART - E-Commerce Platform',
      description: 'React-based e-commerce frontend featuring user registration and authentication, dynamic product listings, search, cart, and checkout using modern React hooks and components.',
      image: qkart,
      technologies: ['React', 'Node.js', 'Bootstrap', 'Tokens', 'React Router'],
      github: 'https://github.com/tandelkirtan/Q_Kart',
      demo: 'https://qkart-p9wzcrjgr-kirtans-projects-2457f854.vercel.app/',
      highlights: ['Authentication', 'Product Listings', 'Search Functionality', 'Cart Management', 'Checkout Process']
    },
    {
      title: 'Medify – Medical Appoinment Booking App',
      description: 'Medical center booking application enabling users to search centers by state and city, book appointments with time slots, and manage bookings with persistent localStorage and a responsive UI.',
      image: medify,
      technologies: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
      github: 'https://github.com/tandelkirtan',
      demo: 'https://xmedify-ten.vercel.app/',
      highlights: ['Real-time collaboration', 'Used by 50+ teams', 'Mobile responsive']
    },
    {
      title: 'Expense Tracker App',
      description: 'Application enabling users to add, edit, and delete expenses, manage wallet balance in real time, visualize spending with charts, and persist data using localStorage.',
      image: expense,
      technologies: ['Python', 'FastAPI', 'React', 'OpenAI', 'PostgreSQL'],
      github: 'https://github.com/tandelkirtan',
      demo: 'https://expense-track-opal.vercel.app/',
      highlights: ['Generates 1000+ posts/day', 'GPT-4 powered', '95% user satisfaction']
    },
    {
      title: 'AI Chat Application',
      description: 'Interactive chat platform allowing users to converse with an AI, provide like/dislike feedback, rate conversations, add subjective reviews, and manage conversation history with a responsive UI.',
      image: chatbot,
      technologies: ['Vue.js', 'Express', 'MySQL', 'Chart.js', 'Redis'],
      github: 'https://github.com/tandelkirtan',
      demo: 'https://xbotai-psi-seven.vercel.app/',
      highlights: ['Multi-platform support', '500+ businesses use it', 'Auto-scheduling']
    },
    // {
    //   title: 'Fitness Tracking App',
    //   description: 'Mobile-first application for tracking workouts, nutrition, and health metrics with AI-powered recommendations.',
    //   image: 'https://images.pexels.com/photos/159299/graphic-design-studio-tracfone-programming-html-159299.jpeg?w=800',
    //   technologies: ['React Native', 'Node.js', 'MongoDB', 'TensorFlow'],
    //   github: 'https://github.com',
    //   demo: 'https://demo.com',
    //   highlights: ['20K+ downloads', 'AI workout plans', 'Wearable integration']
    // },
    // {
    //   title: 'Real Estate Marketplace',
    //   description: 'Property listing platform with advanced search filters, virtual tours, and mortgage calculators.',
    //   image: 'https://images.pexels.com/photos/5483075/pexels-photo-5483075.jpeg?w=800',
    //   technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Mapbox'],
    //   github: 'https://github.com',
    //   demo: 'https://demo.com',
    //   highlights: ['5000+ listings', 'Virtual tour feature', 'Mobile optimized']
    // }
  ];

  return (
    <div className="min-h-screen py-20 animated-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work and the impact I've created
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl overflow-hidden card-hover group cursor-pointer md:cursor-default"
              onClick={() => {
                if (window.innerWidth < 768) {
                  setSelectedProject(project);
                }
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                
                <div className="hidden md:block">
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                  {/* Highlights */}
                  <div className="mb-4 space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center text-xs text-muted-foreground">
                        <span className="text-primary mr-2">→</span>
                        {highlight}
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="rounded-full">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="rounded-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold">{selectedProject.title}</DialogTitle>
                </DialogHeader>
                
                <div className="mt-4">
                  <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">{selectedProject.description}</p>

                  <div className="mb-4 space-y-1">
                    {selectedProject.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center text-xs text-muted-foreground">
                        <span className="text-primary mr-2">→</span>
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="rounded-full">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </a>
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="rounded-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Intern & Fun Projects Button */}
        <div className="mt-16 flex justify-center">
          <Link to="/fun-projects">
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7 glass-effect hover:scale-105 transition-transform duration-300"
            >
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
              Intern & Fun Projects
            </Button>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center glass-effect rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Want to see more?</h2>
          <p className="text-muted-foreground mb-6">
            Check out my GitHub profile for more projects and open-source contributions.
          </p>
          <a href="https://github.com/tandelkirtan" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full">
              <Github className="h-5 w-5 mr-2" />
              Visit GitHub Profile
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;