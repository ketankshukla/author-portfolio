"use client";

import { createContext, useContext, useState, useCallback } from "react";

interface BookContextType {
  selectedSeriesId: string | null;
  selectedBookIndex: number | null;
  openBook: (seriesId: string, index: number) => void;
  closeBook: () => void;
  goToNextBook: (maxIndex: number) => void;
  goToPrevBook: () => void;
}

const BookContext = createContext<BookContextType | null>(null);

export function BookProvider({ children }: { children: React.ReactNode }) {
  const [selectedSeriesId, setSelectedSeriesId] = useState<string | null>(null);
  const [selectedBookIndex, setSelectedBookIndex] = useState<number | null>(null);

  const openBook = useCallback((seriesId: string, index: number) => {
    setSelectedSeriesId(seriesId);
    setSelectedBookIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeBook = useCallback(() => {
    setSelectedSeriesId(null);
    setSelectedBookIndex(null);
    document.body.style.overflow = "";
  }, []);

  const goToNextBook = useCallback((maxIndex: number) => {
    setSelectedBookIndex((prev) =>
      prev !== null && prev < maxIndex ? prev + 1 : prev
    );
  }, []);

  const goToPrevBook = useCallback(() => {
    setSelectedBookIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : prev
    );
  }, []);

  return (
    <BookContext.Provider
      value={{
        selectedSeriesId,
        selectedBookIndex,
        openBook,
        closeBook,
        goToNextBook,
        goToPrevBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export function useBook() {
  const context = useContext(BookContext);
  if (!context) throw new Error("useBook must be used within BookProvider");
  return context;
}
