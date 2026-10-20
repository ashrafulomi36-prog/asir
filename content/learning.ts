export type LearningModule = {
  /** Display name. */
  name: string;
  /** Exact folder name in the repository (used to build the GitHub link). */
  folder: string;
};

export type LearningGroup = {
  title: string;
  modules: LearningModule[];
};

export type LearningResource = {
  title: string;
  repo: string;
  branch: string;
  description: string;
  stats: { label: string; value: string }[];
  groups: LearningGroup[];
};

export const learningIntro =
  "I organise what I learn into notes, code examples and practice material, so it can be followed in order and revisited. Each repository is split into numbered modules; browse them below or open the repository.";

export const learningResources: LearningResource[] = [
  {
    title: "Machine Learning: Zero to Advanced",
    repo: "https://github.com/MuhammadAsir/AI-ML-ZERO-TO-ADVANCE",
    branch: "main",
    description:
      "Python and machine-learning material in 26 module folders: Python and data-analysis tools, exploratory analysis and preprocessing, regression, classification, clustering and dimensionality reduction. Modules combine code examples with practice problems and datasets.",
    stats: [
      { label: "Modules", value: "26" },
      { label: "Python files", value: "168" },
      { label: "PDFs", value: "21" },
    ],
    groups: [
      {
        title: "Python & data tools",
        modules: [
          { name: "Python for AI/ML", folder: "1.AI ML Python" },
          { name: "OOP with Python", folder: "2.OOP with Python" },
          { name: "NumPy", folder: "3.Numpy_Python" },
          { name: "Pandas", folder: "4.Pandas Python" },
          { name: "Matplotlib", folder: "5.Python_Matplotlib" },
          { name: "Seaborn", folder: "6.Python_Searborn" },
          { name: "Streamlit", folder: "Streamlit__Python" },
        ],
      },
      {
        title: "EDA & preprocessing",
        modules: [
          { name: "EDA, part 1", folder: "7.EDA_ Part 1" },
          { name: "EDA, part 2", folder: "8.1EDA_Part 2" },
          { name: "Feature engineering", folder: "8.2 Feature Engineering_part1" },
          { name: "Outliers and handling", folder: "9.Outliers and Handling" },
          { name: "Encoding", folder: "10.Encoding" },
          { name: "Scaling", folder: "11.Scaling" },
        ],
      },
      {
        title: "Regression",
        modules: [
          { name: "Introduction to linear regression", folder: "12.Intro_Linear Regression" },
          { name: "Simple linear regression", folder: "13.Simple_linear regression" },
          { name: "Multiple linear regression", folder: "14.Multiple_linear regression" },
          { name: "Multiple regression with Scikit-learn", folder: "15.Scikit_learn(Multiple linear regression)" },
        ],
      },
      {
        title: "Classification",
        modules: [
          { name: "Logistic regression", folder: "16.Logistic Regression" },
          { name: "Logistic regression with Scikit-learn", folder: "17.LogisticRegre_Scikit learn" },
          { name: "K-nearest neighbours", folder: "18.KNN-classification algorithm" },
          { name: "Decision trees", folder: "19.Decision Tree" },
          { name: "Random forest", folder: "20.Random Forest" },
          { name: "Support vector machines", folder: "21.Support Vector Machine" },
        ],
      },
      {
        title: "Unsupervised learning",
        modules: [
          { name: "K-means clustering", folder: "22.K-means Clustering" },
          { name: "DBSCAN", folder: "23.DBSCAN" },
          { name: "PCA", folder: "24.PCA" },
        ],
      },
    ],
  },
  {
    title: "Deep Learning with PyTorch Fundamentals",
    repo: "https://github.com/MuhammadAsir/Deep-Learning-PyTorch-Fundamentals",
    branch: "main",
    description:
      "How neural networks learn, from perceptrons and backpropagation through PyTorch training pipelines to loss functions, optimizers and batch normalization. Includes notebooks that train Fashion-MNIST networks on CPU and GPU.",
    stats: [
      { label: "Modules", value: "12" },
      { label: "Python files", value: "29" },
      { label: "Notebooks", value: "3" },
      { label: "PDF / DOCX notes", value: "16" },
    ],
    groups: [
      {
        title: "Foundations",
        modules: [
          { name: "Perceptron", folder: "1.Perceptron" },
          { name: "Backpropagation and PyTorch basics", folder: "2.Backpropagation and  Pytorch basic" },
          { name: "Autograd", folder: "3.Autograd" },
        ],
      },
      {
        title: "PyTorch training",
        modules: [
          { name: "Training pipeline", folder: "4.Pytorch training_pipeline" },
          { name: "The nn module", folder: "5.Pytorch nn module" },
          { name: "Batch, mini-batch and SGD", folder: "6.Pytorch-Batch,Mini,SGD" },
          { name: "Dataset and DataLoader", folder: "7.Dataset_dataloader" },
          { name: "From ANN implementation to GPU", folder: "8.From ANN implementation to GPU" },
        ],
      },
      {
        title: "Optimization & stability",
        modules: [
          { name: "Loss functions and training challenges", folder: "9.Loss function and training challenges" },
          { name: "Data scaling, standardization, normalization", folder: "10.Data scaling,Standardization, normalization" },
          { name: "Batch normalization", folder: "11.Batch Normalization" },
          { name: "Optimizers", folder: "12.Optimizers" },
        ],
      },
    ],
  },
];
