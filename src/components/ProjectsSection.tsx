import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  { title: "Lumière Studio", category: "Architecture", image: project1 },
  { title: "Noir Brand Identity", category: "Branding", image: project2 },
  { title: "Apex Dashboard", category: "Web Design", image: project3 },
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
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">Selected Work</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">Projects</h2>
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
            <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/5] bg-card">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-1">{project.title}</h3>
            <p className="text-muted-foreground text-sm">{project.category}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
