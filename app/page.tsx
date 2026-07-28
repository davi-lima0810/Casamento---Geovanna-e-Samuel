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

      <FloatingHearts />

      {/* Efeitos de fundo */}
      <div className="absolute left-0 top-80 h-56 w-56 md:h-72 md:w-72 rounded-full bg-rose-200/20 blur-3xl" />
      <div className="absolute right-0 top-[900px] h-56 w-56 md:h-72 md:w-72 rounded-full bg-pink-200/20 blur-3xl" />

      <Hero />

      {/* Conteúdo */}
      <section className="relative z-20 mx-auto -mt-16 md:-mt-24 w-full max-w-3xl px-4 sm:px-6">

        {/* Card */}
        <div className="relative overflow-hidden rounded-[28px] md:rounded-[42px] border border-rose-100 bg-white p-6 sm:p-8 md:p-10 shadow-[0_30px_90px_rgba(0,0,0,.10)]">

          <div className="absolute right-0 top-0 h-32 w-32 md:h-40 md:w-40 rounded-full bg-rose-100/40 blur-3xl" />

          <div className="relative z-10">

            <span className="inline-flex rounded-full bg-rose-100 px-4 py-2 text-xs sm:text-sm font-semibold text-rose-500">
              ✨ Convite Especial
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-gray-800">
              Você é nosso convidado!
            </h2>

            <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400" />

            <p className="mt-7 text-base sm:text-lg leading-8 text-gray-600">
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

        <div className="mt-8 md:mt-10">
          <Countdown />
        </div>

        <div className="mt-8 md:mt-10">
          <EventInfo />
        </div>

        <div className="mt-8 md:mt-10">
          <ActionButtons />
        </div>

        <div className="mt-8 md:mt-10">
          <Quote />
        </div>

        <footer className="pb-14 pt-10 md:pb-16 md:pt-12 text-center">

          <div className="mx-auto mb-5 h-px w-40 bg-gradient-to-r from-transparent via-rose-300 to-transparent" />

          <p className="text-base md:text-lg font-medium text-gray-500">
            Feito com ❤️ para celebrar o amor.
          </p>

          <p className="mt-2 text-xs md:text-sm uppercase tracking-[2px] md:tracking-[3px] text-gray-400">
            Geovanna & Samuel • 2026
          </p>

        </footer>

      </section>

    </main>
  );
}