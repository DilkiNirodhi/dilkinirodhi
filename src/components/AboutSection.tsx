import { motion } from "framer-motion";
import { Shield, Bug, Lock, Search } from "lucide-react";

const skills = [
  { icon: Shield, label: "Network Security" },
  { icon: Bug, label: "Penetration Testing" },
  { icon: Lock, label: "Cryptography" },
  { icon: Search, label: "Threat Hunting" },
];

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
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-mono">About Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
            The hacker<br />
            <span className="text-gradient">mindset</span>
          </h2>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border"
              >
                <skill.icon className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-secondary-foreground">{skill.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-secondary-foreground text-lg leading-relaxed font-light">
            I'm a cybersecurity enthusiast on a mission to understand and defend against evolving digital threats. From CTF competitions to real-world pentests, I live and breathe security.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My journey spans vulnerability research, malware analysis, and building defensive tools. I believe in ethical hacking as a force for good — finding weaknesses before the adversaries do.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
            {[
              { label: "CTFs Competed", value: "40+" },
              { label: "CVEs Discovered", value: "5" },
              { label: "Certifications", value: "OSCP" },
              { label: "Bugs Reported", value: "100+" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-bold text-primary text-glow">{stat.value}</p>
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
