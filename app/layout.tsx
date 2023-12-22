import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./(portfolioPage)/Navbar";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
