export interface ProjectDetail {
  overview: string;
  methodology: string;
  tools: string[];
  results: string;
}

export interface Project {
  id: string;
  title: string;
  year: number;
  category: "classification" | "eda" | "deployment" | "normalization";
  tags: string[];
  summary: string;
  detail: ProjectDetail;
  isLatest?: boolean;
}

export const projects: Project[] = [
  {
    id: "smartphone-price-prediction",
    title: "Smartphone Price Prediction Model",
    year: 2025,
    category: "classification",
    tags: ["Python", "KNN", "Decision Tree", "Naive Bayes"],
    summary: "Classification model to predict smartphone price ranges using multiple ML algorithms.",
    detail: {
      overview: "Built a machine learning model to predict smartphone price categories based on hardware specifications using Python.",
      methodology: "Data preprocessing, feature selection, model training with KNN, Decision Tree, and Naive Bayes classifiers, cross-validation, and performance comparison.",
      tools: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      results: "Compared accuracy across three classifiers; Decision Tree achieved the highest accuracy for price range prediction.",
    },
    isLatest: true,
  },
  {
    id: "breast-cancer-prediction",
    title: "Breast Cancer Prediction Model",
    year: 2024,
    category: "classification",
    tags: ["Python", "KNN", "Random Forest"],
    summary: "Classification model for breast cancer diagnosis using KNN and Random Forest.",
    detail: {
      overview: "Developed a predictive model for breast cancer diagnosis (malignant vs benign) using machine learning techniques.",
      methodology: "Data cleaning, exploratory analysis, feature engineering, model training with KNN and Random Forest, evaluation with confusion matrix and accuracy metrics.",
      tools: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
      results: "Random Forest outperformed KNN in accuracy and recall for malignant classification.",
    },
  },
  {
    id: "covid19-eda",
    title: "Exploratory Data Analysis of COVID-19 Dataset",
    year: 2024,
    category: "eda",
    tags: ["Python", "Data Visualization", "Preprocessing"],
    summary: "Comprehensive EDA on COVID-19 dataset including data understanding, preprocessing, and visualization.",
    detail: {
      overview: "Performed exploratory data analysis on a COVID-19 dataset to uncover trends, patterns, and insights.",
      methodology: "Data understanding, missing value handling, data type conversion, statistical summary, visualization with charts and heatmaps.",
      tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      results: "Identified key trends in case growth, mortality rates, and regional patterns through comprehensive visualizations.",
    },
  },
  {
    id: "aws-deployment",
    title: "Deployed Website using AWS EC2, AWS RDS, XAMPP",
    year: 2024,
    category: "deployment",
    tags: ["AWS EC2", "AWS RDS", "XAMPP", "Cloud"],
    summary: "Deployed a web application on AWS cloud infrastructure using EC2 and RDS.",
    detail: {
      overview: "Set up and deployed a full web application using AWS cloud services with XAMPP as the local development environment.",
      methodology: "Configured AWS EC2 instance, set up AWS RDS for database, migrated local XAMPP project to cloud, configured security groups and networking.",
      tools: ["AWS EC2", "AWS RDS", "XAMPP", "MySQL"],
      results: "Successfully deployed a fully functional web application accessible via public IP with managed database on AWS RDS.",
    },
  },
  {
    id: "revenue-prediction",
    title: "Revenue Prediction Model",
    year: 2024,
    category: "classification",
    tags: ["Python", "Random Forest", "KNN", "SVM"],
    summary: "Classification model for revenue prediction using Random Forest, KNN, and SVM.",
    detail: {
      overview: "Built a classification model to predict revenue categories using multiple machine learning algorithms.",
      methodology: "Feature engineering, data normalization, model training with Random Forest, KNN, and SVM, hyperparameter tuning, cross-validation.",
      tools: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      results: "Random Forest provided the best balance of precision and recall for revenue classification.",
    },
  },
  {
    id: "lung-cancer-prediction",
    title: "Lung Cancer Prediction Model",
    year: 2024,
    category: "classification",
    tags: ["Python", "Logistic Regression"],
    summary: "Logistic Regression model for lung cancer risk prediction.",
    detail: {
      overview: "Developed a logistic regression model to predict lung cancer risk based on patient data and risk factors.",
      methodology: "Data preprocessing, feature selection, logistic regression model training, ROC curve analysis, threshold optimization.",
      tools: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      results: "Achieved strong AUC score with logistic regression, identifying key risk factors for lung cancer.",
    },
  },
  {
    id: "digging-site-normalization",
    title: "Normalize Digging Site Dataset",
    year: 2023,
    category: "normalization",
    tags: ["SQL", "Database Design", "Normalization"],
    summary: "Database normalization from UNF through 3NF for a digging site dataset.",
    detail: {
      overview: "Performed database normalization on a digging site dataset, transforming it from unnormalized form to Third Normal Form.",
      methodology: "Identified functional dependencies, decomposed tables through UNF → 1NF → 2NF → 3NF, verified lossless join and dependency preservation.",
      tools: ["SQL", "MySQL", "Database Design Tools"],
      results: "Eliminated data redundancy and anomalies, resulting in a well-structured relational database schema.",
    },
  },
];
