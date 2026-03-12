import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">About</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Building at the<br />
            <span className="text-gradient">intersection</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-secondary-foreground text-lg leading-relaxed font-light">
            I'm a creative developer specializing in immersive digital experiences. With over 8 years in the industry, I bridge the gap between design and engineering.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My work spans brand identity, web applications, and interactive installations. I believe great design is invisible — it simply works.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
            {[
              { label: "Years Experience", value: "8+" },
              { label: "Projects Delivered", value: "50+" },
              { label: "Happy Clients", value: "30+" },
              { label: "Awards Won", value: "12" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
