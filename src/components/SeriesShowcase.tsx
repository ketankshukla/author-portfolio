"use client";

import {
  ExternalLink,
  Tablet,
  BookMarked,
  BookOpen,
  Library,
} from "lucide-react";
import { series } from "@/data/seriesData";
import type { Series } from "@/data/seriesData";
import { useBook } from "@/context/BookContext";

function SeriesFrame({ s }: { s: Series }) {
  const { openBook } = useBook();
  return (
    <div className="gold-frame p-6 sm:p-8 lg:p-10 mb-16 last:mb-0">
      {/* Series header badge */}
      <div className="flex justify-center mb-8">
        <div
          className="inline-block px-5 py-2 rounded-full border bg-black/40"
          style={{ borderColor: `${s.accentColor}33` }}
        >
          <span
            className="text-xs sm:text-sm uppercase tracking-[0.2em] font-medium"
            style={{ color: s.accentColor }}
          >
            {s.tagline}
          </span>
        </div>
      </div>

      {/* Logo + Landscape cover side by side */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        {/* Logo */}
        <a
          href={s.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 w-full md:w-1/3 flex justify-center hover:scale-[1.02] transition-transform"
        >
          <img
            src={s.logo}
            alt={s.name}
            className="w-48 sm:w-56 md:w-full max-w-[280px] h-auto object-contain drop-shadow-2xl"
          />
        </a>

        {/* Landscape cover */}
        <a
          href={s.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-2/3 group"
        >
          <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-professional">
            <img
              src={s.landscapeCover}
              alt={`${s.name} — Complete Series`}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-medium flex items-center gap-2 bg-black/60 px-4 py-2 rounded-full">
                <ExternalLink className="w-4 h-4" />
                Visit Series Website
              </span>
            </div>
          </div>
        </a>
      </div>

      {/* Series description */}
      <p className="text-cream/50 text-sm sm:text-base leading-relaxed text-center max-w-3xl mx-auto mb-6">
        {s.description}
      </p>

      {/* Buy the Series button */}
      {(s.seriesUrl || s.siteUrl) && (
        <div className="text-center mb-10">
          <p className="text-cream/40 text-xs uppercase tracking-[0.25em] font-medium mb-4">
            Own the complete series
          </p>
          <a
            href={s.seriesUrl ?? s.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#FF9900] px-8 py-3 text-sm font-bold tracking-wide text-black transition-all duration-200 hover:bg-[#e68a00] hover:shadow-lg hover:shadow-[#FF9900]/20 active:scale-95"
          >
            <Library className="w-4 h-4 shrink-0" />
            Buy The Complete Series on Amazon
          </a>
        </div>
      )}

      {/* Box sets (Aztec only) */}
      {s.boxSets && s.boxSets.length > 0 && (
        <div className="mb-10">
          {s.boxSets.map((boxSet) => (
            <div key={boxSet.id} className="mb-8 last:mb-0">
              {/* Box set cover */}
              <a
                href={s.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="overflow-hidden rounded-xl border border-white/10 shadow-professional hover-lift mb-3">
                  <img
                    src={boxSet.image}
                    alt={`${boxSet.title} — ${boxSet.subtitle}`}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </a>

              {/* Books in this box set */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {boxSet.bookIndices.map((bookIndex) => {
                  const book = s.books[bookIndex];
                  return (
                    <BookCard
                      key={book.id}
                      book={book}
                      bookIndex={bookIndex}
                      seriesId={s.id}
                      siteUrl={s.siteUrl}
                      accentColor={s.accentColor}
                      onOpenModal={() => openBook(s.id, bookIndex)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Books grid (Repetition + Reality — no box sets) */}
      {!s.boxSets && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {s.books.map((book, index) => (
            <BookCard
              key={book.id}
              book={book}
              bookIndex={index}
              seriesId={s.id}
              siteUrl={s.siteUrl}
              accentColor={s.accentColor}
              onOpenModal={() => openBook(s.id, index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function BookCard({
  book,
  bookIndex,
  seriesId,
  siteUrl,
  accentColor,
  onOpenModal,
}: {
  book: {
    id: number;
    roman: string;
    title: string;
    subtitle: string;
    coverImage: string;
    color: string;
    kindleUrl?: string;
    paperbackUrl?: string;
  };
  bookIndex: number;
  seriesId: string;
  siteUrl: string;
  accentColor: string;
  onOpenModal: () => void;
}) {
  return (
    <div className="group glass rounded-xl overflow-hidden hover-lift">
      {/* Book cover — click opens modal */}
      <button
        onClick={onOpenModal}
        className="block relative overflow-hidden w-full text-left"
      >
        <img
          src={book.coverImage}
          alt={`Book ${book.roman}: ${book.title}`}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span
            className="text-xs font-medium flex items-center gap-1.5"
            style={{ color: accentColor }}
          >
            <BookOpen className="w-3.5 h-3.5" />
            View Details
          </span>
        </div>
      </button>

      {/* Buttons */}
      <div className="p-2 sm:p-3 flex flex-col gap-1.5">
        <a
          href={book.kindleUrl || "https://www.amazon.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 w-full rounded-lg bg-[#FF9900] py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wide text-black transition-all duration-200 hover:bg-[#e68a00] active:scale-95"
        >
          <Tablet className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
          Buy Kindle
        </a>
        <a
          href={book.paperbackUrl || "https://www.amazon.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 w-full rounded-lg border py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wide transition-all duration-200 active:scale-95"
          style={{
            borderColor: `${accentColor}66`,
            backgroundColor: `${accentColor}18`,
            color: accentColor,
          }}
        >
          <BookMarked className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
          Buy Paperback
        </a>
        <button
          onClick={onOpenModal}
          className="flex items-center justify-center gap-1.5 rounded-full border px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium transition-all active:scale-95 w-full"
          style={{
            borderColor: `${accentColor}4D`,
            backgroundColor: `${accentColor}0D`,
            color: accentColor,
          }}
        >
          <BookOpen className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
          Book Details
        </button>
      </div>
    </div>
  );
}

export default function SeriesShowcase() {
  return (
    <section id="series" className="relative py-16 sm:py-24 bg-black">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-gold/60 text-xs sm:text-sm uppercase tracking-[0.3em] font-medium mb-4">
            Published Works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-4">
            <span className="heading-gradient">
              Three Series. Twenty-Two Books.
            </span>
          </h2>
          <p className="text-cream/40 text-sm sm:text-base max-w-2xl mx-auto">
            From epic fantasy to the science of mastery to the philosophy of
            reality — each series stands on its own as a complete journey.
          </p>
        </div>

        {/* Series frames */}
        {series.map((s) => (
          <SeriesFrame key={s.id} s={s} />
        ))}
      </div>
    </section>
  );
}
