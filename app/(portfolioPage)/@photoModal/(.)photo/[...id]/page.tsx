"use client";

import { Dialog } from "@headlessui/react";
import { useRouter } from "next/navigation";

export default function PhotoModal() {
  const router = useRouter();

  return (
    <Dialog open={true} onClose={() => router.back()}>
      <Dialog.Panel>
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>

        <button onClick={() => router.back()}>Close</button>
      </Dialog.Panel>
    </Dialog>
  );
}
