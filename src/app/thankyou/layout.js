import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import "../globals.css";

export const metadata = {
  title: "Thank You! - Team Yantra"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
