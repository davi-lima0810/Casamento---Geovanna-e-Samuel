"use client";

import { Gift, HeartHandshake, MapPin } from "lucide-react";

export default function ActionButtons() {
  const abrirMaps = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Rua+Domingos+Paiva,+152,+Brás,+São+Paulo",
      "_blank"
    );
  };

  const confirmarPresenca = () => {
    const numero = "5511999999999"; // Troque pelo número

    const mensagem = encodeURIComponent(
      "Olá! 💕 Gostaria de confirmar minha presença no Chá de Cozinha da Geovanna e do Samuel."
    );

    window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
  };

  const escolherPresente = () => {
    window.location.href = "/presentes";
  };

  return (
    <section className="mt-12">

      <div className="text-center">

        <span className="rounded-full bg-rose-100 px-5 py-2 text-sm font-semibold text-rose-500">
          💌 Participação
        </span>

        <h2 className="mt-5 text-4xl font-bold text-gray-800">
          Escolha como participar
        </h2>

        <p className="mt-4 text-gray-500">
          Ficaremos muito felizes com sua presença e carinho neste dia tão
          especial.
        </p>

      </div>

      <div className="mt-10 flex flex-col gap-5">

        {/* Confirmar */}
        <button
          onClick={confirmarPresenca}
          className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 p-6 text-white shadow-[0_20px_50px_rgba(244,63,94,.35)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(244,63,94,.45)] cursor-pointer"
        >
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />

          <div className="relative flex items-center gap-5">

            <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">
              <HeartHandshake size={34} />
            </div>

            <div className="text-left">

              <h3 className="text-xl font-bold">
                Confirmar Presença
              </h3>

              <p className="mt-1 text-rose-100">
                Avise que você estará conosco ❤️
              </p>

            </div>

          </div>

        </button>

        {/* Presentes */}
        <button
          onClick={escolherPresente}
          className="group rounded-3xl border border-rose-200 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-rose-400 hover:shadow-2xl cursor-pointer"
        >
          <div className="flex items-center gap-5">

            <div className="rounded-2xl bg-rose-100 p-4 text-rose-500 transition group-hover:scale-110">
              <Gift size={34} />
            </div>

            <div className="text-left">

              <h3 className="text-xl font-bold text-gray-800">
                Escolher Presente
              </h3>

              <p className="mt-1 text-gray-500">
                Veja nossa lista de presentes 🎁
              </p>

            </div>

          </div>

        </button>

        {/* Maps */}
        <button
          onClick={abrirMaps}
          className="group rounded-3xl border border-sky-200 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-sky-400 hover:shadow-2xl cursor-pointer"
        >
          <div className="flex items-center gap-5">

            <div className="rounded-2xl bg-sky-100 p-4 text-sky-600 transition group-hover:scale-110">
              <MapPin size={34} />
            </div>

            <div className="text-left">

              <h3 className="text-xl font-bold text-gray-800">
                Ver Localização
              </h3>

              <p className="mt-1 text-gray-500">
                Abra a rota diretamente no Google Maps 📍
              </p>

            </div>

          </div>

        </button>

      </div>

    </section>
  );
}