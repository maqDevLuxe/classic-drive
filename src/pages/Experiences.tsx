import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/home/CTAFooter";
import { motion } from "framer-motion";
import coastalImg from "@/assets/coastal-drive.jpg";
import carInterior from "@/assets/car-interior.jpg";
import carPorsche from "@/assets/car-porsche.jpg";

const experiences = [
  {
    title: "The Grand Tour",
    subtitle: "Scottish Highlands",
    duration: "3 Days",
    price: "From £4,500",
    image: carPorsche,
    desc: "Wind through misty lochs and dramatic mountain passes in a classic Bentley Continental. Includes luxury accommodation at historic estates and a private whisky tasting.",
  },
  {
    title: "Monaco Weekend",
    subtitle: "Côte d'Azur",
    duration: "2 Days",
    price: "From €6,200",
    image: coastalImg,
    desc: "Experience the glamour of the French Riviera in a vintage Ferrari. Drive the legendary Monaco Grand Prix circuit and dine at Michelin-starred restaurants.",
  },
  {
    title: "English Countryside",
    subtitle: "The Cotswolds",
    duration: "1 Day",
    price: "From £1,800",
    image: carInterior,
    desc: "A gentle drive through honey-stone villages and rolling hills in a Rolls-Royce Silver Cloud. Includes afternoon tea at a private country estate.",
  },
];

const ExperiencesPage = () => {
  return (
    <main>
      <Navbar />
      <section className="pt-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <p className="font-body text-xs tracking-[0.5em] text-gold uppercase mb-4">Beyond the Drive</p>
            <h1 className="font-display text-5xl md:text-7xl text-foreground mb-4">Curated Experiences</h1>
            <p className="font-body text-lg text-muted-foreground font-light max-w-xl mx-auto">
              Journeys designed for those who understand that the destination is only part of the story.
            </p>
          </motion.div>

          <div className="space-y-24">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="font-body text-xs tracking-[0.5em] text-gold uppercase mb-3">{exp.subtitle}</p>
                  <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">{exp.title}</h2>
                  <p className="font-body text-muted-foreground font-light leading-relaxed mb-6">{exp.desc}</p>
                  <div className="flex gap-8 mb-8">
                    <div>
                      <p className="font-body text-xs text-muted-foreground tracking-widest uppercase">Duration</p>
                      <p className="font-display text-lg text-foreground">{exp.duration}</p>
                    </div>
                    <div>
                      <p className="font-body text-xs text-muted-foreground tracking-widest uppercase">Starting</p>
                      <p className="font-display text-lg text-foreground">{exp.price}</p>
                    </div>
                  </div>
                  <a href="/reserve" className="inline-block px-8 py-4 bg-secondary text-secondary-foreground font-body text-xs tracking-[0.3em] uppercase hover:bg-leather-light transition-all duration-500">
                    Enquire Now
                  </a>
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

export default ExperiencesPage;
