import { motion } from 'motion/react';
import { Code2, Menu, Search, User, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export default function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-purple-500/30"
      style={{ perspective: '1000px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Name with 3D Animation */}
          <Link to="/">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              style={{ perspective: '1000px' }}
            >
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                }}
                transition={{ 
                  rotateY: { duration: 8, repeat: Infinity, ease: 'linear' },
                }}
                style={{ 
                  transformStyle: 'preserve-3d'
                }}
              >
                <Code2 className="w-8 h-8 text-blue-500" />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl font-bold tracking-wider"
                style={{ 
                  transformStyle: 'preserve-3d',
                }}
              >
                <motion.span
                  className="inline-block text-blue-500"
                  animate={{ 
                    textShadow: [
                      '0 0 10px rgba(59, 130, 246, 0.5)',
                      '0 0 30px rgba(59, 130, 246, 1)',
                      '0 0 10px rgba(59, 130, 246, 0.5)',
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  style={{ 
                    display: 'inline-block',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  Code
                </motion.span>
                <motion.span
                  className="inline-block text-purple-500"
                  animate={{ 
                    color: ['#a855f7', '#3b82f6', '#a855f7']
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  style={{ 
                    display: 'inline-block',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  Market
                </motion.span>
              </motion.span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/">
              <motion.span 
                className="hover:text-blue-500 transition-colors cursor-pointer"
                whileHover={{ 
                  y: -2,
                  rotateX: -10,
                  scale: 1.05
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                Home
              </motion.span>
            </Link>
            <Link to="/templates">
              <motion.span 
                className="hover:text-blue-500 transition-colors cursor-pointer"
                whileHover={{ 
                  y: -2,
                  rotateX: -10,
                  scale: 1.05
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                Templates
              </motion.span>
            </Link>
            <motion.a 
              href="#" 
              className="hover:text-blue-500 transition-colors"
              whileHover={{ 
                y: -2,
                rotateX: -10,
                scale: 1.05
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              Bundles
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-blue-500 transition-colors"
              whileHover={{ 
                y: -2,
                rotateX: -10,
                scale: 1.05
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              Docs
            </motion.a>
          </div>

          {/* Icons with 3D hover */}
          <div className="flex items-center space-x-4" style={{ perspective: '1000px' }}>
            <motion.button 
              whileHover={{ 
                scale: 1.2,
                rotateY: 180,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="p-2 hover:text-blue-500 transition-colors"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Search className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ 
                scale: 1.2,
                rotateY: 180,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="p-2 hover:text-blue-500 transition-colors"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <User className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ 
                scale: 1.2,
                rotateY: 180,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="p-2 hover:text-blue-500 transition-colors relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </motion.button>
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-purple-500/30"
        >
          <div className="px-4 py-4 space-y-3">
            <Link to="/" className="block hover:text-blue-500 transition-colors">Home</Link>
            <Link to="/templates" className="block hover:text-blue-500 transition-colors">Templates</Link>
            <a href="#" className="block hover:text-blue-500 transition-colors">Bundles</a>
            <a href="#" className="block hover:text-blue-500 transition-colors">Docs</a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
