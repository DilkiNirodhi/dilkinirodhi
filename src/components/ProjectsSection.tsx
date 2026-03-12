import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Network Vulnerability Assessment",
    category: "Penetration Testing",
    description: "Full-scope network pentest identifying critical infrastructure vulnerabilities across 200+ endpoints.",
    image: project1,
  },
  {
    title: "Exploit Development Lab",
    category: "Security Research",
    description: "Custom exploit development and proof-of-concept creation for CVE disclosures.",
    image: project2,
  },
  {
    title: "SOC Monitoring Platform",
    category: "Threat Detection",
    description: "Real-time threat detection and incident response dashboard for enterprise security operations.",
    image: project3,
  },
];

const ProjectsSection = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-mono">Featured Work</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">Projects & Research</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/5] bg-card border border-border">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-primary text-xs font-mono tracking-wider uppercase">{project.category}</span>
              </div>
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
