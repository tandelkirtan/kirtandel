import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import profileimage from '../images/portfol.jpg'

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Explorer'];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
          setTypingSpeed(150);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
          setTypingSpeed(100);
        } else {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed, roles]);

  return (
    <div className="h-screen md:min-h-screen overflow-hidden md:overflow-visible hero-gradient animated-background flex items-center relative z-10">
      <div className="max-w-7xl mx-auto px-4 mt-12 lg:mt-0 sm:px-6 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 ${mounted ? 'animate-in' : 'opacity-0'}`}>
            <div className="space-y-2">
              <p className="text-primary font-medium text-lg">Hi there! I'm</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground">
                Kirtan Tandel
              </h1>
              <div className="h-16 flex items-center">
                <p className="text-2xl sm:text-3xl gradient-text font-semibold">
                  {displayText}
                  <span className="typing-cursor">|</span>
                </p>
              </div>
            </div>

            <p className="hidden sm:block text-lg text-muted-foreground max-w-xl">
              Passionate about creating beautiful, functional, and user-centric digital experiences.
              I transform ideas into elegant solutions through code.
            </p>

            {/* Social Links */}
            <div className="hidden lg:flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-colors"
                aria-label="Resume"
              >
                <FileText className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative">
            <div className="floating">
              <div className="relative w-full max-w-md mx-auto avatar-wrap">
                <div className="avatar-frame shadow-2xl">
                  <img
                    src={profileimage}
                    alt="Kirtan Tandel - Profile"
                    className="avatar-img object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
