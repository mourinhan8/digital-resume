// Resume content. The `resumes` map lets you keep multiple CV variants (e.g. "default", "backend")
// and switch between them via the `cvType` query param on the resume page.
// Project details come from the source CV and candidate-provided descriptions.
import type { ResumeData } from "./types";

const defaultResume: ResumeData = {
  personal: {
    name: "Nguyen Ngoc Nhan",
    title: "Fullstack Developer (AI-native)",
    email: "nhan.ktsa1@gmail.com",
    phone: "0982473896",
    location: "Da Nang, Vietnam",
    github: "https://github.com/mourinhan8",
    linkedin: "https://www.linkedin.com/in/ngoc-nhan-nguyen-a14192238",
    website: null,
  },
  summary:
    "Full-stack developer with over four years building production web products in React/TypeScript with Python (FastAPI), Node.js, and Go backends. Works AI-natively: a coding agent (Claude Code / Codex) is part of every task, from writing the spec and context up front, to reviewing and verifying every diff, debugging what the agent gets wrong, and keeping project agent instructions current. Has built product features on top of LLM APIs, including a no-code AI agent platform with MCP context management, tool calling, and RAG over multiple vector stores. Comfortable owning a feature end to end: schema, API, UI, tests, Docker and AWS deployment. Experience coordinating a small team and based in Da Nang.",
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
      location: "Remote (Da Nang, Vietnam)",
      startDate: "Jul 2025",
      endDate: "Feb 2026",
      achievements: [
        "Built a production no-code AI agent platform (React, NestJS, FastAPI) that lets non-developers assemble, configure, and deploy LLM agents, with MCP-based context management, dynamic prompting, and tool/function calling on top of LLM APIs.",
        "Designed the RAG pipeline end to end (ingestion, chunking, embedding, indexing, hybrid retrieval) and integrated FAISS, Pinecone, and Weaviate so users can pick a vector backend and embedding model per use case to balance cost and latency.",
        "Hardened the platform for production: Auth0 authentication with RBAC, Redis caching and Pub/Sub for real-time updates, RabbitMQ pipelines for asynchronous processing.",
        "Delivered a no-code AI training workflow with reusable templates and predefined training scripts, standardised pipeline config via MCP, and Grafana monitoring of training runs.",
        "Shipped features with coding agents daily: wrote the spec and context first, split work into verifiable steps, reviewed every generated diff, and fixed agent-introduced bugs before merge.",
      ],
    },
    {
      company: "Datanet Studio",
      position: "Fullstack Developer / AI Researcher",
      location: "Da Nang, Vietnam",
      startDate: "Jan 2024",
      endDate: "Apr 2025",
      achievements: [
        "Designed and implemented scalable FastAPI backends for client data-analytics and AI products, owning performance, reliability, and alignment with client requirements.",
        "Built LLM-backed product features (RAG assistant on local models, LLM-based trend classification) rather than only using AI tooling to write code.",
      ],
    },
    {
      company: "Spinel Labs",
      position: "Fullstack Developer",
      location: "Da Nang, Vietnam",
      startDate: "Aug 2022",
      endDate: "Jan 2024",
      achievements: [
        "Delivered dApp and AI outsourcing projects across NestJS, Next.js, FastAPI, Django, and Flask, working directly with the BA team and clients from requirements through release.",
        "Coordinated a small development team: split features into tasks, reviewed merge requests, unblocked teammates, and kept the lead informed of progress and risks early.",
        "Mentored junior developers through code review and pairing, explaining the reasoning behind feedback.",
      ],
    },
    {
      company: "DXT Technology",
      position: "Intern Developer",
      location: "Da Nang, Vietnam",
      startDate: "Mar 2022",
      endDate: "Aug 2022",
      achievements: [
        "Trained in and contributed to Next.js and NestJS web applications, developing practical skills in web architecture, API integration, and collaborative development workflows.",
      ],
    },
  ],
  skills: [
    { category: "Languages", items: ["TypeScript (strict)", "JavaScript", "Python (type hints)", "Go (Golang)", "Java"] },
    {
      category: "AI-native workflow",
      items: [
        "Claude Code / Codex daily",
        "Spec and context before prompting",
        "Diff review and verification of agent output",
        "Parallel agent sessions on independent tasks",
        "Project agent instructions (AGENTS.md / CLAUDE.md) and reusable skills",
      ],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tauri (desktop)", "Tailwind CSS", "shadcn/ui", "MUI", "Ant Design", "Mantine"],
    },
    {
      category: "Backend",
      items: ["FastAPI", "Pydantic", "NestJS", "Express", "Django", "Spring Boot", "REST", "Microservices", "API Gateway"],
    },
    {
      category: "AI / LLM",
      items: [
        "LLM API product features (agents, tool calling, MCP)",
        "LangChain",
        "RAG",
        "Vector search (FAISS, Pinecone, Weaviate)",
        "Embeddings",
        "Ollama",
        "Hugging Face",
        "Prompt engineering",
        "LLM training, testing, inference, and deployment",
      ],
    },
    { category: "Data", items: ["PostgreSQL (schema design, migrations, query optimisation)", "MySQL", "MongoDB", "Redis", "RabbitMQ"] },
    {
      category: "Infra & Security",
      items: ["AWS", "Google Cloud", "Docker", "Grafana", "JWT", "OAuth2", "RBAC", "Auth0", "OpenFGA"],
    },
    { category: "Practices", items: ["Git and merge-request review", "Automated tests", "System design", "Design notes and specs in English"] },
    { category: "English", items: ["Upper-intermediate: writes specs, design notes, and review comments in English daily"] },
  ],
  projects: [
    {
      title: "AIxBlock – No-code AI Agents",
      role: "React, NestJS, FastAPI, Auth0, Redis, RabbitMQ, LangChain, MCP, VectorDB, coding agents",
      achievements: [
        "Designed and developed a production-grade platform for building and deploying AI agents without coding, with React interfaces and NestJS/FastAPI services.",
        "Built the RAG pipeline from document ingestion and preprocessing through chunking, embedding, indexing, and hybrid retrieval.",
        "Integrated FAISS, Pinecone, and Weaviate, allowing users to select vector storage and embedding models for their use cases.",
        "Developed configurable agents on top of LLM APIs with MCP context management, dynamic prompts, and tool/function calling.",
        "Integrated Auth0 authentication and role-based access control, Redis caching and Pub/Sub, and RabbitMQ asynchronous processing pipelines.",
        "Worked with Claude Code / Codex daily: mapped the existing NestJS/FastAPI codebase with the agent, wrote a short spec per feature as agent context, ran independent tasks (API, UI, tests) in parallel sessions, and read every diff before merge.",
        "Caught and fixed agent-introduced issues before they shipped, including incorrect retrieval logic and missing auth checks, and fed the lessons back into the project's agent instructions.",
      ],
    },
    {
      title: "Driving License Learning & Examination Platform",
      role: "React, NestJS, Tauri, TypeScript, Claude Code / Codex",
      achievements: [
        "Designed and built a learning-management and mock-exam platform for driving-licence learners: React/NestJS admin system plus a cross-platform desktop app in React + Tauri.",
        "Ran the full lifecycle AI-natively: wrote specs and agent context first, ran agents on independent tasks in parallel, and used them for prototyping, implementation, refactoring, and debugging.",
        "Kept ownership of architecture, code quality, and integration: read every diff, caught and fixed agent mistakes, and maintained the project's AGENTS.md and reusable skills so later tasks ran faster.",
      ],
    },
    {
      title: "AIxBlock – No-code AI Training Workflows",
      role: "React, FastAPI, Auth0, MCP, Redis, LangChain, LLM, Grafana, Claude Code / Codex",
      achievements: [
        "Built configurable workflow templates and predefined scripts enabling non-technical users to train and experiment with AI models.",
        "Implemented FastAPI services for AI workflows and training, and integrated LangChain and LLMs into configurable pipelines.",
        "Integrated Auth0 authentication and role-based access control, and standardized pipeline configuration and context handling through MCP.",
        "Monitored system performance and training workflows with Grafana.",
        "Used coding agents to scaffold the training-script templates and FastAPI endpoints from written specs, generate unit tests, and debug pipeline failures; verified each change against real training runs before merge.",
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
      title: "Cheating Detection in Examination with Computer Vision",
      role: "Next.js, Material UI, NestJS, MediaPipe, FastAPI",
      achievements: [
        "Analyzed requirements and translated Figma designs into a Next.js examination application.",
        "Integrated MediaPipe for face-behavior detection and implemented backend services with FastAPI.",
        "Wrote, debugged, and maintained application code and contributed content to scientific research articles.",
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
