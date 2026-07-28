export default function EventInfo() {
  const infos = [
    {
      titulo: "Data",
      valor: "12 de Setembro de 2026",
      icone: "📅",
    },
    {
      titulo: "Horário",
      valor: "17:00",
      icone: "🕔",
    },
    {
      titulo: "Local",
      valor: "Rua Domingos Paiva, 152",
      descricao: "Brás • São Paulo/SP",
      icone: "📍",
    },
  ];

  return (
    <section className="relative mt-10 overflow-hidden rounded-[28px] sm:rounded-[35px] border border-rose-100 bg-white px-5 py-8 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,.08)]">

      {/* Brilhos */}
      <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-rose-100 blur-3xl opacity-60" />
      <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-pink-100 blur-3xl opacity-60" />

      <div className="relative z-10">

        <div className="text-center">

          <span className="rounded-full bg-rose-100 px-4 py-2 text-xs sm:text-sm font-semibold text-rose-500">
            📍 Informações
          </span>

          <h2 className="mt-5 text-2xl sm:text-4xl font-bold text-gray-800">
            Tudo preparado para receber você
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-500 leading-7">
            Anote a data, o horário e o local.
            Esperamos por você para celebrar esse momento tão especial.
          </p>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-rose-400 to-pink-400" />

        </div>

        <div className="mt-8 sm:mt-10 grid gap-5">

          {infos.map((info) => (
            <div
              key={info.titulo}
              className="group rounded-2xl sm:rounded-3xl border border-rose-100 bg-gradient-to-r from-white via-rose-50 to-pink-50 p-5 sm:p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 sm:h-20 sm:w-20 items-center justify-center rounded-2xl sm:rounded-3xl bg-gradient-to-br from-rose-500 to-pink-500 text-2xl sm:text-4xl text-white shadow-xl transition duration-300 group-hover:scale-110">
                  {info.icone}
                </div>

                <div className="flex-1 min-w-0">

                  <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[2px] sm:tracking-[4px] text-rose-400">
                    {info.titulo}
                  </p>

                  <h3 className="mt-1 text-lg sm:text-2xl font-bold text-gray-800 break-words">
                    {info.valor}
                  </h3>

                  {info.descricao && (
                    <p className="mt-1 text-sm sm:text-base text-gray-500">
                      {info.descricao}
                    </p>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>

        <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-rose-500 to-pink-500 px-5 py-6 sm:p-7 text-center text-white shadow-xl">

          <p className="text-base sm:text-lg font-semibold leading-7">
            💕 Estamos preparando cada detalhe com muito carinho para receber você.
          </p>

        </div>

      </div>

    </section>
  );
}