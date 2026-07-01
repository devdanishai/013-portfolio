export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  layout?: "mobile" | "desktop";
};

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  highlights?: string[];
  images?: ProjectImage[];
  tags: string[];
  href?: string;
  github?: string;
  featured?: boolean;
  showOnHome?: boolean;
  published?: boolean;
  section?: "featured" | "android";
  oneLiner?: string;
  span?: "default" | "wide" | "tall";
};

export const projects: Project[] = [
  {
    id: "vehicle-analytics",
    title: "AI Vehicle Analytics Platform",
    subtitle: "Real-time multi-camera CV + VLM operations dashboard",
    description:
      "Real-time AI-powered vehicle analytics platform monitoring multiple live camera feeds — YOLO detection/tracking, VLM classification via Ollama, and a live ops dashboard with human-in-the-loop review.",
    highlights: [
      "Developed a FastAPI + WebSocket system for real-time monitoring of multiple live camera feeds with horizontal scaling.",
      "Implemented an end-to-end computer vision pipeline using OpenCV + YOLO for detection/tracking and a Vision Language Model (Ollama) for vehicle classification.",
      "Designed asynchronous processing with multi-worker queues, frame throttling, and memory controls to keep low-latency live updates.",
      "Built REST APIs and frontend dashboards (HTML/JS) for live counts, line management, metadata updates, and human-in-the-loop review of uncertain detections.",
      "Integrated MongoDB for event storage, aggregated statistics, and health monitoring, with retry handling for reliability.",
      "Added production operations support via systemd service setup, backup automation, and retention policies.",
    ],
    tags: ["FastAPI", "YOLO", "OpenCV", "Ollama", "MongoDB", "WebSocket"],
    href: "/projects/vehicle-analytics",
    featured: true,
    showOnHome: true,
    published: false,
    span: "wide",
  },
  {
    id: "cash-wallet",
    title: "Cash Wallet",
    subtitle: "Personal expense tracker for Android (PKR)",
    oneLiner:
      "Offline-first PKR expense tracker for cash, bank, and mobile wallets — built for daily use in Pakistan.",
    description:
      "Offline-first mobile app to track money across cash, bank, and mobile wallets (EasyPaisa, JazzCash, Naya Pay, and more), categorize expenses, and view monthly spending reports — built for daily use in Pakistan.",
    highlights: [
      "Built multi-wallet support with income, expense, and transfer flows across cash, bank, and mobile wallets.",
      "Designed SQLite schema and transfer logic so internal moves don't inflate income/expense reports.",
      "Implemented monthly category aggregation and drill-down reports from local transaction data.",
      "Shipped standalone Android APK via Expo SDK 54, EAS Build, and sideload distribution (v1.0.0-beta.1).",
      "Privacy-first: fully offline storage, JSON backup/restore, no cloud sync during normal use.",
    ],
    images: [
      {
        src: "/images/projects/cash-wallet/cw01.jpg",
        alt: "Cash Wallet home dashboard with total balance and wallet list",
        caption: "Home — total balance and per-wallet balances",
      },
      {
        src: "/images/projects/cash-wallet/cw02.jpg",
        alt: "Monthly expense report broken down by category",
        caption: "Reports — monthly spending by category",
      },
      {
        src: "/images/projects/cash-wallet/cw03.jpg",
        alt: "Transaction history filtered by wallet, category, and type",
        caption: "History — filter by wallet, category, and type",
      },
      {
        src: "/images/projects/cash-wallet/cw04.jpg",
        alt: "Manage screen for custom wallets and categories",
        caption: "Manage — custom wallets and categories",
      },
    ],
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "SQLite",
      "Android",
      "Offline-First",
    ],
    href: "/projects/cash-wallet",
    featured: true,
    showOnHome: true,
    published: true,
    section: "android",
    span: "wide",
  },
  {
    id: "rag-eval",
    title: "RAG Evaluation App",
    subtitle: "Self-hosted RAG evaluation pipeline for customer support bots",
    description:
      "End-to-end self-hosted pipeline that ingests support docs into Qdrant, answers questions via a LangChain RAG stack with local Qwen models, scores quality with RAGAS, and traces every run in Langfuse — with pass/fail thresholds saved per eval run.",
    highlights: [
      "Built ingest → retrieve → generate → evaluate flow using LangChain, Qdrant, and BGE-M3 embeddings on the Bitext customer-support dataset.",
      "Deployed local Qwen 14B AWQ for RAG answers and Qwen 7B as a RAGAS judge model on NVIDIA RTX 3090 via vLLM.",
      "Implemented RAGAS evaluation (faithfulness, answer relevancy, context precision/recall) with configurable pass/fail thresholds per metric.",
      "Integrated self-hosted Langfuse tracing for context, prompts, answers, and latency on every query.",
      "Exported per-run JSON summaries and per-question CSV breakdowns to a results history for regression tracking.",
      "Designed YAML-driven config for models, retrieval top-k, chunking, dataset sampling, and eval thresholds.",
    ],
    images: [
      {
        src: "/images/projects/rag-eval/1.jpg",
        alt: "Ask the Bot — question input",
        caption: "Ask the Bot — question input",
        layout: "desktop",
      },
      {
        src: "/images/projects/rag-eval/2.jpg",
        alt: "Ask the Bot — answer and retrieved chunks",
        caption: "Ask the Bot — answer and retrieved chunks",
        layout: "desktop",
      },
      {
        src: "/images/projects/rag-eval/3.jpg",
        alt: "Run Evaluation — config",
        caption: "Run Evaluation — config",
        layout: "desktop",
      },
      {
        src: "/images/projects/rag-eval/4.jpg",
        alt: "Run Evaluation — RAGAS results",
        caption: "Run Evaluation — RAGAS results",
        layout: "desktop",
      },
      {
        src: "/images/projects/rag-eval/5.jpg",
        alt: "Results History — metric scores",
        caption: "Results History — metric scores",
        layout: "desktop",
      },
      {
        src: "/images/projects/rag-eval/6.jpg",
        alt: "Results History — per-question table",
        caption: "Results History — per-question breakdown",
        layout: "desktop",
      },
    ],
    tags: [
      "LangChain",
      "RAGAS",
      "Qdrant",
      "Langfuse",
      "vLLM",
      "RAG",
    ],
    href: "/projects/rag-eval",
    github: "https://github.com/devdanishai/015-rag-eval",
    featured: true,
    showOnHome: true,
    published: true,
    span: "wide",
  },
  {
    id: "multidoc-rag",
    title: "RAG PDF Multi-Doc Chatbot",
    description:
      "Custom multi-PDF RAG chatbot with FastAPI backend, ChromaDB vector store, and a web UI for document Q&A across multiple files.",
    tags: ["FastAPI", "RAG", "ChromaDB", "Groq"],
    href: "https://github.com/devdanishai/multidoc_fastapi",
    github: "https://github.com/devdanishai/multidoc_fastapi",
    featured: true,
    showOnHome: false,
  },
  {
    id: "df-agentic",
    title: "DataFrame Agentic Chatbot",
    description:
      "Agentic chatbot that reasons over pandas DataFrames — natural language queries, analysis, and insights with a FastAPI + HTML/JS frontend.",
    tags: ["Agents", "FastAPI", "Python", "HTML/JS"],
    href: "https://github.com/devdanishai/df-agentic-chatbot",
    github: "https://github.com/devdanishai/df-agentic-chatbot",
    featured: true,
    showOnHome: false,
  },
  {
    id: "yt-summary",
    title: "YouTube Multi-Language Summarizer",
    description:
      "Summarize YouTube videos in multiple languages using Gemini, with FastAPI backend and a clean HTML/JS client interface.",
    tags: ["FastAPI", "Gemini", "NLP", "HTML/JS"],
    href: "https://github.com/devdanishai/YT-Summary-FA",
    github: "https://github.com/devdanishai/YT-Summary-FA",
    featured: true,
    showOnHome: false,
  },
  {
    id: "ai-voice-chatbot",
    title: "AI Voice Chatbot",
    description:
      "Multimodal voice-enabled chatbot built with Streamlit — speech input, AI responses, and interactive conversational UI.",
    tags: ["Streamlit", "Voice", "Multimodal"],
    href: "https://github.com/devdanishai/AI-voice-chatbot-streamlit",
    github: "https://github.com/devdanishai/AI-voice-chatbot-streamlit",
    featured: true,
    showOnHome: false,
  },
  {
    id: "image-search",
    title: "E-Commerce Image Search",
    description:
      "Visual product search engine using CLIP embeddings — upload an image and find similar items in an e-commerce catalog.",
    tags: ["Streamlit", "CLIP", "Computer Vision"],
    href: "https://github.com/devdanishai/image-search-clip-st",
    github: "https://github.com/devdanishai/image-search-clip-st",
    featured: true,
    showOnHome: false,
  },
];

export function isPublished(project: Project): boolean {
  return project.published !== false;
}

export function getPublishedProjects(): Project[] {
  return projects.filter(isPublished);
}

export function getFeaturedProjects(): Project[] {
  return getPublishedProjects().filter((p) => p.section !== "android");
}

export function getAndroidProjects(): Project[] {
  return getPublishedProjects().filter((p) => p.section === "android");
}

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
