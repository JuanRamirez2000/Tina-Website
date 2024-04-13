import React from "react";
import Navbar from "../../components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full h-screen">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full h-fit">{children}</div>
    </main>
  );
}
