/**
 * Single source of truth for all portfolio content.
 * Edit this file to change copy, links, projects or skills — no component changes needed.
 *
 * Content rule: every project claim and metric below was checked against the
 * public repository (code, notebook output or README). Do not add a number here
 * unless it is reproducible from the repo.
 */

export const GITHUB_USER = "MuhammadAsir";
export const GITHUB_URL = `https://github.com/${GITHUB_USER}`;
export const repo = (name: string) => `${GITHUB_URL}/${name}`;
export const repoFolder = (name: string, folder: string) =>
  `${GITHUB_URL}/${name}/tree/main/${encodeURIComponent(folder)}`;

export const site = {
  name: "Muhammad Asir Hossain Chowdhury",
  shortName: "Asir Hossain",
  url: "https://asirhossain.vercel.app",
  title: "Muhammad Asir Hossain Chowdhury — AI/ML Practitioner | Machine Learning, PyTorch & NLP",
  headline: "AI/ML Practitioner | Machine Learning, PyTorch & NLP",
  description:
    "Portfolio of Muhammad Asir Hossain Chowdhury, a Computer Science & Engineering undergraduate at East Delta University focused on machine learning, deep learning (PyTorch), NLP and RAG systems. Practical projects, structured learning notes and competitive programming.",
  heroText:
    "I build practical machine learning and deep learning projects, explore NLP and RAG systems, and document my learning through structured notes and hands-on experiments.",
  location: "Chattogram, Bangladesh",
  email: "asirmuhammad76@gmail.com",
  phone: "+8801629640637",
  keywords: [
    "Muhammad Asir Hossain Chowdhury",
    "AI/ML",
    "Machine Learning",
    "Deep Learning",
    "PyTorch",
    "NLP",
    "RAG",
    "East Delta University",
    "Competitive Programming",
    "Bangladesh",
  ],
};

