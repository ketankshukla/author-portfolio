"use client";

import { BookOpen, Feather, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-black">
      <div className="relative z-10 pt-20 sm:pt-28 pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Author photo */}
          <div className="flex justify-center mb-8 animate-fadeInUp">
            <img
              src="/images/ketan-shukla.jpeg"
              alt="Ketan Shukla"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-2 border-gold/40 shadow-gold"
            />
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-4 animate-fadeInUp">
            <span className="heading-gradient">Ketan Shukla</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gold/60 text-sm sm:text-base uppercase tracking-[0.3em] font-medium mb-4 animate-fadeInUp">
            Author &bull; Storyteller &bull; Thinker
          </p>

          {/* Amazon KDP badge */}
          <div className="flex justify-center mb-8 animate-fadeInUp">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 text-gold/70 text-xs uppercase tracking-widest font-medium">
              Published exclusively on Amazon &mdash; Kindle &bull; Paperback
              &bull; Hardcover
            </span>
          </div>

          {/* Brief intro */}
          <p className="text-cream/50 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-12 animate-fadeInUp">
            Twenty-two books across three series — from a twelve-book epic
            fantasy saga to two five-book non-fiction explorations of mastery
            and reality. Each series is its own world, written with the same
            commitment: say something that matters, and say it well.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 animate-fadeInUp">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-gold" />
              </div>
              <div className="text-left">
                <div className="text-xl font-bold text-cream font-serif">3</div>
                <div className="text-cream/30 text-xs uppercase tracking-widest">
                  Series
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                <Feather className="w-5 h-5 text-gold" />
              </div>
              <div className="text-left">
                <div className="text-xl font-bold text-cream font-serif">
                  22
                </div>
                <div className="text-cream/30 text-xs uppercase tracking-widest">
                  Books
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-gold" />
              </div>
              <div className="text-left">
                <div className="text-xl font-bold text-cream font-serif">
                  388
                </div>
                <div className="text-cream/30 text-xs uppercase tracking-widest">
                  Chapters
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
