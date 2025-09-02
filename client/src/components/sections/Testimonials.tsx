// src/components/sections/Testimonials.tsx
import React, {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  { id: 1, text: "They transformed our digital presence.", author: "John Corp, CEO" },
  { id: 2, text: "Amazing growth in leads from SEO and PPC.", author: "Jane Inc" },
  { id: 3, text: "Professional and responsive team.", author: "Acme Co." }
];

export const Testimonials: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((p)=> (p+1) % quotes.length);
  const prev = () => setIdx((p)=> (p-1+quotes.length) % quotes.length);

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
      <div className="relative rounded-2xl bg-card-dark text-white p-8">
        <button onClick={prev} aria-label="Prev" className="absolute left-4 top-1/2 -translate-y-1/2">‹</button>
        <button onClick={next} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2">›</button>

        <AnimatePresence mode="wait">
          <motion.blockquote
            key={quotes[idx].id}
            initial={{opacity:0, x:20}}
            animate={{opacity:1, x:0}}
            exit={{opacity:0, x:-20}}
            transition={{duration:0.35}}
            className="text-center"
          >
            <p className="text-lg">{quotes[idx].text}</p>
            <footer className="mt-4 text-sm text-primary">{quotes[idx].author}</footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>
    </section>
  )
}
