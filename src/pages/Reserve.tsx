import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/home/CTAFooter";
import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Car, User, Mail, Phone } from "lucide-react";

const vehicles = [
  "1965 Porsche 911",
  "Aston Martin DB5",
  "Ferrari 250 GTO",
  "Rolls-Royce Silver Cloud",
  "Jaguar E-Type",
  "Mercedes-Benz 300SL",
];

const ReservePage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <Navbar />
      <section className="pt-32 section-padding">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="font-body text-xs tracking-[0.5em] text-gold uppercase mb-4">Begin Your Journey</p>
            <h1 className="font-display text-5xl md:text-7xl text-foreground mb-4">Reserve</h1>
            <p className="font-body text-lg text-muted-foreground font-light max-w-xl mx-auto">
              Complete the form below and our concierge team will confirm your reservation within 24 hours.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 border border-chrome/10 hover-chrome"
            >
              <h2 className="font-display text-3xl text-foreground mb-4">Thank You</h2>
              <p className="font-body text-muted-foreground font-light">
                Our concierge team will be in touch shortly to confirm your reservation.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2">
                    <User size={14} className="inline mr-2" />Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border border-chrome/20 px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors duration-300"
                    placeholder="James Bond"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2">
                    <Mail size={14} className="inline mr-2" />Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border border-chrome/20 px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors duration-300"
                    placeholder="james@mi6.gov.uk"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2">
                    <Phone size={14} className="inline mr-2" />Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border border-chrome/20 px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors duration-300"
                    placeholder="+44 20 7946 0958"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2">
                    <Car size={14} className="inline mr-2" />Vehicle
                  </label>
                  <select
                    required
                    className="w-full bg-transparent border border-chrome/20 px-4 py-3 font-body text-foreground focus:border-gold focus:outline-none transition-colors duration-300"
                  >
                    <option value="" className="bg-background">Select a vehicle</option>
                    {vehicles.map((v) => (
                      <option key={v} value={v} className="bg-background">{v}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2">
                    <Calendar size={14} className="inline mr-2" />Start Date
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full bg-transparent border border-chrome/20 px-4 py-3 font-body text-foreground focus:border-gold focus:outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2">
                    <Calendar size={14} className="inline mr-2" />End Date
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full bg-transparent border border-chrome/20 px-4 py-3 font-body text-foreground focus:border-gold focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block font-body text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2">
                  Special Requests
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border border-chrome/20 px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Chauffeur service, specific route, champagne on arrival..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-secondary text-secondary-foreground font-body text-sm tracking-[0.3em] uppercase hover:bg-leather-light transition-all duration-500"
              >
                Submit Reservation
              </button>
            </motion.form>
          )}
        </div>
      </section>
      <CTAFooter />
    </main>
  );
};

export default ReservePage;
