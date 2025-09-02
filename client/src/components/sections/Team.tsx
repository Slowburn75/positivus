// src/components/sections/Team.tsx
import React from "react";

const members = [
  { name: "Jane Smith", role: "CEO & Founder", bio: "Leads strategy and growth." },
  { name: "John Doe", role: "Head of Operations", bio: "Delivery and ops manager." },
  { name: "Evelyn Miles", role: "Creative Director", bio: "Design & brand lead." },
  { name: "Brian Williams", role: "SEO Specialist", bio: "Search expert." },
];

export const Team: React.FC = () => {
  return (
    <section id="team" className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6">Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map(m => (
          <article key={m.name} className="bg-white rounded-2xl p-6 shadow-soft text-center">
            <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-primary/80 flex items-center justify-center text-black text-xl">{m.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
            <h3 className="font-semibold">{m.name}</h3>
            <p className="text-sm text-muted">{m.role}</p>
            <p className="text-sm mt-3 text-muted">{m.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
