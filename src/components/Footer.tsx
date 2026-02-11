"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { series } from "@/data/seriesData";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative bg-black border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h4 className="text-lg font-bold heading-gradient mb-3">
              Ketan Shukla
            </h4>
            <p className="text-cream/40 text-sm leading-relaxed">
              Author of twenty-two books across three series — epic fantasy,
              the science of mastery, and the philosophy of reality.
            </p>
          </div>

          {/* Series links */}
          {series.map((s) => (
            <div key={s.id}>
              <h4 className="text-cream font-medium text-sm uppercase tracking-widest mb-4">
                {s.name.length > 25 ? s.name.split(":")[0] : s.name}
              </h4>
              <div className="space-y-1.5">
                <a
                  href={s.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cream/40 hover:text-gold transition-colors text-sm"
                >
                  Visit Website
                </a>
                <a
                  href="https://www.amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cream/40 hover:text-gold transition-colors text-sm"
                >
                  Buy on Amazon
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gold/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-sm">
            &copy; {new Date().getFullYear()} Ketan Shukla. All rights reserved.
          </p>
          <p className="text-cream/20 text-sm italic font-serif">
            &ldquo;Write the book you would want to read.&rdquo;
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full glass shadow-gold flex items-center justify-center hover:bg-gold/10 transition-all animate-fadeInScale z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-gold" />
        </button>
      )}
    </footer>
  );
}
