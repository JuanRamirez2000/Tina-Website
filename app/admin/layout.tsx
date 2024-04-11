import React from "react";
import Navbar from "../../components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative w-full h-screen">
      <div className="w-full h-fit">
        <Navbar />
      </div>
      <div className="w-full h-full">{children}</div>
    </main>
  );
}
