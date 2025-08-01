import React from 'react'
import { motion } from 'framer-motion'
import { FaDumbbell, FaRunning, FaUserShield } from 'react-icons/fa'

const facilities = [
  { icon: <FaDumbbell size={40} />, label: "Modern Equipment" },
  { icon: <FaRunning size={40} />, label: "Cardio Zone" },
  { icon: <FaUserShield size={40} />, label: "Personal Training" }
]

const Facilities = () => (
  <section id="facilities" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
    <motion.h2
      className="text-4xl md:text-5xl font-bold text-white mb-8"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Our Facilities
    </motion.h2>
    <div className="flex flex-wrap gap-12 justify-center mb-8">
      {facilities.map((f, i) => (
        <motion.div
          key={f.label}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: i * 0.2, duration: 0.7, type: "spring" }}
        >
          <div className="text-red-500 mb-2">{f.icon}</div>
          <span className="text-white text-lg">{f.label}</span>
        </motion.div>
      ))}
    </div>
    <motion.p
      className="text-lg text-gray-300 italic text-center max-w-xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 1 }}
    >
      "Every champion was once a contender that refused to give up."
    </motion.p>
  </section>
)

export default Facilities