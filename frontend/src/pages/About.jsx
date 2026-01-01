import { User, Heart, Target, Zap, Briefcase, Calendar, GraduationCap, Award, BookOpen, Code, Database, Cloud, Smartphone, GitBranch, FileText } from 'lucide-react';
 
import { Button } from '@/components/ui/button';
import profileimage from '../images/kt.png'
import resumePDF from '@/doccuments/Kirtan_Tandel_Resume.pdf'


const About = () => {
  const values = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Constantly exploring new technologies and pushing boundaries to create cutting-edge solutions.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Excellence',
      description: 'Committed to delivering high-quality work that exceeds expectations and drives results.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Passion',
      description: 'Genuinely love what I do and bring enthusiasm to every project I undertake.'
    },
    {
      icon: <User className="h-8 w-8" />,
      title: 'Collaboration',
      description: 'Believe in the power of teamwork and effective communication to achieve great things.'
    }
  ];

  const experiences = [
    {
      company: 'Maxgen Technology',
      position: 'FrontEnd Developer',
      period: ' JAN 2025 - PRESENT',
      location: 'AHMEDABAD',
      description: 'Full Stack Developer Trainee with hands-on experience in React.js and backend development, contributing to LMS, e-commerce, and MERN stack–based projects.',
      technologies: ['React', 'Javascript', 'Typescript', 'Node.js', 'Express.js', 'MongoDB', 'MySQL']
    },
    {
      company: 'ACCIO - TECH',
      position: 'INTERNSHIP - REACT DEVELOPER',
      period: 'OCT 2023 - APRIL 2024',
      location: 'AHMEDABAD',
      description: 'Frontend Developer Intern at AccioJob, building responsive and interactive web applications using React, JavaScript, TypeScript, and CSS libraries.',
      technologies: ['React', 'Javascript', 'CSS Libraries', 'Responsive Design'] 
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Information Technology - CSE',
      institution: 'Parul University',
      period: 'SEPT 2019 - JAN 2024',
      location: 'Vadodara, Gujarat',
    }
  ];

  const certifications = [
    {
      name: 'Full Stack Development',
      issuer: 'Crio Institute',
      date: '2025',
      icon: <Award className="h-6 w-6" />
    },
    {
      name: 'Web - Development',
      issuer: 'Masai Institute of India',
      date: '2022',
      icon: <Award className="h-6 w-6" />
    },
    {
      name: 'Web - Devlopment',
      issuer: 'Forage - JPMorgan Chase virtual experience program',
      date: '2022',
      icon: <Award className="h-6 w-6" />
    },
    {
      name: 'Programming Language C, C++',
      issuer: 'IANT (Institute of Advance Network Technology)',
      date: '2021',
      icon: <Award className="h-6 w-6" />
    }
  ];

  const skillCategories = [
    {
      icon: <Code className="h-6 w-6 md:h-8 md:w-8" />,
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Bootstrap', level: 85 },
        { name: 'HTML', level: 98 },
        { name: 'CSS', level: 98 }
      ]
    },
    {
      icon: <Database className="h-6 w-6 md:h-8 md:w-8" />,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Express.js', level: 90 },
        { name: 'REST APIs', level: 95 },
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'SQL', level: 85 }
      ]
    },
    {
      icon: <Database className="h-6 w-6 md:h-8 md:w-8" />,
      title: 'Other Skills',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Devinci', level: 88 },
        { name: 'Photoshop', level: 85 },
        { name: 'Primerpro', level: 85 },
        { name: 'Canva', level: 85 },
        { name: 'After Effect', level: 85 },
      ]
    }
  ];

  const skillLogoMap = {
    'React.js': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg',
    'Next.js': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg',
    'Vue.js': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vuedotjs.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg',
    'Bootstrap': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/bootstrap.svg',
    'HTML': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/html5.svg',
    'CSS': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/css3.svg',
    'HTML/CSS': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/html5.svg',
    'Node.js': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg',
    'Python': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg',
    'FastAPI': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fastapi.svg',
    'Express.js': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/express.svg',
    'GraphQL': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/graphql.svg',
    'REST APIs': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/swagger.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mongodb.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg',
    'SQL': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg',
    'MySQL': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg',
    'Redis': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/redis.svg',
    'Firebase': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/firebase.svg',
    'AWS': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg',
    'Docker': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg',
    'Kubernetes': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/kubernetes.svg',
    'CI/CD': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/githubactions.svg',
    'Google Cloud': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlecloud.svg',
    'Figma': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/figma.svg',
    'Canva': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/canva.svg',
    'Photoshop': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobephotoshop.svg',
    'Primerpro': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobepremierepro.svg',
    'After Effect': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobeaftereffects.svg',
    'Devinci': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/davinciresolve.svg'
  };

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Project Management',
    'Communication',
    'Agile/Scrum',
    'Code Review',
    'Mentoring',
    'Time Management'
  ];

  return (
    <div className="min-h-screen py-20 animated-background overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and what drives me
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="glass-effect rounded-2xl p-6 text-center card-hover">
            <h3 className="text-4xl font-bold gradient-text">2+</h3>
            <p className="text-muted-foreground mt-2">Years Experience</p>
          </div>
          <div className="glass-effect rounded-2xl p-6 text-center card-hover">
            <h3 className="text-4xl font-bold gradient-text">30+</h3>
            <p className="text-muted-foreground mt-2">Projects Completed</p>
          </div>
          <div className="glass-effect rounded-2xl p-6 text-center card-hover">
            <h3 className="text-4xl font-bold gradient-text">20+</h3>
            <p className="text-muted-foreground mt-2">Tools & Frameworks Used</p>
          </div>
          <div className="glass-effect rounded-2xl p-6 text-center card-hover">
            <h3 className="text-4xl font-bold gradient-text">5+</h3>
            <p className="text-muted-foreground mt-2">Certifications</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left - Image */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={profileimage}
                  alt="Kirtan Tandel Profile"
                  className="w-full h-[500px] object-cover"
                />
                <div className=""></div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
              <div className="glass-effect rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-4">Hello! I'm Kirtan Tandel</h2>
                <div className="space-y-4 text-muted-foreground text-sm md:text-base">
                  <p>
                    I’m a passionate Full-Stack Developer with hands-on experience in building responsive, scalable, and user-focused web applications. My journey in technology began with curiosity about how digital products work and gradually evolved into designing complete end-to-end solutions.
                  </p>
                  <p>
                    I enjoy working across both frontend and backend, focusing on clean architecture, performance, and seamless user experiences. I’ve contributed to real-world projects where I collaborated with teams, solved practical problems, and delivered reliable features from concept to deployment.
                  </p>
                  <p>
                    I strongly believe in continuous learning and adapting to new technologies to improve my craft. When I’m not coding, I explore emerging tech trends, work on personal and open-source projects, and focus on building solutions that are intuitive, impactful, and valuable to users.
                  </p>
                </div>
              </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Core <span className="gradient-text">Values</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 card-hover"
              >
                <div className="text-primary mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="my-12">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>

          {/* Experience List */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <Briefcase className="h-6 w-6 text-primary mt-1" />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{exp.position}</h3>
                      <h4 className="text-lg text-primary font-semibold mb-2">{exp.company}</h4>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="h-4 w-4 mr-1" />
                    {exp.period}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="my-12">
            <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          </div>

          {/* Education Section */}
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-8">
            <div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="glass-effect rounded-2xl p-8 card-hover"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold mb-2">{edu.degree}</h4>
                        <h5 className="text-xl text-primary font-semibold mb-2">{edu.institution}</h5>
                        <p className="text-muted-foreground mb-2">{edu.location}</p>
                      </div>
                      <div className="text-left md:text-right">
                        <p className="text-sm text-muted-foreground mb-1">{edu.period}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-12">
              <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Certifications</h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="glass-effect rounded-2xl p-6 card-hover text-center"
                  >
                    <div className="flex justify-center text-primary mb-4">
                      {cert.icon}
                    </div>
                    <h4 className="font-bold mb-2">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                    <p className="text-xs text-primary font-semibold">{cert.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="my-12">
            <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          </div>

          {/* Skills Section */}
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className={`glass-effect rounded-2xl p-6 card-hover ${category.title === 'Other Skills' ? 'lg:col-span-2' : ''}`}
                >
                  <div className="flex items-center mb-6">
                    <div className="text-primary mr-3">{category.icon}</div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className={`grid gap-6 justify-items-center sm:justify-items-start ${category.title === 'Other Skills' ? 'grid-cols-3 sm:grid-cols-6' : 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5'}`}>
                    {category.skills.map((skill, i) => {
                      const logo = skillLogoMap[skill.name];
                      return (
                        <div key={i} className="flex flex-col items-center group cursor-pointer">
                          {logo ? (
                            <img
                              src={logo}
                              alt={skill.name}
                              title={skill.name}
                              className="h-12 w-12 md:h-16 md:w-16 object-contain rounded-xl bg-white/90 p-3 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                            />
                          ) : (
                            <span
                              title={skill.name}
                              className="h-12 w-12 md:h-16 md:w-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl md:text-2xl font-bold shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                            >
                              {skill.name.charAt(0)}
                            </span>
                          )}
                          <span className="mt-3 text-sm font-medium text-center text-muted-foreground group-hover:text-primary transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Currently Learning */}
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Currently Learning</h3>
              <p className="text-muted-foreground mb-6">
                I believe in continuous learning and staying updated with the latest technologies.
                Here's what I'm currently exploring:
              </p>
              <div className="flex flex-wrap gap-3">
                {['Next.js', 'DSA', 'System Design', 'Three.js'].map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-primary/30 text-primary rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="glass-effect rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Fun <span className="gradient-text">Facts</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
            <div className="flex items-start space-x-3">
              <span className="text-primary font-bold">→</span>
              <p>I've contributed to multiple open-source projects</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-primary font-bold">→</span>
              <p>Coffee is my debugging companion</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-primary font-bold">→</span>
              <p>I'm passionate about learning new technologies</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-primary font-bold">→</span>
              <p>Building solutions that make a real impact</p>
            </div>
          </div>
        </div>

        {/* Resume Download */}
        <div className="glass-effect rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to know more?</h2>
          <p className="text-muted-foreground mb-6">
            Download my resume to get a comprehensive overview of my experience, skills, and achievements.
          </p>
          <a href={resumePDF} download="Kirtan_Tandel_Resume.pdf">
            <Button size="lg" className="rounded-full">
              <FileText className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
