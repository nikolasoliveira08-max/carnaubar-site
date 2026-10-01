# Carnaúbar — site institucional

Site institucional do Carnaúbar Bar e Restaurante (Vila Congonhas, São Paulo),
construído em **React + Vite + Tailwind CSS**.

## ⚠️ Sobre este ambiente

Esta máquina não tem Node.js/npm instalados, então o projeto foi montado e
revisado como código-fonte, mas **não pôde ser instalado nem rodado aqui**
para um teste visual ao vivo. Antes de publicar, rode localmente (passos
abaixo) e confira no navegador — principalmente o menu mobile, o formulário
de eventos e a galeria/lightbox.

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev
```

Acesse o endereço mostrado no terminal (normalmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

A pasta `dist/` gerada pelo build é o que deve ser publicado no servidor/
hospedagem (Vercel, Netlify, etc. funcionam sem configuração extra).

## Estrutura

```
src/
  config/site.js     ← TODO o conteúdo, telefone, links e imagens em um só lugar
  components/         ← um componente por seção (ver lista abaixo)
  App.jsx             ← monta a página na ordem das seções
public/images/         ← onde entram as fotos reais (ver README dentro da pasta)
```

Componentes: `Header`, `Hero`, `Experiencias`, `Almoco`, `HappyHour`,
`Aniversarios`, `Eventos`, `Espacos`, `Comidas`, `Drinks`, `Galeria`,
`CtaFinal`, `Contato`, `Footer`, `WhatsAppButton`, `MobileBar`.

## Editar textos, telefone e links

Tudo isso está centralizado em `src/config/site.js` — não é necessário abrir
nenhum componente para trocar um texto, o número de WhatsApp ou um link.

## Adicionar fotos reais

Veja `public/images/README.md`. Resumo: coloque o arquivo na pasta indicada
e troque o `null` correspondente em `src/config/site.js` pelo caminho do
arquivo. Enquanto isso não for feito, cada seção mostra um placeholder
identificado com o caminho esperado, para deixar claro o que falta.

## Informações comerciais ainda pendentes

Por instrução do briefing, nada foi inventado. Ficaram como pendências
claramente sinalizadas no código (`site.js` e nos comentários dos
componentes):

- Horário completo por dia da semana (hoje só é público o horário de
  fechamento, 00h).
- Cardápio e valores do almoço.
- Promoções/horário específico do Happy Hour.
- Benefícios do aniversariante.
- Nomes, descrições e fotos dos 4 drinks em destaque.
- 4º prato em destaque na seção de gastronomia.
- Fotos reais (hero, andares, pratos, drinks, galeria) — o Instagram
  oficial (@carnaubar_) foi usado como referência de atmosfera e tom de
  voz, mas as imagens em si precisam ser baixadas/cedidas pela casa e
  coladas em `public/images`.

## SEO

`index.html` já inclui title, meta description, Open Graph, Twitter Card e
JSON-LD (`schema.org/BarOrPub`) com endereço e telefone. Ajuste a URL
canônica (`<link rel="canonical">`) para o domínio real assim que definido.
