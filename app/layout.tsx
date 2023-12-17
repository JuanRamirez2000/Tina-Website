import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { WindSong } from "next/font/google";

const windSong = WindSong({
  weight: "400",
  variable: "--font-windSong",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tina Dinh Modeling",
  description: "A modeling site for Tina Dinh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${windSong.variable}`}>
      <body className="flex flex-row h-screen bg-repeat max-w-screen ">
        {/* 
        
        <Navbar />
        */}
        {children}
      </body>
    </html>
  );
}
