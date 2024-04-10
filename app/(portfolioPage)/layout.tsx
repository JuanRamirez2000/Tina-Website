import React from "react";
import Navbar from "./Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Layout({
  children,
  photoModal,
}: {
  children: React.ReactNode;
  photoModal: React.ReactNode;
}) {
  return (
    <html>
      <body className="relative w-full h-screen">
        <div className="w-full h-fit">
          <Navbar />
        </div>
        <div className="w-full h-full">{children}</div>
        <SpeedInsights />
        {photoModal}
      </body>
    </html>
  );
}
