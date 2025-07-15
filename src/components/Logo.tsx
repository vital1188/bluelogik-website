import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', showText = true }) => {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      {/* Animated Logo Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
        >
          {/* Gradient definition */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066ff" />
              <stop offset="100%" stopColor="#4d94ff" />
            </linearGradient>
          </defs>
          
          {/* Outer ring with animation */}
          <motion.path
            d="M50 10 C72.091 10 90 27.909 90 50 C90 72.091 72.091 90 50 90"
            stroke="url(#logoGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, rotate: -90 }}
            animate={{ 
              pathLength: 1,
              rotate: 0
            }}
            transition={{ 
              pathLength: { duration: 1.5, ease: "easeInOut" },
              rotate: { duration: 1.5, ease: "easeOut" }
            }}
            style={{ transformOrigin: "50px 50px" }}
          />
          
          {/* Middle ring */}
          <motion.path
            d="M50 25 C63.807 25 75 36.193 75 50 C75 63.807 63.807 75 50 75"
            stroke="url(#logoGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, rotate: 90 }}
            animate={{ 
              pathLength: 1,
              rotate: 0
            }}
            transition={{ 
              pathLength: { duration: 1.5, delay: 0.2, ease: "easeInOut" },
              rotate: { duration: 1.5, delay: 0.2, ease: "easeOut" }
            }}
            style={{ transformOrigin: "50px 50px" }}
          />
          
          {/* Inner circle with pulse */}
          <motion.circle
            cx="50"
            cy="50"
            r="8"
            fill="url(#logoGradient)"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ 
              duration: 0.8,
              delay: 0.8,
              times: [0, 0.6, 1]
            }}
            style={{ transformOrigin: "50px 50px" }}
          />
          
          {/* Connecting line */}
          <motion.path
            d="M50 42 L50 25"
            stroke="url(#logoGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
        </svg>
        
        {/* Subtle glow effect */}
        <motion.div
          className="absolute inset-0 bg-blue-500/20 blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      {/* Logo Text */}
      {showText && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl font-thin tracking-wider"
        >
          <span className="gradient-text-blue">Blue</span>
          <span className="text-gray-900">Logik</span>
        </motion.div>
      )}
    </Link>
  );
};

export default Logo;
