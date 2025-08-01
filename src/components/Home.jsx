import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white" // removed min-h-screen here
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5 }}
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-black bg-opacity-80 sticky top-0 w-full z-30 shadow-lg">
        <h1 className="text-2xl font-bold text-red-600 tracking-widest">FIGHTCLUB GYM</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="hover:text-red-500 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#trainers" className="hover:text-red-500 transition">
              Trainers
            </a>
          </li>
          <li>
            <a href="#facilities" className="hover:text-red-500 transition">
              Facilities
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-red-500 transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 pt-8">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-red-600">FightClub Gym</span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-2xl text-gray-300 max-w-3xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Push your limits, break barriers, and transform your body and mind. Join the ultimate fitness experience.
        </motion.p>
        <motion.a
          href="#programs"
          className="px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg transition"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Explore Programs
        </motion.a>
      </section>
    </motion.div>
  );
};

export default Home;
