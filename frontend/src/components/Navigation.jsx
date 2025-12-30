import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from 'next-themes';
import { Moon, Sun, Home, User, FolderKanban, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Projects', path: '/projects', icon: FolderKanban },
    { name: 'Contact', path: '/contact', icon: Mail },
    { name: 'Hobbies', path: '/hobbies', icon: Heart },
  ];

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      {/* Top Navigation - Desktop & Mobile Header */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="/"
              className="text-xl md:text-2xl font-bold gradient-text"
            >
              KIRTANDEL
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={link.path}
                      className="relative px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      <motion.span
                        className={`relative z-10 ${
                          isActive
                            ? 'text-primary-foreground'
                            : 'text-foreground/80 hover:text-foreground'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.name}
                      </motion.span>
                      {isActive && (
                        <motion.div
                          layoutId="activeNavBackground"
                          className="absolute inset-0 bg-primary rounded-lg -z-0"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30
                          }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
              
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="ml-2"
              >
                {resolvedTheme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>

            {/* Mobile - Only Theme Toggle */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
              >
                {resolvedTheme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation - Mobile Only */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden backdrop-blur-sm bg-background/30"
      >
        <div className="flex items-center justify-around h-16 px-2">
          {navLinks.map((link, index) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                className="flex-1"
              >
                  <Link
                    to={link.path}
                    className="flex flex-col items-center justify-center h-full relative"
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1.2 : 1,
                      }}
                      whileTap={{
                        scale: 0.9,
                        rotate: -5
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                      className="relative"
                    >
                      <Icon className={`h-5 w-5 ${isActive ? 'text-primary' : 'text-foreground/60'}`} />
                    </motion.div>
                    <motion.span
                      className={`text-[10px] mt-0.5 font-medium ${isActive ? 'text-primary' : 'text-foreground/60'}`}
                      animate={{
                        scale: isActive ? 1.1 : 1,
                      }}
                      transition={{
                        duration: 0.2
                      }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </motion.div>
              );
            })}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
