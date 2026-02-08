import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-20 bg-[#05070D] text-white overflow-hidden">

      {/* Neon Gradient Background Orb Left */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full 
        bg-gradient-to-br from-blue-600 to-purple-700 blur-3xl opacity-40" />

      {/* Neon Gradient Background Orb Right */}
      <div className="absolute bottom-0 -right-10 w-[500px] h-[500px] rounded-full 
        bg-gradient-to-br from-purple-700 to-blue-600 blur-[150px] opacity-30" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-4xl text-center"
      >
        {/* Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-block px-5 py-2 rounded-full 
          bg-blue-500/20 backdrop-blur-md border border-blue-400/20
          text-blue-300 text-sm font-medium mb-6"
        >
          Finance | Technology | Consulting
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Empowering Your  
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            {" "}Financial Future
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto"
        >
          Premium insights, personalized strategies, and modern technology—  
          all crafted to elevate your financial growth and build long-term wealth.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {/* Primary CTA - Gold */}
          <a
            href="/contact"
            className="px-8 py-3 rounded-xl font-semibold text-black
            bg-gradient-to-r from-yellow-400 to-yellow-600
            hover:shadow-[0_0_25px_rgba(255,215,0,0.4)]
            transition-all"
          >
            Book Consultation
          </a>

          {/* Secondary CTA */}
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 rounded-xl font-semibold border border-gray-500/40 
            hover:border-white transition-all"
          >
            Download Resume
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917310897921"
            target="_blank"
            className="px-8 py-3 rounded-xl font-semibold 
            bg-green-600 hover:bg-green-700 shadow-lg transition-all"
          >
            WhatsApp
          </a>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-14 flex flex-wrap justify-center gap-10 text-center"
        >
          <div>
            <h3 className="text-4xl font-bold text-yellow-400">2K+</h3>
            <p className="text-gray-400">Hours of Expertise</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              3K+
            </h3>
            <p className="text-gray-400">Students Helped</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-400">15+</h3>
            <p className="text-gray-400">Major Projects</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
