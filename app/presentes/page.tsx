import Link from "next/link";
import GiftList from "@/components/GiftList";

export default function PresentesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-white py-10 px-5">
      <div className="mx-auto max-w-4xl">

        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-rose-500 font-semibold hover:text-rose-600 transition"
        >
          ← Voltar ao convite
        </Link>

        <div className="rounded-[35px] border border-rose-100 bg-white p-10 shadow-2xl">

          <h1 className="text-center text-5xl font-bold text-rose-500">
            🎁 Lista de Presentes
          </h1>

          <p className="mt-4 text-center text-gray-500">
            Escolha um presente para nos ajudar a construir nosso novo lar.
            Cada carinho fará parte da nossa história. 💕
          </p>

          <GiftList />

        </div>
      </div>
    </main>
  );
}