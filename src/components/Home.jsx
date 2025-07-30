import React from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Trainers", href: "#trainers" },
  { name: "Facilities", href: "#facilities" },
  { name: "Join", href: "#join" }
]

const Home = () => (
  <section className="min-h-screen  relative flex flex-col bg-black">
    {/* Navbar */}
    <nav className="flex justify-between items-center px-8 py-6 bg-black bg-opacity-80 fixed w-full z-30">
      <span className="text-2xl font-bold text-red-600 tracking-widest">FIGHTCLUB GYM</span>
      <ul className="flex gap-8">
        {navLinks.map(link => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-white hover:text-red-500 transition font-semibold"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    {/* Hero Section */}
    <div className="flex flex-col items-center justify-center flex-1 text-center pt-32">
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to <span className="text-red-600">FightClub Gym</span>
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Unleash your potential. Train with the best. Become unstoppable.
      </motion.p>
      <motion.a
        href="#join"
        className="px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg transition"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Join Now
      </motion.a>
    </div>
  </section>
)

export default Home