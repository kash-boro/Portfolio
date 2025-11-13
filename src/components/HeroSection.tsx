import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
const roles = ["Problem Solver 🤯", "Coder 💻", "Tech Explorer 🚀", "AI Enthusiast 🤖"];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    if (!isDeleting && charIndex === currentRole.length) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(currentRole.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">

      {/* Floating Social Buttons */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-8 left-8 z-50 flex flex-col gap-4"
      >
        <a
          href="https://github.com/kash-boro"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-white/70 backdrop-blur-md shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-300 border border-white/40"
        >
          <Github className="w-6 h-6 text-[#0F172A]" />
        </a>

        <a
          href="https://www.linkedin.com/in/kashmira-borgoyary/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-white/70 backdrop-blur-md shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-300 border border-white/40"
        >
          <Linkedin className="w-6 h-6 text-[#0F172A]" />
        </a>

        <a
          href="mailto:kashmiraborgoyary263@gmail.com"
          className="w-14 h-14 rounded-full bg-white/70 backdrop-blur-md shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-300 border border-white/40"
        >
          <Mail className="w-6 h-6 text-[#0F172A]" />
        </a>
      </motion.div>

      {/* Concentric Rings + Portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative mb-12"
      >
        {[1, 2, 3, 4, 5, 6, 7].map((ring, i) => (
          <motion.div
            key={ring}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
            style={{
              width: `${220 + i * 40}px`,
              height: `${220 + i * 40}px`,
              borderColor:
                i % 3 === 0 ? "#7DECC6" : i % 3 === 1 ? "#C6B4FF" : "#DDF2FF",
              opacity: 0.3 - i * 0.03,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3 - i * 0.03, 0.15 - i * 0.02, 0.3 - i * 0.03],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Profile Image */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50 backdrop-blur-sm">
          <img
            src="public/images/profile.png"
            alt="Kashmira Borgoyary"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/profile.png";
            }}
          />
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-[#7DECC6] via-[#C6B4FF] to-[#7DECC6] bg-clip-text text-transparent">
          Hi, I'm Kashmira Borgoyary
        </h1>

        <p className="text-xl md:text-2xl text-[#475569] font-mono h-12 mb-8">
          {displayText}
          <span className="animate-pulse">|</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#7DECC6] to-[#C6B4FF] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-white/70 backdrop-blur-md text-[#0F172A] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#C6B4FF]"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>

    </section>
  );
}
