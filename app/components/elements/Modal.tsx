import React, { useRef, useState } from "react";
import useOutsideClick from "../../_lib/hooks/useOutsideClick";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (value: string) => void;
}

export default function Modal({ isOpen, onClose, onSubmit }: ModalProps) {
  const [value, setValue] = useState("");
  const ref = useRef<HTMLDivElement>(null!);

  useOutsideClick(ref, onClose);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        ref={ref}
        className="relative w-[90%] max-w-md rounded-2xl bg-white p-6 shadow-xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-6 cursor-pointer text-2xl text-gray-400 hover:text-black"
        >
          ✕
        </button>

        <h2 className="mb-4 text-xl font-semibold">Change Page Title</h2>

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type here ..."
          className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        <button
          onClick={() => onSubmit(value)}
          className="mt-4 w-full cursor-pointer rounded-xl bg-blue-600 py-2 text-white transition hover:bg-blue-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
