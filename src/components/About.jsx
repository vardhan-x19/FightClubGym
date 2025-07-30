import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

const About = ({ bgImage }) => {
  return (
    <section
      className="min-h-screen  flex flex-col items-center justify-center relative overflow-hidden bg-black"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-opacity-60 z-10" />
      <div className="relative z-20 max-w-4xl text-center space-y-8 px-6 py-32">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-red-600"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
        >
          What is Fight Club Gym?
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          variants={fadeUp}
        >
          Fight Club Gym is not just a gym — it's a mindset. Inspired by the raw philosophy of the underground spirit in <em>Fight Club</em>, we believe true transformation comes from within. We break limits, ignore comfort, and train like warriors.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          variants={fadeUp}
        >
          There are no mirrors here, no ego — only grit, sweat, and discipline. Whether you're a beginner or a fighter in the making, this is your arena to fight your battles — mentally and physically.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-red-300 italic"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          variants={fadeUp}
        >
          “It's only after you've lost everything that you're free to do anything.” – Fight Club
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={5}
          variants={fadeUp}
        >
          Join the rebellion. Train your body. Free your mind.
        </motion.p>
      </div>
    </section>
  )
}

export default About
