import { Camera, Music, Book, Plane, Code, Dumbbell, Palette, Coffee } from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Open Source',
      description: 'Contributing to open-source projects and building tools for the developer community.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: 'Photography',
      description: 'Capturing moments and landscapes, with a focus on urban and nature photography.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: 'Music',
      description: 'Playing guitar and producing electronic music in my home studio.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Book className="h-8 w-8" />,
      title: 'Reading',
      description: 'Exploring sci-fi novels, tech books, and personal development literature.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: 'Travel',
      description: 'Exploring new cultures and destinations, visited 25 countries so far.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Dumbbell className="h-8 w-8" />,
      title: 'Fitness',
      description: 'Regular gym workouts and running to maintain physical and mental health.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Design',
      description: 'Creating digital art and experimenting with UI/UX design principles.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: 'Coffee Culture',
      description: 'Brewing and tasting different coffee beans, exploring local coffee shops.',
      color: 'from-amber-500 to-yellow-500'
    }
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-6 card-hover group"
            >
              <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${hobby.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                {hobby.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{hobby.title}</h3>
              <p className="text-sm text-muted-foreground">{hobby.description}</p>
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
