export interface ProjectData {
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  features: string[];
  github?: string;
  demo?: string;
  metrics?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; iconName?: string }[];
}

export interface EducationData {
  institution: string;
  degree: string;
  duration: string;
  cgpa: string;
  highlights: string[];
}

export interface CodingProfileData {
  platform: string;
  username: string;
  stats: string;
  detail: string;
  badge: string;
  url: string;
}

export interface ResumeData {
  name: string;
  title: string;
  tagline: string;
  contact: {
    email: string;
    location: string;
    github: string;
    linkedin: string;
    leetcode: string;
  };
  summary: string;
  education: EducationData[];
  skills: SkillCategory[];
  projects: ProjectData[];
  codingProfiles: CodingProfileData[];
  certifications: { title: string; issuer: string; date: string }[];
  achievements: string[];
}

export const resumeData: ResumeData = {
  name: "Yogesh Patil",
  title: "Full Stack Software Developer",
  tagline: "Building scalable web applications & solving complex algorithmic problems",
  contact: {
    email: "patilyogesh314@gmail.com",
    location: "Kolhapur, Maharashtra, India",
    github: "https://github.com/Yogesh0314",
    linkedin: "https://www.linkedin.com/in/yogesh0314/",
    leetcode: "https://leetcode.com/u/yogesh0314/",
  },
  summary:
    "Ambitious Computer Science & Engineering undergraduate with strong expertise in Full Stack Web Development (React, Next.js, Node.js, Express, PostgreSQL, MongoDB) and Problem Solving (400+ LeetCode problems solved). Experienced in building robust end-to-end web software, implementing REST APIs, database schemas, and computer vision systems.",
  education: [
    {
      institution: "KIT College of Engineering, Kolhapur",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "2023 – 2027",
      cgpa: "8.5+ CGPA",
      highlights: [
        "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management Systems, Web Technologies, Computer Networks, Operating Systems.",
        "Consistently maintained top academic standing with focus on practical system implementation.",
      ],
    },
  ],
  skills: [
    {
      category: "Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript (ES6+)", level: 92 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 85 },
        { name: "SQL", level: 88 },
        { name: "HTML5/CSS3", level: 95 },
      ],
    },
    {
      category: "Frontend Frameworks & Libraries",
      skills: [
        { name: "Next.js", level: 88 },
        { name: "React.js", level: 92 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 82 },
        { name: "Redux / Context API", level: 85 },
      ],
    },
    {
      category: "Backend & Databases",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 90 },
        { name: "RESTful APIs", level: 92 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 85 },
        { name: "Flask", level: 80 },
      ],
    },
    {
      category: "AI / ML & Developer Tools",
      skills: [
        { name: "YOLOv8", level: 85 },
        { name: "OpenCV", level: 82 },
        { name: "Git & GitHub", level: 90 },
        { name: "Postman", level: 88 },
        { name: "VS Code", level: 95 },
        { name: "Vercel", level: 88 },
      ],
    },
  ],
  projects: [
    {
      title: "AI-Based Traffic Control System",
      subtitle: "Intelligent Computer Vision Signal Optimization Engine",
      description:
        "Engineered a real-time computer vision system leveraging YOLOv8 object detection to estimate vehicle density and dynamically adjust traffic light durations, reducing urban congestion.",
      techStack: ["Python", "YOLOv8", "OpenCV", "PyTorch", "Flask"],
      features: [
        "Real-time vehicle detection and density estimation across multi-lane traffic feeds.",
        "Dynamic signal timing algorithm adjusting green lights based on live queue length.",
        "Built lightweight Flask API service for processing camera feeds and telemetry stream.",
      ],
      github: "https://github.com/Yogesh0314/AI-Based-Tra-ic-Control-System",
      metrics: "YOLOv8 Real-time Inference • Dynamic Signal Timing Algorithm",
    },
    {
      title: "API Cost Guardian",
      subtitle: "Production-Grade API Rate Limiting & Usage Cost Middleware",
      description:
        "Developed a robust backend system for monitoring API request costs, enforcing budget thresholds, tracking token usage analytics, and preventing cost overruns.",
      techStack: ["Node.js", "Express.js", "MongoDB", "REST API", "Middleware"],
      features: [
        "Constructed intelligent rate-limiting middleware to guard expensive AI/3rd party APIs.",
        "Real-time token and request consumption telemetry dashboards.",
        "Automated alerts and circuit breakers when client budget thresholds are crossed.",
      ],
      github: "https://github.com/Yogesh0314/API-Cost-Guardian",
      metrics: "Automated Rate-Limiting & Budget Circuit-Breaker Middleware",
    },
    {
      title: "SeekerScope",
      subtitle: "Full-Stack Job Search & Interactive Career Portal",
      description:
        "Built an end-to-end recruitment platform connecting job seekers and recruiters with interactive career roadmaps, applicant tracking, and administration dashboards.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      features: [
        "Designed separate candidate and recruiter portals with secure authentication.",
        "Built interactive career roadmap visualizer and custom profile builder.",
        "Created RESTful backend services for application submission, filtering, and candidate analytics.",
      ],
      github: "https://github.com/Yogesh0314/SeekerScope",
      metrics: "Full MERN Recruitment Portal • Dual Recruiter/Seeker Dashboards",
    },
  ],
  codingProfiles: [
    {
      platform: "LeetCode",
      username: "yogesh0314",
      stats: "400+ Problems Solved",
      detail: "78+ Medium Problems • Top Problem Solver in DSA (Arrays, Dynamic Programming, Trees, Graphs)",
      badge: "400+ Solved",
      url: "https://leetcode.com/u/yogesh0314/",
    },
    {
      platform: "GitHub",
      username: "Yogesh0314",
      stats: "Active Open Source Contributor",
      detail: "Multiple full-stack repositories, clean commits, and computer vision systems.",
      badge: "Active Repos",
      url: "https://github.com/Yogesh0314",
    },
  ],
  certifications: [
    {
      title: "Java Programming Certification",
      issuer: "Verified Certification",
      date: "2025",
    },
    {
      title: "HPE Software Engineering Job Simulation",
      issuer: "Hewlett Packard Enterprise (Forage)",
      date: "2026",
    },
  ],
  achievements: [
    "Solved over 400 algorithmic problems on LeetCode focusing on data structures & optimization.",
    "Maintained consistent 8.5+ CGPA while leading multiple software engineering projects.",
    "Active contributor to college technical events, hackathons, and software build competitions.",
  ],
};
