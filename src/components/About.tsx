import { motion } from "framer-motion";
import { ArrowUpRight, Code2, BrainCircuit, Workflow, Server } from "lucide-react";

const focusAreas = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Machine Learning, Generative AI, NLP, LLM applications, RAG systems and intelligent automation.",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Building practical applications and APIs with Python, FastAPI, Flask, React and modern development tools.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "Designing REST APIs, backend services, database integrations and application architecture.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "Connecting applications and services through workflow automation, APIs and RPA technologies.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative border-t border-white/5 bg-[#070707] py-28 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-violet-400" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300">
              About Me
            </span>
          </div>

          <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Turning ideas into
            <span className="text-zinc-500"> intelligent software.</span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xl leading-9 text-zinc-300">
              I'm Bharath Babu N, an Artificial Intelligence and Data Science
              graduate focused on building practical software powered by
              artificial intelligence.
            </p>

            <p className="mt-6 leading-8 text-zinc-500">
              My work sits at the intersection of AI and software engineering.
              I enjoy taking a problem from an initial idea to a working
              application — understanding the requirement, designing the
              solution, developing the backend, integrating AI models and APIs,
              and creating a usable product.
            </p>

            <p className="mt-6 leading-8 text-zinc-500">
              My technical interests include Generative AI, LLM applications,
              RAG, NLP, Machine Learning, Python development, backend
              engineering and workflow automation. I'm particularly interested
              in building intelligent systems that solve real-world problems
              rather than AI solutions that exist only as experiments.
            </p>

            <a
              href="#experience"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-white"
            >
              Explore my experience

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Focus cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-300 hover:border-violet-400/20 hover:bg-white/[0.04]"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-violet-300">
                    <Icon size={21} />
                  </div>

                  <h3 className="text-base font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Career highlights */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] sm:grid-cols-3"
        >
          <div className="border-b border-white/8 p-7 sm:border-b-0 sm:border-r">
            <p className="text-3xl font-semibold text-white">AI +</p>
            <p className="mt-2 text-sm text-zinc-500">
              Software Engineering
            </p>
          </div>

          <div className="border-b border-white/8 p-7 sm:border-b-0 sm:border-r">
            <p className="text-3xl font-semibold text-white">GenAI</p>
            <p className="mt-2 text-sm text-zinc-500">
              LLMs · RAG · NLP
            </p>
          </div>

          <div className="p-7">
            <p className="text-3xl font-semibold text-white">Python</p>
            <p className="mt-2 text-sm text-zinc-500">
              Backend · APIs · Automation
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;