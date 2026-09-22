import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { LuBot, LuBookOpen, LuCode, LuHeadset, LuMail, LuServer } from "react-icons/lu";
import {
  SiAngular, SiClaude, SiCloudflare, SiCss, SiDocker, SiDotnet, SiExpress, SiGit, SiHtml5, SiJavascript,
  SiJekyll, SiMysql, SiNodedotjs, SiPortainer, SiReact, SiSharp, SiTypescript, SiUbuntu, SiVuedotjs,
} from "react-icons/si";

/* ------------------------------------------------------------------
   All the text on the site lives in this file.
   To add a project, add one more object to `projects` at the bottom.
------------------------------------------------------------------- */

export const profile = {
  name: "Santhosh",
  roles: ["Software Engineer", "Frontend Engineer", "TypeScript Developer"],
  location: "Chennai, Tamil Nadu, India",
  email: "santhoshmail21@gmail.com",
  linkedin: "https://www.linkedin.com/in/santhosh21",
  github: "https://github.com/santhosh021",
  resume: "/Santhosh_Resume.pdf",
  lastRole: "Most recently, Software Engineer at Syncfusion (Sep 2022 to May 2026)",
  intro:
    "I have 3 years 9 months of experience building, maintaining and supporting production UI components in TypeScript, used across React, Angular, Vue, JavaScript, ASP.NET Core and ASP.NET MVC applications. I also build REST APIs in C# and Node.js on top of MySQL and SQL Server.",
};

export const about = {
  paragraphs: [
    "I am a frontend-focused software engineer. For almost four years I worked on a data grid component: shipping features, fixing bugs, and helping professional developers get unstuck when something did not behave in their own applications.",
    "That mix of building the component and supporting the people who use it taught me to read other people's code, reproduce problems quickly, and explain fixes clearly. I also enjoy the server side: I have written REST endpoints in C# and Node.js and worked with MySQL and SQL Server.",
    "I also use AI coding assistants in my work, set up with rules, subagents, skills and MCP servers so they follow the way I want to build.",
  ],
  facts: [
    { label: "Based in", value: "Chennai, Tamil Nadu, India" },
    { label: "Experience", value: "3 years 9 months" },
    { label: "Focus", value: "Frontend engineering with TypeScript" },
    { label: "Education", value: "B.Tech, Information Technology" },
    { label: "Looking for", value: "Frontend roles in Chennai: on-site, hybrid or remote" },
  ],
};

export const experience = {
  company: "Syncfusion",
  role: "Software Engineer",
  dates: "Sep 2022 to May 2026",
  team: "Essential JS 2 Grid team: development and technical support",
  levels: [
    { level: "Level 1", when: "Sep 2022" },
    { level: "Level 2", when: "Jul 2024" },
    { level: "Level 3", when: "Jul 2025" },
    { level: "Level 5", when: "Jan 2026", note: "Two-level promotion" },
  ],
  stats: [
    { value: "10+", label: "features built" },
    { value: "~500", label: "bug fixes" },
    { value: "~1,500", label: "support tickets" },
    { value: "~30", label: "releases" },
  ],
  statsNote: "Figures are approximate, across my full time on the team.",
  cards: [
    {
      icon: LuCode,
      title: "Grid development",
      summary: "Features and fixes in the TypeScript source of a production data grid.",
      details: [
        "Worked directly in the TypeScript source of the Essential JS 2 Grid.",
        "Built and improved editing, searching, paging, accessibility and the DataManager data layer.",
        "Worked across the JavaScript, React, Angular, Vue, ASP.NET Core and ASP.NET MVC versions of the component.",
        "Took part in sprint planning, code reviews and release validation for around 30 releases.",
      ],
    },
    {
      icon: LuHeadset,
      title: "Support and escalations",
      summary: "Solving real problems in developers' own applications.",
      details: [
        "Resolved around 1,500 tickets from professional developers through the BoldDesk ticket system.",
        "Built complete, framework-specific sample projects to reproduce each issue.",
        "Ran live Microsoft Teams remote sessions to debug in the customer's environment when an issue could not be reproduced.",
        "Took over customer cases escalated to me by other support team members.",
      ],
    },
    {
      icon: LuBookOpen,
      title: "Samples and documentation",
      summary: "Showcase apps and docs that help developers adopt the component.",
      details: [
        "Built several full-featured, framework-specific dashboard-style applications showing the component's capabilities.",
        "Wrote documentation for DataManager adaptors and connecting the Grid to databases.",
        "Corrected multiple sections of the Grid documentation, previewing changes locally with Jekyll.",
      ],
    },
    {
      icon: LuServer,
      title: "Backend integration",
      summary: "APIs and databases that feed the Grid.",
      details: [
        "Created and changed REST API endpoints in C#/.NET and Node.js that serve data to the Grid.",
        "Used MySQL and Microsoft SQL Server as the data sources.",
      ],
    },
  ],
};