export const socials = {
  github: GITHUB_URL,
  linkedin: "https://linkedin.com/in/asir-hossain",
  codeforces: "https://codeforces.com/profile/MuhammadAsir",
  email: `mailto:${site.email}`,
};

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "learning", label: "Learning" },
  { id: "teaching", label: "Teaching Demo", optional: true },
  { id: "competitive-programming", label: "Competitive Programming" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

/* -------------------------------------------------------------------------- */
/* About                                                                       */
/* -------------------------------------------------------------------------- */

export const about = {
  paragraphs: [
    "I’m a Computer Science & Engineering undergraduate at East Delta University in Chattogram, focused on machine learning and deep learning. I’ve worked through the foundations of both — from regression and tree-based models to backpropagation and PyTorch training pipelines — and I keep structured notes, code and notebooks for them on GitHub.",
    "My projects include a scikit-learn heart-disease classifier, a PyTorch Fashion-MNIST network, a Bangla news LSTM classifier and a PDF question-answering system built on retrieval-augmented generation (RAG). I’m particularly interested in NLP, RAG and practical AI applications.",
    "I also compete in programming contests — Honorable Mention at the ICPC Online Preliminary Contest 2025 and 6th place at the EDU Intra-University Programming Contest 2024 — and completed DeepLearning.AI’s Machine Learning Specialization.",
  ],
  focus: [
    "Machine learning & deep learning with PyTorch",
    "NLP, RAG and practical AI applications",
    "Competitive programming & algorithms",
    "Explaining technical ideas clearly (3 Minute Thesis winner)",
  ],
};

/* -------------------------------------------------------------------------- */
/* Experience & education                                                      */
/* -------------------------------------------------------------------------- */

export const experience = [
  {
    period: "02/2026 — Present",
    role: "Campus Ambassador",
    org: "Programming Hero",
    detail:
      "Responsible for promoting coding programs, engaging students, and supporting tech community activities on campus.",
  },
  {
    period: "05/2026 — Present",
    role: "Sub Executive, AI Research",
    org: "EDU Computer Club",
    detail:
      "AI Research member contributing to ongoing AI research activities, experiments, and collaborative exploration in Machine Learning and Generative AI.",
  },
  {
    period: "10/2025 — Present",
    role: "Sub-Executive",
    org: "East Delta University Robotics Society",
    detail:
      "Supporting robotics projects through C++ and Python debugging and active participation in advanced technical workshops.",
  },
];

export const education = [
  {
    period: "2023 — Present",
    title: "B.Sc. in Computer Science & Engineering",
    org: "East Delta University · Chattogram, Bangladesh",
  },
  {
    period: "2020 — 2022",
    title: "Higher Secondary Certificate in Science",
    org: "Government City College · Chattogram, Bangladesh",
    note: "GPA 5.00 / 5.00",
  },
  {
    period: "2018 — 2020",
    title: "Secondary School Certificate in Science",
    org: "Chattogram Collegiate School · Chattogram, Bangladesh",
    note: "GPA 5.00 / 5.00",
  },
];

/* -------------------------------------------------------------------------- */
/* Skills — compact tags, no proficiency bars. `core` = what I use most.       */
/* -------------------------------------------------------------------------- */

export type Skill = { name: string; core?: boolean };
export type SkillGroup = { title: string; blurb?: string; items: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Machine Learning",
    items: [
      { name: "Scikit-learn", core: true },
      { name: "Statistics" },
      { name: "EDA" },
      { name: "Feature Engineering" },
      { name: "Preprocessing" },
      { name: "Linear Regression" },
      { name: "Logistic Regression", core: true },
      { name: "KNN" },
      { name: "Naive Bayes" },
      { name: "Decision Trees" },
      { name: "Random Forest", core: true },
      { name: "SVM" },
      { name: "Clustering" },
      { name: "Model Evaluation", core: true },
    ],
  },
  {
    title: "Deep Learning & PyTorch",
    items: [
      { name: "PyTorch", core: true },
      { name: "Neural Networks / MLPs", core: true },
      { name: "Forward Propagation" },
      { name: "Backpropagation", core: true },
      { name: "Optimizers" },
      { name: "Regularization" },
      { name: "Weight Initialization" },
      { name: "Batch Normalization" },
      { name: "Training Pipelines" },
    ],
  },
  {
    title: "Computer Vision",
    items: [
      { name: "CNN Fundamentals" },
      { name: "Padding & Stride" },
      { name: "Pooling" },
      { name: "Image Classification" },
    ],
  },
  {
    title: "NLP & Generative AI",
    items: [
      { name: "Text Preprocessing" },
      { name: "Text Representation" },
      { name: "Word2Vec" },
      { name: "RNN Fundamentals" },
      { name: "LSTM & Gates", core: true },
      { name: "RAG Systems", core: true },
      { name: "Document Chunking" },
      { name: "Embeddings" },
      { name: "Similarity Search" },
      { name: "LLM APIs (Gemini, Groq)" },
    ],
  },
  {
    title: "Programming Languages",
    items: [{ name: "Python", core: true }, { name: "C++" }, { name: "Go" }],
  },
  {
    title: "Development Tools",
    items: [
      { name: "NumPy", core: true },
      { name: "Pandas", core: true },
      { name: "Matplotlib" },
      { name: "Seaborn" },
      { name: "Streamlit" },
      { name: "Jupyter / Colab" },
      { name: "Git & GitHub" },
      { name: "Next.js & Tailwind CSS" },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Projects                                                                    */
/* -------------------------------------------------------------------------- */

export type Metric = { label: string; value: string };
export type ProjectImage = { src: string; alt: string; width: number; height: number; caption: string };

export type FeaturedProject = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  approach: string[];
  tech: string[];
  built: string[];
  results?: { heading: string; metrics: Metric[]; note: string };
  noResults?: string;
  repo: string;
  demo?: string;
  images?: ProjectImage[];
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "heart-disease",
    title: "Heart Disease Classification",
    category: "Machine Learning · Scikit-learn",
    summary:
      "A leakage-aware scikit-learn pipeline that predicts the presence of heart disease from clinical features, with a Logistic Regression baseline and a tuned Random Forest.",
    problem:
      "Binary classification (disease / no disease) on the UCI Heart Disease dataset — 920 records, 13 clinical features — while avoiding data leakage and checking that a more complex model actually beats a simple baseline.",
    approach: [
      "Median / most-frequent imputation, standard scaling and one-hot encoding inside a ColumnTransformer pipeline",
      "Logistic Regression baseline vs. Random Forest tuned with 5-fold stratified cross-validation (RandomizedSearchCV, 40 candidates)",
      "Confusion matrix, ROC curve, impurity-based and permutation feature importance",
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    built: [
      "Removed duplicate rows and the id / dataset-source columns to prevent leakage",
      "Built the full preprocessing + model pipeline and tuned the Random Forest",
      "Compared against the baseline and analysed feature importance on the held-out set",
    ],
    results: {
      heading: "Held-out test set (184 records, stratified 80/20 split)",
      metrics: [
        { label: "Accuracy", value: "87.5%" },
        { label: "Precision", value: "86.2%" },
        { label: "Recall", value: "92.2%" },
        { label: "F1", value: "89.1%" },
        { label: "ROC AUC", value: "0.927" },
        { label: "Baseline ROC AUC", value: "0.904" },
      ],
      note: "Experimental results from a single train/test split on a small public dataset, reproduced by re-running the repository script. This is an educational project — it has not been clinically validated and must not be used for diagnosis.",
    },
    repo: repo("heart-disease-prediction-ml"),
    images: [
      {
        src: "/projects/heart-confusion-matrix.png",
        alt: "Confusion matrix of the tuned Random Forest on the test set",
        width: 435,
        height: 393,
        caption: "Confusion matrix",
      },
      {
        src: "/projects/heart-roc-curve.png",
        alt: "ROC curve of the tuned Random Forest with AUC 0.927",
        width: 458,
        height: 393,
        caption: "ROC curve",
      },
      {
        src: "/projects/heart-permutation-importance.png",
        alt: "Permutation importance bar chart showing the drop in test ROC AUC per feature",
        width: 689,
        height: 590,
        caption: "Permutation importance",
      },
    ],
  },
  {
    slug: "fashion-mnist",
    title: "Fashion-MNIST Classification",
    category: "Deep Learning · PyTorch",
    summary:
      "A fully connected neural network in PyTorch that classifies 28×28 clothing images into 10 categories, trained on GPU.",
    problem:
      "Multi-class image classification on Fashion-MNIST (60,000 training and 10,000 test images) as a hands-on exercise in the complete PyTorch training workflow.",
    approach: [
      "Pixel normalisation (÷255), custom Dataset and DataLoader",
      "MLP: 784 → 128 → 64 → 10 with ReLU, trained with CrossEntropyLoss and Adam (lr 0.001, batch size 664)",
      "CUDA training on a Tesla T4; prediction visualisation on test images",
    ],
    tech: ["Python", "PyTorch", "NumPy", "Pandas", "Matplotlib", "Google Colab"],
    built: [
      "Wrote the Dataset / DataLoader pipeline and the nn.Module model",
      "Implemented the training loop (forward pass, loss, backward pass, optimizer step)",
      "Evaluated on the held-out test set and plotted predictions against ground truth",
    ],
    results: {
      heading: "Test set (10,000 images)",
      metrics: [
        { label: "Test accuracy", value: "89.19%" },
        { label: "Epochs", value: "1000" },
        { label: "Architecture", value: "784→128→64→10" },
      ],
      note: "Single run, taken from the saved notebook output. There is no separate validation split or early stopping, so the epoch count was fixed rather than tuned; the images show the first 10 test samples, including misclassifications.",
    },
    repo: repo("fashion-mnist-pytorch-classifier"),
    images: [
      {
        src: "/projects/fashion-mnist-predictions.png",
        alt: "Ten Fashion-MNIST test images with predicted and actual class labels, including three misclassifications",
        width: 1449,
        height: 594,
        caption: "First 10 test predictions (7 correct, 3 misclassified)",
      },
    ],
  },
  {
    slug: "pdf-rag",
    title: "PDF Question Answering System (RAG)",
    category: "NLP · Generative AI",
    summary:
      "A Streamlit chatbot that answers questions using only the content of uploaded PDFs, by retrieving the most relevant passages and passing them to an LLM.",
    problem:
      "Large language models can answer from memory and invent facts; this app grounds answers in the user’s own documents and shows the retrieved context so answers can be checked.",
    approach: [
      "PDF text extraction (PyPDF2) and overlapping word-based chunking (default 400 words, 100 overlap, configurable)",
      "SentenceTransformers (all-MiniLM-L6-v2) embeddings, normalised, stored in NumPy",
      "Cosine-similarity top-k retrieval with a minimum-score cut-off, then a Groq-hosted LLM answers from the retrieved context only",
    ],
    tech: ["Python", "Streamlit", "SentenceTransformers", "NumPy", "PyPDF2", "Groq API"],
    built: [
      "Implemented parsing, chunking, embedding and similarity search without a vector-database library",
      "Wrote the grounding prompt and the “not found in the documents” fallback",
      "Built the Streamlit UI with adjustable chunk size, overlap, top-k and a retrieved-context viewer",
    ],
    noResults:
      "No quantitative benchmark has been run for this project. The app displays the retrieved chunks with source names and similarity scores so each answer can be checked against the document.",
    repo: repo("pdf-rag-chatbot"),
    demo: "https://my-rag-project1.streamlit.app/",
  },
  {
    slug: "note-quiz",
    title: "AI Note Summary & Quiz Generator",
    category: "Generative AI · Streamlit",
    summary:
      "A Streamlit app that turns uploaded note images into a short summary, an audio version and a difficulty-based quiz.",
    problem:
      "Turning handwritten or printed study notes into quick revision material — a summary to read or listen to, and practice questions at a chosen difficulty.",
    approach: [
      "Gemini API (multimodal) reads the uploaded note images — no separate OCR step",
      "Summary in note format (max ~100 words), text-to-speech audio via gTTS",
      "Five multiple-choice questions at Easy, Medium or Hard difficulty, with the correct answers listed after the quiz",
    ],
    tech: ["Python", "Streamlit", "Gemini API", "gTTS", "Pillow"],
    built: [
      "Designed the Streamlit interface, image upload and difficulty selector",
      "Wrote the prompts and API calls for summary and quiz generation",
      "Added audio summaries using text-to-speech",
    ],
    noResults:
      "Prompt-driven app; no accuracy metric is reported. The quiz shows correct answers after the questions rather than grading the user’s answers.",
    repo: repo("Streamlit_Gemini_Project"),
  },
  {
    slug: "news-lstm",
    title: "Bangla News Classification — BiLSTM",
    category: "NLP · PyTorch",
    summary:
      "A bidirectional LSTM text classifier that assigns Bangla news articles to one of seven categories, with data cleaning, EDA and early stopping.",
    problem:
      "Classify Bangla news text (Business, Technology, Crime, Entertainment, International Affairs, Sports, Lifestyle) while keeping the official train / validation / test splits clean of duplicates and overlap.",
    approach: [
      "Cleaning: blank rows, duplicates, cross-split overlap and conflicting labels removed",
      "Tokenised vocabulary (30,000 words), embedding layer, packed bidirectional LSTM with max-pooling and dropout",
      "Adam optimiser with early stopping on validation accuracy; best-epoch weights restored",
    ],
    tech: ["Python", "PyTorch", "Pandas", "Scikit-learn", "Matplotlib", "Plotly"],
    built: [
      "Performed EDA on article length, category balance and word frequency",
      "Built the LSTM model with packed sequences so padding does not affect the hidden states",
      "Saved model weights, vocabulary and test metrics for reuse",
    ],
    results: {
      heading: "Held-out test split (6,135 articles)",
      metrics: [
        { label: "Test accuracy", value: "≈93%" },
        { label: "Macro F1", value: "0.93" },
        { label: "Best val. accuracy", value: "92.56%" },
      ],
      note: "From the saved notebook output; dataset: BLUGE Bengali news classification (Hugging Face). Weakest classes were Lifestyle and Technology (F1 0.85 and 0.87).",
    },
    repo: repo("NewsLens-Labs"),
  },
];

export type OtherProject = {
  title: string;
  category: string;
  year?: string;
  summary: string;
  tech: string[];
  repo?: string;
  live?: string;
};

export const otherProjects: OtherProject[] = [
  {
    title: "HarvestGuard: AI-Powered Agricultural Platform",
    category: "AI/ML · Web",
    year: "2026",
    summary:
      "An AI platform using Next.js and Gemini AI to reduce post-harvest food loss, with image recognition that identifies crops and assesses their condition from user-uploaded photos, plus real-time weather alerts and storage recommendations for farmers.",
    tech: ["Next.js", "Gemini AI", "Image Recognition"],
  },
  {
    title: "AI Developer Assistant",
    category: "Generative AI · Streamlit",
    summary:
      "A Streamlit app where you pick a language, paste code, and get bug detection with fixes and a code review from the Gemini API.",
    tech: ["Streamlit", "Gemini API", "Python"],
    repo: repo("Code_debug_review-project"),
  },
  {
    title: "HVAC Global — Business Website",
    category: "Web Development",
    year: "2025",
    summary:
      "Responsive corporate website deployed on Vercel for live production hosting, with a modern, user-friendly UI focused on clarity, usability, and cross-device performance.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    title: "Snackify — Global Snack Discovery Platform",
    category: "Web Development",
    year: "2025",
    summary:
      "A collaborative discovery platform built with Vanilla JavaScript, HTML5, and CSS3 in a modular structure, featuring a real-time rating system and instant search/filter logic backed by the LocalStorage API.",
    tech: ["JavaScript", "HTML5", "CSS3", "LocalStorage API"],
  },
];

/* -------------------------------------------------------------------------- */
/* Learning resources                                                          */
/* -------------------------------------------------------------------------- */

export type Module = { folder: string; title: string; topics: string };
export type ModuleGroup = { title: string; modules: Module[] };
export type LearningResource = {
  slug: string;
  title: string;
  repoName: string;
  summary: string;
  stats: string[];
  groups: ModuleGroup[];
};

export const learningResources: LearningResource[] = [
  {
    slug: "ml",
    title: "Machine Learning Learning Materials",
    repoName: "AI-ML-ZERO-TO-ADVANCE",
    summary:
      "A numbered, module-by-module path from Python basics through data preparation and classical machine learning algorithms. Each module is a folder of runnable scripts, with practice problems in several of them.",
    stats: ["24 numbered modules", "Python scripts", "Practice problems"],
    groups: [
      {
        title: "Python & data tools",
        modules: [
          { folder: "1.AI ML Python", title: "Python for AI/ML", topics: "Strings, lists, sets, dictionaries, comprehensions, functions, file handling" },
          { folder: "2.OOP with Python", title: "Object-oriented Python", topics: "Classes, constructors, inheritance, polymorphism, encapsulation, abstraction" },
          { folder: "3.Numpy_Python", title: "NumPy", topics: "ndarray creation, data types, indexing and slicing" },
          { folder: "4.Pandas Python", title: "Pandas", topics: "Loading files, selecting, sorting, filtering and iterating data" },
          { folder: "5.Python_Matplotlib", title: "Matplotlib", topics: "Line, scatter, histogram, bar and pie charts" },
          { folder: "6.Python_Searborn", title: "Seaborn", topics: "Scatter, facet, histogram, KDE, count, regression and pair plots" },
          { folder: "Streamlit__Python", title: "Streamlit", topics: "Inputs, images, audio, video and building an app" },
        ],
      },
      {
        title: "Data analysis & preparation",
        modules: [
          { folder: "7.EDA_ Part 1", title: "EDA — univariate", topics: "What EDA is; univariate analysis" },
          { folder: "8.1EDA_Part 2", title: "EDA — multivariate", topics: "Multivariate analysis and an automated profiling report" },
          { folder: "8.2 Feature Engineering_part1", title: "Feature engineering", topics: "Introduction and assignment" },
          { folder: "9.Outliers and Handling", title: "Outliers", topics: "Z-score, IQR, winsorization and when to use which" },
          { folder: "10.Encoding", title: "Encoding", topics: "Ordinal, nominal and label encoding" },
          { folder: "11.Scaling", title: "Scaling", topics: "Standardization, Min-Max, robust scaling, ColumnTransformer" },
        ],
      },
      {
        title: "Regression",
        modules: [
          { folder: "12.Intro_Linear Regression", title: "Intro to regression", topics: "Introduction to regression, with reading on the history of AI" },
          { folder: "13.Simple_linear regression", title: "Simple linear regression", topics: "Cost function visualisation, gradient descent, house-price example" },
          { folder: "14.Multiple_linear regression", title: "Multiple linear regression", topics: "Basics and a scikit-learn implementation" },
          { folder: "15.Scikit_learn(Multiple linear regression)", title: "Regression with scikit-learn", topics: "Multiple linear regression workflow" },
          { folder: "16.Logistic Regression", title: "Logistic regression", topics: "Basics, linear vs. logistic" },
          { folder: "17.LogisticRegre_Scikit learn", title: "Logistic regression with scikit-learn", topics: "Classification workflow" },
        ],
      },
      {
        title: "Classification & clustering",
        modules: [
          { folder: "18.KNN-classification algorithm", title: "K-Nearest Neighbors", topics: "Implementation, grid search, cross-validation" },
          { folder: "19.Decision Tree", title: "Decision trees", topics: "Concepts and scikit-learn implementation" },
          { folder: "20.Random Forest", title: "Random forest", topics: "Concepts, implementation and a heart-disease worked solution" },
          { folder: "21.Support Vector Machine", title: "Support vector machines", topics: "Concepts and scikit-learn implementation" },
          { folder: "22.K-means Clustering", title: "K-means clustering", topics: "Unsupervised learning, Iris dataset example" },
          { folder: "23.DBSCAN", title: "DBSCAN", topics: "Density-based clustering and scikit-learn implementation" },
          { folder: "24.PCA", title: "PCA", topics: "Dimensionality reduction concepts and implementation" },
        ],
      },
    ],
  },
  {
    slug: "dl",
    title: "Deep Learning with PyTorch",
    repoName: "Deep-Learning-PyTorch-Fundamentals",
    summary:
      "How neural networks learn — from the perceptron and backpropagation to PyTorch training pipelines, GPU training, batch normalization and optimizers — with scripts, notebooks and practice sheets.",
    stats: ["12 modules", "Scripts & notebooks", "Practice sheets"],
    groups: [
      {
        title: "Neural network foundations",
        modules: [
          { folder: "1.Perceptron", title: "Perceptron", topics: "Perceptron training, gradient descent, practice modules" },
          { folder: "2.Backpropagation and  Pytorch basic", title: "Backpropagation & PyTorch basics", topics: "Tensors, the maths of backprop, backprop from scratch" },
          { folder: "3.Autograd", title: "Autograd", topics: "Automatic differentiation, manual vs. automatic gradients, clearing gradients" },
        ],
      },
      {
        title: "PyTorch training workflow",
        modules: [
          { folder: "4.Pytorch training_pipeline", title: "Training pipeline", topics: "Forward pass, loss, backward pass, optimizer step" },
          { folder: "5.Pytorch nn module", title: "torch.nn", topics: "nn.Module, model classes, adding layers, improving the pipeline" },
          { folder: "6.Pytorch-Batch,Mini,SGD", title: "Batch, mini-batch & SGD", topics: "Comparison of gradient descent variants" },
          { folder: "7.Dataset_dataloader", title: "Dataset & DataLoader", topics: "Custom datasets, transforms, workers" },
          { folder: "8.From ANN implementation to GPU", title: "ANN to GPU (Fashion-MNIST)", topics: "CPU and GPU notebooks" },
        ],
      },
      {
        title: "Training challenges & optimization",
        modules: [
          { folder: "9.Loss function and training challenges", title: "Loss functions & challenges", topics: "Types of loss, the vanishing-gradient problem" },
          { folder: "10.Data scaling,Standardization, normalization", title: "Scaling for neural networks", topics: "Standardization vs. normalization" },
          { folder: "11.Batch Normalization", title: "Batch normalization", topics: "Fashion-MNIST GPU notebook with batch norm, plus the research paper" },
          { folder: "12.Optimizers", title: "Optimizers", topics: "EWMA, momentum, AdaGrad, RMSprop" },
        ],
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Teaching demo — hidden until `video` is set.                                */
/* -------------------------------------------------------------------------- */

export type TeachingDemo = {
  title: string;
  description: string;
  /** YouTube / Vimeo watch URL or a direct .mp4 URL. */
  video: string;
  /** Optional: slides, notebook or repo that goes with the video. */
  materials?: { label: string; href: string }[];
};

/**
 * Leave as `null` until the explainer video exists — the nav item and the whole
 * section are then not rendered at all. To publish it, replace `null` with e.g.
 *
 *   {
 *     title: "Backpropagation, step by step",
 *     description: "A 5-minute walkthrough of how gradients flow through a small network.",
 *     video: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
 *     materials: [{ label: "Notebook", href: repoFolder("Deep-Learning-PyTorch-Fundamentals", "2.Backpropagation and  Pytorch basic") }],
 *   }
 */
export const teachingDemo = null as TeachingDemo | null;

/* -------------------------------------------------------------------------- */
/* Competitive programming                                                     */
/* -------------------------------------------------------------------------- */

export const competitive = {
  solved: "500+",
  platformsCount: "4",
  mention: "Honorable Mention, ICPC 2025",
  summary: "Solved 500+ programming problems across multiple online judges.",
  platforms: [
    { name: "Codeforces", href: socials.codeforces },
    { name: "LightOJ" },
    { name: "Virtual Judge" },
    { name: "CodeChef" },
  ],
  repo: { label: "Competitive Programming — Phase 0 (C++)", href: repo("Competitive-Programming-Phase-0") },
};

/* -------------------------------------------------------------------------- */
/* Achievements, certifications, leadership                                    */
/* -------------------------------------------------------------------------- */

export const achievements = [
  {
    title: "Winner — 3 Minute Thesis (3MT)",
    org: "East Delta University — SoSET Research Day",
    detail:
      "Awarded Winner in the 3 Minute Thesis competition, presenting project work as part of team INNOVxARO — demonstrating concise communication of complex ideas, innovation, and teamwork.",
  },
  {
    title: "Honorable Mention — ICPC Online Preliminary Contest 2025",
    org: "Team INNOVxARO",
    detail: "Secured Honorable Mention while solving complex algorithmic challenges representing East Delta University.",
  },
  {
    title: "6th Position — EDU Intra University Programming Contest 2024",
    org: "East Delta University — EDU Computer Club",
    detail: "Placed 6th in the university-wide competitive programming contest.",
  },
  {
    title: "Finalist — Hult Prize 2026",
    org: "East Delta University",
    detail: "Represented team INNOVxAMOR, developing and pitching a scalable social impact solution.",
  },
  {
    title: "Participant — EDU HackFest 2025",
    org: "Team INNOVxAAA",
    detail: "Competed in a 7-hour hackathon, developing innovative coding solutions under time constraints.",
  },
  {
    title: "GPA 5.00/5.00 — Secondary School Certificate in Science",
    org: "Mathematics Alumni Association, University of Chittagong",
    detail: "Recognized for achieving a perfect GPA in the SSC examination.",
  },
];

export const certifications = [
  { title: "Machine Learning Specialization", org: "DeepLearning.AI & Stanford University" },
  { title: "Phase 0 — A Deep Introduction to Programming", org: "YouKn0wWho Academy" },
];

export const leadership = [
  {
    period: "01/2018 — 09/2019",
    title: "Cadet, Bangladesh National Cadet Corps (BNCC)",
    org: "Chattogram Collegiate School",
    detail: "Participated in drills, training, and community service activities, developing discipline, teamwork, and leadership skills.",
  },
  {
    period: "2019",
    title: "Participant, 9th Dutch-Bangla Bank Prothom Alo Bangladesh Physics Olympiad",
    org: "National Competition",
    detail: "Represented school at the national-level physics competition, applying strong problem-solving and logical reasoning skills.",
  },
  {
    period: "01/2018 — 01/2021",
    title: "Professional Cricketer",
    org: "Ispahani Cricket Academy",
    detail: "Trained competitively and participated in the Prime Bank National School Cricket Tournament.",
  },
];

/* -------------------------------------------------------------------------- */
/* Contact                                                                     */
/* -------------------------------------------------------------------------- */

export const contact = {
  heading: "Let’s talk",
  text: "Open to AI/ML engineering roles, research collaborations, and interesting problems. Send a message and I’ll get back to you.",
};
