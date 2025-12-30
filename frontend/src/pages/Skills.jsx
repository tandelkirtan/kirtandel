import { Code, Database, Cloud, Smartphone, GitBranch, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML/CSS', level: 98 }
      ]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Python', level: 88 },
        { name: 'FastAPI', level: 85 },
        { name: 'Express.js', level: 90 },
        { name: 'GraphQL', level: 80 },
        { name: 'REST APIs', level: 95 }
      ]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MySQL', level: 85 },
        { name: 'Redis', level: 82 },
        { name: 'Firebase', level: 87 },
        { name: 'DynamoDB', level: 75 }
      ]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 88 },
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 75 },
        { name: 'CI/CD', level: 85 },
        { name: 'Google Cloud', level: 80 },
        { name: 'Vercel', level: 92 }
      ]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 70 },
        { name: 'Progressive Web Apps', level: 90 },
        { name: 'Mobile UI/UX', level: 88 }
      ]
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'VS Code', level: 98 },
        { name: 'Figma', level: 85 },
        { name: 'Jira', level: 88 },
        { name: 'Webpack', level: 80 },
        { name: 'Testing (Jest/Cypress)', level: 85 }
      ]
    }
  ];

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
    <div className="min-h-screen py-20 relative z-10" data-testid="skills-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" data-testid="skills-title">
            Skills & <span className="gradient-text">Expertise</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="skills-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              data-testid={`skill-category-${index}`}
              className="glass-effect rounded-2xl p-6 card-hover"
            >
              <div className="flex items-center mb-6">
                <div className="text-primary mr-3">{category.icon}</div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <span className="font-medium text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="glass-effect rounded-2xl p-8 mb-16" data-testid="soft-skills">
          <div className="flex items-center mb-6">
            <Zap className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-2xl font-bold">Soft Skills</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                data-testid={`soft-skill-${index}`}
                className="skill-badge bg-accent/50 rounded-xl p-4 text-center font-medium hover:bg-primary hover:text-primary-foreground cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Currently Learning */}
        <div className="glass-effect rounded-2xl p-8" data-testid="learning-section">
          <h2 className="text-2xl font-bold mb-4">Currently Learning</h2>
          <p className="text-muted-foreground mb-6">
            I believe in continuous learning and staying updated with the latest technologies.
            Here's what I'm currently exploring:
          </p>
          <div className="flex flex-wrap gap-3">
            {['Web3 & Blockchain', 'Rust', 'Machine Learning', 'Three.js', 'GraphQL Advanced Patterns', 'System Design'].map((tech, index) => (
              <span
                key={index}
                data-testid={`learning-item-${index}`}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-primary/30 text-primary rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;