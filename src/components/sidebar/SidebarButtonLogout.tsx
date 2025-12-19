import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export function SidebarButtonLogout() {
  const router = useRouter();

  async function logout() {
    await signOut({
      redirect: false,
    });

    router.replace("/login");
  }

  return (
    <button onClick={() => logout()} className="p-4 hover:text-[#0F172A] transition-all duration-300 ease-in-out cursor-pointer">Sair</button>
  );
}
