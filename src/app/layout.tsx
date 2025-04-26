import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import wp from '../assets/whatsapplogo.png'
import Image from "next/image";
import CompanyCertificate from "./components/CompanyCertificate";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PortfolioBuilder",
  description: "Create stunning portfolios with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
     

        {/* Main content of the page */}
        <main>{children}</main>




<CompanyCertificate/>

 {/* WhatsApp Icon */}
 <a 
      href="https://wa.me/2347063480314" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-[1%] right-1 w-16 h-16 rounded-full shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
    >
      <Image 
        src={wp} 
        alt="WhatsApp Logo" 
        width={50} 
        height={50} 
        className="rounded-full" 
      />
    </a>
      </body>
    </html>
  );
}
