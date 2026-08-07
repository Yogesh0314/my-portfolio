import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yogeshpatil.dev"),
  title: {
    default: "Yogesh Patil | Full Stack Developer & Computer Science Engineer",
    template: "%s | Yogesh Patil",
  },
  description:
    "Portfolio & Resume of Yogesh Patil - Full Stack Developer (React, Next.js, Node.js, PostgreSQL, MongoDB) and Problem Solver with 400+ LeetCode problems solved.",
  keywords: [
    "Yogesh Patil",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Software Engineer Intern",
    "KIT College of Engineering",
    "LeetCode 400+",
  ],
  authors: [{ name: "Yogesh Patil", url: "https://github.com/Yogesh0314" }],
  creator: "Yogesh Patil",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yogeshpatil.dev",
    title: "Yogesh Patil | Full Stack Developer",
    description:
      "Full Stack Software Developer specializing in Next.js, React, Node.js, and scalable web solutions. 400+ LeetCode problems solved.",
    siteName: "Yogesh Patil Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Yogesh Patil - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yogesh Patil | Full Stack Developer",
    description:
      "Full Stack Software Developer specializing in Next.js, React, Node.js, and scalable web solutions.",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yogesh Patil",
  jobTitle: "Full Stack Software Developer",
  url: "https://github.com/Yogesh0314",
  sameAs: [
    "https://github.com/Yogesh0314",
    "https://www.linkedin.com/in/yogesh0314/",
    "https://leetcode.com/u/yogesh0314/",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "KIT College of Engineering, Kolhapur",
  },
  knowsAbout: [
    "Full Stack Web Development",
    "React.js",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Data Structures & Algorithms",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

