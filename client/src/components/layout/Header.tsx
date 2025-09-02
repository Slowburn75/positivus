// src/components/layout/Header.tsx
import React from "react";
import { Button } from "../common/Button";

export const Header: React.FC = () => {
  return (
    <header className="py-6">
      <nav className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-lg font-bold flex items-center gap-2">
          <span className="w-8 h-8 rounded-md bg-black/90 text-white flex items-center justify-center">P</span>
          <span className="sr-only">Positivus</span>
        </a>
        <ul className="hidden md:flex gap-6 items-center text-sm">
          <li><a href="#services" className="hover:text-primary">Services</a></li>
          <li><a href="#cases" className="hover:text-primary">Case Studies</a></li>
          <li><a href="#team" className="hover:text-primary">Team</a></li>
          <li><a href="#contact" className="hover:text-primary">Contact</a></li>
        </ul>
        <div className="hidden md:block">
          <Button>Request a Quote</Button>
        </div>
        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button aria-label="Open menu" className="p-2 rounded-md bg-gray-100">
            <svg width="20" height="20" fill="currentColor" aria-hidden>
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};
