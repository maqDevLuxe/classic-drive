import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import carInterior from "@/assets/car-interior.jpg";

const experiences = [
  { title: "The Grand Tour", desc: "A curated 3-day journey through the Scottish Highlands in a classic Bentley Continental.", duration: "3 Days" },
  { title: "Monaco Weekend", desc: "Live the Formula One lifestyle with a vintage Ferrari along the Côte d'Azur.", duration: "2 Days" },
  { title: "English Countryside", desc: "Gentle drives through the Cotswolds in a timeless Rolls-Royce Silver Cloud.", duration: "1 Day" },
];

const DrivingExperiences = () => {
  return (
    <section className="section-padding bg-metallic">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-xs tracking-[0.5em] text-gold uppercase mb-4">
              Beyond the Drive
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8">
              Curated Driving Experiences
            </h2>

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="border-l-2 border-secondary pl-6"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-xl text-foreground">{exp.title}</h3>
                    <span className="font-body text-xs tracking-widest text-gold">{exp.duration}</span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground font-light">{exp.desc}</p>
                </motion.div>
              ))}
            </div>

            <Link
              to="/experiences"
              className="inline-block mt-10 px-8 py-4 bg-secondary text-secondary-foreground font-body text-xs tracking-[0.3em] uppercase hover:bg-leather-light transition-all duration-500"
            >
              Explore Experiences
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={carInterior}
              alt="Vintage car leather interior"
              className="w-full aspect-[3/4] object-cover"
            />
            <div className="absolute inset-0 border border-chrome/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DrivingExperiences;
