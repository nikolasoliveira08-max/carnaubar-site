// ---------------------------------------------------------------------------
// CONFIGURAÇÃO CENTRAL DO SITE — CARNAÚBAR BAR E RESTAURANTE
// ---------------------------------------------------------------------------
// Edite este arquivo para atualizar textos, links, imagens e informações
// comerciais em um único lugar. Nenhum componente deve ter texto, telefone,
// endereço ou link "hardcoded" fora daqui.
//
// IMAGENS: enquanto o campo de uma imagem estiver como `null`, o site exibe
// um placeholder identificado no lugar dela. Para publicar uma foto real,
// coloque o arquivo em /public na rota indicada no comentário e troque o
// valor de `null` para essa mesma rota (string).
// ---------------------------------------------------------------------------

export const business = {
  name: "Carnaúbar",
  fullName: "Carnaúbar Bar e Restaurante",
  phoneDisplay: "(11) 91950-1997",
  phoneE164: "5511919501997",
  address: {
    street: "Rua Baronesa de Bela Vista, 750",
    neighborhood: "Vila Congonhas",
    city: "São Paulo",
    state: "SP",
    zip: "04612-002",
    full: "Rua Baronesa de Bela Vista, 750 — Vila Congonhas, São Paulo/SP, 04612-002",
  },
  instagram: {
    handle: "@carnaubar_",
    url: "https://www.instagram.com/carnaubar_/",
    followers: "30,3 mil",
  },
  tourVirtualUrl: "https://passeiovirtual360.github.io/carnaubar/",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=R.+Baronesa+de+Bela+Vista%2C+750+-+Vila+Congonhas%2C+S%C3%A3o+Paulo+-+SP%2C+04612-002",
  // Dado público (Google) — faixa percebida pelo cliente, não é tabela de preços.
  perceivedPriceRange: "R$ 40–160 por pessoa",
  // TODO: confirmar e preencher o horário completo por dia da semana.
  // O único dado confirmado publicamente hoje é o horário de fechamento.
  hours: {
    confirmed: "Fecha à 00h",
    weekly: [
      { day: "Segunda a sexta", value: "A confirmar" },
      { day: "Sábado", value: "A confirmar" },
      { day: "Domingo", value: "A confirmar" },
    ],
  },
};

function waLink(message) {
  return `https://wa.me/${business.phoneE164}?text=${encodeURIComponent(message)}`;
}

// Mensagens de WhatsApp específicas por contexto/CTA.
export const whatsapp = {
  generic: waLink("Olá! Vim pelo site e gostaria de mais informações sobre o Carnaúbar."),
  reservar: waLink("Olá! Gostaria de reservar uma mesa no Carnaúbar."),
  almoco: waLink("Olá! Gostaria de fazer uma reserva para o almoço."),
  happyHour: waLink("Olá! Gostaria de reservar para o Happy Hour."),
  aniversario: waLink("Olá! Quero saber mais sobre comemorar meu aniversário no Carnaúbar."),
  eventos: waLink("Olá! Gostaria de informações para realizar um evento no Carnaúbar."),
};

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Almoço", href: "#almoco" },
  { label: "Happy Hour", href: "#happy-hour" },
  { label: "Aniversários", href: "#aniversario" },
  { label: "Eventos", href: "#eventos" },
  { label: "Espaço", href: "#espaco" },
  { label: "Tour 360°", href: "#tour-virtual" },
  { label: "Gastronomia", href: "#gastronomia" },
  { label: "Drinks", href: "#drinks" },
  { label: "Contato", href: "#contato" },
];

// ---------------------------------------------------------------------------
// IMAGENS
// Troque `null` pelo caminho do arquivo (ex.: "/images/hero.jpg") assim que
// a foto real estiver disponível. Coloque o arquivo físico em /public na
// mesma rota.
// ---------------------------------------------------------------------------
export const images = {
  hero: "/images/hero.jpg",
  experiencias: {
    almoco: "/images/experiencias/almoco.jpg",
    happyHour: "/images/experiencias/happy-hour.jpg",
    aniversario: "/images/experiencias/aniversario.jpg",
    eventos: "/images/experiencias/eventos.jpg",
  },
  almocoComposicao: [
    "/images/almoco/prato-01.jpg",
    "/images/almoco/prato-02.jpg",
    "/images/almoco/prato-03.jpg",
  ],
  happyHour: "/images/happy-hour/destaque.jpg",
  aniversario: "/images/aniversario/destaque.jpg",
  eventos: "/images/eventos/destaque.jpg",
  espacos: {
    andar1: {
      principal: "/images/andar-1.jpg",
    },
    andar2: {
      principal: "/images/andar-2.jpg",
    },
  },
  tourVirtualPreview: null, // /images/tour-virtual/preview.jpg (frame estático do tour, opcional)
  ctaFinal: "/images/cta-final.jpg",
};

