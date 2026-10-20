export type SkillCategory = { title: string; skills: string[] };

export const skillCategories: SkillCategory[] = [
  {
    title: "Machine Learning",
    skills: [
      "Statistics",
      "Exploratory data analysis",
      "Linear & logistic regression",
      "KNN",
      "Naive Bayes",
      "Decision trees",
      "Random Forest",
      "SVM",
      "Clustering",
      "Feature engineering",
      "Preprocessing",
      "Model evaluation",
    ],
  },
  {
    title: "Deep Learning & PyTorch",
    skills: [
      "Neural networks & MLPs",
      "Forward propagation",
      "Backpropagation",
      "Optimizers",
      "Regularization",
      "Weight initialization",
      "Batch normalization",
      "PyTorch training pipelines",
    ],
  },
  {
    title: "Computer Vision",
    skills: ["CNN fundamentals", "Padding & stride", "Pooling"],
  },
  {
    title: "NLP & Generative AI",
    skills: [
      "Text preprocessing",
      "Text representation",
      "Word2Vec",
      "RNN fundamentals",
      "LSTM & gates",
      "RAG systems",
      "Document chunking",
      "Embeddings & similarity search",
      "LLM APIs",
    ],
  },
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "Go"],
  },
  {
    title: "Development Tools",
    skills: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "PyTorch",
      "Streamlit",
      "Git & GitHub",
    ],
  },
];
