"use client";

import Image from "next/image";
import { HiLogout, HiPlus } from "react-icons/hi";
import Button from '../ui/Button';

type HeaderProps = {
  onAddClick?: () => void;
};

export default function Header({ onAddClick }: HeaderProps) {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/imgs/logo-black.svg"
          alt="Logo Kontavo"
          width={160}
          height={40}
          className="object-contain"
        />
      </div>

      {/* Botão de adicionar */}
      <Button
        icon={HiPlus}
        href={"/transactions/create"}
        label={"Nova Movimentação"}
        bgColor="bg-[#111] hover:bg-[#222]"
        textColor="text-white"
      />
    </header>
  );
}
