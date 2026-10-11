export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  domain: string;
  url: string;
  downloadUrl: string;
  imageUrl: string;
  previewType?: "image" | "pdf";
};

export const certificates: Certificate[] = [
  { title: "Machine Learning Specialization", issuer: "DeepLearning.AI · Stanford Online", date: "2026", domain: "Data & AI", url: "https://coursera.org/share/da5a8a32404f9b639ed1f8870ddbf7bf", downloadUrl: "/certificates/machine-learning-specialization.pdf", imageUrl: "/certificates/machine-learning-specialization.pdf", previewType: "pdf" },
  { title: "L'anglais des affaires : Préparation au test TOEIC", issuer: "LinkedIn Learning", date: "2026", domain: "Languages", url: "https://www.linkedin.com/learning/certificates/c2fcaaba5d0cbb01ddc901818f2bd4ed49bf9ac9fa0d5a4eee42f1e871504fad?trk=share_certificate", downloadUrl: "/certificates/business-english-toeic.pdf", imageUrl: "/certificates/business-english-toeic.pdf", previewType: "pdf" },
  { title: "Supervised Machine Learning", issuer: "DeepLearning.AI · Stanford Online", date: "2024", domain: "Data & AI", url: "https://coursera.org/share/760241a8489ece0696dff88dec91fb1d", downloadUrl: "/certificates/certificate-2.png", imageUrl: "/certificates/certificate-2.png" },
  { title: "Intermediate Python for Data Analysis", issuer: "Arizona State University", date: "2023", domain: "Data & AI", url: "https://courses.baobabplatform.org/certificates/7df137cd78534139b9d31e3d9910109b", downloadUrl: "/certificates/certificate-1.png", imageUrl: "/certificates/certificate-1.png" },
  { title: "Data Science", issuer: "SoloLearn", date: "2023", domain: "Data & AI", url: "https://www.sololearn.com/fr/certificates/CT-EFG8LXBN", downloadUrl: "/certificates/certificate-3.png", imageUrl: "/certificates/certificate-3.png" },
  { title: "Data Analysis with Python", issuer: "freeCodeCamp", date: "2023", domain: "Data & AI", url: "https://www.freecodecamp.org/certification/donafidele/data-analysis-with-python-v7", downloadUrl: "/certificates/certificate-4.png", imageUrl: "/certificates/certificate-4.png" },
  { title: "Introduction to Statistics", issuer: "DataCamp", date: "2023", domain: "Data & AI", url: "https://datacamp.com/statement-of-accomplishment/course/a5d74ba92c369f3b662ba18a1fd32545bfceddea?raw=1", downloadUrl: "/certificates/certificate-6.png", imageUrl: "/certificates/certificate-6.png" },
  { title: "Scientific Computing with Python", issuer: "freeCodeCamp", date: "2022", domain: "Software Development", url: "https://www.freecodecamp.org/certification/donafidele/scientific-computing-with-python-v7", downloadUrl: "/certificates/certificate-5.png", imageUrl: "/certificates/certificate-5.png" },
];
