// Resume content. The `resumes` map lets you keep multiple CV variants (e.g. "default", "backend")
// and switch between them via the `cvType` query param on the resume page.
// Content follows the resume-cover-letter skill: positioning summary, CAR-style
// bullets with strong verbs, no filler bullets. "TODO metric" comments mark
// places where a real number would strengthen the bullet.
import type { ResumeData } from "./types";

const defaultResume: ResumeData = {
  personal: {
    name: "Nguyen Ngoc Nhan",
    title: "Fullstack Developer",
    email: "nhan.ktsa1@gmail.com",
    phone: "0982473896",
    location: "Ho Chi Minh City, Vietnam",
    github: "https://github.com/mourinhan8",
    linkedin: "https://www.linkedin.com/in/ngoc-nhan-nguyen-a14192238",
    website: null,
  },
  summary:
    "Full-stack developer with 4+ years shipping web products on React/Next.js, NestJS, and FastAPI, most recently building production AI systems: no-code agent platforms, Retrieval-Augmented Generation (RAG) pipelines, and multi-vector-store search at AIxBlock. Comfortable owning a feature from data model to deployment on AWS, with a cybersecurity background that shows up in how I handle auth, RBAC, and data protection. Looking for a senior full-stack or AI engineering role where I can own delivery end to end and grow into leading a small team.",
  education: [
    {
      institution: "Peter the Great St. Petersburg Polytechnic University",
      degree: "Bachelor of Engineering, Information Systems",
      location: "St. Petersburg, Russia",
      graduationYear: "2021",
      startYear: "2016",
      gpa: "3.0/4.0",
      bullets: [
        "Coursework: network technology, system optimisation, neural networks, computer system performance evaluation, web application development.",
      ],
    },
  ],
  experience: [
    {
      company: "AIxBlock",
      position: "Fullstack Developer / AI Engineer",
      location: "Ho Chi Minh City, Vietnam",
      startDate: "Jul 2025",
      endDate: "Feb 2026",
      achievements: [
        "Built a production no-code AI agent platform (ReactJS, NestJS, FastAPI) that lets non-developers assemble, configure, and deploy LLM agents with MCP-based context management, dynamic prompting, and function calling.",
        // TODO metric: latency/cost improvement
        "Designed the RAG pipeline end to end (ingestion, chunking, embedding, indexing, hybrid retrieval) and integrated FAISS, Pinecone, and Weaviate so users can pick a vector backend and embedding model per use case to balance cost and latency.",
        "Hardened the platform for production: Auth0 authentication with RBAC, Redis caching and Pub/Sub for real-time updates, RabbitMQ pipelines for asynchronous processing.",
        // TODO metric: number of users/workflows
        "Delivered a no-code AI training workflow with reusable templates and predefined training scripts, standardised pipeline config via MCP, and Grafana monitoring of training runs.",
      ],
    },
    {
      company: "Datanet Studio",
      position: "Fullstack Developer / AI Researcher",
      location: "Ho Chi Minh City, Vietnam",
      startDate: "Jan 2024",
      endDate: "Apr 2025",
      achievements: [
        "Designed and implemented scalable FastAPI backends for client data-analytics and AI products, owning performance, reliability, and alignment with client requirements.",
        // TODO metric: response time / hardware footprint
        "Built a local-model virtual assistant (Ollama, LangChain, vector DB) with a full RAG pipeline, tuned for low-latency inference on limited hardware.",
        "Developed a social-media trend collector and predictor (Pyppeteer scraping, FastAPI services, LLM classification) with a Next.js/MUI dashboard.",
      ],
    },
    {
      company: "Spinel Labs",
      position: "Fullstack Developer",
      location: "Ho Chi Minh City, Vietnam",
      startDate: "Aug 2022",
      endDate: "Jan 2024",
      achievements: [
        "Delivered dApp and AI outsourcing projects across NestJS, Next.js, FastAPI, Django, and Flask, working directly with the BA team and clients from requirements through release.",
        "Shipped an administrative document-sharing system with OpenFGA fine-grained authorization, SSO integration, RabbitMQ microservices, and AWS deployment.",
        "Built a computer-vision exam-proctoring app (Mediapipe face-behaviour detection, Next.js, FastAPI) and contributed findings to a published research article.",
        // TODO metric: team size
        "Coordinated a small developer team as a step toward technical leadership.",
      ],
    },
    {
      company: "DXT Technology",
      position: "Intern Developer",
      location: "Ho Chi Minh City, Vietnam",
      startDate: "Mar 2022",
      endDate: "Aug 2022",
      achievements: [
        "Built web application features with Next.js and NestJS in a startup team, learning API integration and collaborative Git workflows on real client work.",
      ],
    },
  ],
  skills: [
    { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java"] },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tauri (desktop)", "Tailwind CSS", "shadcn/ui", "MUI", "Ant Design", "Mantine"],
    },
    {
      category: "Backend",
      items: ["NestJS", "Express", "FastAPI", "Django", "Spring Boot", "REST", "Microservices", "API Gateway"],
    },
    {
      category: "AI / LLM",
      items: [
        "LangChain",
        "RAG",
        "Vector search (FAISS, Pinecone, Weaviate)",
        "Embeddings",
        "MCP",
        "Tool calling",
        "Ollama",
        "Hugging Face",
        "Prompt engineering",
        "LLM fine-tuning and deployment",
      ],
    },
    { category: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "RabbitMQ"] },
    {
      category: "Infra & Security",
      items: ["AWS", "Google Cloud", "Docker", "Grafana", "JWT", "OAuth2", "RBAC", "Auth0", "OpenFGA"],
    },
    { category: "Practices", items: ["AI coding agents / AI-assisted development", "System design", "Git", "Unit testing"] },
    { category: "English", items: ["Intermediate"] },
  ],
  projects: [
    {
      title: "Driving License Learning & Examination Platform",
      role: "React, NestJS, Tauri, TypeScript, AI coding agents",
      achievements: [
        "Designed and built a learning-management and mock-exam platform for driving-licence learners: React/NestJS admin system plus a cross-platform desktop app in React + Tauri.",
        "Ran the full lifecycle with AI-native workflows, using coding agents for prototyping, implementation, refactoring, and debugging while keeping ownership of architecture and code quality.",
      ],
    },
    {
      title: "Vkara – Collaborative Karaoke Platform",
      role: "TypeScript, REST API, Redis, Docker, YouTube integration",
      achievements: [
        "Customised an open-source karaoke platform that turns a TV or laptop into a shared player; mobile users join rooms via code or QR and manage the playback queue remotely.",
        "Maintained shared real-time state for rooms, queues, and playback across a monorepo full-stack codebase with Redis-backed services and Dockerised environments.",
        "Validated every AI-generated change through review and testing before integration.",
      ],
    },
    {
      title: "Ecommerce Application for Mall",
      role: "Next.js, Ant Design, NestJS, MongoDB",
      achievements: [
        "Built and maintained the storefront (Next.js) and backend (NestJS/MongoDB), including payment-gateway integration.",
      ],
    },
  ],
  codingProfiles: [],
  certifications: [],
  achievements: [],
};

export const resumes: Record<string, ResumeData> = {
  default: defaultResume,
};

export const resumeData = resumes.default;

/** Finds a top-level project by title. */
export function findProject(title: string) {
  return resumeData.projects.find((p) => p.title === title) ?? null;
}
