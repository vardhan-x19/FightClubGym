// src/pages/Manifesto.jsx
import { motion } from 'framer-motion';

const manifestoData = [
  {
    heading: "This is not just training.",
    text: "It’s a ritual. A rebellion against weakness. A choice to become better, one rep at a time.",
  },
  {
    heading: "Discipline over motivation.",
    text: "Motivation fades. Discipline remains. We build habits that survive chaos.",
  },
  {
    heading: "Pain is not the enemy.",
    text: "Pain is the truth. It reveals. It teaches. It purifies.",
  },
  {
    heading: "You fight you.",
    text: "We’re not here to look pretty. We’re here to fight our own limits. Inside and outside the gym.",
  },
];

export default function Manifesto() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold text-center mb-16 tracking-widest"
      >
        OUR PHILOSOPHY
      </motion.h1>

      <div className="space-y-16 max-w-4xl mx-auto">
        {manifestoData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-zinc-900 p-6 rounded-xl shadow-lg border border-zinc-700"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">{item.heading}</h2>
            <p className="text-zinc-300 leading-relaxed text-lg">{item.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-20 text-center text-zinc-400 italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <p>“The things you own end up owning you.” — Fight Club</p>
      </motion.div>
    </div>
  );
}
