"use client";

import React, { useState } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/layout/Header";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import ProtectedRoute from "../auth/ProtectedPage";
import { ToastProvider } from "../toast/ToastContext";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <ProtectedRoute>
      <div className="flex flex-col min-h-screen overflow-hidden bg-[#FCFCFC]">
        <Header />

        <div className="flex-1 flex flex-col pb-6">
          <main className=" flex-1 overflow-y-auto">
            <div className="mx-auto grid md:px-6 px-4">{children}</div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
