"use client";

import React, { useEffect } from "react";
import { FiX } from "react-icons/fi";
import { ResumeView } from "./ResumeView";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-5xl bg-[#08080a] border border-primary/30 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-primary/20 bg-[#0e0e12]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-tertiary" />
            <h3 className="text-base font-bold text-white font-mono">
              Yogesh Patil – Interactive Resume Hub
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-surface-bright transition-colors"
            aria-label="Close Modal"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          <ResumeView isModal={true} />
        </div>
      </div>
    </div>
  );
};
