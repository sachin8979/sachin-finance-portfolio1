import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axios.post("https://finance-backend-p4nq.onrender.com/api/contact", form);
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact Form Error:", error);
      if (error.response) {
        setStatus(`Error: ${error.response.data.message || error.response.statusText}`);
      } else if (error.request) {
        setStatus("Error: No response from server. Check network.");
      } else {
        setStatus(`Error: ${error.message}`);
      }
    }
  };

  return (
    <section className="w-full flex justify-center mt-10">
      <div className="bg-[#111827]/70 backdrop-blur-xl shadow-xl rounded-2xl p-10 w-[80%] text-white border border-white/10">

        <h2 className="text-3xl font-bold mb-6 text-gradient">
          Contact Me
        </h2>

        <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="glass-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="glass-input"
              required
            />
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="glass-input"
            required
          />

          <button type="submit" className="glass-button">
            Send Message
          </button>

          {status && <p className="text-center text-purple-300 mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
}
