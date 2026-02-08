import { motion } from "framer-motion";
import ProfilePhoto from "../assets/profile.jpg"; // <-- replace with your actual image

export default function About() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-[#05070D] text-white">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT — PHOTO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 rounded-full overflow-hidden 
            backdrop-blur-xl border border-white/10
            shadow-[0_0_40px_rgba(0,0,0,0.7)]">

            {/* Neon Glow Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br 
              from-blue-700/40 via-purple-600/40 to-blue-900/40 blur-2xl" />

            <img
              src={ProfilePhoto}
              alt="Sachin Singh"
              className="relative w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* RIGHT — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-1 bg-yellow-500/20 border border-yellow-400/30 
            text-yellow-300 rounded-full text-sm">
            About Me
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Crafting Digital Solutions &  
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Financial Growth.
            </span>
          </h2>

          <p className="mt-5 text-gray-300 leading-relaxed text-lg">
            I am Sachin Singh — a finance-focused technologist who blends 
            modern software engineering with actionable financial intelligence.
            With strong experience in fintech, trading, credit systems, and
            data-driven decision-making, my mission is to empower individuals
            and businesses with clarity, automation, and smart financial tools.
          </p>

          <p className="mt-3 text-gray-400">
            From premium UI development to backend automation, data workflows,
            algorithmic trading basics, and financial consulting — I help users 
            solve real-world problems using technology & structured finance.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 text-center">
            <div>
              <h3 className="text-3xl font-bold text-yellow-400">3+</h3>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                15+
              </h3>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-yellow-400">3000+</h3>
              <p className="text-gray-400 text-sm">People Helped</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="/contact"
              className="px-8 py-3 rounded-xl font-semibold text-black
                bg-gradient-to-r from-yellow-400 to-yellow-600
                hover:shadow-[0_0_25px_rgba(255,215,0,0.4)]
                transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
