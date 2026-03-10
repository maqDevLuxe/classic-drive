import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import carPorsche from "@/assets/car-porsche.jpg";
import carAston from "@/assets/car-aston.jpg";
import carFerrari from "@/assets/car-ferrari.jpg";
import carRolls from "@/assets/car-rolls.jpg";

const cars = [
  { name: "1965 Porsche 911", era: "1960s", price: "From $850/day", image: carPorsche, hp: "130 HP" },
  { name: "Aston Martin DB5", era: "1964", price: "From $1,200/day", image: carAston, hp: "282 HP" },
  { name: "Ferrari 250 GTO", era: "1962", price: "From $2,500/day", image: carFerrari, hp: "300 HP" },
  { name: "Rolls-Royce Silver Cloud", era: "1959", price: "From $950/day", image: carRolls, hp: "178 HP" },
];

const CollectionGrid = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.5em] text-gold uppercase mb-4">
            Our Fleet
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            The Collection
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cars.map((car, i) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden bg-card hover-chrome"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-body text-xs tracking-[0.3em] text-gold uppercase mb-1">
                      {car.era} · {car.hp}
                    </p>
                    <h3 className="font-display text-2xl text-foreground">
                      {car.name}
                    </h3>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">
                    {car.price}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/collection"
            className="inline-block px-8 py-4 border border-chrome/30 text-foreground font-body text-xs tracking-[0.3em] uppercase hover:bg-chrome/10 transition-all duration-500"
          >
            View Full Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
