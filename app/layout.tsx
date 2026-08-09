import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata = {
  title: "Michael Acuña Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}