import { motion } from "motion/react";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "IBM Artificial Intelligence Analyst",
    issuer: "IBM",
    date: "2025",
    description:
      "Comprehensive training in AI fundamentals, machine learning algorithms, and practical applications of AI in business contexts.",
    icon: "🤖",
    link: "https://courses.ibmlearning.skillsnetwork.site/certificates/5cbaa602363d4123abb52591dd33f8c9",
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL (IIT Kharagpur)",
    date: "2024",
    description:
      "In-depth certification covering core Java concepts, OOP principles, data structures, and advanced programming techniques.",
    icon: "☕",
    link: "https://drive.google.com/file/d/1og0dKowe-twrnEUvDHg_6k9MUxqH5Nc5/view?usp=sharing",
  },
  {
    title: "Database Technologies",
    issuer: "NIELIT",
    duration: "2024",
    description:
      "Extensive training in database design, SQL, normalization, and modern database management systems including MySQL and MongoDB.",
    icon: "💾",
    link: "https://drive.google.com/file/d/1GIs1BmStpdl79r-ZmDVjuXJvmX1xAYr-/view",
  },
];

export function CertificationsSection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-[#7DECC6] to-[#C6B4FF] bg-clip-text text-transparent"
      >
        Certificates
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="p-8 rounded-3xl bg-white/70 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/40 group hover:-translate-y-2 cursor-pointer"
          >
            {/* Icon Badge */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7DECC6] to-[#C6B4FF] flex items-center justify-center text-3xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
              {cert.icon}
            </div>

            <h3 className="text-xl text-[#0F172A] mb-2">{cert.title}</h3>
            <p className="text-[#475569] mb-1">{cert.issuer}</p>
            <p className="text-sm text-[#7DECC6] mb-4">
              {cert.date}
              {cert.duration && ` • ${cert.duration}`}
            </p>
            <p className="text-[#475569] text-sm">{cert.description}</p>

            {/* Award Icon */}
            <div className="mt-6 flex justify-end">
              <Award className="w-6 h-6 text-[#C6B4FF] opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}