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
      <div className="w-screen h-screen">
        <div className="h-[7%] w-full">
          <Navbar />
        </div>

        <div className="h-[93%] w-full">{children}</div>
      </div>
      {photoModal}
    </>
  );
}
