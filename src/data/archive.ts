export type ArchiveProject = {
  title: string;
  github: string;
  tags: string[];
};

export type ArchiveCategory = {
  name: string;
  projects: ArchiveProject[];
};

export const archiveCategories: ArchiveCategory[] = [
  {
    name: "Generative AI / Multimodal AI",
    projects: [
      {
        title: "AI Voice Chatbot",
        github: "https://github.com/devdanishai/AI-voice-chatbot-streamlit",
        tags: ["Streamlit", "Voice", "AI"],
      },
      {
        title: "AI Image Generator",
        github: "https://github.com/devdanishai/txt-2-img-app-st-dalle3-",
        tags: ["Streamlit", "DALL·E", "GenAI"],
      },
    ],
  },
  {
    name: "Natural Language Processing (NLP)",
    projects: [
      {
        title: "DataFrame Agentic Chatbot",
        github: "https://github.com/devdanishai/df-agentic-chatbot",
        tags: ["Agents", "FastAPI", "HTML/JS"],
      },
      {
        title: "RAG PDF Multi-Doc Chatbot",
        github: "https://github.com/devdanishai/multidoc_fastapi",
        tags: ["FastAPI", "RAG", "ChromaDB"],
      },
      {
        title: "Resume Scanner",
        github: "https://github.com/devdanishai/resume-scanner-st",
        tags: ["Streamlit", "NLP"],
      },
      {
        title: "Application Tracking System",
        github: "https://github.com/devdanishai/Application-Tracking-System-ST",
        tags: ["Streamlit", "NLP"],
      },
      {
        title: "Sentiment Classifier",
        github: "https://github.com/devdanishai/Text-Sentiment-Classifier-App-st",
        tags: ["Streamlit", "NLP"],
      },
      {
        title: "YouTube Summarizer",
        github: "https://github.com/devdanishai/YT-Summary-FA",
        tags: ["FastAPI", "Gemini", "HTML/JS"],
      },
    ],
  },
  {
    name: "Data Engineering",
    projects: [
      {
        title: "CSV to SQL",
        github: "https://github.com/devdanishai/csv2sql",
        tags: ["FastAPI", "SQL", "HTML/JS"],
      },
    ],
  },
  {
    name: "Computer Vision",
    projects: [
      {
        title: "Image Search Engine for E-Commerce",
        github: "https://github.com/devdanishai/image-search-clip-st",
        tags: ["Streamlit", "CLIP"],
      },
      {
        title: "AI Image Analyzer",
        github: "https://github.com/devdanishai/vision-gemini",
        tags: ["Streamlit", "Gemini", "Vision"],
      },
      {
        title: "Finger Count",
        github: "https://github.com/devdanishai/finger_count",
        tags: ["OpenCV", "Python"],
      },
      {
        title: "Face Matching App",
        github: "https://github.com/devdanishai/face-matching-app-st",
        tags: ["Streamlit", "CV"],
      },
      {
        title: "Face Recognition Attendance System",
        github: "https://github.com/devdanishai/Attendance-System-St",
        tags: ["Streamlit", "Face Recognition"],
      },
    ],
  },
];
