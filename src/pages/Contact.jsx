import { useState } from "react";
import { motion } from "framer-motion";
import { sendContactMessage } from "../api/contactApi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await sendContactMessage(formData);

      setStatus("Message Sent Successfully ✔");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact Error:", error);
      setStatus(`Failed: ${error.response?.data?.message || error.message || "Server Error"}`);
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-[#05070D] text-white flex justify-center">
      <div className="max-w-4xl w-full">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Contact{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-yellow-400 text-transparent bg-clip-text">
            Me
          </span>
        </motion.h2>

        <p className="text-gray-400 text-center max-w-xl mx-auto mb-14">
          Feel free to reach out for collaborations, projects, financial coaching, or tech consulting.
        </p>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 
          shadow-[0_0_50px_rgba(0,0,0,0.5)] w-full"
        >
          {/* Name */}
          <label className="block mb-6">
            <span className="text-gray-300">Full Name</span>
            <input
              required
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full mt-2 p-3 bg-black/30 border border-white/10 rounded-xl 
              text-white focus:outline-none focus:border-yellow-400"
            />
          </label>

          {/* Email */}
          <label className="block mb-6">
            <span className="text-gray-300">Email Address</span>
            <input
              required
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full mt-2 p-3 bg-black/30 border border-white/10 rounded-xl 
              text-white focus:outline-none focus:border-yellow-400"
            />
          </label>

          {/* Message */}
          <label className="block mb-6">
            <span className="text-gray-300">Message</span>
            <textarea
              required
              rows="6"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full mt-2 p-3 bg-black/30 border border-white/10 rounded-xl 
              text-white focus:outline-none focus:border-yellow-400"
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl font-semibold text-black 
            bg-gradient-to-r from-yellow-400 to-yellow-600
            hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]
            transition-all"
          >
            Send Message
          </button>

          {/* Status Message */}
          <p className="mt-4 text-center text-gray-300">{status}</p>
        </motion.form>
      </div>
    </section>
  );
}
