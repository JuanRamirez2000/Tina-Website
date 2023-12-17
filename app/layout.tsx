import type { Metadata } from "next";
import "./globals.css";

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
      <body className="w-screen min-h-fit">{children}</body>
    </html>
  );
}
