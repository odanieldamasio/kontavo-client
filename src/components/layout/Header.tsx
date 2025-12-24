"use client";

import Image from "next/image";
import { HiLogout, HiPlus } from "react-icons/hi";
import Button from "../ui/Button";
import Link from "next/link";
import { SidebarButtonLogout } from '../sidebar/SidebarButtonLogout';

type HeaderProps = {
  onAddClick?: () => void;
};

export default function Header({ onAddClick }: HeaderProps) {
  return (
    <header className="w-full px-6 py-2 flex items-center justify-between bg-white border-b border-[#F1F1F1] mb-6">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/imgs/logo-black.svg"
          alt="Kontavo Brand"
          className="!w-[120px] !h-auto !max-w-none inline-block"
        />
      </div>

      {/* Botão de adicionar */}
      <ul className="flex items-center gap-6 text-sm font-semibold text-[#BDBDBD]">
        <li>
          <Link href="/dashboard" className="p-4 hover:text-[#0F172A] transition-all duration-300 ease-in-out">Dashboard</Link>
        </li>
        <li>
          <Link href="/transactions" className="p-4 hover:text-[#0F172A] transition-all duration-300 ease-in-out">Movimentações</Link>
        </li>
        <li>
          <SidebarButtonLogout />
        </li>
      </ul>

      {/* <Button
        icon={HiPlus}
        href={"/transactions/create"}
        label={"Nova Movimentação"}
        bgColor="bg-[#111] hover:bg-[#222]"
        textColor="text-white"
      /> */}
    </header>
  );
}
