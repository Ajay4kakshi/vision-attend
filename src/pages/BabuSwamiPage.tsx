import { useState } from "react";
import { motion } from "framer-motion";
import babuSwami1 from "@/assets/babu-swami-1.png";
import babuSwami2 from "@/assets/babu-swami-2.png";
import babuSwami3 from "@/assets/babu-swami-3.png";

const floatingOm = {
  animate: {
    y: [0, -20, 0],
    opacity: [0.3, 1, 0.3],
    rotate: [0, 10, -10, 0],
  },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
};

const packages = [
  {
    title: "Basic Blessing",
    price: "₹99",
    emoji: "🙏",
    features: [
      "For missing charger problems",
      "Low attendance healing",
      "Slow internet spiritual boost",
    ],
  },
  {
    title: "Premium Blessing",
    price: "₹499",
    emoji: "✨",
    features: [
      "Exam pass guarantee*",
      "Crush reply within 7 lifetimes",
      "Semester results improvement",
    ],
  },
  {
    title: "VIP Divine Package",
    price: "₹999",
    emoji: "👑",
    popular: true,
    features: [
      "Direct WhatsApp Blessing",
      '24/7 Emergency "Om Helpline"',
      "Priority cosmic support",
    ],
  },
  {
    title: "Ultra Supreme Cosmic Lifetime",
    price: "₹9999",
    emoji: "🌌",
    features: [
      "Lifetime blessing subscription",
      "Free coconut emoji 🥥",
      "2 extra positive vibes included",
    ],
  },
];

const steps = [
  { num: "1", icon: "📦", text: "Select Package" },
  { num: "2", icon: "😭", text: "Upload Your Problem (optional crying audio)" },
  { num: "3", icon: "💸", text: "Pay via UPI / Coconut Transfer" },
  { num: "4", icon: "😌", text: "Close Eyes for 5 Seconds" },
  { num: "5", icon: "🔔", text: "Receive Blessing Notification" },
];

const testimonials = [
  { text: "After Babu Swami blessing, my crush said 'Seen' instead of 'Ignored'!", name: "Ramesh", emoji: "💘" },
  { text: "I passed exam with only 3 hours study!", name: "Priya", emoji: "📚" },
  { text: "My WiFi speed increased spiritually.", name: "Kiran", emoji: "📶" },
];

