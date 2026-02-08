import { motion } from "framer-motion";
import {
  LineChart,
  Brain,
  CreditCard,
  Laptop,
  Sparkles,
  BarChart3,
} from "lucide-react";

export default function Services() {
  const smallServices = [
    {
      icon: <LineChart size={40} className="text-blue-400" />,
      title: "Stock Market & Trading Guidance",
      text: "Understanding charts, patterns, indicators, technical analysis, and F&O basics for confident decision-making.",
    },
    {
      icon: <CreditCard size={40} className="text-yellow-400" />,
      title: "CIBIL Score & Credit Repair",
      text: "Personalized guidance to improve your CIBIL score, reduce debt stress, optimize loans, and rebuild credit health.",
    },
    {
      icon: <Laptop size={40} className="text-purple-400" />,
      title: "App & Website Development",
      text: "Developing modern, mobile-friendly apps and full-stack finance platforms with stable backend APIs.",
    },
    {
      icon: <BarChart3 size={40} className="text-cyan-400" />,
      title: "Financial Planning & Budgeting",
      text: "Helping individuals structure their expenses, plan savings, and manage EMIs effectively.",
    },
    {
      icon: <Brain size={40} className="text-pink-400" />,
      title: "AI Automation for Finance",
      text: "Using AI workflows to automate analysis, alerts, portfolio tracking, and research processes.",
    },
    {
      icon: <Sparkles size={40} className="text-green-400" />,
      title: "Consultation Sessions",
      text: "One-on-one sessions for students & professionals to build clarity in finance, career, and technology.",
    },
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-[#05070D] text-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Professional Services
          </span>
        </motion.h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          A premium suite of technology + finance services designed to empower
          students, professionals, and small businesses with smarter insights and tools.
        </p>

        {/* FEATURED LARGE SERVICE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="p-12 rounded-3xl bg-white/5 backdrop-blur-xl
            border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]
            hover:shadow-[0_0_60px_rgba(255,215,0,0.35)]
            transition-all mb-20"
        >
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <LineChart size={80} className="text-yellow-400" />

            <div>
              <h3 className="text-3xl font-bold text-yellow-400 mb-4">
                Premium Financial Coaching & Consultation
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                Get personalized financial advice tailored to your goals—whether you're
                improving your CIBIL score, planning investments, budgeting monthly expenses, or
                learning the stock market.  
                My consultation is designed to give you total clarity and a structured action plan.
              </p>

              <a
                href="/contact"
                className="inline-block mt-8 px-8 py-3 rounded-xl font-semibold
                  text-black bg-gradient-to-r from-yellow-400 to-yellow-600
                  hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]
                  transition-all"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </motion.div>

        {/* SMALL SERVICE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {smallServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl 
              border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)]
              hover:shadow-[0_0_25px_rgba(0,150,255,0.35)]
              transition-all"
            >
              {service.icon}
              <h4 className="text-xl font-semibold mt-4 text-yellow-300">{service.title}</h4>
              <p className="mt-3 text-gray-300 leading-relaxed">
                {service.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
