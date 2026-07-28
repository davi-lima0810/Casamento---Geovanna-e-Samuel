type Gift = {
  id: number;
  nome: string;
  reservado: boolean;
};

type GiftCardProps = {
  presente: Gift;
  onEscolher: (nome: string) => void;
};

const icones: Record<string, string> = {
  // 🍳 Cozinha
  "Afiador de faca": "🔪",
  "Assadeiras antiaderentes": "🍞",
  "Bacias": "🪣",
  "Batedor manual (Fouet)": "🥣",
  "Coadores": "🍵",
  "Colheres de medida": "🥄",
  "Colheres de pau": "🥄",
  "Colheres para cozinhar/servir de silicone": "🥄",
  "Concha para sorvete": "🍨",
  "Copo medidor": "🥛",
  "Descascador de legumes": "🥕",
  "Escorredor de arroz": "🍚",
  "Escorredor de louça e talheres": "🍽️",
  "Escorredor de macarrão": "🍝",
  "Espremedor de alho": "🧄",
  "Espremedor de limão": "🍋",
  "Faca para pão": "🍞",
  "Faqueiro": "🍴",
  "Forma para pizza": "🍕",
  "Formas para bolo": "🎂",
  "Formas para torta/pudim": "🥧",
  "Frigideira": "🍳",
  "Leiteira": "🥛",
  "Luva térmica": "🧤",
  "Manteigueira": "🧈",
  "Martelo de carne": "🥩",
  "Pegador de massa": "🍝",
  "Pegador de salada": "🥗",
  "Peneira": "🥣",
  "Pirex": "🍲",
  "Moedor de pimenta": "🧂",
  "Porta frios": "🧀",
  "Porta temperos": "🧂",
  "Potes para microondas e freezer": "🥡",
  "Potes plásticos multiuso": "📦",
  "Ralador": "🧀",
  "Rolo para abrir massa": "🥖",
  "Saca rolhas": "🍷",
  "Sanduicheira": "🥪",
  "Suporte para filtro de café": "☕",
  "Tábua de corte": "🪵",
  "Tesoura de cozinha": "✂️",
  "Tigela": "🥣",
  "Torradeira": "🍞",
  "Travessa/Refratário": "🍲",

  // 🍽️ Mesa
  "Açucareiro": "🍚",
  "Bandeja para café da manhã": "🍽️",
  "Canecas": "☕",
  "Copos": "🥤",
  "Jarra para água": "🫗",
  "Jarra para água e suco": "🫗",
  "Jogo de xícaras": "🍵",
  "Jogos americanos": "🍽️",
  "Porta copos": "🥃",
  "Porta guardanapo": "🧻",
  "Pratos rasos": "🍽️",
  "Pratos fundos": "🥣",
  "Pratos de sobremesa": "🍰",
  "Saleiro, e paliteiro": "🧂",
  "Talheres": "🍴",
  "Toalha de mesa": "🪡",
  "Descansos de panela": "🍲",
  "Garrafas térmicas (café e chá)": "🫖",
  "Queijeira": "🧀",
  "Bule de café": "☕",
  "Chaleira": "🫖",
  "Taças": "🍷",

  // 🧹 Limpeza
  "Avental": "👨‍🍳",
  "Capacho": "🚪",
  "Ferro de passar roupa": "🧺",
  "Lixeira": "🗑️",
  "Lixeiras para pia e chão": "🗑️",
  "Puxa-saco": "🛍️",
  "Rodinho de pia": "🧽",
  "Suporte de detergente e esponja": "🧴",
  "Tábua de passar roupa": "👕",
  "Tapete": "🪟",
  "Vassoura": "🧹",
  "Rodo": "🧹",
  "Pá": "🪣",

  // 🛁 Banheiro
  "Conjunto de toalhas": "🚿",
  "Tapete de banheiro": "🛁",
  "Dispensadores de sabonete líquido": "🧴",
  "Bandeja ou cesto para organizar produtos de higiene pessoal": "🧺",
  "Espelho de aumento para maquiagem ou barbear": "🪞",
  "Organizadores de gavetas ou prateleiras para guardar itens de banheiro": "🗂️",
  "Conjunto de acessórios de banheiro (porta escova de dentes, porta sabonete líquido, etc.)": "🪥",
  "Escova de vaso sanitário e suporte": "🚽",
  "Conjunto de aromatizadores de ambiente": "🌸",
  "Cesto de roupa suja": "🧺",
};

export default function GiftCard({
  presente,
  onEscolher,
}: GiftCardProps) {
  const icone = icones[presente.nome] || "🎁";

  return (
    <div className="group rounded-2xl sm:rounded-3xl border border-rose-100 bg-white p-4 sm:p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        {/* Lado esquerdo */}
        <div className="flex items-center gap-4 min-w-0 flex-1">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 text-3xl transition duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
            {icone}
          </div>

          <div className="min-w-0 flex-1">

            <h3 className="break-words text-lg font-bold text-gray-800 sm:text-xl">
              {presente.nome}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Presente para o novo lar
            </p>

          </div>

        </div>

        {/* Lado direito */}
        {presente.reservado ? (
          <div className="w-full sm:w-auto rounded-full bg-emerald-100 px-5 py-3 text-center font-semibold text-emerald-700 shadow">
            ✅ Escolhido
          </div>
        ) : (
          <button
            onClick={() => onEscolher(presente.nome)}
            className="w-full sm:w-auto cursor-pointer rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Escolher
          </button>
        )}

      </div>

    </div>
  );
}