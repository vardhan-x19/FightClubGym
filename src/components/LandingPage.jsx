import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const LandingPage = ({ bgImage, onEnter }) => {
  // Trigger animation if user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) onEnter();
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onEnter]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-black">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 15,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />

      {/* Text and Button */}
      <div className="relative z-20 text-center px-4">
        <motion.h1
          className="text-red-600 text-5xl md:text-6xl font-extrabold mb-6 tracking-wide drop-shadow-lg"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 3.5,
            ease: 'easeOut',
          }}
        >
          Welcome to Fight Club Gym
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          "You don't know yourself until you've been in a fight. The body achieves what the mind believes."
        </motion.p>

        <motion.a
          href="#home"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full shadow-xl transition-all duration-300 inline-block"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Join the Revolution
        </motion.a>
      </div>
    </section>
  );
};

export default LandingPage;
