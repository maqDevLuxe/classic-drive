import { motion } from "framer-motion";

const metrics = [
  { value: "300", unit: "HP", label: "Maximum Horsepower" },
  { value: "3.9", unit: "s", label: "Fastest 0-60 mph" },
  { value: "185", unit: "mph", label: "Top Speed" },
  { value: "12", unit: "cyl", label: "Largest Engine" },
];

const HorsepowerMetrics = () => {
  return (
    <section className="section-padding border-y border-chrome/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="font-display text-5xl md:text-6xl text-gradient-chrome">
                  {m.value}
                </span>
                <span className="font-body text-sm text-gold uppercase tracking-widest">
                  {m.unit}
                </span>
              </div>
              <p className="font-body text-xs tracking-[0.3em] text-muted-foreground uppercase">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorsepowerMetrics;
