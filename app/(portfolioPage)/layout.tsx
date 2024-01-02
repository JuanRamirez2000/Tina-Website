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
      <Navbar />
      {children}
      {photoModal}
    </>
  );
}
