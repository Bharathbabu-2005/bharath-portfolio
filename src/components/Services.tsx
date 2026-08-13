import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Server,
  Workflow,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "AI & Generative AI",
    description:
      "Designing intelligent applications using Machine Learning, NLP, LLMs, RAG pipelines, embeddings and Generative AI.",
    technologies: [
      "LLMs",
      "RAG",
      "NLP",
      "AI Agents",
      "Machine Learning",
    ],
  },
  {
    number: "02",
    icon: Code2,
    title: "Software Development",
    description:
      "Building practical web applications and software products with modern frontend, backend and API technologies.",
    technologies: [
      "Python",
      "React",
      "TypeScript",
      "JavaScript",
      "REST APIs",
    ],
  },
  {
    number: "03",
    icon: Server,
    title: "Backend Engineering",
    description:
      "Developing reliable backend services, APIs, authentication systems, database integrations and AI-powered application backends.",
    technologies: [
      "FastAPI",
      "Flask",
      "SQL",
      "MySQL",
      "SQLite",
    ],
  },
  {
    number: "04",
    icon: Workflow,
    title: "Automation & Integration",
    description:
      "Connecting applications, APIs and business processes through intelligent workflow automation and RPA solutions.",
    technologies: [
      "n8n",
      "UiPath",
      "Power Automate",
      "APIs",
      "RPA",
    ],
  },
];

function Services() {
  return (
    <section
      id="services"
      className="border-t border-white/5 bg-[#050505] py-28 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-violet-400" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300">
              What I Do
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Engineering solutions
            <span className="text-zinc-500"> across AI and software.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
            I combine artificial intelligence with software engineering to
            build applications that are useful, scalable and designed around
            real-world problems.
          </p>
        </motion.div>

        {/* Services */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group relative bg-[#080808] p-8 transition-colors duration-300 hover:bg-[#0c0c0c] sm:p-10"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.2em] text-zinc-700">
                    {service.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-violet-300 transition-all duration-300 group-hover:border-violet-400/30 group-hover:bg-violet-400/10">
                    <Icon size={21} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-10 text-2xl font-semibold tracking-tight text-white">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {service.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/8 bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-500 transition-colors group-hover:text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="mt-8 flex items-center gap-2 text-xs font-medium text-zinc-700 transition-colors group-hover:text-violet-300">
                  Explore capability

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;