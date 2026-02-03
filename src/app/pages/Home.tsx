import { motion, useScroll, useTransform } from 'motion/react';
import { Bot, Zap, Sparkles, Clock, Calendar } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import TicTacToe from '@/app/components/TicTacToe';
import robotImage from "@/assets/robot.png";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Countdown Timer
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2028-01-01T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Bot className="w-12 h-12" />,
      title: 'Smart Code',
      description: 'AI-assisted development for clean, efficient websites'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Fast Build',
      description: 'Create responsive websites in record time'
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Modern Design',
      description: 'Stunning interfaces that engage users'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-amber-500/30"
        style={{ perspective: '1000px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              style={{ perspective: '1000px' }}
            >
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                }}
                transition={{ 
                  rotateY: { duration: 6, repeat: Infinity, ease: 'linear' },
                }}
                style={{ 
                  transformStyle: 'preserve-3d'
                }}
              >
                <Bot className="w-10 h-10 text-amber-500" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl font-bold tracking-wider"
                style={{ 
                  transformStyle: 'preserve-3d',
                }}
              >
                <motion.span
                  className="inline-block bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    textShadow: [
                      '0 0 20px rgba(251, 191, 36, 0.5)',
                      '0 0 40px rgba(251, 191, 36, 0.8)',
                      '0 0 20px rgba(251, 191, 36, 0.5)',
                    ]
                  }}
                  transition={{ 
                    backgroundPosition: { duration: 5, repeat: Infinity, ease: 'linear' },
                    textShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                  }}
                  style={{ 
                    display: 'inline-block',
                    transformStyle: 'preserve-3d',
                    backgroundSize: '200% 200%'
                  }}
                >
                  Dr. Robot
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              <motion.a 
                href="#about" 
                className="text-gray-300 hover:text-amber-500 transition-colors"
                whileHover={{ 
                  y: -2,
                  scale: 1.05
                }}
              >
                About
              </motion.a>
              <motion.a 
                href="#features" 
                className="text-gray-300 hover:text-amber-500 transition-colors"
                whileHover={{ 
                  y: -2,
                  scale: 1.05
                }}
              >
                Features
              </motion.a>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(251, 191, 36, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-6 py-2.5 rounded-lg font-semibold"
              >
                Reserve Now
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black z-10" />
          <motion.img
            style={{ y, scale: 1.1 }}
            src="https://images.unsplash.com/photo-1768323102310-965beb4849ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGZ1dHVyaXN0aWMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDA1OTczNnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Robot"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 z-10 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(251, 191, 36, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 191, 36, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }} />
        </div>

        {/* Golden Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Hero Content */}
        <motion.div 
          style={{ opacity, perspective: '1000px' }} 
          className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, z: -100 }}
            animate={{ opacity: 1, z: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Badge */}
            <motion.div
              className="inline-block mb-6 px-6 py-3 bg-amber-500/10 border-2 border-amber-500/50 rounded-full backdrop-blur-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              className="text-6xl md:text-8xl mb-8 font-bold"
              initial={{ opacity: 0, y: 30, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ 
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.span 
                className="block mb-4 text-white"
                style={{ transform: 'translateZ(50px)' }}
              >
                Meet
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 bg-clip-text text-transparent"
                style={{ 
                  transform: 'translateZ(80px)',
                  backgroundSize: '200% 200%'
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  textShadow: [
                    '0 0 30px rgba(251, 191, 36, 0.5)',
                    '0 0 60px rgba(251, 191, 36, 0.8)',
                    '0 0 30px rgba(251, 191, 36, 0.5)',
                  ]
                }}
                transition={{
                  backgroundPosition: { duration: 5, repeat: Infinity, ease: 'linear' },
                  textShadow: { duration: 2, repeat: Infinity }
                }}
              >
                Dr. Robot
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, z: -50 }}
              animate={{ opacity: 1, z: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              style={{ 
                transformStyle: 'preserve-3d',
                transform: 'translateZ(40px)'
              }}
            >
              Website Development. Build stunning websites faster than ever.
            </motion.p>

            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mb-12"
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <Clock className="w-6 h-6 text-amber-500" />
                <h3 className="text-2xl font-semibold text-amber-400">Launch Countdown</h3>
              </div>
              
              <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto" style={{ perspective: '1500px' }}>
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, rotateX: -20 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1,
                      rotateY: 10,
                      z: 30
                    }}
                    className="bg-gradient-to-br from-amber-500/20 to-yellow-600/20 border-2 border-amber-500/50 rounded-xl p-6 backdrop-blur-sm"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <motion.div 
                      className="text-5xl md:text-6xl font-bold text-amber-400 mb-2"
                      animate={{ 
                        textShadow: [
                          '0 0 10px rgba(251, 191, 36, 0.5)',
                          '0 0 20px rgba(251, 191, 36, 0.8)',
                          '0 0 10px rgba(251, 191, 36, 0.5)',
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {String(item.value).padStart(2, '0')}
                    </motion.div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">{item.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-6 flex items-center justify-center gap-2 text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <Calendar className="w-5 h-5" />
                <span className="text-lg">January 1st, 2028</span>
              </motion.div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              whileHover={{ 
                scale: 1.08,
                rotateX: -5,
                z: 50,
                boxShadow: '0 30px 60px rgba(251, 191, 36, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-black px-12 py-5 text-xl font-bold rounded-full transition-all shadow-2xl"
              style={{ 
                transformStyle: 'preserve-3d',
                boxShadow: '0 20px 40px rgba(251, 191, 36, 0.3)'
              }}
            >
              Get Early Access
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 15, 0],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-12 border-2 border-amber-500 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-2 h-2 bg-amber-500 rounded-full"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-950 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ rotateX: -20, opacity: 0 }}
              whileInView={{ rotateX: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Premium <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">Features</span>
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
               Designed for the future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10" style={{ perspective: '2000px' }}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  y: -20,
                  rotateY: 5,
                  z: 40,
                  scale: 1.02
                }}
                className="bg-gradient-to-br from-zinc-900 to-black border-2 border-amber-500/30 p-10 rounded-2xl text-center group hover:border-amber-500/60 transition-all"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="text-amber-500 flex justify-center mb-6"
                  whileHover={{ 
                    scale: 1.2, 
                    rotateY: 360,
                    filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.8))'
                  }}
                  transition={{ duration: 0.6 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-amber-400">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold mb-6">
                Build <span className="text-amber-500">Smarter</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
               technology that transforms your ideas into stunning, responsive websites.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Modern design.
              </p>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(251, 191, 36, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg"
              >
                Learn More
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-3xl blur-2xl" />
              <img
                src={robotImage}
                alt="Dr. Robot"
                className="relative rounded-3xl border-2 border-amber-500/30 shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Game Section - Tic Tac Toe */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black" />
        
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ rotateX: -20, opacity: 0 }}
              whileInView={{ rotateX: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Test Your <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">Intelligence</span>
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Challenge Dr. Robot
            </p>
          </motion.div>

          <TicTacToe />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-amber-500/30 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Bot className="w-8 h-8 text-amber-500" />
                <h3 className="text-2xl font-bold text-amber-400">Dr. Robot</h3>
              </div>
              <p className="text-gray-400"></p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-amber-500 transition-colors">About</a></li>
                <li><a href="#features" className="hover:text-amber-500 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-400">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-amber-500/20 pt-8 text-center text-gray-500">
            <p>&copy; 2026 Dr. Robot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}