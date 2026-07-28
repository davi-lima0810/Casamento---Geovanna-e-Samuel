"use client";

import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import EventInfo from "@/components/EventInfo";
import ActionButtons from "@/components/ActionButtons";
import Quote from "@/components/Quote";
import FloatingHearts from "@/components/FloatingHearts";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-rose-50 via-white to-pink-50">

      {/* Corações flutuando */}
      <FloatingHearts />

      {/* Detalhes decorativos */}
      <div className="absolute left-0 top-80 h-72 w-72 rounded-full bg-rose-200/20 blur-3xl" />
      <div className="absolute right-0 top-[900px] h-72 w-72 rounded-full bg-pink-200/20 blur-3xl" />

      {/* Hero */}
      <Hero />

      {/* Conteúdo */}
      <section className="relative z-20 mx-auto -mt-24 max-w-2xl px-5">

        {/* Card Principal */}
        <div className="relative overflow-hidden rounded-[42px] border border-rose-100 bg-white p-10 shadow-[0_30px_90px_rgba(0,0,0,.10)]">

          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-rose-100/40 blur-3xl" />

          <div className="relative z-10">

            <span className="inline-flex rounded-full bg-rose-100 px-5 py-2 text-sm font-semibold text-rose-500">
              ✨ Convite Especial
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-800">
              Você é nosso convidado!
            </h2>

            <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400" />

            <p className="mt-8 text-lg leading-9 text-gray-600">
              Com muita alegria convidamos você para celebrar um dos momentos
              mais importantes das nossas vidas.
              <br />
              <br />
              Sua presença será um presente para nós e tornará este dia ainda
              mais inesquecível. Esperamos viver essa felicidade ao seu lado.
              💕
            </p>

          </div>

        </div>

        <div className="mt-10">
          <Countdown />
        </div>

        <div className="mt-10">
          <EventInfo />
        </div>

        <div className="mt-10">
          <ActionButtons />
        </div>

        <div className="mt-10">
          <Quote />
        </div>

        <footer className="pb-16 pt-12 text-center">

          <div className="mx-auto mb-6 h-px w-44 bg-gradient-to-r from-transparent via-rose-300 to-transparent" />

          <p className="text-lg font-medium text-gray-500">
            Feito com ❤️ para celebrar o amor.
          </p>

          <p className="mt-2 text-sm uppercase tracking-[3px] text-gray-400">
            Geovanna & Samuel • 2026
          </p>

        </footer>

      </section>

    </main>
  );
}