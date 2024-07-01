import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yantra - WINDOWS DOORS SKYLIGHTS BALUSTRADES",
  description: "Discover Yantra's custom home solutions, including doors, windows, balustrades, retractable & fixed glass roofs, and pergolas. We offer lifetime warranties, annual maintenance contracts, and a Pan India presence. Visit us to enhance your living spaces with innovative designs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
