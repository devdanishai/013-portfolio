export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  highlights?: string[];
  tags: string[];
  href?: string;
  github?: string;
  featured?: boolean;
  showOnHome?: boolean;
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

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