const BabuSwamiPage = () => {
  const [formData, setFormData] = useState({ name: "", problem: "", package: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("🙏 Blessing Sent Successfully!\n\nPlease Wait 3–5 Business Lifetimes.\n\nTracking ID: OM-" + Math.floor(Math.random() * 99999));
    setFormData({ name: "", problem: "", package: "" });
  };

  return (
    <div className="min-h-screen font-sans text-white overflow-x-hidden" style={{ background: "linear-gradient(135deg, #1a0a00, #2d1800, #1a0a00)" }}>
      {/* Floating Oms */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed text-4xl pointer-events-none z-0 select-none"
          style={{ left: `${10 + i * 15}%`, top: `${20 + (i % 3) * 30}%` }}
          animate={floatingOm.animate}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const, delay: i * 0.7 }}
        >
          🕉️
        </motion.div>
      ))}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 py-20" style={{ background: "linear-gradient(135deg, #ff8c00, #ffd700, #ff6347, #ff8c00)" }}>
        <div className="absolute inset-0 bg-black/30" />
        <motion.div
          className="relative z-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-6xl mb-4"
            animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🕉️
          </motion.div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 drop-shadow-2xl" style={{ textShadow: "0 0 40px rgba(255,215,0,0.8)" }}>
            Welcome to<br />Babu Swami Official Website
          </h1>
          <p className="text-xl md:text-2xl mb-2 font-semibold opacity-90">
            ✦ Instant Blessings Pvt. Ltd. ✦
          </p>
          <p className="text-lg md:text-xl mb-8 italic opacity-80">
            "Your Problems Are Temporary, My Blessings Are Permanent!"
          </p>
          <motion.button
            className="px-10 py-4 text-xl font-bold rounded-full text-black cursor-pointer border-none"
            style={{ background: "linear-gradient(135deg, #ffd700, #ffaa00)", boxShadow: "0 0 30px rgba(255,215,0,0.6), 0 0 60px rgba(255,215,0,0.3)" }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 50px rgba(255,215,0,0.8)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
          >
            🙏 Book Blessing Now
          </motion.button>

          <div className="mt-12 flex justify-center">
            <motion.img
              src={babuSwami1}
              alt="Babu Swami"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-yellow-400"
              style={{ boxShadow: "0 0 40px rgba(255,215,0,0.5)" }}
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 relative" style={{ background: "linear-gradient(180deg, #1a0a00, #2d1400)" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-8" style={{ color: "#ffd700" }}>
              🙏 About Babu Swami
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.img
                src={babuSwami2}
                alt="Mini Godzilla Mode"
                className="w-60 rounded-2xl border-2 border-yellow-600"
                style={{ boxShadow: "0 0 30px rgba(255,165,0,0.3)" }}
                whileHover={{ rotate: 3 }}
              />
              <div>
                <p className="text-lg md:text-xl mb-6 leading-relaxed opacity-90">
                  Babu Swami has <span className="font-bold text-yellow-400">108+ years</span> of experience in solving
                  WiFi issues, exam tension, relationship drama, and low battery problems.
                </p>
                <ul className="space-y-3 text-lg">
                  {[
                    "✅ 100% No Refund Blessings",
                    "⚡ Works Faster Than 5G",
                    "🏛️ Approved by Unknown Authorities",
                    "🏆 ISO Certified in Positive Vibes",
                  ].map((item) => (
                    <motion.li key={item} className="flex items-center gap-2" whileHover={{ x: 10 }}>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blessing Packages */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(180deg, #2d1400, #0f0700)" }}>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12" style={{ color: "#ffd700" }}>
          ✨ Blessing Packages
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.title}
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: pkg.popular ? "linear-gradient(135deg, #3d2000, #5a3000)" : "linear-gradient(135deg, #1e1000, #2a1600)",
                border: pkg.popular ? "2px solid #ffd700" : "1px solid rgba(255,165,0,0.3)",
                boxShadow: pkg.popular ? "0 0 30px rgba(255,215,0,0.2)" : "none",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 0 40px rgba(255,215,0,0.3)" }}
            >
              {pkg.popular && (
                <div className="absolute top-3 right-3 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className="text-4xl mb-3">{pkg.emoji}</div>
              <h3 className="text-xl font-bold mb-1 text-yellow-300">{pkg.title}</h3>
              <p className="text-3xl font-extrabold mb-4 text-yellow-400">{pkg.price}</p>
              <ul className="space-y-2 mb-6 text-sm opacity-80">
                {pkg.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <motion.button
                className="w-full py-3 rounded-xl font-bold text-black cursor-pointer border-none"
                style={{ background: "linear-gradient(135deg, #ffd700, #ff8c00)" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => alert(`🙏 You selected: ${pkg.title}\n\nPlease scroll down to complete your blessing booking!`)}
              >
                Get Blessed 🙏
              </motion.button>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-xs mt-6 opacity-40">*Results may vary across dimensions and parallel universes</p>
      </section>

      {/* How to Book */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(180deg, #0f0700, #1a0a00)" }}>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12" style={{ color: "#ffd700" }}>
          📋 How to Book
        </h2>
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="flex items-center gap-6 p-5 rounded-2xl"
              style={{ background: "linear-gradient(135deg, #1e1000, #2a1600)", border: "1px solid rgba(255,165,0,0.2)" }}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-3xl w-14 h-14 rounded-full flex items-center justify-center font-bold shrink-0" style={{ background: "linear-gradient(135deg, #ffd700, #ff8c00)", color: "#000" }}>
                {step.num}
              </div>
              <div className="text-lg">
                <span className="text-2xl mr-2">{step.icon}</span>
                {step.text}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(180deg, #1a0a00, #2d1400)" }}>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12" style={{ color: "#ffd700" }}>
          💬 Blessed Testimonials
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="p-6 rounded-2xl text-center"
              style={{ background: "linear-gradient(135deg, #1e1000, #2a1600)", border: "1px solid rgba(255,165,0,0.2)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{t.emoji}</div>
              <p className="italic mb-4 opacity-90">"{t.text}"</p>
              <p className="font-bold text-yellow-400">– {t.name}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <motion.img
            src={babuSwami3}
            alt="Babu Swami in action"
            className="max-w-md w-full rounded-2xl border-2 border-yellow-700"
            style={{ boxShadow: "0 0 30px rgba(255,165,0,0.2)" }}
            whileHover={{ scale: 1.03 }}
          />
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-20 px-4" style={{ background: "linear-gradient(180deg, #2d1400, #1a0a00)" }}>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12" style={{ color: "#ffd700" }}>
          📝 Book Your Blessing
        </h2>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto p-8 rounded-2xl space-y-5"
          style={{ background: "linear-gradient(135deg, #1e1000, #2a1600)", border: "1px solid rgba(255,165,0,0.3)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <label className="block text-sm font-semibold mb-1 text-yellow-300">Your Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your divine name"
              className="w-full p-3 rounded-xl bg-black/40 border border-yellow-900 text-white placeholder-yellow-800 focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-yellow-300">Describe Your Problem</label>
            <textarea
              required
              rows={4}
              value={formData.problem}
              onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
              placeholder="WiFi slow? Crush not replying? Exam tomorrow?"
              className="w-full p-3 rounded-xl bg-black/40 border border-yellow-900 text-white placeholder-yellow-800 focus:outline-none focus:border-yellow-500 resize-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-yellow-300">Select Blessing Package</label>
            <select
              required
              value={formData.package}
              onChange={(e) => setFormData({ ...formData, package: e.target.value })}
              className="w-full p-3 rounded-xl bg-black/40 border border-yellow-900 text-white focus:outline-none focus:border-yellow-500"
            >
              <option value="">Choose your package...</option>
              <option value="basic">Basic Blessing – ₹99</option>
              <option value="premium">Premium Blessing – ₹499</option>
              <option value="vip">VIP Divine Package – ₹999</option>
              <option value="ultra">Ultra Supreme Cosmic – ₹9999</option>
            </select>
          </div>
          <motion.button
            type="submit"
            className="w-full py-4 rounded-xl font-bold text-xl text-black cursor-pointer border-none"
            style={{ background: "linear-gradient(135deg, #ffd700, #ff8c00)", boxShadow: "0 0 30px rgba(255,215,0,0.4)" }}
            whileHover={{ scale: 1.03, boxShadow: "0 0 50px rgba(255,215,0,0.6)" }}
            whileTap={{ scale: 0.97 }}
          >
            🙏 Send to Swami
          </motion.button>
        </motion.form>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center" style={{ background: "#0a0500", borderTop: "1px solid rgba(255,165,0,0.2)" }}>
        <p className="text-2xl mb-2">🕉️</p>
        <p className="text-yellow-400 font-bold mb-1">Babu Swami – Instant Blessings Pvt. Ltd.</p>
        <p className="text-sm opacity-50">
          © 2026 Babu Swami. All Rights Reserved. Terms & Conditions Apply in Next Life.
        </p>
      </footer>
    </div>
  );
};

export default BabuSwamiPage;
