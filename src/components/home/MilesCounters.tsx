import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  { target: 250000, label: "Miles Driven", suffix: "+" },
  { target: 48, label: "Classic Vehicles", suffix: "" },
  { target: 12, label: "Countries Explored", suffix: "" },
  { target: 3200, label: "Happy Clients", suffix: "+" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-display text-5xl md:text-6xl text-gradient-chrome">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const MilesCounters = () => {
  return (
    <section className="section-padding border-y border-chrome/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <Counter target={stat.target} suffix={stat.suffix} />
              <p className="font-body text-xs tracking-[0.3em] text-muted-foreground uppercase mt-3">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilesCounters;
