export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  url: string;
  downloadUrl: string;
  imageUrl: string;
};

export const certificates: Certificate[] = [
  { title: "Intermediate Python for Data Analysis", issuer: "Baobab Platform", date: "2023", url: "https://courses.baobabplatform.org/certificates/7df137cd78534139b9d31e3d9910109b", downloadUrl: "/certificates/certificate-1.png", imageUrl: "/certificates/certificate-1.png" },
  { title: "Supervised Machine Learning", issuer: "DeepLearning.AI · Stanford Online", date: "2024", url: "https://coursera.org/share/760241a8489ece0696dff88dec91fb1d", downloadUrl: "/certificates/certificate-2.png", imageUrl: "/certificates/certificate-2.png" },
  { title: "Data Science", issuer: "SoloLearn", date: "2023", url: "https://www.sololearn.com/fr/certificates/CT-EFG8LXBN", downloadUrl: "/certificates/certificate-3.png", imageUrl: "/certificates/certificate-3.png" },
  { title: "Data Analysis with Python", issuer: "freeCodeCamp", date: "2023", url: "https://www.freecodecamp.org/certification/donafidele/data-analysis-with-python-v7", downloadUrl: "/certificates/certificate-4.png", imageUrl: "/certificates/certificate-4.png" },
  { title: "Scientific Computing with Python", issuer: "freeCodeCamp", date: "2022", url: "https://www.freecodecamp.org/certification/donafidele/scientific-computing-with-python-v7", downloadUrl: "/certificates/certificate-5.png", imageUrl: "/certificates/certificate-5.png" },
  { title: "Introduction to Statistics", issuer: "DataCamp", date: "2023", url: "https://datacamp.com/statement-of-accomplishment/course/a5d74ba92c369f3b662ba18a1fd32545bfceddea?raw=1", downloadUrl: "/certificates/certificate-6.png", imageUrl: "/certificates/certificate-6.png" },
];
