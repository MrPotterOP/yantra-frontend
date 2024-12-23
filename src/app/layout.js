import { Inter } from "next/font/google";
import "./globals.css";

import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yantra - WINDOWS DOORS SKYLIGHTS BALUSTRADES",
  description: "Discover Yantra's custom home solutions, including doors, windows, balustrades, retractable & fixed glass roofs, and pergolas. We offer lifetime warranties, annual maintenance contracts, and a Pan India presence. Visit us to enhance your living spaces with innovative designs",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTAG_ID} />
      <body className={inter.className}>{children}
        <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTAG_ID}`}
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
      </body>
      <GoogleAnalytics gtagId={process.env.NEXT_PUBLIC_GTAG_ID} />
    </html>
  );
}
