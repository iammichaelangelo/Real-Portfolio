export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
};

export const certificates: Certificate[] = [
  {
    title: "CSE Professional Eligibility",
    issuer: "Civil Service Commission",
    date: "2024",
    image: "/images/certificates/certificate-1.png"
  },
  {
    title: "API 101: Introduction, Methods, and Authentication",
    issuer: "Ethel Programming Computer Programming Services",
    date: "2025",
    image: "/images/certificates/certificate-2.png"
  },
  {
    title: "To AI or Not to AI: The Role of AI in Research",
    issuer: "Tagpros Education and GabAI",
    date: "2025",
    image: "/images/certificates/certificate-3.png"
  },
  {
    title: "IoT and Data Privacy: Protecting User Information",
    issuer: "Ethel Programming Computer Programming Services",
    date: "2025",
    image: "/images/certificates/certificate-4.png"
  },
  {
    title: "AI-Powered Future: Mastering Prompt Engineering",
    issuer: "Department of Information and Communications Technology",
    date: "2025",
    image: "/images/certificates/certificate-5.png"
  },
  {
    title: "Best Practices for Clean and Accessible HTML",
    issuer: "Ethel Programming Computer Programming Services",
    date: "2025",
    image: "/images/certificates/certificate-6.png"
  }
];
