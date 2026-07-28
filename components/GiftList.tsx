"use client";

import { useMemo, useState } from "react";
import { gifts } from "@/data/gifts";
import GiftCategory from "@/components/GiftCategory";

export default function GiftList() {
  const numero = "5511984916825";

  const [modalAberto, setModalAberto] = useState(false);
  const [nome, setNome] = useState("");
  const [presenteSelecionado, setPresenteSelecionado] = useState("");
  const [pesquisa, setPesquisa] = useState("");

  const categoriasFiltradas = useMemo(() => {
    return gifts
      .map((categoria) => ({
        ...categoria,
        presentes: categoria.presentes.filter((presente) =>
          presente.nome.toLowerCase().includes(pesquisa.toLowerCase())
        ),
      }))
      .filter((categoria) => categoria.presentes.length > 0);
  }, [pesquisa]);

  const totalPresentes = categoriasFiltradas.reduce(
    (total, categoria) => total + categoria.presentes.length,
    0
  );

  function abrirModal(nomePresente: string) {
    setPresenteSelecionado(nomePresente);
    setModalAberto(true);
  }

  function confirmarEscolha() {
    if (!nome.trim()) {
      alert("Digite seu nome.");
      return;
    }

    const mensagem = encodeURIComponent(`Olá Geovanna e Samuel! 💕

Meu nome é ${nome}.

Gostaria de presentear vocês com:

🎁 ${presenteSelecionado}

Reservem esse presente para mim. ❤️`);

    window.open(
      `https://wa.me/${numero}?text=${mensagem}`,
      "_blank"
    );

    setModalAberto(false);
    setNome("");
  }

  return (
    <>
      <section className="mt-10 sm:mt-12">

        {/* Cabeçalho */}
        <div className="text-center">

          <span className="inline-flex rounded-full bg-rose-100 px-4 py-2 text-xs sm:text-sm font-semibold text-rose-500">
            🎁 Lista de Presentes
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-gray-800">
            Escolha um presente
          </h2>

          <p className="mx-auto mt-4 max-w-xl px-2 text-sm sm:text-base leading-7 text-gray-500">
            Seu carinho fará parte do nosso novo lar. ❤️
          </p>

        </div>

        {/* Pesquisa */}
        <div className="mt-8 sm:mt-10">

          <input
            type="text"
            placeholder="🔍 Pesquisar presente..."
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            className="w-full rounded-2xl border border-rose-200 bg-white px-5 py-3 text-base shadow-md outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
          />

        </div>

        {/* Contador */}
        <div className="mt-5 rounded-2xl bg-rose-50 p-5 shadow-sm">

          <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between">

            <span className="text-lg font-semibold text-gray-700">
              {totalPresentes} presentes encontrados
            </span>

            <span className="font-semibold text-rose-500">
              ❤️ Obrigado pelo carinho
            </span>

          </div>

        </div>

        {/* Categorias */}
        <div className="mt-8 space-y-6 sm:space-y-8">

          {categoriasFiltradas.map((categoria) => (

            <GiftCategory
              key={categoria.categoria}
              categoria={categoria.categoria}
              presentes={categoria.presentes}
              onEscolher={abrirModal}
            />

          ))}

        </div>

      </section>

      {/* Modal */}
      {modalAberto && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">

          <div className="w-full max-w-md rounded-3xl bg-white p-6 sm:p-8 shadow-2xl animate-[fadeIn_.25s_ease]">

            <div className="text-center">

              <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-rose-100 text-3xl sm:text-4xl">
                🎁
              </div>

              <h2 className="mt-5 text-2xl sm:text-3xl font-bold text-gray-800">
                Confirmar Presente
              </h2>

              <p className="mt-3 text-sm sm:text-base text-gray-500">
                Você escolheu
              </p>

              <h3 className="mt-2 break-words text-xl sm:text-2xl font-bold text-rose-500">
                {presenteSelecionado}
              </h3>

            </div>

            <input
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="mt-8 w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
            />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <button
                onClick={() => setModalAberto(false)}
                className="w-full rounded-2xl border border-gray-300 py-4 font-semibold transition hover:bg-gray-100"
              >
                Cancelar
              </button>

              <button
                onClick={confirmarEscolha}
                className="w-full rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 py-4 font-semibold text-white shadow-lg transition hover:scale-[1.02]"
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