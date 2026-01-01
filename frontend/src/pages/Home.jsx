import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Full Stack Developer', 'UI/UX Enthusiast...', 'Problem Solver...', 'Editor...'];

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <div className="h-screen min-h-screen overflow-hidden hero-gradient animated-background flex items-center justify-center relative z-10">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-1/2 -left-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute -bottom-1/2 -right-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="space-y-4 mb-8">
          <p className="text-primary font-medium text-xl md:text-2xl tracking-wider">Hi there! I'm</p>
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold text-foreground tracking-tight">
            Kirtan Tandel
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="h-20 md:h-24 flex items-center justify-center mb-8">
          <p className="text-3xl sm:text-4xl lg:text-6xl gradient-text font-bold">
            {displayText}
            <span className="typing-cursor ml-2">|</span>
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            Passionate about creating beautiful, functional, and user-centric digital experiences.
            I transform ideas into elegant solutions through code.
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Home;
