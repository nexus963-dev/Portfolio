"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/Section";
import { Button } from "../ui/Button";
import TechStrip from "../ui/TechStrip"
import Image from "next/image";


export default function ProfileSection() {
  return (
    <SectionWrapper id="about" className="bg-white/50 dark:bg-gray-950/50 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-2xl sm:blur-3xl" />
      </div>
      
      <div className="relative grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Profile Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
            {/* Fixed height container for mobile */}
            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl transform rotate-6 opacity-15 dark:opacity-25 blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl transform -rotate-3 opacity-10 dark:opacity-15 blur-sm" />
              
              {/* Image container */}
              <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-3xl overflow-hidden border-4 border-white/80 dark:border-gray-800/80 shadow-2xl shadow-gray-900/10 dark:shadow-black/30">
                <Image
                  src="https://res.cloudinary.com/dfdoggzdy/image/upload/v1784086245/Gemini_Generated_Image_29oxdl29oxdl29ox_mbfuxt.png"
                  alt="Profile"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Profile Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-full"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>

          <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8 w-full max-w-full break-words overflow-wrap-anywhere hyphens-auto">
            <p className="w-full break-words">
              I'm a B.Tech Computer Science Engineering student at Vellore Institute of Technology, Bhopal, with a strong foundation in computer science fundamentals and hands-on experience in research, full-stack development, and machine learning. Passionate about leveraging technology to solve real-world challenges in education, finance, and agriculture through innovative applications of AI, web development, and causal inference techniques.
            </p>
            <p className="w-full break-words">
              Currently focused on applying machine learning and deep learning techniques to real-world problems, with experience in research at MNNIT Allahabad and development of full-stack applications. Actively exploring advanced topics in causal inference, generative AI, and scalable system design while maintaining strong software engineering practices.
            </p>
            <p className="w-full break-words">
              Beyond academics and research, interests include exploring emerging technologies, participating in coding challenges on platforms like LeetCode, and staying updated with the latest developments in AI/ML, web technologies, and computer science research.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button
              variant="primary"
              href="/resume/Hardik_Agarwal_Resume.pdf"
              target="_blank"
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Resume
              </span>
            </Button>
          </div>

          {/* Tech Stack Strip */}
          <TechStrip />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
