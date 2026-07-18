export interface Certificate {
  name: string;
  issuer: string;
  year: number;
}

export const certificates: Certificate[] = [
  { name: "Bootcamp Machine Learning", issuer: "DQLab", year: 2024 },
  { name: "Data Analyst with SQL & Python", issuer: "DQLab", year: 2024 },
  { name: "Data Science Fundamentals", issuer: "Cognitive Class", year: 2024 },
  { name: "Machine Learning with Python", issuer: "Cognitive Class", year: 2024 },
  { name: "Data Visualization with Python", issuer: "Cognitive Class", year: 2024 },
  { name: "Python for Data Science", issuer: "Cognitive Class", year: 2024 },
  { name: "Belajar Dasar Data Science", issuer: "Dicoding", year: 2024 },
  { name: "Belajar Analisis Data dengan Python", issuer: "Dicoding", year: 2024 },
  { name: "Belajar Dasar Structured Query Language (SQL)", issuer: "Dicoding", year: 2024 },
  { name: "Intro to Data Analytics", issuer: "RevoU", year: 2024 },
  { name: "Memulai Pemrograman dengan Python", issuer: "Dicoding", year: 2023 },
];
