import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const routes = [
  { name: "Amalfi Coast", country: "Italy", distance: "50 km", highlight: "Cliffside roads overlooking the Mediterranean" },
  { name: "Route Napoleon", country: "France", distance: "325 km", highlight: "From Cannes through Provençal mountains" },
  { name: "Scottish Highlands", country: "UK", distance: "200 km", highlight: "Misty lochs and dramatic mountain passes" },
  { name: "Stelvio Pass", country: "Italy", distance: "75 km", highlight: "48 hairpin turns through the Alps" },
];

const ScenicRoutes = () => {
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
            Recommended Routes
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Scenic Drives
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {routes.map((route, i) => (
            <motion.div
              key={route.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-chrome/10 hover-chrome group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display text-2xl text-foreground">{route.name}</h3>
                  <p className="font-body text-xs tracking-widest text-gold uppercase">{route.country}</p>
                </div>
                <MapPin size={20} className="text-chrome/30 group-hover:text-gold transition-colors duration-500" />
              </div>
              <p className="font-body text-sm text-muted-foreground font-light mb-3">{route.highlight}</p>
              <p className="font-body text-xs tracking-widest text-chrome/50 uppercase">{route.distance}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScenicRoutes;
