'use client';

import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose?: () => void; // ⬅️ agora é opcional
  duration?: number;
}

export function Toast({
  message,
  type = 'info',
  onClose,
  duration = 3000,
}: ToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // FADE IN
    requestAnimationFrame(() => setVisible(true));

    const lifeTimer = setTimeout(() => {
      // FADE OUT
      setVisible(false);

      const exitTimer = setTimeout(() => {
        if (onClose) {
          onClose(); // ✅ só chama se existir
        }
      }, 300); // igual à duration da transition

      return () => clearTimeout(exitTimer);
    }, duration);

    return () => clearTimeout(lifeTimer);
  }, [duration, onClose]);

  const base = `
    px-4 py-3
    rounded-sm
    text-sm font-medium
    border
    backdrop-blur-sm
    shadow-lg shadow-black/10
    transition-opacity duration-300 ease-out
  `;

  const variants = {
    success: `
      bg-[#87BE5E20]
      text-[#87BE5E]
      border-[#87BE5E]
    `,
    error: `
      bg-[#EF444420]
      text-[#EF4444]
      border-[#EF4444]
    `,
    info: `
      bg-[#0ACDB520]
      text-[#0ACDB5]
      border-[#0ACDB5]
    `,
  };

  return (
    <div
      className={`${base} ${variants[type]} ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {message}
    </div>
  );
}
