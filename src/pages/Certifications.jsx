import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  GraduationCap,
  BookOpenCheck,
} from "lucide-react";

export default function Certifications() {
  const timeline = [
    {
      year: "2022",
      title: "CS50 – Introduction to Computer Science",
      org: "Harvard University",
      desc: "Completed foundational concepts in algorithms, C, memory, data structures, and problem-solving.",
    },
    {
      year: "2022",
      title: "Stock Market Technical Analysis Training",
      org: "Independent + Online Institutions",
      desc: "Gained core skills in charts, indicators, market psychology, and F&O basics.",
    },
    {
      year: "2023",
      title: "Android Development Certification",
      org: "Meta (Kotlin Track)",
      desc: "Learned complete Android app development including lifecycle, UI/UX, intents, menus, dialogs, and MVVM.",
    },
    {
      year: "2024",
      title: "Data Structures & Algorithms",
      org: "GeeksforGeeks",
      desc: "Mastered key DSA concepts including searching, sorting, recursion, heaps, trees, and complex algorithms.",
    },
  ];

  const certificates = [
    {
      icon: <Award size={40} className="text-yellow-400" />,
      title: "CS50 Certificate",
      org: "Harvard",
      desc: "Advanced foundations in CS & algorithms.",
    },
    {
      icon: <ShieldCheck size={40} className="text-blue-400" />,
      title: "Cybersecurity Basics",
      org: "Self Learning",
      desc: "Learned OS security, basic cryptography & network security concepts.",
    },
    {
      icon: <BookOpenCheck size={40} className="text-purple-400" />,
      title: "Android Development",
      org: "Meta",
      desc: "Full Kotlin stack including UI, workflows, and app architectures.",
    },
    {
      icon: <GraduationCap size={40} className="text-green-400" />,
      title: "DSA Certification",
      org: "GFG",
      desc: "Completed DSA learning track with strong problem-solving skills.",
    },
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-[#05070D] text-white">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Certifications
          </span>
        </motion.h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Verified qualifications and certifications showcasing my journey in
          finance, technology, cybersecurity, and software engineering.
        </p>

        {/* TIMELINE SECTION */}
        <h3 className="text-3xl font-bold text-yellow-400 mb-8">
          Certification Timeline
        </h3>

        <div className="relative border-l border-white/10 ml-6 mb-20">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="mb-14 ml-6"
            >
              {/* Neon Dot */}
              <div className="absolute -left-3 mt-2 w-6 h-6 rounded-full 
                bg-gradient-to-br from-yellow-400 via-purple-500 to-blue-500 shadow-lg" />

              <h3 className="text-2xl font-semibold text-yellow-400">
                {item.title}
              </h3>
              <p className="text-blue-300 font-medium">{item.org}</p>
              <span className="text-gray-500 text-sm">{item.year}</span>

              <p className="mt-3 text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* GRID CARDS SECTION */}
        <h3 className="text-3xl font-bold text-yellow-400 mb-10">
          Certification Highlights
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl
              border border-white/10
              shadow-[0_0_30px_rgba(0,0,0,0.4)]
              hover:shadow-[0_0_30px_rgba(255,215,0,0.35)]
              transition-all"
            >
              {cert.icon}
              <h4 className="text-xl font-semibold mt-4 text-yellow-300">
                {cert.title}
              </h4>
              <p className="text-blue-300 font-medium">{cert.org}</p>
              <p className="text-gray-300 mt-2">{cert.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
