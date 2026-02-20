"use client";

import { useEffect, useRef } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Clock,
  Quote,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useBook } from "@/context/BookContext";
import { realityBooks } from "@/data/modalBooksReality";
import { repetitionBooks } from "@/data/modalBooksRepetition";
import { aztecBooks } from "@/data/modalBooks";
import type { ModalBook } from "@/data/modalBooksReality";

function getSeriesBooks(seriesId: string): ModalBook[] {
  if (seriesId === "reality") return realityBooks;
  if (seriesId === "repetition") return repetitionBooks;
  if (seriesId === "aztec") return aztecBooks;
  return [];
}

export default function BookModal() {
  const {
    selectedSeriesId,
    selectedBookIndex,
    closeBook,
    goToNextBook,
    goToPrevBook,
  } = useBook();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedBookIndex !== null && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [selectedBookIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedBookIndex === null) return;
      if (e.key === "Escape") closeBook();
      if (e.key === "ArrowRight" && selectedSeriesId) {
        const books = getSeriesBooks(selectedSeriesId);
        goToNextBook(books.length - 1);
      }
      if (e.key === "ArrowLeft") goToPrevBook();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    selectedBookIndex,
    selectedSeriesId,
    closeBook,
    goToNextBook,
    goToPrevBook,
  ]);

  if (selectedBookIndex === null || !selectedSeriesId) return null;

  const books = getSeriesBooks(selectedSeriesId);
  const book = books[selectedBookIndex];
  if (!book) return null;

  if (selectedSeriesId === "aztec") {
    return (
      <AztecModal
        book={book}
        books={books}
        selectedBookIndex={selectedBookIndex}
        closeBook={closeBook}
        goToNextBook={goToNextBook}
        goToPrevBook={goToPrevBook}
        scrollRef={scrollRef}
      />
    );
  }

  const accentColor = selectedSeriesId === "reality" ? "#00CED1" : "#d4a843";
  const bgColor = selectedSeriesId === "reality" ? "#0a0f1a" : "#0d0a04";

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={closeBook}
      />
      <div
        ref={scrollRef}
        className="relative z-10 w-full h-full overflow-y-auto"
        style={{ backgroundColor: bgColor }}
      >
        {/* Sticky header */}
        <div
          className="sticky top-0 z-20 border-b"
          style={{
            background: `${bgColor}f5`,
            backdropFilter: "blur(12px)",
            borderColor: `${accentColor}33`,
          }}
        >
          <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 sm:px-6">
            <button onClick={closeBook} className="flex items-center gap-2">
              <ArrowLeft className="h-5 w-5" style={{ color: accentColor }} />
              <span
                className="font-serif text-xs tracking-[0.2em] uppercase"
                style={{ color: accentColor }}
              >
                Back to Series
              </span>
            </button>
            <button
              onClick={closeBook}
              className="flex h-8 w-8 items-center justify-center rounded-full border"
              style={{
                borderColor: `${accentColor}33`,
                color: `${accentColor}99`,
              }}
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 sm:px-6 lg:px-8 pb-16 pt-8">
          <div className="mx-auto max-w-4xl">
            {/* Title block */}
            <div className="mb-8 sm:mb-12 text-center">
              <p
                className="font-serif text-sm tracking-[0.4em] uppercase mb-3"
                style={{ color: `${accentColor}b3` }}
              >
                Book {book.roman}
              </p>
              <h1 className="mb-3 font-serif text-2xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
                {book.title}
              </h1>
              <div className="flex items-center justify-center gap-3 mb-3">
                <div
                  className="h-px w-12 sm:w-20"
                  style={{
                    background: `linear-gradient(to right, transparent, ${accentColor}80)`,
                  }}
                />
                <span style={{ color: `${accentColor}80` }}>✦</span>
                <div
                  className="h-px w-12 sm:w-20"
                  style={{
                    background: `linear-gradient(to left, transparent, ${accentColor}80)`,
                  }}
                />
              </div>
              <p
                className="font-serif text-sm tracking-[0.15em] uppercase italic sm:text-base"
                style={{ color: `${accentColor}cc` }}
              >
                {book.subtitle}
              </p>
            </div>

            {/* Cover */}
            <div className="mb-12 mx-auto max-w-xs sm:max-w-sm">
              <div
                className="overflow-hidden rounded-xl border shadow-2xl"
                style={{ borderColor: `${accentColor}4d` }}
              >
                <img
                  src={book.coverImage}
                  alt={`${book.title} - Book Cover`}
                  className="block w-full h-auto"
                />
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3 mb-12">
              <div
                className="h-px w-16"
                style={{
                  background: `linear-gradient(to right, transparent, ${accentColor}66)`,
                }}
              />
              <span style={{ color: `${accentColor}66` }} className="text-xs">
                ✦
              </span>
              <div
                className="h-px w-16"
                style={{
                  background: `linear-gradient(to left, transparent, ${accentColor}66)`,
                }}
              />
            </div>

            {/* Epigraph */}
            <div className="mb-10 mx-auto max-w-2xl">
              <div
                className="rounded-xl border p-5 sm:p-8"
                style={{
                  borderColor: `${accentColor}26`,
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <Quote
                    className="h-6 w-6 mb-3"
                    style={{ color: `${accentColor}40` }}
                  />
                  <p className="font-serif text-sm sm:text-base leading-relaxed text-white/75 italic">
                    &ldquo;{book.epigraph.quote}&rdquo;
                  </p>
                  <div
                    className="mt-3 h-px w-12"
                    style={{ background: `${accentColor}40` }}
                  />
                  <p
                    className="mt-3 font-serif text-xs tracking-[0.2em] uppercase"
                    style={{ color: `${accentColor}80` }}
                  >
                    — {book.epigraph.author}
                  </p>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="mb-12 mx-auto max-w-2xl">
              <h2 className="font-serif text-xl font-bold text-white sm:text-2xl text-center mb-4">
                About This Book
              </h2>
              <div
                className="h-px w-20 mx-auto mb-6"
                style={{
                  background: `linear-gradient(to right, transparent, ${accentColor}4d, transparent)`,
                }}
              />
              <p className="text-sm sm:text-base leading-relaxed text-white/65">
                {book.elaborateDescription}
              </p>
              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-white/45">
                <div className="flex items-center gap-2">
                  <BookOpen
                    className="h-4 w-4"
                    style={{ color: `${accentColor}66` }}
                  />
                  <span>{book.chapters.length} Chapters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock
                    className="h-4 w-4"
                    style={{ color: `${accentColor}66` }}
                  />
                  <span>Progressive Journey</span>
                </div>
              </div>
            </div>

            {/* Chapters */}
            <div className="mb-12">
              <h2 className="font-serif text-xl font-bold text-white sm:text-2xl text-center mb-4">
                Chapters
              </h2>
              <div
                className="h-px w-20 mx-auto mb-8"
                style={{
                  background: `linear-gradient(to right, transparent, ${accentColor}4d, transparent)`,
                }}
              />
              <div className="space-y-3">
                {book.chapters.map((chapter) => (
                  <div
                    key={chapter.number}
                    className="rounded-lg border p-4 sm:p-5"
                    style={{
                      borderColor: `${accentColor}1a`,
                      background: "rgba(255,255,255,0.02)",
                    }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-xs font-bold"
                        style={{
                          background: `${accentColor}1a`,
                          color: accentColor,
                        }}
                      >
                        {chapter.number}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-white sm:text-base">
                          {chapter.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-white/45 sm:text-sm">
                          {chapter.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom nav */}
            <div className="flex justify-between items-center pt-6">
              {selectedBookIndex > 0 ? (
                <button
                  onClick={goToPrevBook}
                  className="inline-flex items-center gap-2 text-sm"
                  style={{ color: `${accentColor}80` }}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous Book
                </button>
              ) : (
                <button
                  onClick={closeBook}
                  className="inline-flex items-center gap-2 text-sm"
                  style={{ color: `${accentColor}80` }}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Series
                </button>
              )}
              {selectedBookIndex < books.length - 1 ? (
                <button
                  onClick={() => goToNextBook(books.length - 1)}
                  className="inline-flex items-center gap-2 text-sm"
                  style={{ color: `${accentColor}80` }}
                >
                  Next Book
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={closeBook}
                  className="inline-flex items-center gap-2 text-sm"
                  style={{ color: `${accentColor}80` }}
                >
                  Back to Series
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AztecModal({
  book,
  books,
  selectedBookIndex,
  closeBook,
  goToNextBook,
  goToPrevBook,
  scrollRef,
}: {
  book: ModalBook;
  books: ModalBook[];
  selectedBookIndex: number;
  closeBook: () => void;
  goToNextBook: (max: number) => void;
  goToPrevBook: () => void;
  scrollRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4"
      onClick={closeBook}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full sm:max-w-4xl max-h-[100dvh] sm:max-h-[90vh] sm:rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeBook}
          className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/70 border border-white/30 flex items-center justify-center hover:bg-black/90 transition-all"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-white/80" />
        </button>
        {selectedBookIndex > 0 && (
          <button
            onClick={goToPrevBook}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:bg-black/80 transition-all"
            aria-label="Previous book"
          >
            <ChevronLeft
              className="w-5 h-5 sm:w-6 sm:h-6"
              style={{ color: book.color }}
            />
          </button>
        )}
        {selectedBookIndex < books.length - 1 && (
          <button
            onClick={() => goToNextBook(books.length - 1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:bg-black/80 transition-all"
            aria-label="Next book"
          >
            <ChevronRight
              className="w-5 h-5 sm:w-6 sm:h-6"
              style={{ color: book.color }}
            />
          </button>
        )}
        <div
          ref={scrollRef}
          className="overflow-y-auto max-h-[100dvh] sm:max-h-[90vh] bg-[#0d0d14] sm:rounded-2xl"
        >
          <div
            className="relative p-5 sm:p-10 pb-4 sm:pb-6"
            style={{
              background: `linear-gradient(135deg, ${book.color}15, transparent, ${book.color}08)`,
            }}
          >
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 items-start pt-8 sm:pt-0">
              <div className="w-28 sm:w-48 flex-shrink-0 mx-auto sm:mx-0">
                <img
                  src={book.coverImage}
                  alt={`Book ${book.roman}: ${book.title}`}
                  className="w-full h-auto rounded-lg shadow-2xl border border-white/10"
                />
              </div>
              <div className="flex-1 min-w-0">
                {book.act && (
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium border mb-3"
                    style={{
                      borderColor: `${book.color}44`,
                      color: book.color,
                    }}
                  >
                    {book.act}
                  </div>
                )}
                <h2 className="text-xl sm:text-3xl font-bold font-serif text-white mb-1 leading-tight">
                  Book {book.roman}: {book.title}
                </h2>
                <p className="text-white/50 italic text-sm sm:text-base mb-3">
                  {book.subtitle}
                </p>
                {book.focusCharacter && (
                  <div className="text-white/40 text-sm mb-4">
                    <span style={{ color: book.color }} className="font-medium">
                      Focus:
                    </span>{" "}
                    {book.focusCharacter}
                  </div>
                )}
                <blockquote
                  className="border-l-2 pl-4 mb-4"
                  style={{ borderColor: `${book.color}4d` }}
                >
                  <p className="text-white/60 italic font-serif text-sm sm:text-base">
                    &ldquo;{book.epigraph.quote}&rdquo;
                  </p>
                  <cite
                    className="text-sm mt-1 block not-italic"
                    style={{ color: `${book.color}99` }}
                  >
                    — {book.epigraph.author}
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="px-5 sm:px-10 py-5 border-t border-white/5">
            <h3 className="text-base sm:text-lg font-bold text-white mb-3 flex items-center gap-2">
              <BookOpen
                className="w-4 h-4 sm:w-5 sm:h-5"
                style={{ color: book.color }}
              />
              About This Book
            </h3>
            <p className="text-white/60 leading-relaxed text-sm sm:text-base">
              {book.elaborateDescription}
            </p>
          </div>
          <div className="px-5 sm:px-10 py-5 border-t border-white/5">
            <h3 className="text-base sm:text-lg font-bold text-white mb-4">
              Chapters ({book.chapters.length})
            </h3>
            <div className="grid grid-cols-1 gap-2 sm:gap-3">
              {book.chapters.map((chapter) => (
                <div
                  key={chapter.number}
                  className="flex items-start gap-3 py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                    style={{
                      backgroundColor: `${book.color}20`,
                      color: book.color,
                    }}
                  >
                    {chapter.number}
                  </span>
                  <div className="min-w-0">
                    <span className="text-white/70 text-sm sm:text-base font-medium">
                      {chapter.title}
                    </span>
                    <p className="text-white/40 text-xs sm:text-sm mt-0.5 leading-relaxed">
                      {chapter.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="px-5 sm:px-10 py-5 border-t border-white/5 flex items-center justify-between">
            <button
              onClick={goToPrevBook}
              disabled={selectedBookIndex === 0}
              className="text-sm text-white/40 hover:text-white/80 disabled:opacity-30 transition-colors flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous Book
            </button>
            <span className="text-white/30 text-xs">
              Book {selectedBookIndex + 1} of {books.length}
            </span>
            <button
              onClick={() => goToNextBook(books.length - 1)}
              disabled={selectedBookIndex === books.length - 1}
              className="text-sm text-white/40 hover:text-white/80 disabled:opacity-30 transition-colors flex items-center gap-1"
            >
              Next Book
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
