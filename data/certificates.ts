export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
};

export const certificates: Certificate[] = [
  {
    title: "Certificate Title One",
    issuer: "Issuing Organization",
    date: "2026",
    image: "/images/certificates/certificate-1.svg"
  },
  {
    title: "Certificate Title Two",
    issuer: "Issuing Organization",
    date: "2026",
    image: "/images/certificates/certificate-2.svg"
  },
  {
    title: "Certificate Title Three",
    issuer: "Issuing Organization",
    date: "2026",
    image: "/images/certificates/certificate-3.svg"
  }
];
