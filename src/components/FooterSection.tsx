import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 py-24 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">Get in Touch</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Let's work<br />
          <span className="text-gradient">together</span>
        </h2>
        <a
          href="mailto:hello@alexmorgan.dev"
          className="inline-block text-lg text-secondary-foreground hover:text-primary transition-colors duration-300 mt-4 font-light"
        >
          hello@alexmorgan.dev
        </a>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-border">
        <p className="text-muted-foreground text-sm">© 2026 Alex Morgan. All rights reserved.</p>
        <div className="flex gap-8">
          {["Twitter", "LinkedIn", "Dribbble", "GitHub"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
