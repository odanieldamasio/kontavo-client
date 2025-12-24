"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { HiEye, HiEyeOff } from "react-icons/hi";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [status, router]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    global?: string;
  }>({});

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const newErrors: typeof errors = {};
    if (!email) newErrors.email = "O e-mail é obrigatório";
    if (!password) newErrors.password = "A senha é obrigatória";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (response?.ok) {
      router.push("/dashboard");
    } else {
      setErrors({ global: "Usuário ou senha inválidos" });
      setLoading(false);
    }
  }

  if (status === "loading") {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gray-50">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-[#0a1033] rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center font-sans bg-[#FCFCFC] px-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo no mobile */}
        <div className="text-center mb-8">
          <img
            src="/imgs/logo-black.svg"
            alt="Kontavo Brand"
            className="!w-[120px] !h-auto !max-w-none inline-block"
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-2 text-center hidden">
            <h2 className="text-3xl text-[#222222] font-semibold">
              Bem-vindo de volta
            </h2>
            <p className="text-gray-500">
              Insira seu e-mail e senha para acessar sua conta.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nome */}
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Nome
              </label>
              <input
                id="email"
                type="email"
                placeholder="exemplo@empresa.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full h-12 px-4 border rounded-lg text-base bg-white focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-[#F1F1F1] focus:ring-[#F0F0F0]"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* E-mail */}
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="exemplo@empresa.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full h-12 px-4 border rounded-lg text-base bg-white focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-[#F1F1F1] focus:ring-[#F0F0F0]"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Senha */}
            <div className="space-y-1">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Senha
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full h-12 px-4 pr-10 border rounded-lg text-base bg-white focus:outline-none focus:ring-2 ${
                    errors.password
                      ? "border-red-500 focus:ring-red-500"
                      : "border-[#F1F1F1] focus:ring-[#F0F0F0]"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <HiEyeOff size={18} /> : <HiEye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Erro global */}
            {errors.global && (
              <p className="text-red-600 text-sm">{errors.global}</p>
            )}

            <div className="flex hidden items-center justify-between text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <span>Lembrar-me</span>
              </label>
              <a href="#" className="hover:underline text-[#0a1033]">
                Esqueceu a senha?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading || !email || !password}
              className="w-full h-12 bg-[#0F172A] text-white text-base font-medium rounded-lg 
                  hover:opacity-90 transition flex items-center justify-center 
                  disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                "Entrar"
              )}
            </button>
          </form>

          <div className="space-y-2 text-center">
            <p className="text-[#222222] opacity-70">
              Já possúi uma conta?{" "}
              <a href="/login" className="font-medium text-[#0F172A]">
               Faça login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
