"use client";

import { useMemo, useState } from "react";
import { gifts } from "@/data/gifts";
import GiftCategory from "@/components/GiftCategory";

export default function GiftList() {
  const numero = "5511915815458";

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

    const mensagem = encodeURIComponent(
`Olá Geovanna e Samuel! 💕

Meu nome é ${nome}.

Gostaria de presentear vocês com:

🎁 ${presenteSelecionado}

Reservem esse presente para mim. ❤️`
    );

    window.open(
      `https://wa.me/${numero}?text=${mensagem}`,
      "_blank"
    );

    setModalAberto(false);
    setNome("");
  }

  return (
    <>
      <section className="mt-12">

        <div className="text-center">

          <span className="rounded-full bg-rose-100 px-5 py-2 text-sm font-semibold text-rose-500">
            🎁 Lista de Presentes
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-800">
            Escolha um presente
          </h2>

          <p className="mt-4 text-gray-500">
            Seu carinho fará parte do nosso novo lar. ❤️
          </p>

        </div>

        {/* Pesquisa */}
        <div className="mt-10">

          <input
            type="text"
            placeholder="🔍 Pesquisar presente..."
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            className="w-full rounded-2xl border border-rose-200 bg-white px-6 py-4 shadow-md outline-none transition focus:border-rose-500"
          />

        </div>

        {/* Contador */}
        <div className="mt-5 flex items-center justify-between rounded-2xl bg-rose-50 px-6 py-4">

          <span className="font-medium text-gray-600">
            {totalPresentes} presentes encontrados
          </span>

          <span className="font-semibold text-rose-500">
            ❤️ Obrigado pelo carinho
          </span>

        </div>

        {/* Categorias */}
        <div className="mt-8 space-y-8">

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

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-5 backdrop-blur-sm">

          <div className="w-full max-w-md rounded-[35px] bg-white p-8 shadow-2xl">

            <div className="text-center">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-rose-100 text-4xl">
                🎁
              </div>

              <h2 className="mt-5 text-3xl font-bold text-gray-800">
                Confirmar Presente
              </h2>

              <p className="mt-3 text-gray-500">
                Você escolheu
              </p>

              <h3 className="mt-2 text-2xl font-bold text-rose-500">
                {presenteSelecionado}
              </h3>

            </div>

            <input
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="mt-8 w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-rose-500"
            />

            <div className="mt-8 flex gap-4">

              <button
                onClick={() => setModalAberto(false)}
                className="flex-1 cursor-pointer rounded-2xl border border-gray-300 py-4 font-semibold transition hover:bg-gray-100"
              >
                Cancelar
              </button>

              <button
                onClick={confirmarEscolha}
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