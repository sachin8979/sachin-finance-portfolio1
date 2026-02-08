import { motion } from "framer-motion";
import { Briefcase, Award, Rocket } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Finance & Market Analyst",
      company: "Independent",
      duration: "2022 — Present",
      description:
        "Worked on stock market analysis, chart patterns, F&O basics, options understanding, and long-term wealth planning.",
    },
    {
      title: "Tech Developer & App Builder",
      company: "Freelance",
      duration: "2021 — Present",
      description:
        "Developed multiple applications including Android apps, financial tools, backend APIs, and full-stack web systems.",
    },
    {
      title: "Data Structures & Algorithms",
      company: "GFG + LeetCode",
      duration: "Ongoing",
      description:
        "Strong problem-solving foundation with extensive practice in algorithms, data structures, and performance optimization.",
    },
  ];

  const highlights = [
    {
      icon: <Award size={40} className="text-yellow-400" />,
      title: "1+ Year Trading Experience",
      text: "Hands-on experience understanding charts, indicators, market behavior & risk strategies.",
    },
    {
      icon: <Rocket size={40} className="text-blue-400" />,
      title: "Advanced Tech Projects",
      text: "Built multiple Android and full-stack apps including finance analysis, portfolio tools, and backend APIs.",
    },
    {
      icon: <Briefcase size={40} className="text-purple-400" />,
      title: "Freelance Consulting",
      text: "Helping students & professionals with financial planning, credit planning & budgeting.",
    },
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-[#05070D] text-white">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Experience Journey
          </span>
        </motion.h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          A powerful combination of finance, technology, trading, and digital solutions that shape my unique career path.
        </p>

        {/* TIMELINE */}
        <div className="relative border-l border-white/10 ml-6 mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="mb-14 ml-6"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3 mt-2 w-6 h-6 rounded-full 
                bg-gradient-to-br from-yellow-400 to-purple-500 shadow-lg" />

              <h3 className="text-2xl font-semibold text-yellow-400">{exp.title}</h3>
              <p className="text-blue-300 font-medium">{exp.company}</p>
              <span className="text-gray-500 text-sm">{exp.duration}</span>

              <p className="mt-3 text-gray-300 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        {/* HIGHLIGHT CARDS — Glassmorphism */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-yellow-400 mb-10"
        >
          Key Highlights
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl 
              border border-white/10
              shadow-[0_0_30px_rgba(0,0,0,0.45)]
              hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]
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
