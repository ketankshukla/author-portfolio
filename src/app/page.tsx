"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import SeriesShowcase from "@/components/SeriesShowcase";
import AuthorSection from "@/components/AuthorSection";
import Footer from "@/components/Footer";

export default function Home() {
  // Prevent pinch-zoom globally on all touch devices
  useEffect(() => {
    const preventZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };
    const preventGesture = (e: Event) => {
      e.preventDefault();
    };
    document.addEventListener("touchmove", preventZoom, { passive: false });
    document.addEventListener("gesturestart", preventGesture);
    document.addEventListener("gesturechange", preventGesture);
    document.addEventListener("gestureend", preventGesture);
    return () => {
      document.removeEventListener("touchmove", preventZoom);
      document.removeEventListener("gesturestart", preventGesture);
      document.removeEventListener("gesturechange", preventGesture);
      document.removeEventListener("gestureend", preventGesture);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-foreground">
      <main className="relative">
        <Hero />
        <SeriesShowcase />
        <AuthorSection />
      </main>
      <Footer />
    </div>
  );
}
