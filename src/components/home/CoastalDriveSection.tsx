import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import coastalImage from "@/assets/coastal-drive.jpg";

const CoastalDriveSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-[70vh] overflow-hidden">
      <motion.img
        src={coastalImage}
        alt="Vintage car on coastal road"
        className="absolute inset-0 w-full h-[120%] object-cover"
        style={{ y }}
      />
      <div className="absolute inset-0 bg-background/40" />
      <div className="relative h-full flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-xs tracking-[0.5em] text-gold uppercase mb-4">
            The Open Road Awaits
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground max-w-3xl">
            Born to Be Driven
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default CoastalDriveSection;
