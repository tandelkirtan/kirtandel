import { Camera, Plane, Video, Cpu, Trophy } from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: 'Photography and Videography',
      description: 'Capturing moments through the lens, from urban landscapes to cinematic storytelling.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: 'Editing (Video and Photo)',
      description: 'Bringing visual stories to life through post-production and creative editing.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: 'Travel',
      description: 'Exploring new cultures, cuisines, and destinations around the world.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'Sports',
      description: 'Staying active and competitive through various team and individual sports.',
      color: 'from-amber-500 to-yellow-500'
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'AI',
      description: 'Exploring the latest in Artificial Intelligence, Machine Learning, and automation.',
      color: 'from-green-500 to-emerald-500'
    },
  ];

  const interests = [
    'Artificial Intelligence & ML',
    'Blockchain & Web3',
    'Sustainable Technology',
    'Space Exploration',
    'Podcasts & Tech Talks',
    'Chess',
    'Gaming (Strategy Games)',
    'Cooking International Cuisine'
  ];

  return (
    <div className="min-h-screen py-20 animated-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Hobbies & <span className="gradient-text">Interests</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What I do when I'm not coding - my passions beyond the keyboard
          </p>
        </div>

        {/* Main Hobbies */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-6 card-hover group"
            >
              <div className="flex items-center lg:block">
                <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${hobby.color} text-white mr-4 lg:mr-0 lg:mb-4 group-hover:scale-110 transition-transform`}>
                  {hobby.icon}
                </div>
                <h3 className="text-xl font-bold lg:mb-2">{hobby.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mt-2 lg:mt-0">{hobby.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Interests */}
        <div className="glass-effect rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Other <span className="gradient-text">Interests</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-accent/50 rounded-xl p-4 text-center font-medium hover:bg-accent transition-colors"
              >
                {interest}
              </div>
            ))}
          </div>
        </div>

        {/* Life Philosophy */}
        <div className="glass-effect rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Life <span className="gradient-text">Philosophy</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <p className="text-lg text-muted-foreground">
              I believe in maintaining a healthy work-life balance. While I'm passionate about technology
              and building great products, I equally value personal growth, creativity, and experiences
              outside of work.
            </p>
            <p className="text-lg text-muted-foreground">
              My hobbies not only help me relax and recharge but also inspire creativity in my professional
              work. Whether it's the composition in photography influencing my UI designs, or the discipline
              from fitness routines improving my work ethic, everything connects.
            </p>
            <blockquote className="text-xl font-semibold italic border-l-4 border-primary pl-4 mt-6">
              "Life is about balance. Code by day, explore by night, and always keep learning."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
