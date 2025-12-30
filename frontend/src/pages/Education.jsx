import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Information Technology - CSE',
      institution: 'Stanford University',
      period: '2017 - 2019',
      location: 'Stanford, CA',
      gpa: '3.9/4.0',
      description: 'Specialized in Artificial Intelligence and Machine Learning with focus on web technologies.',
      achievements: [
        'Published 3 research papers on ML applications',
        'Teaching Assistant for Web Development course',
        'Dean\'s List all semesters',
        'Led student tech community with 200+ members'
      ]
    },
    {
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'Massachusetts Institute of Technology',
      period: '2013 - 2017',
      location: 'Cambridge, MA',
      gpa: '3.8/4.0',
      description: 'Comprehensive study of computer science fundamentals, algorithms, and software engineering.',
      achievements: [
        'Graduated with Honors',
        'President of Computer Science Club',
        'Won 5 hackathons during undergraduate years',
        'Completed internships at Google and Microsoft'
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      icon: <Award className="h-6 w-6" />
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      icon: <Award className="h-6 w-6" />
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '2022',
      icon: <Award className="h-6 w-6" />
    },
    {
      name: 'React Advanced Certification',
      issuer: 'Meta',
      date: '2021',
      icon: <Award className="h-6 w-6" />
    }
  ];

  const courses = [
    'Advanced Web Development',
    'Cloud Architecture & Deployment',
    'Machine Learning Fundamentals',
    'Full Stack JavaScript',
    'System Design & Scalability',
    'Mobile App Development'
  ];

  return (
    <div className="min-h-screen py-20" data-testid="education-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" data-testid="education-title">
            Education & <span className="gradient-text">Learning</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="education-subtitle">
            My academic journey and continuous learning path
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center" data-testid="formal-education-title">
            <GraduationCap className="mr-3 h-8 w-8 text-primary" />
            Formal Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                data-testid={`education-item-${index}`}
                className="glass-effect rounded-2xl p-8 card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                    <h4 className="text-xl text-primary font-semibold mb-2">{edu.institution}</h4>
                    <p className="text-muted-foreground mb-2">{edu.location}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-sm text-muted-foreground mb-1">{edu.period}</p>
                    <p className="text-primary font-semibold">GPA: {edu.gpa}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{edu.description}</p>
                
                <div>
                  <h5 className="font-semibold mb-3">Key Achievements:</h5>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {edu.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">✓</span>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center" data-testid="certifications-title">
            <Award className="mr-3 h-8 w-8 text-primary" />
            Certifications
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                data-testid={`certification-item-${index}`}
                className="glass-effect rounded-2xl p-6 card-hover text-center"
              >
                <div className="flex justify-center text-primary mb-4">
                  {cert.icon}
                </div>
                <h3 className="font-bold mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                <p className="text-xs text-primary font-semibold">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Online Courses */}
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center" data-testid="courses-title">
            <BookOpen className="mr-3 h-8 w-8 text-primary" />
            Specialized Courses
          </h2>
          <div className="glass-effect rounded-2xl p-8">
            <p className="text-muted-foreground mb-6">
              Continuous learning is key to staying relevant in the tech industry. Here are some specialized
              courses I've completed to enhance my skills:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {courses.map((course, index) => (
                <div
                  key={index}
                  data-testid={`course-item-${index}`}
                  className="flex items-center space-x-3 p-4 bg-accent/50 rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="font-medium">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;