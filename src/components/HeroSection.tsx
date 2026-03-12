import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6 font-body">
          Creative Developer & Designer
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
          Alex<br />
          <span className="text-gradient">Morgan</span>
        </h1>
        <p className="text-secondary-foreground max-w-md text-lg leading-relaxed font-light">
          Crafting digital experiences that blend bold aesthetics with intuitive functionality.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-16 lg:left-24"
      >
        <div className="flex items-center gap-3 text-muted-foreground text-sm">
          <div className="w-8 h-px bg-muted-foreground" />
          <span className="tracking-widest uppercase text-xs">Scroll to explore</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
