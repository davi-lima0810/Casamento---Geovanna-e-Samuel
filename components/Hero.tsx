import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[680px] w-full overflow-hidden">

      {/* FOTO */}
      <Image
        src="/images/Casal - foto.jpg.jpeg"
        alt="Geovanna e Samuel"
        fill
        priority
        className="object-cover object-center scale-110"
      />

      {/* ESCURECIMENTO */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70" />

      {/* BRILHO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_60%)]" />

      {/* CORAÇÕES */}
      <div className="absolute inset-0 overflow-hidden">

        <span className="absolute bottom-8 left-[12%] animate-bounce text-white/40 text-xl">
          🤍
        </span>

        <span className="absolute bottom-24 right-[18%] animate-pulse text-white/30 text-lg">
          🤍
        </span>

        <span className="absolute bottom-40 left-[25%] animate-pulse text-white/20 text-sm">
          🤍
        </span>

      </div>

      {/* TEXTO */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 px-8 text-center text-white">

        <span className="rounded-full border border-white/30 bg-white/10 px-6 py-2 backdrop-blur-md uppercase tracking-[7px] text-xs font-semibold shadow-lg">
          Chá de Cozinha
        </span>

        <h1 className="mt-8 text-6xl md:text-7xl font-black drop-shadow-2xl animate-[fadeIn_1.5s_ease]">
          Geovanna
        </h1>

        <p className="my-3 text-5xl text-rose-200">&</p>

        <h1 className="text-6xl md:text-7xl font-black drop-shadow-2xl animate-[fadeIn_2s_ease]">
          Samuel
        </h1>

        <div className="mt-8 h-px w-32 bg-white/40" />

        <p className="mt-6 tracking-[4px] text-lg uppercase">
          12 de Setembro de 2026
        </p>

        <p className="mt-2 text-white/80">
          São Paulo • SP
        </p>

        {/* SETA */}
        <div className="mt-14 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

      </div>

      {/* ONDA */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg
          viewBox="0 0 1440 170"
          className="w-full h-[140px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,96L60,101.3C120,107,240,117,360,112C480,107,600,85,720,74.7C840,64,960,64,1080,80C1200,96,1320,128,1380,144L1440,160L1440,170L1380,170C1320,170,1200,170,1080,170C960,170,840,170,720,170C600,170,480,170,360,170C240,170,120,170,60,170L0,170Z"
          />
        </svg>
      </div>

    </section>
  );
}