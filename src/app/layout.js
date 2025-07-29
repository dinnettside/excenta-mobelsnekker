import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Excenta Møbelsnekker | Skreddersydde møbler i høy kvalitet",
  description: "Excenta AS – spesialtilpassede kjøkken, bad og garderober i MDF, eik finer og laminat. Vi skreddersyr etter dine tegninger og ønsker.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
