import React from "react";
import Navbar from "./Navbar";

export default function Layout({
  children,
  photoModal,
}: {
  children: React.ReactNode;
  photoModal: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full h-screen">
        <div className="w-full h-fit">
          <Navbar />
        </div>

        <div className="w-full h-full">{children}</div>
      </div>
      {photoModal}
    </>
  );
}
