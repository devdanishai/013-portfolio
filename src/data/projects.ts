export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  github?: string;
  featured?: boolean;
  span?: "default" | "wide" | "tall";
};

export const projects: Project[] = [
  {
    id: "1",
    title: "AI Web Application",
    description:
      "Full-stack AI product with Next.js frontend and Python backend — real-time inference, clean UX, production deployment.",
    tags: ["Next.js", "Python", "LLM"],
    featured: true,
    span: "wide",
  },
  {
    id: "2",
    title: "Kaggle Competition",
    description:
      "Grandmaster-level competition solution with feature engineering, ensembling, and top leaderboard placement.",
    tags: ["Python", "XGBoost", "Kaggle"],
    featured: true,
  },
  {
    id: "3",
    title: "ML Pipeline",
    description:
      "End-to-end training and deployment pipeline with experiment tracking, model versioning, and monitoring.",
    tags: ["MLOps", "PyTorch", "Docker"],
    featured: true,
  },
  {
    id: "4",
    title: "NLP System",
    description:
      "Text classification and entity extraction system built for production workloads at scale.",
    tags: ["NLP", "Transformers", "FastAPI"],
  },
  {
    id: "5",
    title: "Computer Vision",
    description:
      "Object detection and image analysis model with optimized inference for edge deployment.",
    tags: ["CV", "PyTorch", "ONNX"],
  },
  {
    id: "6",
    title: "Data Dashboard",
    description:
      "Interactive analytics dashboard with live model metrics and business KPI visualization.",
    tags: ["React", "Python", "SQL"],
  },
];
