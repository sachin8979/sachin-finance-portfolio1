import { motion } from "framer-motion";
import {
  Code,
  BrainCircuit,
  TrendingUp,
  BarChart3,
  Cpu,
  LineChart,
  Database,
  ShieldCheck,
} from "lucide-react";

export default function Skills() {
  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  const skills = [
    { name: "C++", level: 90 },
    { name: "Kotlin", level: 85 },
    { name: "JavaScript (React)", level: 80 },
    { name: "Node.js / Express", level: 75 },
    { name: "MongoDB", level: 80 },
    { name: "SQL & Databases", level: 85 },
    { name: "Android Development", level: 88 },
    { name: "Data Structures & Algorithms", level: 92 },
    { name: "APIs / Backend Architectures", level: 78 },
  ];

  const financeSkills = [
    { name: "Stock Market Basics", level: 95 },
    { name: "Technical Analysis", level: 90 },
    { name: "Chart Patterns", level: 88 },
    { name: "Options Basics", level: 80 },
    { name: "F&O Concepts", level: 82 },
    { name: "Risk Management", level: 92 },
    { name: "CIBIL Score Management", level: 85 },
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-[#05070D] text-white">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Skills & Expertise
          </span>
        </motion.h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          A fusion of cutting-edge technology skills and strong financial domain knowledge—crafted to build modern solutions and help people grow.
        </p>

        {/* --- Skill Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">

          {/* Software Development */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 
                      shadow-[0_0_25px_rgba(0,0,0,0.5)] hover:shadow-blue-500/20 
                      transition-all"
          >
            <Code className="text-blue-400" size={45} />
            <h3 className="text-2xl font-semibold mt-4 text-yellow-400">
              Software Development
            </h3>
            <p className="text-gray-400 mt-2">
              Building high-performance applications with modern frameworks and scalable backend systems.
            </p>
          </motion.div>

          {/* Finance & Trading */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7 }}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 
                      shadow-[0_0_25px_rgba(0,0,0,0.5)] hover:shadow-purple-500/20 
                      transition-all"
          >
            <TrendingUp className="text-purple-400" size={45} />
            <h3 className="text-2xl font-semibold mt-4 text-yellow-400">
              Finance & Stock Market
            </h3>
            <p className="text-gray-400 mt-2">
              Trained in charts, technical analysis, stock market foundations, F&O, and risk management.
            </p>
          </motion.div>

          {/* Data & Algorithms */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 
                      shadow-[0_0_25px_rgba(0,0,0,0.5)] hover:shadow-cyan-500/20 
                      transition-all"
          >
            <BrainCircuit className="text-cyan-400" size={45} />
            <h3 className="text-2xl font-semibold mt-4 text-yellow-400">
              Problem Solving (DSA)
            </h3>
            <p className="text-gray-400 mt-2">
              Strong logic building with hands-on practice on LeetCode & HackerRank.
            </p>
          </motion.div>
        </div>

        {/* --- Technical Skill Bars --- */}
        <h3 className="text-3xl font-bold text-yellow-400 mb-6">Technical Skills</h3>

        <div className="space-y-6 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span className="text-yellow-400">{skill.level}%</span>
              </div>

              <div className="w-full bg-white/10 h-3 rounded-full">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Finance Skill Bars --- */}
        <h3 className="text-3xl font-bold text-yellow-400 mb-6">Finance Skills</h3>

        <div className="space-y-6">
          {financeSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span className="text-yellow-400">{skill.level}%</span>
              </div>

              <div className="w-full bg-white/10 h-3 rounded-full">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-yellow-500 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
