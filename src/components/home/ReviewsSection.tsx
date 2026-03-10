import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "James H.", location: "London, UK", text: "An absolutely unforgettable experience. Driving the DB5 along the Amalfi Coast was a lifelong dream realised. Impeccable service.", rating: 5 },
  { name: "Sophia L.", location: "Paris, France", text: "The attention to detail is extraordinary. Every car is pristine, and the chauffeur service was nothing short of perfection.", rating: 5 },
  { name: "Richard M.", location: "New York, USA", text: "Heritage doesn't just rent cars—they curate experiences. The Scottish Highlands tour in a Silver Cloud was pure magic.", rating: 5 },
];

const ReviewsSection = () => {
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
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Enthusiast Reviews
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-chrome/10 hover-chrome"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed mb-6">
                "{review.text}"
              </p>
              <div>
                <p className="font-display text-base text-foreground">{review.name}</p>
                <p className="font-body text-xs text-muted-foreground tracking-widest uppercase">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
