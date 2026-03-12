import { motion } from "framer-motion";
import { Shield, Terminal } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/8 rounded-full blur-[140px]" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/5 rounded-full blur-[100px]" />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="flex items-center gap-2 mb-6">
          <Shield className="w-4 h-4 text-primary" />
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-mono">
            Cybersecurity Professional
          </p>
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
          Securing the<br />
          <span className="text-gradient text-glow">digital frontier</span>
        </h1>
        <p className="text-secondary-foreground max-w-lg text-lg leading-relaxed font-light">
          Penetration tester, threat hunter, and security researcher dedicated to making the digital world safer — one vulnerability at a time.
        </p>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex items-center gap-3 px-4 py-3 bg-card rounded-lg border border-border max-w-md font-mono"
        >
          <Terminal className="w-4 h-4 text-primary flex-shrink-0" />
          <span className="text-primary text-sm">$</span>
          <span className="text-muted-foreground text-sm">nmap -sV --script vuln target.com</span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-16 lg:left-24"
      >
        <div className="flex items-center gap-3 text-muted-foreground text-sm">
          <div className="w-8 h-px bg-primary/40" />
          <span className="tracking-widest uppercase text-xs font-mono">Scroll to explore</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
