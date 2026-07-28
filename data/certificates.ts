export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  category: "academic" | "professional";
  credentialUrl?: string;
};

export const certificates: Certificate[] = [
  {
    title: "Bachelor of Science in Information Technology",
    issuer: "Nueva Ecija University of Science and Technology",
    date: "2026",
    image: "/images/certificates/diploma.jpg",
    category: "academic"
  },
  {
    title: "Dean's List Award (4th Year, 1st Semester)",
    issuer: "Nueva Ecija University of Science and Technology",
    date: "2025",
    image: "/images/certificates/dean.jpg",
    category: "academic"
  },
  {
    title: "CSE Professional Eligibility",
    issuer: "Civil Service Commission",
    date: "2024",
    image: "/images/certificates/certificate-1.png",
    category: "professional"
  },
  {
    title: "API 101: Introduction, Methods, and Authentication",
    issuer: "Ethel Programming Computer Programming Services",
    date: "2025",
    image: "/images/certificates/certificate-2.png",
    category: "professional"
  },
  {
    title: "To AI or Not to AI: The Role of AI in Research",
    issuer: "Tagpros Education and GabAI",
    date: "2025",
    image: "/images/certificates/certificate-3.png",
    category: "professional"
  },
  {
    title: "IoT and Data Privacy: Protecting User Information",
    issuer: "Ethel Programming Computer Programming Services",
    date: "2025",
    image: "/images/certificates/certificate-4.png",
    category: "professional"
  },
  {
    title: "AI-Powered Future: Mastering Prompt Engineering",
    issuer: "Department of Information and Communications Technology",
    date: "2025",
    image: "/images/certificates/certificate-5.png",
    category: "professional"
  },
  {
    title: "Best Practices for Clean and Accessible HTML",
    issuer: "Ethel Programming Computer Programming Services",
    date: "2025",
    image: "/images/certificates/certificate-6.png",
    category: "professional"
  }
];
