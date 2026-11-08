// Resume content. The `resumes` map lets you keep multiple CV variants (e.g. "default", "backend")
// and switch between them via the `cvType` query param on the resume page.
// Project details come from the source CV and candidate-provided descriptions.
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
    "Full-stack developer with over four years of software development experience across web applications and backend services. Built Go (Golang) backends for financial investment and ecommerce platforms, with Next.js frontends and payment-gateway integrations. Additional experience includes React, Node.js, NestJS, ExpressJS, FastAPI, database design, API integration, authentication and authorization, Redis caching, asynchronous processing, and AWS deployment. Uses AI coding agents for implementation, debugging, testing, and code review, with a cybersecurity background informing security and data-protection decisions.",
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
        "Designed the RAG pipeline end to end (ingestion, chunking, embedding, indexing, hybrid retrieval) and integrated FAISS, Pinecone, and Weaviate so users can pick a vector backend and embedding model per use case to balance cost and latency.",
        "Hardened the platform for production: Auth0 authentication with RBAC, Redis caching and Pub/Sub for real-time updates, RabbitMQ pipelines for asynchronous processing.",
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
        "Received training in leading a small development team.",
      ],
    },
    {
      company: "DXT Technology",
      position: "Intern Developer",
      location: "Ho Chi Minh City, Vietnam",
      startDate: "Mar 2022",
      endDate: "Aug 2022",
      achievements: [
        "Trained in and contributed to Next.js and NestJS web applications, developing practical skills in web architecture, API integration, and collaborative development workflows.",
      ],
    },
  ],
  skills: [
    { category: "Languages", items: ["Go (Golang)", "TypeScript", "JavaScript", "Python", "Java"] },
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
        "LLM training, testing, inference, and deployment",
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
      title: "Social Finance – Financial Investment Platform",
      role: "Go (Golang), Next.js, Web3.js, MongoDB, JWT, AWS",
      achievements: [
        "Analyzed investment-platform requirements and designed the database structure.",
        "Built and maintained the Next.js website and designed, implemented, and maintained backend services in Go.",
        "Integrated a cryptocurrency payment gateway into the platform.",
        "Debugged and maintained application code and deployed the system on AWS.",
      ],
    },
    {
      title: "SnapTask – Freelancer Platform with Cryptocurrency Payments",
      role: "React, Node.js, ExpressJS, Web3.js, MongoDB, OAuth",
      achievements: [
        "Built and maintained the React application and Node.js/ExpressJS backend for a freelancer platform.",
        "Implemented a cryptocurrency payment gateway to support payments on the platform.",
      ],
    },
    {
      title: "AIxBlock – No-code AI Agents",
      role: "React, NestJS, FastAPI, Auth0, Redis, RabbitMQ, LangChain, MCP, VectorDB",
      achievements: [
        "Designed and developed a production-grade platform for building and deploying AI agents without coding, with React interfaces and NestJS/FastAPI services.",
        "Built the RAG pipeline from document ingestion and preprocessing through chunking, embedding, indexing, and hybrid retrieval.",
        "Integrated FAISS, Pinecone, and Weaviate, allowing users to select vector storage and embedding models for their use cases.",
        "Developed configurable agents with MCP context management, dynamic prompts, and function calling.",
        "Integrated Auth0 authentication and role-based access control, Redis caching and Pub/Sub, and RabbitMQ asynchronous processing pipelines.",
      ],
    },
    {
      title: "Administrative Document Sharing System",
      role: "Next.js, Mantine UI, Spring Boot, NestJS, OpenFGA, RabbitMQ, Microservices, AWS",
      achievements: [
        "Analyzed requirements and implemented the Next.js application and NestJS backend services.",
        "Implemented document-access authorization with OpenFGA and integrated single sign-on.",
        "Wrote unit tests, debugged and maintained application code, and deployed the system on AWS.",
      ],
    },
    {
      title: "Social Media Post Collection & Trend Prediction",
      role: "React, Next.js, MUI, FastAPI, Pyppeteer, LLM",
      achievements: [
        "Analyzed requirements and implemented the application interface with React and MUI.",
        "Built a social-media post collector with Pyppeteer and FastAPI services for collection and trend prediction.",
        "Wrote unit tests, debugged issues, and maintained the application and services.",
      ],
    },
    {
      title: "Virtual Assistant with Lightweight LLM (RAG-based System)",
      role: "Ollama, React, shadcn/ui, FastAPI, LangChain, RAG, VectorDB",
      achievements: [
        "Developed a virtual assistant using local language models, with FastAPI backend APIs and a React/shadcn interface.",
        "Implemented an end-to-end RAG pipeline and integrated a vector database for semantic search.",
        "Optimized inference for low latency and resource efficiency, and handled performance tuning, debugging, and maintenance.",
      ],
    },
    {
      title: "AIxBlock – No-code AI Training Workflows",
      role: "React, FastAPI, Auth0, MCP, Redis, LangChain, LLM, Grafana",
      achievements: [
        "Built configurable workflow templates and predefined scripts enabling non-technical users to train and experiment with AI models.",
        "Implemented FastAPI services for AI workflows and training, and integrated LangChain and LLMs into configurable pipelines.",
        "Integrated Auth0 authentication and role-based access control, and standardized pipeline configuration and context handling through MCP.",
        "Monitored system performance and training workflows with Grafana.",
      ],
    },
    {
      title: "Cheating Detection in Examination with Computer Vision",
      role: "Next.js, Material UI, NestJS, MediaPipe, FastAPI",
      achievements: [
        "Analyzed requirements and translated Figma designs into a Next.js examination application.",
        "Integrated MediaPipe for face-behavior detection and implemented backend services with FastAPI.",
        "Wrote, debugged, and maintained application code and contributed content to scientific research articles.",
      ],
    },
    {
      title: "Driving License Learning & Examination Platform",
      role: "React, NestJS, Tauri, TypeScript, AI coding agents",
      achievements: [
        "Designed and built a learning-management and mock-exam platform for driving-licence learners: React/NestJS admin system plus a cross-platform desktop app in React + Tauri.",
        "Ran the full lifecycle with AI-native workflows, using coding agents for prototyping, implementation, refactoring, and debugging while keeping ownership of architecture and code quality.",
      ],
    },
    {
      title: "Ecommerce Application for Mall",
      role: "Go (Golang), Next.js, Ant Design, MongoDB",
      achievements: [
        "Built and maintained the Next.js storefront and Go backend with MongoDB, including payment-gateway integration.",
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
