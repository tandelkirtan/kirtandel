import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Innovations Inc.',
      position: 'Senior Full Stack Developer',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Leading the development of scalable web applications using React, Node.js, and cloud technologies.',
      achievements: [
        'Architected and deployed microservices handling 1M+ daily requests',
        'Reduced application load time by 60% through optimization',
        'Mentored 5 junior developers and conducted code reviews',
        'Implemented CI/CD pipeline reducing deployment time by 80%'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB']
    },
    {
      company: 'Digital Solutions Ltd.',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      location: 'New York, NY',
      description: 'Developed and maintained multiple client-facing web applications with focus on performance and user experience.',
      achievements: [
        'Built 15+ responsive web applications from scratch',
        'Improved application performance by 45% through refactoring',
        'Collaborated with UI/UX team to implement pixel-perfect designs',
        'Integrated payment gateways processing $2M+ monthly'
      ],
      technologies: ['React', 'Python', 'PostgreSQL', 'Redis', 'GraphQL']
    },
    {
      company: 'StartUp Ventures',
      position: 'Junior Developer',
      period: '2019 - 2020',
      location: 'Austin, TX',
      description: 'Contributed to the development of innovative SaaS products in a fast-paced startup environment.',
      achievements: [
        'Developed key features for MVP that secured $1M funding',
        'Fixed 200+ bugs improving product stability',
        'Implemented responsive designs for mobile platforms',
        'Participated in agile development processes'
      ],
      technologies: ['JavaScript', 'Express', 'MySQL', 'HTML/CSS']
    },
    {
      company: 'Freelance',
      position: 'Web Developer',
      period: '2018 - 2019',
      location: 'Remote',
      description: 'Provided web development services to small businesses and startups, building custom websites and applications.',
      achievements: [
        'Completed 20+ projects for diverse clients',
        'Achieved 5-star rating on freelance platforms',
        'Built e-commerce solutions generating $500K+ in sales',
        'Created custom CMS solutions for content management'
      ],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'Bootstrap']
    }
  ];

  return (
    <div className="min-h-screen py-20" data-testid="experience-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" data-testid="experience-title">
            Work <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="experience-subtitle">
            My professional journey and the impact I've made along the way
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-transparent"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-testid={`experience-item-${index}`}
                className={`relative grid md:grid-cols-2 gap-8 items-start ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg"></div>
                </div>

                {/* Content */}
                {index % 2 === 0 ? (
                  <>
                    <div className="md:pr-12">
                      <div className="glass-effect rounded-2xl p-6 card-hover">
                        <div className="flex items-center justify-between mb-4">
                          <Briefcase className="h-6 w-6 text-primary" />
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.period}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-1">{exp.position}</h3>
                        <h4 className="text-lg text-primary font-semibold mb-2">{exp.company}</h4>
                        <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        
                        <div className="mb-4">
                          <h5 className="font-semibold mb-2">Key Achievements:</h5>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 justify-end">
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
                    </div>
                    <div className="hidden md:block"></div>
                  </>
                ) : (
                  <>
                    <div className="hidden md:block"></div>
                    <div className="md:pl-12">
                      <div className="glass-effect rounded-2xl p-6 card-hover">
                        <div className="flex items-center justify-between mb-4">
                          <Briefcase className="h-6 w-6 text-primary" />
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.period}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-1">{exp.position}</h3>
                        <h4 className="text-lg text-primary font-semibold mb-2">{exp.company}</h4>
                        <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        
                        <div className="mb-4">
                          <h5 className="font-semibold mb-2">Key Achievements:</h5>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

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
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;