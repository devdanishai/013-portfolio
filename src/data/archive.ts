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
