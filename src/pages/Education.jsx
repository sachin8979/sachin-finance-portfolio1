import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School } from "lucide-react";

export default function Education() {
  const educationTimeline = [
    {
      degree: "B.Tech (CSE) — Cybersecurity Specialization",
      institution: "Lovely Professional University",
      year: "2022 — 2026",
      details:
        "Core areas include cybersecurity fundamentals, operating systems, networking, DSA, algorithms, cloud computing, and hands-on labs.",
    },
    {
      degree: "Stock Market Training (Technical + Fundamental Basics)",
      institution: "Self-paced + Online Institutions",
      year: "2022 — 2023",
      details:
        "Completed training in technical analysis, candlestick patterns, F&O basics, options understanding, indicators, chart reading, and market psychology.",
    },
    {
      degree: "12th — PCM (Science Stream)",
      institution: "Intermediate Level",
      year: "Completed",
      details:
        "Built foundation in mathematics, physics, computer science, and analytical subjects.",
    },
  ];

  const highlights = [
    {
      icon: <GraduationCap size={40} className="text-yellow-400" />,
      title: "Cybersecurity Focus",
      text: "Specialized learning in networks, OS, cryptography, and ethical fundamentals.",
    },
    {
      icon: <BookOpen size={40} className="text-blue-400" />,
      title: "Stock Market Training",
      text: "Hands-on knowledge of charts, patterns, indicators, and risk strategies.",
    },
    {
      icon: <School size={40} className="text-purple-400" />,
      title: "Technical Foundation",
      text: "Strong base in mathematics, algorithms, and logical problem-solving.",
    },
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-[#05070D] text-white">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-yellow-400 text-transparent bg-clip-text">
            Education Journey
          </span>
        </motion.h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
          A structured academic path that blends engineering, finance, and real-world technology.
        </p>

        {/* TIMELINE */}
        <div className="relative border-l border-white/10 ml-6 mb-20">
          {educationTimeline.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="mb-14 ml-6"
            >
              {/* Neon Timeline Dot */}
              <div className="absolute -left-3 mt-2 w-6 h-6 rounded-full 
                bg-gradient-to-br from-yellow-400 via-purple-500 to-blue-500 shadow-lg" />

              <h3 className="text-2xl font-semibold text-yellow-400">{edu.degree}</h3>
              <p className="text-blue-300 font-medium">{edu.institution}</p>
              <span className="text-gray-500 text-sm">{edu.year}</span>

              <p className="mt-3 text-gray-300 leading-relaxed">{edu.details}</p>
            </motion.div>
          ))}
        </div>

        {/* HIGHLIGHT CARDS */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-yellow-400 mb-10"
        >
          Education Highlights
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl 
              border border-white/10
              shadow-[0_0_30px_rgba(0,0,0,0.4)]
              hover:shadow-[0_0_35px_rgba(255,215,0,0.35)]
              transition-all"
            >
              {item.icon}
              <h4 className="text-xl font-semibold mt-4 text-yellow-400">{item.title}</h4>
              <p className="mt-3 text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
