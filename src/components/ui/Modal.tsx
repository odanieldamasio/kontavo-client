"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HiOutlineX } from "react-icons/hi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl p-4 pt-2 pr-2 border-[#F1F1F1] border bg-white rounded flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-[#EFEFEF] border-b">
          <p className="text-[#626262] text-sm">{title}</p>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#626262] hover:bg-zinc-100 transition-colors"
          >
            <HiOutlineX size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-2 pt-4 pr-4 pb-0 max-h-[80vh] overflow-y-auto">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
