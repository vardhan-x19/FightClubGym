import React from 'react'
import { motion } from 'framer-motion'

const Home = ({ bgImage }) => (
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
    <div className="relative z-20 flex flex-col items-center">
      {/* Your Home content here */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
        Fight Club Gym
      </h1>
      <p className="text-xl md:text-2xl text-gray-200 text-center max-w-2xl">
        Push your limits. Join the revolution.
      </p>
    </div>
  </section>
)

export default Home
