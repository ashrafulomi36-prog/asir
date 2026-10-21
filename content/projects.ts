export type ProjectMetric = { label: string; value: string };

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

export type Project = {
  title: string;
  /** One or two sentences shown under the title. */
  description: string;
  category: "AI/ML" | "Web Development" | "Automation";
  /** Optional; only set when verified. */
  date?: string;
  technologies: string[];
  tags: string[];
  /** Featured projects render as detailed case-study cards; others render compactly. */
  featured?: boolean;
  /** The problem the project addresses. */
  problem?: string;
  /** Techniques and methods used. */
  methods?: string[];
  /** What I personally implemented. */
  contribution?: string[];
  /** Verified evaluation metrics only. */
  results?: ProjectMetric[];
  resultsNote?: string;
  /** Shown as a caution box (e.g. medical-data disclaimer). */
  disclaimer?: string;
  images?: ProjectImage[];
  github?: string;
  live?: string;
};

const GH = "https://github.com/MuhammadAsir";

export const projects: Project[] = [
  {
    title: "Heart Disease Classification",
    description:
      "A Scikit-learn pipeline on the UCI Heart Disease dataset that compares a tuned Random Forest against a Logistic Regression baseline.",
    category: "AI/ML",
    date: "2026",
    featured: true,
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    tags: ["Classification", "Tabular data"],
    problem:
      "Predict whether a patient record indicates heart disease from 13 clinical features, while preventing data leakage and checking that a more complex model is actually justified.",
    methods: [
      "ColumnTransformer preprocessing: median / most-frequent imputation, scaling, one-hot encoding",
      "Logistic Regression baseline vs tuned Random Forest",
      "RandomizedSearchCV (40 candidates) with 5-fold stratified cross-validation",
      "ROC AUC, precision / recall, confusion matrix",
      "Impurity-based and permutation feature importance",
    ],
    contribution: [
      "Built the full pipeline: duplicate removal, binary target, and removal of the id and dataset-origin columns to avoid leakage.",
      "Kept preprocessing inside the pipeline so it is fit only on training folds.",
      "Tuned the Random Forest, compared it to the baseline, and analysed feature importance.",
    ],
    results: [
      { label: "Test accuracy", value: "87.50%" },
      { label: "Precision", value: "86.24%" },
      { label: "Recall", value: "92.16%" },
      { label: "F1 score", value: "89.10%" },
      { label: "ROC AUC", value: "0.9274" },
      { label: "Baseline ROC AUC (Logistic Regression)", value: "0.9041" },
    ],
    resultsNote:
      "Measured on a held-out 20% test split (184 records). With a test set this small, differences between models are indicative rather than conclusive. Permutation importance ranked chest-pain type highest; that describes what the model used, not a cause of disease.",
    disclaimer:
      "Experimental results on a public research dataset. This is an educational project, not clinically validated, and must not be used for diagnosis or treatment decisions.",
    images: [
      {
        src: "/projects/heart-confusion-matrix.webp",
        alt: "Confusion matrix for the tuned Random Forest on the test set",
        width: 435,
        height: 393,
        caption: "Confusion matrix (test set)",
      },
      {
        src: "/projects/heart-roc-curve.webp",
        alt: "ROC curve for the tuned Random Forest with AUC 0.927",
        width: 458,
        height: 393,
        caption: "ROC curve, AUC 0.927",
      },
      {
        src: "/projects/heart-permutation-importance.webp",
        alt: "Permutation importance bar chart showing drop in test ROC AUC per feature",
        width: 689,
        height: 590,
        caption: "Permutation importance",
      },
    ],
    github: `${GH}/heart-disease-prediction-ml`,
  },
  {
    title: "Fashion-MNIST Classification",
    description:
      "A fully connected neural network in PyTorch (784 → 128 → 64 → 10) that classifies 28×28 grayscale clothing images into 10 categories.",
    category: "AI/ML",
    date: "2026",
    featured: true,
    technologies: ["Python", "PyTorch", "NumPy", "Pandas", "Matplotlib", "Google Colab (GPU)"],
    tags: ["Deep learning", "Image classification"],
    problem:
      "Build an end-to-end PyTorch training pipeline for multi-class image classification, starting from raw pixel data stored in CSV files.",
    methods: [
      "Pixel normalisation (÷255) and conversion to tensors",
      "Custom Dataset and DataLoader",
      "MLP with nn.Sequential and ReLU activations",
      "CrossEntropyLoss with the Adam optimizer (learning rate 0.001)",
      "GPU training on a Tesla T4 and evaluation on the 10,000-image test set",
    ],
    contribution: [
      "Wrote the data pipeline, model, training loop and evaluation code.",
      "Visualised test predictions against the true labels.",
    ],
    results: [{ label: "Test accuracy (10,000 images)", value: "89.19%" }],
    resultsNote:
      "This is a baseline MLP: it was trained for 1,000 epochs without a separate validation split or regularisation, and the figure comes from the notebook output. The sample below includes misclassified items.",
    images: [
      {
        src: "/projects/fashion-mnist-predictions.webp",
        alt: "Ten Fashion-MNIST test images with predicted and actual class labels, including several misclassifications",
        width: 1200,
        height: 491,
        caption: "Sample test predictions (predicted vs actual)",
      },
    ],
    github: `${GH}/fashion-mnist-pytorch-classifier`,
  },
  {
    title: "PDF Question Answering System (RAG)",
    description:
      "A Streamlit app where you upload PDFs and ask questions; answers are generated only from the passages retrieved from those documents.",
    category: "AI/ML",
    date: "2026",
    featured: true,
    technologies: ["Python", "Streamlit", "SentenceTransformers", "NumPy", "PyPDF2", "Groq API"],
    tags: ["RAG", "NLP", "LLM"],
    problem:
      "Answer questions about uploaded documents without the language model inventing facts that are not in them.",
    methods: [
      "PDF text extraction and overlapping word-based chunking (adjustable size and overlap)",
      "all-MiniLM-L6-v2 sentence embeddings, normalised",
      "Similarity search over chunks with a relevance threshold",
      "Prompt restricted to the retrieved context, sent to a Groq-hosted LLM",
      "Retrieved chunks and similarity scores displayed so answers can be checked against sources",
    ],
    contribution: [
      "Implemented parsing, chunking, embedding, retrieval and prompt construction.",
      "Integrated the LLM API and built the Streamlit interface with adjustable chunk size, overlap and top-k.",
    ],
    resultsNote:
      "No formal retrieval or answer-quality benchmark has been run yet, so no accuracy figures are reported.",
    github: `${GH}/pdf-rag-chatbot`,
    live: "https://my-rag-project1.streamlit.app/",
  },
  {
    title: "AI Note Summary & Quiz Generator",
    description:
      "A Streamlit app that turns photos of notes into a short summary, an audio version and a difficulty-based quiz using the Gemini API.",
    category: "AI/ML",
    date: "2026",
    featured: true,
    technologies: ["Python", "Streamlit", "Gemini API", "gTTS", "Pillow"],
    tags: ["Generative AI", "EdTech"],
    problem:
      "Help students review handwritten or printed notes quickly by converting them into a summary and practice questions.",
    methods: [
      "Multimodal prompting: up to three note images sent to Gemini",
      "Markdown note summary limited to about 100 words",
      "Text-to-speech audio summary with gTTS",
      "Five-question quiz at Easy, Medium or Hard difficulty, with an answer key",
    ],
    contribution: [
      "Built the Streamlit interface with image upload, difficulty selection and input validation.",
      "Wrote the Gemini prompts and the audio and quiz generation flow.",
    ],
    resultsNote:
      "Output quality depends on the model and the image; no evaluation metrics have been measured.",
    github: `${GH}/Streamlit_Gemini_Project`,
    live: "https://my-project1.streamlit.app/"
  },
  {
    title: "HarvestGuard: AI-Powered Agricultural Platform",
    description:
      "An AI platform using Next.js and Gemini AI to reduce post-harvest food loss, with image recognition that identifies crops and assesses their condition from user-uploaded photos, plus real-time weather alerts and storage recommendations for farmers.",
    category: "AI/ML",
    technologies: ["Next.js", "Gemini AI", "Image Recognition"],
    tags: ["Agriculture", "Computer Vision"],
  },
  {
    title: "HVAC Global: Business Website",
    description:
      "Responsive corporate website deployed on Vercel, with a modern, user-friendly UI focused on clarity, usability and cross-device performance.",
    category: "Web Development",
    live: "https://hvac-global.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    tags: ["Corporate", "Responsive design"],
  },
  {
    title: "Snackify: Global Snack Discovery Platform",
    description:
      "A team-built discovery platform in Vanilla JavaScript, HTML5 and CSS3 with a modular structure, a real-time rating system and instant search and filtering backed by the LocalStorage API.",
    category: "Web Development",
    technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage API"],
    tags: ["Team project", "Frontend"],
  },
];
