export const projects = [
  {
    id: 1,
    title: "Smart-Seva",
    description: "Developed a full-stack agricultural decision support platform integrating weather, crop pricing and educational APIs. Implemented RBAC authentication and modular frontend/backend architecture. Integrated analytics and ML inference modules.",
    image: "https://res.cloudinary.com/dfdoggzdy/image/upload/v1784086923/Screenshot_2026-05-03_153252_zfpos3.png",
    techStack: ["Next.js", "Flask", "RBAC", "APIs", "Analytics", "ML Inference"],
    links: {
      github: "https://github.com/nexus963-dev/smart-seva-frontend",
      live: "https://smart-seva-frontend.vercel.app/"
    },
    featured: true
  },
  {
    id: 2,
    title: "Causality-Powered Stock Price Forecasting",
    description: "Developed DNN, CNN, LSTM and GRU forecasting models and compared baseline versus causal approaches. Evaluated using RMSE, MAE, MAPE and R2.",
    image: "https://res.cloudinary.com/dfdoggzdy/image/upload/v1784087769/Gemini_Generated_Image_y1vctpy1vctpy1vc_gzxfuh.png",
    techStack: ["Python", "TensorFlow", "DNN", "CNN", "LSTM", "GRU", "RMSE", "MAE", "MAPE", "R2"],
    links: {
      github: "https://github.com/nexus963-dev/Causality-Powered-Stock-Price-Forecasting-using-Deep-Learning",
      live: "#"
    },
    featured: false
  },
  {
    id: 3,
    title: "RAG-Based Educational Video Assistant",
    description: "Built a Retrieval-Augmented Generation system for semantic search across educational videos. Integrated Whisper Large-v2, BGE-M3 embeddings, cosine similarity retrieval and Llama 3.2 via Ollama. Automated transcript generation, vector indexing and context-aware responses.",
    image: "https://res.cloudinary.com/dfdoggzdy/image/upload/v1784087770/Gemini_Generated_Image_edzv31edzv31edzv_r4y2vj.png",
    techStack: ["Python", "Whisper", "Ollama", "BGE-M3", "Llama 3.2", "Cosine Similarity"],
    links: {
      github: "https://github.com/nexus963-dev/RAG-Based-AI-ChatBot",
      live: "#"
    },
    featured: false
  },
  {
    id: 4,
    title: "Repolens",
    description: "An AI-powered codebase analysis and management platform featuring semantic search, code understanding, and intelligent recommendations.",
    image: "https://res.cloudinary.com/dfdoggzdy/image/upload/v1784087770/Gemini_Generated_Image_edzv31edzv31edzv_r4y2vj.png",
    techStack: ["Python", "Next.js", "TensorFlow", "LangChain", "Embeddings", "Vector Search"],
    links: {
      github: "https://github.com/nexus963-dev/AI-CodeBase",
      live: "#"
    },
    featured: false
  }
];

export const getFeaturedProject = () => projects.find(p => p.featured);
export const getOtherProjects = () => projects.filter(p => !p.featured);