// ---------------------------------------------------------------------------
// GASTRONOMIA — apenas pratos confirmados publicamente (cardápio/posts
// oficiais). Onde não há confirmação, o card fica como placeholder.
// ---------------------------------------------------------------------------
export const comidas = [
  {
    id: "massa-milanesa",
    nome: "Massa à Milanesa",
    descricao: "Empanada e generosa, acompanha arroz de coco ou branco, batata frita e vinagrete. Serve até 2 pessoas.",
    imagem: "/images/comidas/comida-01.jpg",
    confirmado: true,
  },
  {
    id: "cupim-mandioca",
    nome: "Cupim Cozido com Mandioca",
    descricao: "Cupim cozido lentamente, servido com mandioca — clássico da casa.",
    imagem: "/images/comidas/comida-02.jpg",
    confirmado: true,
  },
  {
    id: "feijoada",
    nome: "Feijoada",
    descricao: "A feijoada da casa, servida com pagode ao vivo todo sábado.",
    imagem: "/images/comidas/comida-03.jpg",
    confirmado: true,
  },
  {
    id: "prato-04",
    nome: "Nome do prato",
    descricao: "Descrição a ser adicionada.",
    imagem: "/images/comidas/comida-04.jpg",
    confirmado: false,
  },
];

// Nenhum nome de drink foi confirmado nas fontes públicas disponíveis —
// todos os cards abaixo permanecem como placeholders, prontos para receber
// nome, descrição e foto reais.
export const drinks = [
  { id: "drink-01", nome: "Nome do drink", descricao: "Descrição a ser adicionada.", imagem: "/images/drinks/drink-01.jpg" },
  { id: "drink-02", nome: "Nome do drink", descricao: "Descrição a ser adicionada.", imagem: "/images/drinks/drink-02.jpg" },
  { id: "drink-03", nome: "Nome do drink", descricao: "Descrição a ser adicionada.", imagem: "/images/drinks/drink-03.jpg" },
  { id: "drink-04", nome: "Nome do drink", descricao: "Descrição a ser adicionada.", imagem: "/images/drinks/drink-04.jpg" },
];

// Benefícios de aniversário.
export const beneficiosAniversario = [
  {
    icone: "🥘",
    titulo: "Feijoada VIP aos sábados",
    descricao: "Buffet de feijoada VIP com direito a 1 acompanhante.",
  },
  {
    icone: "🪑",
    titulo: "Mesa reservada",
    descricao: "Reserva de mesa exclusiva para você e seus convidados.",
  },
  {
    icone: "💌",
    titulo: "Convite personalizado",
    descricao: "Um convite feito especialmente para a sua comemoração.",
  },
  {
    icone: "🍾",
    titulo: "Brinde por grupo",
    descricao: "10 convidados: espumante · 20: gin nacional · 30: gin importado.",
  },
];

export const notaBeneficiosAniversario = "Os benefícios não são cumulativos.";

export const tiposEvento = [
  "Eventos corporativos",
  "Confraternizações",
  "Festas de fim de ano",
  "Despedidas",
  "Encontros de equipes",
  "Comemorações",
  "Eventos personalizados",
];

// Galeria estilo Instagram — porções, petiscos e momentos do salão.
export const galeria = Array.from({ length: 8 }).map((_, i) => ({
  id: `galeria-${String(i + 1).padStart(2, "0")}`,
  imagem: `/images/galeria/${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Momento no Carnaúbar — foto ${i + 1}`,
}));

export const depoimentos = [
  {
    texto: "Lugar acolhedor, família e a comida muito boa, tempero brasileiro no capricho!",
    fonte: "Avaliação no Google",
  },
  {
    texto: "A casa é linda, preço justo, comida deliciosa, garçons muito atenciosos…",
    fonte: "Avaliação no Google",
  },
  {
    texto: "Bebidas fantásticas e opções de comida para todos os gostos.",
    fonte: "Avaliação no Google",
  },
];

export const seoKeywordsFooter = [
  "Carnaúbar",
  "Carnaúbar Bar",
  "bar em São Paulo",
  "bar próximo a Congonhas",
  "restaurante próximo a Congonhas",
  "almoço em Congonhas",
  "Happy Hour em Congonhas",
  "Happy Hour em São Paulo",
  "bar para aniversário em São Paulo",
  "local para confraternização",
  "eventos corporativos em São Paulo",
];
