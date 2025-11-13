import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  duration: string;
  description: string;
  cgpa?: string;
  percentage?: string;
  color: string;
}

const education: Education[] = [
  {
    degree: "Master of Computer Applications (AIML)",
    institution: "Lovely Professional University",
    duration: "2025 - Pursuing",
    description: "Specialization in Artificial Intelligence and Machine Learning",
    color: "#7DECC6",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Assam Don Bosco University",
    duration: "2022 - 2025",
    description: "Foundation in Computer Science and Applications",
    cgpa: "9.01 CGPA",
    color: "#C6B4FF",
  },
  {
    degree: "Class 12 (Science)",
    institution: "St. Mary's Sr. Sec. School",
    duration: "2020 - 2022",
    description: "Science stream with focus on Mathematics and Computer Science",
    percentage: "86.6%",
    color: "#DDF2FF",
  },
];

export function EducationTimeline() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-[#7DECC6] to-[#C6B4FF] bg-clip-text text-transparent"
      >
        Education Journey
      </motion.h2>

      <div className="relative">
        {/* Gradient Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#7DECC6] via-[#C6B4FF] to-[#DDF2FF] -translate-x-1/2" />

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Marker */}
              <div
                className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full -translate-x-1/2 ring-4 ring-white shadow-lg z-10"
                style={{ backgroundColor: edu.color }}
              />

              {/* Card */}
              <div className="ml-20 md:ml-0 md:grid md:grid-cols-2 gap-8">
                <div className={index % 2 === 0 ? "md:col-start-2" : "md:col-start-1"}>
                  <div className="p-8 rounded-3xl bg-white/70 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/40">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${edu.color}, ${edu.color}90)`,
                        }}
                      >
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-[#475569] mb-1">{edu.duration}</p>
                        <h3 className="text-xl md:text-2xl text-[#0F172A] mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-[#475569]">{edu.institution}</p>
                      </div>
                    </div>
                    <p className="text-[#475569] ml-16">{edu.description}</p>
                    {edu.cgpa && (
                      <p className="text-[#475569] ml-16">CGPA: {edu.cgpa}</p>
                    )}
                    {edu.percentage && (
                      <p className="text-[#475569] ml-16">
                        Percentage: {edu.percentage}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}