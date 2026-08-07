"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const FloatingBackButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Smooth popup delay
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 print:hidden animate-in fade-in zoom-in duration-300">
      <Link
        href="/"
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#121215]/90 hover:bg-[#1c1c21] text-cyan-300 border border-cyan-400/40 text-xs font-mono font-bold shadow-2xl backdrop-blur-md transition-all hover:scale-105 active:scale-95 group"
        title="Return to Main Portfolio Homepage"
      >
        <ArrowLeft className="w-4 h-4 text-cyan-300 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Homepage</span>
      </Link>
    </div>
  );
};

