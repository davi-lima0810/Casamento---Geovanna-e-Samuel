"use client";

import { Gift, HeartHandshake, MapPin } from "lucide-react";
import { useState } from "react";

export default function ActionButtons() {
  const [modalAberto, setModalAberto] = useState(false);
  const [nome, setNome] = useState("");
  const [acompanhantes, setAcompanhantes] = useState("0");

  const abrirMaps = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Rua+Domingos+Paiva,+152,+Brás,+São+Paulo",
      "_blank"
    );
  };

  const confirmarPresenca = () => {
    if (!nome.trim()) {
      alert("Digite seu nome.");
      return;
    }

    const numero = "5511915815458";

    const mensagem = encodeURIComponent(
`Olá Geovanna e Samuel! 💕

Gostaria de confirmar minha presença no Chá de Cozinha. ❤️

👤 Nome:
${nome}

👥 Acompanhantes:
${acompanhantes}

Nos vemos em breve! 🥰`
    );

    window.open(
      `https://wa.me/${numero}?text=${mensagem}`,
      "_blank"
    );

    setModalAberto(false);
    setNome("");
    setAcompanhantes("0");
  };

  const escolherPresente = () => {
    window.location.href = "/presentes";
  };

  return (
    <>
      <section className="mt-10 sm:mt-12">

        <div className="text-center">

          <span className="rounded-full bg-rose-100 px-4 py-2 text-xs sm:text-sm font-semibold text-rose-500">
            💌 Participação
          </span>

          <h2 className="mt-5 text-2xl sm:text-4xl font-bold text-gray-800">
            Escolha como participar
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-500 leading-7">
            Ficaremos muito felizes com sua presença e carinho neste dia tão
            especial.
          </p>

        </div>

        <div className="mt-8 sm:mt-10 flex flex-col gap-5">

          {/* Confirmar Presença */}
          <button
            onClick={() => setModalAberto(true)}
            className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 p-5 sm:p-6 text-white shadow-[0_20px_50px_rgba(244,63,94,.35)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(244,63,94,.45)] cursor-pointer"
          >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />

            <div className="relative flex items-center gap-4">

              <div className="rounded-2xl bg-white/20 p-3 sm:p-4 backdrop-blur">
                <HeartHandshake size={28} className="sm:h-[34px] sm:w-[34px]" />
              </div>

              <div className="text-left">

                <h3 className="text-lg font-bold sm:text-xl">
                  Confirmar Presença
                </h3>

                <p className="mt-1 text-sm text-rose-100 sm:text-base">
                  Avise que você estará conosco ❤️
                </p>

              </div>

            </div>

          </button>

          {/* Lista de Presentes */}
          <button
            onClick={escolherPresente}
            className="group rounded-2xl sm:rounded-3xl border border-rose-200 bg-white p-5 sm:p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-rose-400 hover:shadow-2xl cursor-pointer"
          >
            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-rose-100 p-3 sm:p-4 text-rose-500 transition group-hover:scale-110">
                <Gift size={28} className="sm:h-[34px] sm:w-[34px]" />
              </div>

              <div className="text-left">

                <h3 className="text-lg font-bold text-gray-800 sm:text-xl">
                  Escolher Presente
                </h3>

                <p className="mt-1 text-sm text-gray-500 sm:text-base">
                  Veja nossa lista de presentes 🎁
                </p>

              </div>

            </div>

          </button>

          {/* Google Maps */}
          <button
            onClick={abrirMaps}
            className="group rounded-2xl sm:rounded-3xl border border-sky-200 bg-white p-5 sm:p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-sky-400 hover:shadow-2xl cursor-pointer"
          >
            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-sky-100 p-3 sm:p-4 text-sky-600 transition group-hover:scale-110">
                <MapPin size={28} className="sm:h-[34px] sm:w-[34px]" />
              </div>

              <div className="text-left">

                <h3 className="text-lg font-bold text-gray-800 sm:text-xl">
                  Ver Localização
                </h3>

                <p className="mt-1 text-sm text-gray-500 sm:text-base">
                  Abra a rota diretamente no Google Maps 📍
                </p>

              </div>

            </div>

          </button>

        </div>

      </section>
            {/* Modal */}
      {modalAberto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-5 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[35px] bg-white p-8 shadow-2xl">

            <div className="text-center">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-rose-100 text-4xl">
                💕
              </div>

              <h2 className="mt-5 text-3xl font-bold text-gray-800">
                Confirmar Presença
              </h2>

              <p className="mt-3 text-gray-500">
                Preencha seus dados para confirmar.
              </p>

            </div>

            <div className="mt-8 space-y-5">

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-600">
                  Seu nome
                </label>

                <input
                  type="text"
                  placeholder="Digite seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-rose-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-600">
                  Quantos acompanhantes?
                </label>

                <select
                  value={acompanhantes}
                  onChange={(e) => setAcompanhantes(e.target.value)}
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-rose-500"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>

            </div>

            <div className="mt-8 flex gap-4">

              <button
                onClick={() => {
                  setModalAberto(false);
                  setNome("");
                  setAcompanhantes("0");
                }}
                className="flex-1 cursor-pointer rounded-2xl border border-gray-300 py-4 font-semibold transition hover:bg-gray-100"
              >
                Cancelar
              </button>

              <button
                onClick={confirmarPresenca}
                className="flex-1 cursor-pointer rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
              >
                Confirmar
              </button>

            </div>

          </div>
        </div>
      )}
    </>
  );
}