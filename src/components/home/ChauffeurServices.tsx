import { motion } from "framer-motion";
import chauffeurImg from "@/assets/chauffeur.jpg";
import { Shield, Clock, Star } from "lucide-react";

const features = [
  { icon: Shield, title: "Vetted Professionals", desc: "Every chauffeur is professionally trained with 10+ years of experience." },
  { icon: Clock, title: "24/7 Availability", desc: "Round-the-clock service for airport transfers, events, and tours." },
  { icon: Star, title: "White Glove Service", desc: "Complimentary champagne, leather-bound route guides, and bespoke itineraries." },
];

const ChauffeurServices = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <img
              src={chauffeurImg}
              alt="Professional chauffeur"
              className="w-full aspect-[3/4] object-cover"
            />
            <div className="absolute inset-0 border border-chrome/10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <p className="font-body text-xs tracking-[0.5em] text-gold uppercase mb-4">
              At Your Service
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-10">
              Chauffeur Services
            </h2>

            <div className="space-y-8">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0 w-12 h-12 border border-chrome/20 flex items-center justify-center">
                    <f.icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">{f.title}</h3>
                    <p className="font-body text-sm text-muted-foreground font-light">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChauffeurServices;
