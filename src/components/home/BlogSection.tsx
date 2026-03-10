import { motion } from "framer-motion";
import carPorsche from "@/assets/car-porsche.jpg";
import carAston from "@/assets/car-aston.jpg";
import carInterior from "@/assets/car-interior.jpg";

const posts = [
  { title: "The Golden Age of Grand Touring", date: "March 2026", image: carPorsche, excerpt: "How the 1960s defined automotive excellence and the art of the continental drive." },
  { title: "Inside the DB5: Bond's Favourite", date: "February 2026", image: carAston, excerpt: "A deep dive into the engineering marvel that became cinema's most iconic car." },
  { title: "The Art of the Dashboard", date: "January 2026", image: carInterior, excerpt: "Chrome gauges, walnut veneers, and the tactile beauty of analogue instrumentation." },
];

const BlogSection = () => {
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
            From the Archives
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Automotive History
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden mb-5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="font-body text-xs tracking-widest text-gold uppercase mb-2">{post.date}</p>
              <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                {post.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground font-light">{post.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
