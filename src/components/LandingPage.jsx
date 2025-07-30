import React from 'react';
import { motion } from 'framer-motion';

const LandingPage = ({ bgImage }) => {
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

      {/* Gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <motion.h1
          className="text-red-600 text-5xl md:text-8xl font-extrabold mb-6 tracking-wide drop-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2.5,
            ease: 'easeOut',
          }}
        >
          Fight Club Gym
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          "You don't know yourself until you've been in a fight. The body achieves what the mind believes."
        </motion.p>

        <motion.button
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          Join the Revolution
        </motion.button>
      </div>

      {/* Subtle floating particles or motion dots for vibe (optional) */}
      <motion.div
        className="absolute w-3 h-3 bg-red-500 rounded-full top-1/4 left-1/3 z-10"
        animate={{
          y: [0, -10, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
    </section>
  );
};

export default LandingPage;
