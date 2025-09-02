// src/components/sections/ServicesGrid.tsx
import React from "react";
import clsx from "clsx";

type Service = {
  id: string;
  title: string;
  desc?: string;
  variant?: "light" | "dark" | "accent";
};

const services: Service[] = [
  { id: "seo", title: "Search engine optimization", variant: "light" },
  { id: "ppc", title: "Pay-per-click advertising", variant: "accent" },
  { id: "social", title: "Social Media Marketing", variant: "dark" },
  { id: "email", title: "Email Marketing", variant: "light" },
  { id: "content", title: "Content Creation", variant: "accent" },
  { id: "analytics", title: "Analytics and Tracking", variant: "dark" },
];

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(s => (
          <article
            key={s.id}
            className={clsx("rounded-2xl p-6 shadow-soft relative overflow-hidden", {
              "bg-white": s.variant === "light",
              "bg-card-dark text-white": s.variant === "dark",
              "bg-primary/20": s.variant === "accent"
            })}
            aria-labelledby={`service-${s.id}`}
          >
            <h3 id={`service-${s.id}`} className="text-lg font-semibold">{s.title}</h3>
            <p className="text-sm mt-3 text-muted">{s.desc ?? "Learn how we can help grow your business."}</p>
            <a href="#" className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary" aria-label={`Learn more about ${s.title}`}>
              Learn more
              <span aria-hidden>→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};
