import { motion } from "framer-motion";

const partners = [
  "Rolls-Royce", "Aston Martin", "Ferrari", "Bentley",
  "Porsche", "Jaguar", "Mercedes-Benz", "Maserati"
];

const HeritagePartners = () => {
  return (
    <section className="section-padding border-y border-chrome/10">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-body text-xs tracking-[0.5em] text-muted-foreground uppercase mb-12"
        >
          Heritage Partners
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {partners.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="font-display text-xl md:text-2xl tracking-[0.15em] text-chrome/40 hover:text-chrome transition-colors duration-500"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeritagePartners;
