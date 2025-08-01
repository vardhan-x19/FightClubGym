import React from 'react'
import { motion } from 'framer-motion'

const trainers = [
  { name: "Alex", specialty: "Boxing", img: "/trainer1.jpg" },
  { name: "Jordan", specialty: "MMA", img: "/trainer2.jpg" },
  { name: "Sam", specialty: "Strength", img: "/trainer3.jpg" }
]

const Trainers = () => (
  <section id="trainers" className="min-h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden">
    <motion.h2
      className="text-4xl md:text-5xl font-bold text-white mb-8"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Meet Our Trainers
    </motion.h2>
    <div className="flex flex-wrap gap-8 justify-center mb-8">
      {trainers.map((t, i) => (
        <motion.div
          key={t.name}
          className="bg-gray-900 bg-opacity-80 rounded-xl p-6 flex flex-col items-center shadow-lg"
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: i * 0.2, duration: 0.7, type: "spring" }}
        >
          <img src={t.img} alt={t.name} className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-red-600" />
          <h3 className="text-xl text-white font-semibold">{t.name}</h3>
          <p className="text-red-400">{t.specialty}</p>
        </motion.div>
      ))}
    </div>
    <motion.p
      className="text-lg text-gray-300 italic text-center max-w-xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 1 }}
    >
      "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it."
    </motion.p>
  </section>
)

export default Trainers