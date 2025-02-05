import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { trackModalOpen } from "../utils/analytics";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  const hasTracked = useRef(false); // Track if analytics function has been triggered

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Trigger analytics only once
      if (!hasTracked.current) {
        trackModalOpen(title);
        hasTracked.current = true;
      }
    } else {
      document.body.style.overflow = "unset";
      hasTracked.current = false; // Reset when modal is closed
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, title]); // Run the effect only when `isOpen` or `title` changes

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" onClick={onClose}>
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        <div
          className="relative bg-white rounded-lg w-full max-w-md p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
