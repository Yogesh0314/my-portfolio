import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ResumeView } from "@/components/resume/ResumeView";
import { Container } from "@/components/ui/Container";
import { FloatingBackButton } from "@/components/ui/FloatingBackButton";

export const metadata = {
  title: "Yogesh Patil | Developer Resume",
  description: "Interactive & ATS-optimized resume of Yogesh Patil - Full Stack Developer & Competitive Programmer (400+ LeetCode Solved).",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative">
      <Navbar />
      <main className="flex-1 py-10">
        <Container>
          <div className="mb-6 text-center">
            <span className="inline-block px-3 py-1 text-xs font-mono rounded-full bg-primary/10 border border-primary/20 text-primary mb-2">
              Full Stack Engineer Portfolio Resume
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Developer Resume & Profile Hub
            </h1>
            <p className="text-sm text-gray-400 max-w-xl mx-auto mt-2">
              Switch between Interactive Visual Mode, Clean ATS PDF Print Mode, and CLI Terminal Mode.
            </p>
          </div>

          <ResumeView />
        </Container>
      </main>

      {/* Floating Popup Back to Homepage Button */}
      <FloatingBackButton />

      <Footer />
    </div>
  );
}
