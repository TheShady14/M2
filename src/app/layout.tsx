import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "M2 | Modern Business Solutions",
  description: "Business presentation-style site for M2",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
