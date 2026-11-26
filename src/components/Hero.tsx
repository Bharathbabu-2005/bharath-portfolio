import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import profileImage from "../assets/profile/bharath.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] pt-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">

        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}

        <div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-violet-400" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300">
              AI Engineer & Software Developer
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Building intelligent

            <span className="block text-zinc-500">
              software for the real world.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg"
          >
            I design and develop AI-powered applications combining
            Generative AI, Machine Learning, backend engineering,
            automation, and modern software technologies.
          </motion.p>

          {/* Career Keywords */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 flex max-w-2xl flex-wrap gap-x-3 gap-y-2 text-sm text-zinc-500"
          >
            <span>Artificial Intelligence</span>
            <span className="text-zinc-700">•</span>

            <span>Generative AI</span>
            <span className="text-zinc-700">•</span>

            <span>LLMs & RAG</span>
            <span className="text-zinc-700">•</span>

            <span>Machine Learning</span>
            <span className="text-zinc-700">•</span>

            <span>Python</span>
            <span className="text-zinc-700">•</span>

            <span>FastAPI</span>
            <span className="text-zinc-700">•</span>

            <span>Cloud & Automation</span>
          </motion.div>

          {/* =====================================================
              BUTTONS
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >

            {/* Explore My Work */}
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-400/5"
            >
              Explore My Work

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            {/* Download Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-400/5"
            >
              Download Resume

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

          </motion.div>

          {/* =====================================================
              SOCIAL LINKS
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9 flex items-center gap-5"
          >

            {/* GitHub */}
            <a
              href="https://github.com/Bharathbabu-2005"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 transition-colors duration-300 hover:text-white"
            >
              <FaGithub size={21} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/bharath-babu-n-a17860385/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 transition-colors duration-300 hover:text-white"
            >
              <FaLinkedin size={21} />
            </a>

            {/* Email */}
            <a
              href="mailto:bharathbabu535@gmail.com"
              aria-label="Email"
              className="text-zinc-500 transition-colors duration-300 hover:text-white"
            >
              <Mail size={21} />
            </a>

          </motion.div>

        </div>

        {/* =====================================================
            RIGHT — PROFILE PHOTO
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:ml-auto"
        >

          {/* Outer Frame */}
          <div className="absolute -inset-4 rounded-[2rem] border border-violet-400/10" />

          {/* Photo Container */}
          <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900 shadow-2xl shadow-violet-950/20">

            <img
              src={profileImage}
              alt="Bharath Babu N"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />

            {/* Photo Gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Status Badge */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2.5 rounded-full border border-white/15 bg-black/60 px-4 py-2 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-emerald-500/40 hover:bg-black/80">

              {/* Status Indicator */}
              <span className="relative flex h-2 w-2">
                <span className="absolute -inset-0.5 inline-flex animate-ping rounded-full bg-emerald-400/50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              </span>

              <span className="text-xs font-medium tracking-wide text-zinc-200">
                Available for opportunities
              </span>

            </div>

          </div>

        </motion.div>

      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.a
        href="#about"
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-600 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <ArrowDown size={15} />
      </motion.a>

    </section>
  );
}

export default Hero;