export interface Skill { name: string; icon?: IconType }
export const skillGroups: Array<{ title: string; skills: Skill[] }> = [
  {
    title: "Frontend",
    skills: [
      { name: "TypeScript", icon: SiTypescript }, { name: "JavaScript", icon: SiJavascript }, { name: "React", icon: SiReact },
      { name: "Angular", icon: SiAngular }, { name: "Vue", icon: SiVuedotjs }, { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss }, { name: "Web accessibility" },
    ],
  },
  {
    title: "Backend and data",
    skills: [
      { name: "C#", icon: SiSharp }, { name: "ASP.NET Core", icon: SiDotnet }, { name: "ASP.NET MVC" }, { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress }, { name: "REST APIs" }, { name: "MySQL", icon: SiMysql }, { name: "SQL Server" },
    ],
  },
  {
    title: "DevOps and tools",
    skills: [
      { name: "Git", icon: SiGit }, { name: "Docker", icon: SiDocker }, { name: "Docker Compose" }, { name: "Portainer", icon: SiPortainer },
      { name: "Cloudflare Tunnel", icon: SiCloudflare }, { name: "Ubuntu server", icon: SiUbuntu }, { name: "Jekyll", icon: SiJekyll },
    ],
  },
  {
    title: "AI-assisted development",
    skills: [{ name: "Claude Code", icon: SiClaude }, { name: "OpenAI Codex", icon: LuBot }, { name: "MCP servers" }, { name: "Agent skills" }, { name: "Subagents" }],
  },
];

export const aiItems = [
  { title: "Claude Code and OpenAI Codex", text: "Used with IDE integration in professional work at Syncfusion and on personal projects." },
  { title: "Rules and instructions", text: "Project rule files (CLAUDE.md and AGENTS.md) that tell agents the stack, the conventions and the limits." },
  { title: "Agents and subagents", text: "Splitting work between focused agents instead of one long, unfocused session." },
  { title: "Skills and MCP servers", text: "Extending agents with reusable skills and tool connections." },
  { title: "Context and token management", text: "Keeping sessions small and focused so results stay accurate and cheap." },
];

export const education = {
  degree: "B.Tech, Information Technology",
  school: "M.A.M. College of Engineering, Tiruchirappalli",
  years: "2018 to 2022",
  grade: "CGPA 8.46 / 10",
};

export interface Project {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tags: string[];
  image: string;
  imageAlt: string;
  secondImage?: string;
  secondImageAlt?: string;
  liveUrl?: string;
  repoUrl?: string;
  /** Featured projects get a large row. The others appear as compact cards. */
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Stockroom",
    tagline: "Inventory management app",
    description:
      "A full-stack inventory app for tracking products, categories and every stock in and stock out, with low-stock alerts, a dashboard and CSV export. Built with AI coding assistants, self-hosted with Docker.",
    highlights: [
      "Server-side search, sorting, filtering and pagination, with table state kept in the URL.",
      "Stock changes run in database transactions with row locking, so simultaneous requests cannot overspend stock.",
      "30 automated API tests, including one for simultaneous requests.",
      "Docker Compose stack (nginx, API, MySQL with a persistent volume) on my own Ubuntu server, served over HTTPS through a Cloudflare Tunnel.",
    ],
    tags: ["React", "TypeScript", "Node.js", "Express", "MySQL", "Docker"],
    image: "/stockroom-dashboard.jpg",
    imageAlt: "Stockroom dashboard showing stock totals, a category chart and low-stock items",
    secondImage: "/stockroom-products.jpg",
    secondImageAlt: "Stockroom products table with search, filters and stock level bars",
    liveUrl: "https://inventory.imsanthosh.tech",
    repoUrl: "https://github.com/santhosh021/inventory-management-app",
    featured: true,
  },
  {
    title: "Nexus",
    tagline: "Where public data lives",
    description:
      "Nine free public APIs, each with its own colour theme and the visual best suited to its data, all behind a small backend proxy that keeps every API key off the browser. Built with AI coding assistants.",
    highlights: [
      "Live weather using the browser's own location, GitHub repo stats with a real commit chart, npm download trends, crypto prices, Hacker News, DEV.to, Stack Overflow, currency rates, and recent CVEs.",
      "A Node/Express proxy holds every API key server-side; the browser never sees them, and responses are cached briefly to stay inside each free API's rate limit.",
      "Switching panels crossfades the whole colour theme instead of jumping, and each panel's header stays in view while its content scrolls.",
      "A React error boundary keeps the sidebar and the rest of the app working even if one panel's data fails to load.",
    ],
    tags: ["React", "TypeScript", "Node.js", "Express", "Docker"],
    image: "/nexus-landing.jpg",
    imageAlt: "Nexus landing page showing nine public data panels, each with its own colour",
    secondImage: "/nexus-github.jpg",
    secondImageAlt: "Nexus GitHub panel showing real repository stats and a commit activity chart",
    liveUrl: "https://nexus.imsanthosh.tech",
    repoUrl: "https://github.com/santhosh021/nexus",
    featured: true,
  },
];

export const socials = [
  { label: "Email", href: `mailto:${profile.email}`, icon: LuMail },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedinIn },
  { label: "GitHub", href: profile.github, icon: FaGithub },
];
