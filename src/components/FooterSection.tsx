import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

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
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-mono">Connect</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Let's talk<br />
          <span className="text-gradient">security</span>
        </h2>

        <div className="mt-8 flex items-center gap-3 px-4 py-3 bg-card rounded-lg border border-border max-w-sm font-mono">
          <Terminal className="w-4 h-4 text-primary flex-shrink-0" />
          <span className="text-primary text-sm">$</span>
          <span className="text-muted-foreground text-sm">echo "hello" | mail me</span>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-border">
        <p className="text-muted-foreground text-sm font-mono">© 2026 Dilki Nirodhi // All rights reserved.</p>
        <div className="flex gap-8">
          {["GitHub", "LinkedIn", "HackTheBox", "TryHackMe"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-mono"
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
