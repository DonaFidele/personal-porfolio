export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  url: string;
  downloadUrl: string;
  imageUrl: string;
};

export const certificates: Certificate[] = [
  { title: "Introduction to Git and GitHub", issuer: "Google", date: "2024", url: "https://www.coursera.org/", downloadUrl: "/certificates/certificate-1.png", imageUrl: "/certificates/certificate-1.png" },
  { title: "Responsive Web Design", issuer: "freeCodeCamp", date: "2024", url: "https://www.freecodecamp.org/", downloadUrl: "/certificates/certificate-2.png", imageUrl: "/certificates/certificate-2.png" },
  { title: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", date: "2024", url: "https://www.freecodecamp.org/", downloadUrl: "/certificates/certificate-3.png", imageUrl: "/certificates/certificate-3.png" },
  { title: "React Basics", issuer: "Meta", date: "2023", url: "https://www.coursera.org/", downloadUrl: "/certificates/certificate-4.png", imageUrl: "/certificates/certificate-4.png" },
  { title: "Python for Everybody", issuer: "University of Michigan", date: "2023", url: "https://www.coursera.org/", downloadUrl: "/certificates/certificate-5.png", imageUrl: "/certificates/certificate-5.png" },
  { title: "SQL for Data Science", issuer: "University of California, Davis", date: "2023", url: "https://www.coursera.org/", downloadUrl: "/certificates/certificate-6.png", imageUrl: "/certificates/certificate-6.png" },
  { title: "The Fundamentals of Digital Marketing", issuer: "Google", date: "2022", url: "https://learndigital.withgoogle.com/", downloadUrl: "#", imageUrl: "/certificates/certificate-1.png" },
  { title: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services", date: "2022", url: "https://aws.amazon.com/training/", downloadUrl: "#", imageUrl: "/certificates/certificate-2.png" },
];
