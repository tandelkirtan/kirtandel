import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import blinkitImg from '../images/intern/blinkit.png';
import jiraImg from '../images/intern/jira.png';
import kDeliveryImg from '../images/intern/k-delivery.png';
import ticTacToeImg from '../images/intern/tic-tac-yoe.png';
import stonePaperScissorsImg from '../images/intern/stone-paper-seasor.png';
import numberGuessingImg from '../images/intern/number gussing.png';
import bgChangerImg from '../images/intern/bgchanger.png';
import passwordImg from '../images/intern/password.png';
import timezoneImg from '../images/intern/timezone.png';
import employeeImg from '../images/intern/employee.png';

const FunProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Jira Clone',
      description: 'A project management tool inspired by Jira.',
      image: jiraImg,
      technologies: ['React', 'Redux', 'Drag & Drop'],
      github: 'https://github.com/tandelkirtan',
      demo: 'https://k-jira-dashbord.vercel.app/'
    },
    {
      title: 'K-Delivery',
      description: 'A delivery application dashboard and tracking system.',
      image: kDeliveryImg,
      technologies: ['React', 'Maps API', 'Node.js'],
      github: 'https://github.com/tandelkirtan',
      demo: 'https://k-delivery.vercel.app/'
    },
    {
      title: 'Tic Tac Toe',
      description: 'The classic game of X and O built with React.',
      image: ticTacToeImg,
      technologies: ['React', 'Game Logic'],
      github: 'https://github.com/tandelkirtan',
      demo: 'https://k-tic-tac-toe.vercel.app/'
    },
    {
      title: 'Stone Paper Scissors',
      description: 'A fun interactive game to play against the computer.',
      image: stonePaperScissorsImg,
      technologies: ['JavaScript', 'DOM Manipulation'],
      github: 'https://github.com/tandelkirtan',
      demo: 'https://k-stone-paper-scissor.vercel.app/'
    },
    {
      title: 'Password Generator',
      description: 'Generate secure and random passwords instantly.',
      image: passwordImg,
      technologies: ['React', 'Algorithms'],
      github: 'https://github.com/tandelkirtan',
      demo: 'https://k-password-generator.vercel.app/'
    },
    {
      title: 'Timezone Converter',
      description: 'Convert and compare times across different zones.',
      image: timezoneImg,
      technologies: ['JavaScript', 'Date API'],
      github: 'https://github.com/tandelkirtan',
      demo: 'https://k-time-zone.vercel.app/'
    },
    {
      title: 'Employee Management',
      description: 'A system to manage employee records and data.',
      image: employeeImg,
      technologies: ['React', 'CRUD', 'Local Storage'],
      github: 'https://github.com/tandelkirtan',
      demo: 'https://k-employee-management.vercel.app/'
    },
    {
      title: 'Number Guessing',
      description: 'Test your intuition with this number guessing game.',
      image: numberGuessingImg,
      technologies: ['JavaScript', 'Logic'],
      github: 'https://github.com/tandelkirtan',
      demo: 'https://k-number-guessing-game.vercel.app/'
    },
    {
      title: 'Background Changer',
      description: 'A simple utility to change background colors dynamically.',
      image: bgChangerImg,
      technologies: ['JavaScript', 'DOM'],
      github: 'https://github.com/tandelkirtan',
      demo: 'https://k-bg-changer.vercel.app/'
    },
    {
      title: 'Blinkit Clone',
      description: 'A clone of the Blinkit delivery app interface.',
      image: blinkitImg,
      technologies: ['React', 'Tailwind CSS'],
      github: 'https://github.com/tandelkirtan',
      demo: 'https://blinkit-topaz.vercel.app/'
    }
  ];

  return (
    <div className="min-h-screen py-20 animated-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Intern & Fun <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practice projects and side experiments built to explore concepts and gain hands-on development experience.
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
              
              {/* Title for Mobile - Only visible on small screens */}
              <div className="p-4 md:hidden">
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>

              {/* Project Content - Hidden on Mobile, Visible on Desktop */}
              <div className="hidden md:block p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

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

        {/* Mobile Details Dialog */}
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
      </div>
    </div>
  );
};

export default FunProjects;
