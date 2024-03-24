interface ICertificates {
  title: string;
  imgSrc: string;
  institution: string;
}

const certificates: ICertificates[] = [
  {
    title: "Formação React Developer",
    imgSrc: "https://hermes.dio.me/certificates/cover/ITMC2TZB.jpg",
    institution: "DIO - Digital Innovation One",
  },
  {
    title: "Inter Orange Tech+",
    imgSrc: "https://hermes.dio.me/certificates/cover/481F6358.jpg",
    institution: "DIO - Digital Innovation One",
  },
  {
    title: "The Ultimate React Course 2024: React, Redux & More",
    imgSrc: "https://udemy-certificate.s3.amazonaws.com/image/UC-67bc8b2f-0c2a-4aa8-a42e-c9f58469371a.jpg?v=1702669481000",
    institution: "Udemy - Instrutor Jonas Schmedtmann",
  },
];

export default certificates;
