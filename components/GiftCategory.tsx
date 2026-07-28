"use client";

import { useMemo, useState } from "react";
import GiftCard from "./GiftCard";

type Presente = {
  id: number;
  nome: string;
  reservado: boolean;
};

type Props = {
  categoria: string;
  presentes: Presente[];
  onEscolher: (nome: string) => void;
};

export default function GiftCategory({
  categoria,
  presentes,
  onEscolher,
}: Props) {
  const [aberto, setAberto] = useState(true);

  const escolhidos = useMemo(
    () => presentes.filter((p) => p.reservado).length,
    [presentes]
  );

  const emoji = categoria.split(" ")[0];
  const titulo = categoria.replace(/^[^\s]+\s/, "");

  return (
    <div className="overflow-hidden rounded-[34px] border border-rose-100 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">
      {/* Cabeçalho */}
      <button
        onClick={() => setAberto(!aberto)}
        className="w-full cursor-pointer bg-gradient-to-r from-rose-50 via-pink-50 to-rose-50 px-8 py-7 transition hover:from-rose-100 hover:to-pink-100"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 text-3xl text-white shadow-lg">
              {emoji}
            </div>

            <div className="text-left">
              <h2 className="text-2xl font-bold text-gray-800">
                {titulo}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {presentes.length} presentes disponíveis
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {escolhidos === presentes.length ? (
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600">
                ✅ Completo
              </span>
            ) : (
              <span className="rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-600">
                ❤️ {escolhidos} escolhidos
              </span>
            )}

            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-rose-500 shadow-md transition-transform duration-300 ${
                aberto ? "rotate-180" : ""
              }`}
            >
              ⌃
            </div>
          </div>
        </div>
      </button>

      {/* Lista */}
      {aberto && (
        <div className="bg-white p-6">
          <div className="space-y-5">
            {presentes.map((presente) => (
              <GiftCard
                key={presente.id}
                presente={presente}
                onEscolher={onEscolher}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}