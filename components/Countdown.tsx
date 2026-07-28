"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const dataEvento = new Date("2026-09-12T17:00:00");

  const [tempo, setTempo] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const intervalo = setInterval(() => {
      const agora = new Date().getTime();
      const distancia = dataEvento.getTime() - agora;

      if (distancia <= 0) {
        clearInterval(intervalo);
        return;
      }

      setTempo({
        dias: Math.floor(distancia / (1000 * 60 * 60 * 24)),
        horas: Math.floor(
          (distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutos: Math.floor(
          (distancia % (1000 * 60 * 60)) / (1000 * 60)
        ),
        segundos: Math.floor(
          (distancia % (1000 * 60)) / 1000
        ),
      });
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const itens = [
    { valor: tempo.dias, texto: "Dias" },
    { valor: tempo.horas, texto: "Horas" },
    { valor: tempo.minutos, texto: "Minutos" },
    { valor: tempo.segundos, texto: "Segundos" },
  ];

  return (
    <section className="relative overflow-hidden rounded-[28px] sm:rounded-[35px] bg-gradient-to-br from-rose-500 via-pink-500 to-rose-400 px-5 py-8 sm:p-8 shadow-[0_25px_70px_rgba(244,63,94,.35)]">

      {/* Brilhos */}
      <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10">

        <div className="text-center">

          <p className="text-xs sm:text-sm uppercase tracking-[3px] sm:tracking-[5px] text-rose-100">
            Contagem Regressiva
          </p>

          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
            ⏳ Faltam apenas
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-white/40" />

        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4 sm:gap-4">

          {itens.map((item) => (
            <div
              key={item.texto}
              className="rounded-2xl sm:rounded-3xl border border-white/20 bg-white/15 p-4 sm:p-6 text-center backdrop-blur-md transition duration-300 hover:bg-white/20"
            >
              <p className="text-3xl sm:text-5xl font-extrabold text-white">
                {String(item.valor).padStart(2, "0")}
              </p>

              <div className="mx-auto my-3 sm:my-4 h-px w-10 bg-white/30" />

              <p className="text-[11px] sm:text-sm font-semibold uppercase tracking-[2px] sm:tracking-[3px] text-rose-100">
                {item.texto}
              </p>

            </div>
          ))}

        </div>

        <p className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-rose-100">
          Estamos contando os dias para celebrar esse momento com você. 💕
        </p>

      </div>

    </section>
  );
}