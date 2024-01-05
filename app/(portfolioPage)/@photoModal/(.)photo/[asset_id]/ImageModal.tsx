"use client";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PhotoModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <Dialog
      open={isOpen}
      onClose={() => router.back()}
      className="relative z-50"
    >
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xl"
        aria-hidden="true"
      />
      <div className="fixed inset-0">
        <Dialog.Panel className="flex flex-col items-center justify-center w-full h-full gap-2">
          {children}
          <button
            className="relative px-6 py-2 rounded-lg bg-gradient-to-br from-indigo-300 to-pink-300 font-medium z-[100]"
            onClick={(prev) => {
              setIsOpen(!prev);
              router.back();
            }}
          >
            Close
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
