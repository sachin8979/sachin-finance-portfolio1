import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BarChart3,
  LineChart,
  DollarSign,
  Laptop,
  Smartphone,
  Brain,
  Code,
} from "lucide-react";

export default function Projects() {
  const financeProjects = [
    {
      icon: <BarChart3 size={40} className="text-yellow-400" />,
      title: "Personal Finance Coach",
      desc: "AI-powered financial guidance tool for budgeting, EMI management, CIBIL repair, health tracking, and loan optimization.",
      link: "#",
    },
    {
      icon: <LineChart size={40} className="text-blue-400" />,
      title: "Alternative-Routes in Road Networks (OpenGL + C++)",
      desc: "Simulated alternate pathfinding using Dijkstra’s algorithm with real-time speed & traffic variations.",
      link: "#",
    },
    {
      icon: <DollarSign size={40} className="text-purple-400" />,
      title: "Blog Traffic Predictor (Machine Learning)",
      desc: "Predicted future article traffic using ML, historical data, article metadata, and promotional features.",
      link: "#",
    },
  ];

  const techProjects = [
    {
      icon: <Smartphone size={40} className="text-green-400" />,
      title: "Kitchen Recipe Recommender App (MVVM + API)",
      desc: "Recommends recipes based on available vegetables using Spoonacular API with clean MVVM architecture.",
      link: "#",
    },
    {
      icon: <Laptop size={40} className="text-blue-400" />,
      title: "SIMPLECHATBOT (C++)",
      desc: "A fully modular chatbot built in C++ with multiple source files. Uses custom logic + pattern responses.",
      link: "#",
    },
    {
      icon: <Brain size={40} className="text-pink-400" />,
      title: "AI Consulting Outreach OS System",
      desc: "A complete client acquisition OS with automated outreach prompts, scripts, and consulting systems.",
      link: "#",
    },
    {
      icon: <Code size={40} className="text-cyan-400" />,
      title: "Android UI & Lifecycle Projects",
      desc: "Multiple Android development mini–projects using Kotlin: lifecycle, menus, dialogs, permissions & intents.",
      link: "#",
    },
  ];

  const Card = ({ icon, title, desc, link }) => (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl 
      border border-white/10
      shadow-[0_0_30px_rgba(0,0,0,0.4)]
      hover:shadow-[0_0_30px_rgba(0,150,255,0.35)]
      transition-all"
    >
      {icon}
      <h4 className="text-xl font-semibold mt-4 text-yellow-300">{title}</h4>
      <p className="mt-3 text-gray-300">{desc}</p>

      <Link
        to={link}
        className="inline-block mt-5 text-sm text-blue-400 hover:text-blue-300"
      >
        View Project →
      </Link>
    </motion.div>
  );

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-[#05070D] text-white">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Featured{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Projects
          </span>
        </motion.h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-20">
          A blend of financial systems, AI-driven tools, algorithmic projects, and modern application development.
        </p>

        {/* FINANCE PROJECTS */}
        <h3 className="text-3xl font-bold text-yellow-400 mb-8">
          Finance & Consulting Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {financeProjects.map((p, i) => (
            <Card key={i} {...p} />
          ))}
        </div>

        {/* TECH PROJECTS */}
        <h3 className="text-3xl font-bold text-blue-400 mb-8">
          Technical & Development Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {techProjects.map((p, i) => (
            <Card key={i} {...p} />
          ))}
        </div>

      </div>
    </section>
  );
}
