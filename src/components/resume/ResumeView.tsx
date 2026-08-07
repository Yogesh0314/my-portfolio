"use client";

import React, { useState } from "react";
import { resumeData } from "@/data/resumeData";
import { 
  FiPrinter, 
  FiDownload,
  FiCopy, 
  FiCheck, 
  FiCode, 
  FiEye, 
  FiFileText, 
  FiTerminal, 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiMapPin, 
  FiAward, 
  FiBookOpen, 
  FiBriefcase, 
  FiCheckCircle, 
  FiExternalLink,
  FiCpu
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

type ViewMode = "visual" | "ats" | "terminal";

export const ResumeView: React.FC<{ isModal?: boolean }> = ({ isModal = false }) => {
  const [mode, setMode] = useState<ViewMode>("visual");
  const [copied, setCopied] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<
    { command: string; output: string | React.ReactNode }[]
  >([
    {
      command: "help",
      output: (
        <div className="space-y-1 text-xs sm:text-sm font-mono text-emerald-400">
          <p>💡 Available CLI commands:</p>
          <p>  <span className="text-cyan-300 font-bold">summary</span>   - View developer summary & objective</p>
          <p>  <span className="text-cyan-300 font-bold">skills</span>    - List core programming languages & tech stack</p>
          <p>  <span className="text-cyan-300 font-bold">projects</span>  - Show featured production web applications</p>
          <p>  <span className="text-cyan-300 font-bold">education</span> - Display B.Tech CSE details & college info</p>
          <p>  <span className="text-cyan-300 font-bold">leetcode</span>  - View LeetCode & DSA statistics</p>
          <p>  <span className="text-cyan-300 font-bold">export</span>    - Download / print PDF resume</p>
          <p>  <span className="text-cyan-300 font-bold">clear</span>     - Clear terminal buffer</p>
        </div>
      ),
    },
  ]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyPlainText = () => {
    const plainText = `
${resumeData.name} - ${resumeData.title}
Email: ${resumeData.contact.email} | Location: ${resumeData.contact.location}
GitHub: ${resumeData.contact.github} | LinkedIn: ${resumeData.contact.linkedin} | LeetCode: ${resumeData.contact.leetcode}

SUMMARY:
${resumeData.summary}

EDUCATION:
${resumeData.education[0].institution} - ${resumeData.education[0].degree} (${resumeData.education[0].duration})
CGPA: ${resumeData.education[0].cgpa}
${resumeData.education[0].highlights.join("\n")}

TECHNICAL SKILLS:
${resumeData.skills.map((s) => `${s.category}: ${s.skills.map((k) => k.name).join(", ")}`).join("\n")}

FEATURED PROJECTS:
${resumeData.projects
  .map(
    (p) => `* ${p.title} (${p.subtitle})
  Tech: ${p.techStack.join(", ")}
  ${p.description}
  Key Highlights:
  - ${p.features.join("\n  - ")}`
  )
  .join("\n\n")}

CODING ACHIEVEMENTS:
- LeetCode: 400+ Problems Solved (78+ Medium Problems)
- Academic: 8.5+ CGPA in B.Tech CSE (KIT College of Engineering)

CERTIFICATIONS:
${resumeData.certifications.map((c) => `- ${c.title} (${c.issuer}, ${c.date})`).join("\n")}
    `.trim();

    navigator.clipboard.writeText(plainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    setTerminalInput("");
    if (!cmd) return;

    if (cmd === "clear") {
      setTerminalHistory([]);
      return;
    }

    let output: React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1 text-xs sm:text-sm font-mono text-emerald-400">
            <p>💡 Available commands: summary, skills, projects, education, leetcode, export, clear</p>
          </div>
        );
        break;
      case "summary":
        output = <p className="text-gray-300 font-mono text-xs sm:text-sm">{resumeData.summary}</p>;
        break;
      case "skills":
        output = (
          <div className="space-y-2 font-mono text-xs sm:text-sm">
            {resumeData.skills.map((cat, idx) => (
              <div key={idx}>
                <span className="text-primary font-bold">{cat.category}: </span>
                <span className="text-gray-300">{cat.skills.map((s) => s.name).join(", ")}</span>
              </div>
            ))}
          </div>
        );
        break;
      case "projects":
        output = (
          <div className="space-y-3 font-mono text-xs sm:text-sm">
            {resumeData.projects.map((p, idx) => (
              <div key={idx} className="border-l-2 border-primary/40 pl-3">
                <p className="text-emerald-400 font-bold">{p.title}</p>
                <p className="text-gray-400 text-xs">{p.subtitle}</p>
                <p className="text-cyan-300 text-xs">Stack: {p.techStack.join(" | ")}</p>
              </div>
            ))}
          </div>
        );
        break;
      case "education":
        output = (
          <div className="font-mono text-xs sm:text-sm text-gray-300">
            <p className="text-emerald-400 font-bold">{resumeData.education[0].institution}</p>
            <p>{resumeData.education[0].degree} ({resumeData.education[0].duration})</p>
            <p className="text-cyan-300 font-semibold">Grade: {resumeData.education[0].cgpa}</p>
          </div>
        );
        break;
      case "leetcode":
        output = (
          <div className="font-mono text-xs sm:text-sm text-amber-300">
            <p className="font-bold">⚡ LeetCode Stat Snapshot:</p>
            <p>• Solved: 400+ Algorithmic Problems</p>
            <p>• Mediums: 78+ Solved</p>
            <p>• Focus: Data Structures, Dynamic Programming, Graph & Trees</p>
          </div>
        );
        break;
      case "export":
        handlePrint();
        output = <p className="text-emerald-400 font-mono text-xs sm:text-sm">Opening print dialog...</p>;
        break;
      default:
        output = <p className="text-rose-400 font-mono text-xs sm:text-sm">Command not found: &quot;{cmd}&quot;. Type <span className="underline">help</span> for commands.</p>;
    }

    setTerminalHistory((prev) => [...prev, { command: cmd, output }]);
  };

  return (
    <div className={`w-full ${isModal ? "" : "py-8"}`}>
      {/* Mode Control & Action Bar (Hidden during print) */}
      <div className="print:hidden mb-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-[#0c0c0e]/90 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-primary/20 shadow-lg">
        {/* Mode Selector */}
        <div className="flex items-center bg-[#050507] p-1 rounded-lg border border-primary/20 self-start md:self-auto overflow-x-auto max-w-full">
          <button
            onClick={() => setMode("visual")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all ${
              mode === "visual"
                ? "bg-primary text-[#000000] shadow-md shadow-primary/20 font-bold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <FiEye className="w-4 h-4" />
            <span>Developer Visual</span>
          </button>
          <button
            onClick={() => setMode("ats")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all ${
              mode === "ats"
                ? "bg-emerald-400 text-slate-950 shadow-md shadow-emerald-400/20 font-bold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <FiFileText className="w-4 h-4" />
            <span>Clean ATS Print</span>
          </button>
          <button
            onClick={() => setMode("terminal")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all ${
              mode === "terminal"
                ? "bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/20 font-bold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <FiTerminal className="w-4 h-4" />
            <span>CLI Terminal</span>
          </button>
        </div>

        {/* Export / Quick Actions */}
        <div className="flex items-center gap-2 flex-wrap">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm rounded-lg bg-primary text-[#000f45] font-bold hover:bg-primary/90 shadow-md shadow-primary/20 transition-all active:scale-95"
            title="Download direct PDF file"
          >
            <FiDownload className="w-4 h-4" />
            <span>Download Resume PDF</span>
          </a>

          <button
            onClick={handleCopyPlainText}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm rounded-lg bg-surface-bright/80 hover:bg-surface-bright text-gray-200 border border-primary/20 transition-all active:scale-95"
            title="Copy plain text formatted for ATS submission"
          >
            {copied ? <FiCheck className="w-4 h-4 text-emerald-400" /> : <FiCopy className="w-4 h-4 text-primary" />}
            <span>{copied ? "Copied ATS Text!" : "Copy ATS Text"}</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm rounded-lg bg-surface-bright hover:bg-surface-bright text-tertiary border border-tertiary/30 font-semibold transition-all active:scale-95"
          >
            <FiPrinter className="w-4 h-4" />
            <span>Print View</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MODE 1: VISUAL DEVELOPER RESUME (Premium Glassmorphic Layout)             */}
      {/* ========================================================================= */}
      {mode === "visual" && (
        <div className="space-y-6 text-on-background animate-fadeIn">
          {/* Header Card */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-mono text-primary mb-3">
                  <FiCode className="w-3.5 h-3.5" /> Full-Stack Engineer Candidate
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  {resumeData.name}
                </h1>
                <p className="text-lg sm:text-xl font-medium gradient-text mt-1">
                  {resumeData.title}
                </p>
                <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-2xl">
                  {resumeData.tagline}
                </p>
              </div>

              {/* Contact Pills */}
              <div className="flex flex-col gap-2 text-xs sm:text-sm font-mono text-gray-300 border-l border-primary/20 pl-4 md:pl-6">
                <a
                  href={`mailto:${resumeData.contact.email}`}
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <FiMail className="w-4 h-4 text-tertiary" />
                  <span>{resumeData.contact.email}</span>
                </a>
                <div className="flex items-center gap-2 text-gray-400">
                  <FiMapPin className="w-4 h-4 text-primary" />
                  <span>{resumeData.contact.location}</span>
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <a
                    href={resumeData.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-surface-bright hover:bg-primary/20 text-white hover:text-primary transition-all border border-primary/20"
                    title="GitHub Profile"
                  >
                    <FiGithub className="w-4 h-4" />
                  </a>
                  <a
                    href={resumeData.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-surface-bright hover:bg-primary/20 text-white hover:text-primary transition-all border border-primary/20"
                    title="LinkedIn Profile"
                  >
                    <FiLinkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={resumeData.contact.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-surface-bright hover:bg-amber-500/20 text-white hover:text-amber-400 transition-all border border-amber-500/20"
                    title="LeetCode Profile"
                  >
                    <SiLeetcode className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-primary/10">
              <div className="bg-surface-bright/50 p-3 rounded-xl border border-primary/10">
                <p className="text-xs text-gray-400 font-mono">LeetCode Solved</p>
                <p className="text-xl font-bold text-tertiary font-mono">400+ Problems</p>
              </div>
              <div className="bg-surface-bright/50 p-3 rounded-xl border border-primary/10">
                <p className="text-xs text-gray-400 font-mono">Academic CGPA</p>
                <p className="text-xl font-bold text-primary font-mono">8.5+ CGPA</p>
              </div>
              <div className="bg-surface-bright/50 p-3 rounded-xl border border-primary/10">
                <p className="text-xs text-gray-400 font-mono">Degree & Grad</p>
                <p className="text-xl font-bold text-white font-mono">B.Tech 2027</p>
              </div>
              <div className="bg-surface-bright/50 p-3 rounded-xl border border-primary/10">
                <p className="text-xs text-gray-400 font-mono">Web Projects</p>
                <p className="text-xl font-bold text-cyan-300 font-mono">3 Full-Stack</p>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="glass-card p-6 rounded-2xl">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-3">
              <FiCpu className="w-5 h-5 text-primary" /> Professional Summary
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {resumeData.summary}
            </p>
          </div>

          {/* Technical Skills Bento Matrix */}
          <div className="glass-card p-6 rounded-2xl">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <FiCode className="w-5 h-5 text-tertiary" /> Technical Core Matrix
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resumeData.skills.map((cat, idx) => (
                <div key={idx} className="bg-surface/80 p-4 rounded-xl border border-primary/10">
                  <h3 className="text-xs font-mono font-semibold text-primary uppercase tracking-wider mb-3">
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((sk, sIdx) => (
                      <div
                        key={sIdx}
                        className="skill-tag px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 text-gray-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                        <span>{sk.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects Impact */}
          <div className="glass-card p-6 rounded-2xl">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <FiBriefcase className="w-5 h-5 text-primary" /> Featured Web Software & Projects
            </h2>
            <div className="space-y-5">
              {resumeData.projects.map((proj, idx) => (
                <div
                  key={idx}
                  className="bg-surface/80 p-5 rounded-xl border border-primary/15 hover:border-primary/30 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                        {proj.title}
                        {proj.github && (
                          <a
                            href={proj.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-primary transition-colors text-sm"
                          >
                            <FiExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </h3>
                      <p className="text-xs font-mono text-primary">{proj.subtitle}</p>
                    </div>
                    {proj.metrics && (
                      <span className="text-xs font-mono text-tertiary bg-tertiary/10 border border-tertiary/20 px-2.5 py-1 rounded-full self-start sm:self-auto">
                        {proj.metrics}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 mb-3">{proj.description}</p>

                  <ul className="space-y-1.5 text-xs sm:text-sm text-gray-300 mb-3 pl-1">
                    {proj.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-tertiary mt-1">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-primary/10">
                    {proj.techStack.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-bright text-cyan-300 border border-cyan-400/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education Card */}
            <div className="glass-card p-6 rounded-2xl">
              <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                <FiBookOpen className="w-5 h-5 text-primary" /> Education
              </h2>
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-base font-bold text-white">{edu.institution}</h3>
                  <p className="text-xs font-mono text-tertiary">{edu.degree}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-mono">
                    <span>Duration: {edu.duration}</span>
                    <span className="text-primary font-bold">| {edu.cgpa}</span>
                  </div>
                  <ul className="mt-3 space-y-1 text-xs text-gray-300">
                    {edu.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-1.5">
                        <span className="text-primary">•</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Certifications & Achievements */}
            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                  <FiAward className="w-5 h-5 text-amber-400" /> Certifications & Honors
                </h2>
                <div className="space-y-3 mb-4">
                  {resumeData.certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-surface/80 p-3 rounded-xl border border-amber-400/10">
                      <div>
                        <p className="text-xs font-bold text-white">{cert.title}</p>
                        <p className="text-[11px] text-gray-400">{cert.issuer}</p>
                      </div>
                      <span className="text-[11px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                        {cert.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-surface/80 p-4 rounded-xl border border-primary/10 mt-2">
                <h4 className="text-xs font-mono font-bold text-primary mb-2 flex items-center gap-1.5">
                  <FiCheckCircle className="text-tertiary" /> Key Highlights
                </h4>
                <ul className="space-y-1 text-xs text-gray-300">
                  {resumeData.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-tertiary">•</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODE 2: CLEAN ATS PRINTABLE RESUME (Optimized for PDF export & ATS)      */}
      {/* ========================================================================= */}
      {mode === "ats" && (
        <div className="print-area bg-white text-slate-900 p-8 sm:p-12 rounded-lg shadow-2xl font-sans max-w-4xl mx-auto border border-slate-300">
          {/* Header */}
          <div className="border-b-2 border-slate-800 pb-4 mb-4 text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
              {resumeData.name}
            </h1>
            <p className="text-base font-semibold text-slate-700 mt-0.5">
              {resumeData.title}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-600 font-mono mt-2">
              <span>Email: {resumeData.contact.email}</span>
              <span>•</span>
              <span>{resumeData.contact.location}</span>
              <span>•</span>
              <span>GitHub: Yogesh0314</span>
              <span>•</span>
              <span>LeetCode: 400+ Solved</span>
            </div>
          </div>

          {/* Objective / Summary */}
          <div className="mb-5">
            <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-800 leading-relaxed">
              {resumeData.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-5">
            <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1 text-xs text-slate-800">
              {resumeData.skills.map((cat, idx) => (
                <div key={idx} className="flex">
                  <span className="font-bold w-48 shrink-0">{cat.category}:</span>
                  <span>{cat.skills.map((s) => s.name).join(", ")}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-5">
            <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
              Education
            </h2>
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="text-xs">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>{edu.institution}</span>
                  <span>{edu.duration}</span>
                </div>
                <div className="flex justify-between text-slate-700 italic mb-1">
                  <span>{edu.degree}</span>
                  <span className="font-semibold text-slate-900">{edu.cgpa}</span>
                </div>
                <ul className="list-disc list-inside text-slate-800 space-y-0.5 pl-1">
                  {edu.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="mb-5">
            <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
              Projects & Engineering Work
            </h2>
            <div className="space-y-4 text-xs">
              {resumeData.projects.map((p, idx) => (
                <div key={idx}>
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{p.title} – <span className="font-normal italic">{p.subtitle}</span></span>
                  </div>
                  <div className="text-[11px] text-slate-600 font-mono mb-1">
                    Tech Stack: {p.techStack.join(", ")}
                  </div>
                  <p className="text-slate-800 mb-1">{p.description}</p>
                  <ul className="list-disc list-inside text-slate-800 space-y-0.5 pl-1">
                    {p.features.map((f, fIdx) => (
                      <li key={fIdx}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Algorithmic Problem Solving & Achievements */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
              Coding Profiles & Certifications
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-800 space-y-1">
              <li><strong>LeetCode:</strong> 400+ Algorithmic Problems Solved (78+ Medium difficulty problems). Focus on Data Structures, DP, Graphs & Trees.</li>
              {resumeData.certifications.map((c, idx) => (
                <li key={idx}><strong>{c.title}</strong> – Issued by {c.issuer} ({c.date})</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODE 3: CLI TERMINAL MODE (Interactive Console)                           */}
      {/* ========================================================================= */}
      {mode === "terminal" && (
        <div className="code-block p-4 sm:p-6 rounded-2xl text-xs sm:text-sm font-mono shadow-2xl min-h-[480px] flex flex-col justify-between">
          {/* Top Bar */}
          <div>
            <div className="flex items-center justify-between border-b border-primary/20 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-gray-400 text-xs ml-2">yogesh@developer-terminal:~</span>
              </div>
              <span className="text-[11px] text-tertiary">Interactive Mode</span>
            </div>

            {/* History */}
            <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2">
              {terminalHistory.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-cyan-300">
                    <span className="text-tertiary">patil@dev:~$</span>
                    <span>{item.command}</span>
                  </div>
                  <div className="pl-4">{item.output}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Command Prompt */}
          <form onSubmit={handleTerminalSubmit} className="mt-4 pt-3 border-t border-primary/20 flex items-center gap-2">
            <span className="text-tertiary font-bold">patil@dev:~$</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="type 'help', 'skills', 'projects', 'leetcode', 'education', or 'export'..."
              className="flex-1 bg-transparent text-white outline-none font-mono text-xs sm:text-sm placeholder-gray-500"
              autoFocus
            />
            <span className="cursor-blink text-primary">█</span>
          </form>
        </div>
      )}
    </div>
  );
};
