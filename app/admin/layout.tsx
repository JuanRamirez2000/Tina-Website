import React from "react";
import Navbar from "../components/Navbar";

export default function Layout({
  children,
  photoModal,
}: {
  children: React.ReactNode;
  photoModal: React.ReactNode;
}) {
  return (
    <main className="relative w-full h-screen">
      <div className="w-full h-fit">
        <Navbar />
      </div>
      <div className="w-full h-full">{children}</div>
      {photoModal}
    </main>
  );
}
