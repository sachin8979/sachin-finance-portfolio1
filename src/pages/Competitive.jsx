import { motion } from "framer-motion";
import { Code, Award, Trophy, Zap } from "lucide-react";

export default function Competitive() {
  const stats = [
    {
      platform: "LeetCode",
      solved: "350+ Problems",
      rating: "Python / C++",
      icon: <Code size={45} className="text-yellow-400" />,
      desc: "Strong problem-solving skills with consistency in arrays, DP, recursion, trees, graphs & patterns.",
      link: "#",
    },
    {
      platform: "HackerRank",
      solved: "5-Star (Problem Solving)",
      rating: "Gold Badge",
      icon: <Award size={45} className="text-blue-400" />,
      desc: "Solved challenges in algorithms, SQL, data structures and earned multiple badges.",
      link: "#",
    },
    {
      platform: "GeeksforGeeks",
      solved: "DSA Track Completed",
      rating: "Strong",
      icon: <Trophy size={45} className="text-purple-400" />,
      desc: "Completed structured DSA course including searching, sorting, recursion, trees & heaps.",
      link: "#",
    },
  ];

  const badges = [
    { title: "LeetCode Streak Badge", color: "text-yellow-400" },
    { title: "HackerRank Gold Problem Solving", color: "text-blue-400" },
    { title: "GFG DSA Completion Badge", color: "text-purple-400" },
    { title: "Consistency Badge", color: "text-green-400" },
  ];

  const achievements = [
    "Solved 300+ DSA problems across LeetCode & HackerRank.",
    "Strong expertise in arrays, DP, recursion, graphs & OOP design.",
    "Consistent contest participation & ranking improvements.",
    "Strong coding fundamentals applicable to finance & tech projects.",
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
          Competitive{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Programming
          </span>
        </motion.h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-20">
          Showcasing my journey across DSA, coding challenges, competitive environments, and algorithmic thinking.
        </p>

        {/* STATS CARDS */}
        <h3 className="text-3xl font-bold text-yellow-400 mb-10">
          Platform Stats
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl
                border border-white/10
                shadow-[0_0_30px_rgba(0,0,0,0.4)]
                hover:shadow-[0_0_35px_rgba(0,150,255,0.35)]
                transition-all"
            >
              {stat.icon}
              <h4 className="text-xl font-semibold mt-4 text-yellow-300">
                {stat.platform}
              </h4>

              <p className="text-blue-300 font-medium mt-1">{stat.solved}</p>
              <p className="text-gray-400 text-sm">{stat.rating}</p>

              <p className="mt-3 text-gray-300 leading-relaxed">{stat.desc}</p>

              <a
                href={stat.link}
                className="inline-block mt-5 text-sm text-blue-400 hover:text-blue-300"
              >
                View Profile →
              </a>
            </motion.div>
          ))}
        </div>

        {/* BADGES */}
        <h3 className="text-3xl font-bold text-yellow-400 mb-10">
          Achieved Badges
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10
                shadow-[0_0_25px_rgba(255,215,0,0.25)]
                hover:shadow-[0_0_30px_rgba(255,215,0,0.35)]
                transition-all text-center"
            >
              <Zap size={40} className={`${badge.color} mx-auto`} />
              <h4 className="text-lg font-semibold mt-3 text-yellow-300">
                {badge.title}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* ACHIEVEMENTS SECTION */}
        <h3 className="text-3xl font-bold text-yellow-400 mb-8">
          Key Achievements
        </h3>

        <ul className="space-y-4 text-gray-300 text-lg">
          {achievements.map((ach, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3"
            >
              <span className="text-yellow-400 text-xl">•</span>
              {ach}
            </motion.li>
          ))}
        </ul>

      </div>
    </section>
  );
}
