import { motion } from "framer-motion";
import { Shield, FileCheck, Wrench, HeartPulse } from "lucide-react";

const protocols = [
  { icon: Shield, title: "Comprehensive Coverage", desc: "Full collision and liability insurance included with every rental." },
  { icon: FileCheck, title: "Pre-Drive Inspection", desc: "Every vehicle undergoes a 42-point inspection before each journey." },
  { icon: Wrench, title: "Roadside Assistance", desc: "24/7 dedicated support with classic car specialists on standby." },
  { icon: HeartPulse, title: "Safety Equipment", desc: "Modern safety upgrades discretely fitted while preserving originality." },
];

const InsuranceSafety = () => {
  return (
    <section className="section-padding bg-metallic">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.5em] text-gold uppercase mb-4">
            Your Peace of Mind
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Insurance & Safety
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {protocols.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-chrome/10 text-center hover-chrome"
            >
              <div className="w-14 h-14 mx-auto mb-5 border border-chrome/20 flex items-center justify-center">
                <p.icon size={24} className="text-gold" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">{p.title}</h3>
              <p className="font-body text-sm text-muted-foreground font-light">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceSafety;
