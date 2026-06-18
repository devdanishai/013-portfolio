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
    span: "wide",
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
