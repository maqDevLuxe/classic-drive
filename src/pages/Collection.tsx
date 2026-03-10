import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/home/CTAFooter";
import { motion } from "framer-motion";
import carPorsche from "@/assets/car-porsche.jpg";
import carAston from "@/assets/car-aston.jpg";
import carFerrari from "@/assets/car-ferrari.jpg";
import carRolls from "@/assets/car-rolls.jpg";
import carInterior from "@/assets/car-interior.jpg";

const allCars = [
  { name: "1965 Porsche 911", era: "1960s", price: "$850/day", image: carPorsche, hp: "130 HP", engine: "Flat-6", origin: "Germany" },
  { name: "Aston Martin DB5", era: "1964", price: "$1,200/day", image: carAston, hp: "282 HP", engine: "Inline-6", origin: "England" },
  { name: "Ferrari 250 GTO", era: "1962", price: "$2,500/day", image: carFerrari, hp: "300 HP", engine: "V12", origin: "Italy" },
  { name: "Rolls-Royce Silver Cloud", era: "1959", price: "$950/day", image: carRolls, hp: "178 HP", engine: "V8", origin: "England" },
  { name: "Jaguar E-Type", era: "1961", price: "$780/day", image: carInterior, hp: "265 HP", engine: "Inline-6", origin: "England" },
  { name: "Mercedes-Benz 300SL", era: "1955", price: "$1,800/day", image: carPorsche, hp: "215 HP", engine: "Inline-6", origin: "Germany" },
];

const CollectionPage = () => {
  return (
    <main>
      <Navbar />
      <section className="pt-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="font-body text-xs tracking-[0.5em] text-gold uppercase mb-4">Our Fleet</p>
            <h1 className="font-display text-5xl md:text-7xl text-foreground mb-4">The Collection</h1>
            <p className="font-body text-lg text-muted-foreground font-light max-w-xl mx-auto">
              Each vehicle has been meticulously restored and maintained to the highest standards of automotive excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCars.map((car, i) => (
              <motion.div
                key={car.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="group hover-chrome border border-chrome/10 overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={car.image} alt={car.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-display text-xl text-foreground">{car.name}</h3>
                      <p className="font-body text-xs tracking-widest text-gold uppercase">{car.era} · {car.origin}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 mb-4">
                    <span className="font-body text-xs text-muted-foreground tracking-widest">{car.hp}</span>
                    <span className="font-body text-xs text-muted-foreground tracking-widest">{car.engine}</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-chrome/10">
                    <span className="font-body text-sm text-foreground">{car.price}</span>
                    <span className="font-body text-xs tracking-[0.2em] text-gold uppercase cursor-pointer hover:text-foreground transition-colors duration-300">
                      Reserve →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTAFooter />
    </main>
  );
};

export default CollectionPage;
