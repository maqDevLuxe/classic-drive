import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ornament.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Vintage Rolls Royce hood ornament"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      <div className="relative h-full flex flex-col justify-end pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="font-body text-xs tracking-[0.5em] text-gold mb-4 uppercase">
            Since 1962
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none text-foreground mb-6">
            Classic Power,
            <br />
            <span className="text-gradient-chrome">Timeless Elegance</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-lg mb-10 font-light">
            Experience the golden age of motoring. Hand-selected vintage and luxury
            automobiles for the discerning enthusiast.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/collection"
              className="px-8 py-4 bg-secondary text-secondary-foreground font-body text-xs tracking-[0.3em] uppercase hover:bg-leather-light transition-all duration-500"
            >
              View Collection
            </Link>
            <Link
              to="/reserve"
              className="px-8 py-4 border border-chrome/30 text-foreground font-body text-xs tracking-[0.3em] uppercase hover:bg-chrome/10 transition-all duration-500"
            >
              Reserve Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
