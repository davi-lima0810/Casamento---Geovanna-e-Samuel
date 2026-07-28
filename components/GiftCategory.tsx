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
    <div className="overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-xl transition hover:shadow-2xl">

      <button
        onClick={() => setAberto(!aberto)}
        className="w-full cursor-pointer bg-gradient-to-r from-rose-50 via-pink-50 to-rose-50 p-5 sm:p-7"
      >
        <div className="flex items-start justify-between gap-4">

          {/* ESQUERDA */}
          <div className="flex flex-1 items-start gap-4 min-w-0">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 text-2xl text-white shadow-lg sm:h-16 sm:w-16 sm:text-3xl">
              {emoji}
            </div>

            <div className="min-w-0 text-left">

              <h2 className="break-words text-2xl sm:text-3xl font-bold text-gray-800">
                {titulo}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {presentes.length} presentes disponíveis
              </p>

              <div className="mt-3">

                {escolhidos === presentes.length ? (
                  <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs sm:text-sm font-semibold text-emerald-600">
                    ✅ Completo
                  </span>
                ) : (
                  <span className="inline-flex rounded-full bg-rose-100 px-3 py-1 text-xs sm:text-sm font-semibold text-rose-600">
                    ❤️ {escolhidos} escolhidos
                  </span>
                )}

              </div>

            </div>

          </div>

          {/* SETA */}
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-lg text-rose-500 shadow-md transition-transform duration-300 sm:h-12 sm:w-12 sm:text-xl ${
              aberto ? "rotate-180" : ""
            }`}
          >
            ⌃
          </div>

        </div>

      </button>

      {aberto && (
        <div className="bg-white p-4 sm:p-6">
          <div className="space-y-4 sm:space-y-5">
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