import { motion } from 'motion/react';
import { Download, Star, ShoppingCart, Filter } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/app/components/Navbar';

export default function Templates() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'E-commerce', 'Dashboard', 'Landing Page', 'Portfolio', 'SaaS', 'Mobile'];

  const templates = [
    {
      id: 1,
      name: 'E-commerce Pro',
      category: 'E-commerce',
      price: '$79',
      rating: 4.9,
      sales: '3.2k',
      image: 'https://images.unsplash.com/photo-1577333715735-8fcb0359d906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDF8fHx8MTc2OTk2ODUxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'React + Next.js'
    },
    {
      id: 2,
      name: 'Admin Dashboard Kit',
      category: 'Dashboard',
      price: '$49',
      rating: 4.8,
      sales: '5.1k',
      image: 'https://images.unsplash.com/photo-1631006732121-a6da2f4864d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhZG1pbiUyMHBhbmVsJTIwZGVzaWdufGVufDF8fHx8MTc2OTk3NTI3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'React + TypeScript'
    },
    {
      id: 3,
      name: 'Startup Landing',
      category: 'Landing Page',
      price: '$29',
      rating: 5.0,
      sales: '6.3k',
      image: 'https://images.unsplash.com/photo-1659841064804-5f507b1b488a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kaW5nJTIwcGFnZSUyMHdlYnNpdGUlMjB0ZW1wbGF0ZXxlbnwxfHx8fDE3Njk5NzUyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'React + Tailwind'
    },
    {
      id: 4,
      name: 'Creative Portfolio',
      category: 'Portfolio',
      price: '$39',
      rating: 4.7,
      sales: '2.8k',
      image: 'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2OTk3NTI3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'React + Motion'
    },
    {
      id: 5,
      name: 'Blog Magazine',
      category: 'Landing Page',
      price: '$35',
      rating: 4.6,
      sales: '4.2k',
      image: 'https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd2Vic2l0ZSUyMGludGVyZmFjZXxlbnwxfHx8fDE3Njk5NzUyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'React + MDX'
    },
    {
      id: 6,
      name: 'Mobile App UI',
      category: 'Mobile',
      price: '$59',
      rating: 4.9,
      sales: '3.5k',
      image: 'https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjB1aXxlbnwxfHx8fDE3Njk5NzUyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'React Native'
    },
    {
      id: 7,
      name: 'Restaurant Website',
      category: 'E-commerce',
      price: '$45',
      rating: 4.8,
      sales: '2.1k',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwd2Vic2l0ZSUyMG1lbnV8ZW58MXx8fHwxNzY5OTc1Mjc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'React + Next.js'
    },
    {
      id: 8,
      name: 'Fitness App',
      category: 'Mobile',
      price: '$69',
      rating: 4.7,
      sales: '1.9k',
      image: 'https://images.unsplash.com/photo-1762768767074-e491f1eebdfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2OTk3MDY3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'React Native'
    },
    {
      id: 9,
      name: 'Real Estate Platform',
      category: 'E-commerce',
      price: '$89',
      rating: 4.9,
      sales: '2.7k',
      image: 'https://images.unsplash.com/photo-1687075430355-ed8df51c1670?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwd2Vic2l0ZXxlbnwxfHx8fDE3Njk5NTQ0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'React + Next.js'
    },
    {
      id: 10,
      name: 'SaaS Dashboard',
      category: 'SaaS',
      price: '$99',
      rating: 5.0,
      sales: '4.8k',
      image: 'https://images.unsplash.com/photo-1604536264507-020ce894daf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwYXBwbGljYXRpb24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY5ODkzMDg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'React + TypeScript'
    },
    {
      id: 11,
      name: 'Learning Platform',
      category: 'SaaS',
      price: '$79',
      rating: 4.8,
      sales: '3.4k',
      image: 'https://images.unsplash.com/photo-1762330917056-e69b34329ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBsZWFybmluZyUyMHBsYXRmb3JtfGVufDF8fHx8MTc2OTk1OTU2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'React + Firebase'
    },
    {
      id: 12,
      name: 'Healthcare Portal',
      category: 'SaaS',
      price: '$95',
      rating: 4.7,
      sales: '1.6k',
      image: 'https://images.unsplash.com/photo-1631507623095-c710d184498f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHdlYnNpdGV8ZW58MXx8fHwxNzY5OTc1Mjc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'React + Node.js'
    },
    {
      id: 13,
      name: 'Corporate Website',
      category: 'Landing Page',
      price: '$55',
      rating: 4.6,
      sales: '2.9k',
      image: 'https://images.unsplash.com/photo-1603201667493-4c2696de0b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMHdlYnNpdGV8ZW58MXx8fHwxNzY5OTA5MDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'React + Tailwind'
    },
    {
      id: 14,
      name: 'Social Media App',
      category: 'Mobile',
      price: '$85',
      rating: 4.9,
      sales: '3.8k',
      image: 'https://images.unsplash.com/photo-1710870509663-16f20f75d758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3Njk5NDQ5NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'React Native'
    },
    {
      id: 15,
      name: 'Travel Booking',
      category: 'E-commerce',
      price: '$75',
      rating: 4.8,
      sales: '2.5k',
      image: 'https://images.unsplash.com/photo-1673515335048-ace62cf73a26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwd2Vic2l0ZXxlbnwxfHx8fDE3Njk5NzUyNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'React + Next.js'
    },
    {
      id: 16,
      name: 'Music Streaming',
      category: 'Mobile',
      price: '$95',
      rating: 5.0,
      sales: '4.1k',
      image: 'https://images.unsplash.com/photo-1551817958-795f9440ce4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0cmVhbWluZyUyMGFwcHxlbnwxfHx8fDE3Njk5NzUyNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'React Native'
    },
    {
      id: 17,
      name: 'Fashion Store',
      category: 'E-commerce',
      price: '$65',
      rating: 4.7,
      sales: '3.1k',
      image: 'https://images.unsplash.com/photo-1659207074621-52d260a714c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMGFwcGFyZWwlMjBzdG9yZXxlbnwxfHx8fDE3Njk5NzUyODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'React + Commerce.js'
    },
    {
      id: 18,
      name: 'Crypto Dashboard',
      category: 'Dashboard',
      price: '$105',
      rating: 4.9,
      sales: '2.3k',
      image: 'https://images.unsplash.com/photo-1644925295849-f057b6ee1c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG8lMjB0cmFkaW5nJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2OTk3NTI3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'React + Web3'
    },
  ];

  const filteredTemplates = selectedCategory === 'All' 
    ? templates 
    : templates.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4 px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-blue-400 text-sm">✨ 18 Premium Templates</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Browse Our <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Templates</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Production-ready templates built with React, TypeScript, and Tailwind CSS
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900/50 sticky top-16 z-40 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 text-gray-400"
          >
            Showing {filteredTemplates.length} {filteredTemplates.length === 1 ? 'template' : 'templates'}
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '2000px' }}>
            {filteredTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ 
                  y: -20,
                  rotateY: 5,
                  rotateX: 5,
                  z: 50,
                  scale: 1.02
                }}
                className="group cursor-pointer bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden backdrop-blur-sm"
                style={{ 
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={template.image}
                    alt={template.name}
                    className="w-full aspect-video object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-500/90 text-white text-xs px-3 py-1 rounded-full">
                      {template.tag}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-purple-500/90 text-white text-xs px-3 py-1 rounded-full">
                      {template.category}
                    </span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-blue-600/60 to-transparent flex items-center justify-center gap-3"
                    style={{ 
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <motion.button
                      whileHover={{ 
                        scale: 1.15,
                        rotateX: 10,
                        z: 30
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-slate-900 px-5 py-2.5 rounded-lg shadow-xl flex items-center gap-2 text-sm font-medium"
                      style={{ 
                        transformStyle: 'preserve-3d',
                        transform: 'translateZ(50px)'
                      }}
                    >
                      <Download className="w-4 h-4" />
                      Preview
                    </motion.button>
                    <motion.button
                      whileHover={{ 
                        scale: 1.15,
                        rotateX: 10,
                        z: 30
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 text-white p-2.5 rounded-lg shadow-xl"
                      style={{ 
                        transformStyle: 'preserve-3d',
                        transform: 'translateZ(50px)'
                      }}
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm text-gray-300">{template.rating}</span>
                    <span className="text-sm text-gray-500">({template.sales} sales)</span>
                  </div>
                  <motion.h3 
                    className="text-xl mb-3 group-hover:text-blue-500 transition-colors font-semibold"
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    {template.name}
                  </motion.h3>
                  <div className="flex items-center justify-between">
                    <motion.p 
                      className="text-blue-400 text-2xl font-bold"
                      style={{ transform: 'translateZ(30px)' }}
                    >
                      {template.price}
                    </motion.p>
                    <motion.button
                      whileHover={{ scale: 1.1, rotateZ: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10" style={{ perspective: '1500px' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, z: -100 }}
          whileInView={{ opacity: 1, scale: 1, z: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center max-w-3xl mx-auto"
          style={{ 
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl mb-6"
            animate={{
              rotateY: [-2, 2, -2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            Need a <span className="text-blue-500">Custom Template</span>?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            style={{ transform: 'translateZ(30px)' }}
          >
            We can create a custom template tailored to your specific needs
          </motion.p>
          <motion.button
            whileHover={{ 
              scale: 1.1,
              rotateX: -10,
              rotateY: 10,
              z: 50
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 text-lg rounded-lg transition-colors"
            style={{ 
              transformStyle: 'preserve-3d',
              transform: 'translateZ(50px)',
              boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.5)'
            }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8" style={{ perspective: '1500px' }}>
            <motion.div
              whileHover={{ rotateY: 5, z: 20 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <motion.div
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Filter className="w-6 h-6 text-blue-500" />
                </motion.div>
                <h3 className="text-xl font-bold">CodeMarket</h3>
              </div>
              <p className="text-gray-400">Premium code for developers</p>
            </motion.div>
            <motion.div
              whileHover={{ rotateY: 5, z: 20 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h4 className="mb-4 font-semibold">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-500 transition-colors">React Components</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">UI Kits</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Full Projects</a></li>
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ rotateY: 5, z: 20 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h4 className="mb-4 font-semibold">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">License</a></li>
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ rotateY: 5, z: 20 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h4 className="mb-4 font-semibold">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-500 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Partners</a></li>
              </ul>
            </motion.div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 CodeMarket. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
