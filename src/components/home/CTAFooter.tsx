import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTAFooter = () => {
  return (
    <>
      {/* CTA */}
      <section className="section-padding bg-metallic border-y border-chrome/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-xs tracking-[0.5em] text-gold uppercase mb-4">
              Begin Your Journey
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
              Reserve Your Vehicle
            </h2>
            <p className="font-body text-lg text-muted-foreground font-light mb-10 max-w-xl mx-auto">
              Choose from our collection of the world's most iconic automobiles.
              Every drive is an event. Every journey, a memory.
            </p>
            <Link
              to="/reserve"
              className="inline-block px-12 py-5 bg-secondary text-secondary-foreground font-body text-sm tracking-[0.3em] uppercase hover:bg-leather-light transition-all duration-500"
            >
              Reserve Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-padding border-t border-chrome/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <h3 className="font-display text-2xl tracking-[0.3em] text-foreground mb-4">
                HERITAGE
              </h3>
              <p className="font-body text-sm text-muted-foreground font-light max-w-sm leading-relaxed">
                Purveyors of the world's finest vintage and luxury automobiles since 1962.
                Every vehicle in our collection tells a story of engineering excellence
                and timeless design.
              </p>
            </div>
            <div>
              <h4 className="font-display text-sm tracking-[0.3em] text-foreground mb-4">Navigation</h4>
              <div className="space-y-3">
                {["Home", "Collection", "Experiences", "Reserve"].map((link) => (
                  <Link
                    key={link}
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="block font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display text-sm tracking-[0.3em] text-foreground mb-4">Contact</h4>
              <div className="space-y-3 font-body text-sm text-muted-foreground">
                <p>+44 20 7946 0958</p>
                <p>concierge@heritage.com</p>
                <p>23 Mayfair Lane<br />London, W1K 6TQ</p>
              </div>
            </div>
          </div>
          <div className="divider-chrome mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-xs text-muted-foreground tracking-widest">
              © 2026 HERITAGE. All rights reserved.
            </p>
            <div className="flex gap-8">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                <span key={link} className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer">
                  {link}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTAFooter;
