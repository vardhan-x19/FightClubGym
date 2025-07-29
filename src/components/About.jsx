import React from 'react'
import { motion } from 'framer-motion'

const About = ({ bgImage }) => (
  <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
    {/* Animated background image */}
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
      animate={{ scale: 1.08 }}
      transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
    />
    {/* Overlay for better text visibility */}
    <div className="absolute inset-0  bg-opacity-60 z-10"></div>
    <motion.div
      className="relative z-20 flex flex-col items-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
      >
        Welcome to Fight Club Gym
      </motion.h2>
      <motion.p
        className="text-xl md:text-2xl text-red-400 font-semibold text-center drop-shadow mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        "First rule: You have to want it."
      </motion.p>
      <motion.p
        className="text-lg md:text-xl text-gray-200 text-center max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
          Born from the underground spirit of fighters, this gym is not for the faint-hearted. FightClub Gym is where iron meets willpower. No mirrors. No ego. Just grit, sweat, and real transformation.
      </motion.p>
    </motion.div>
  </section>
)

export default About