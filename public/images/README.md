# Onde colocar as fotos reais

Todos os componentes já referenciam os caminhos abaixo através de
`src/config/site.js`. Enquanto o campo correspondente estiver `null`, a
seção exibe um placeholder visual identificado com o caminho esperado —
assim que você adicionar o arquivo aqui **e** atualizar o valor em
`site.js` de `null` para a string do caminho, a foto real aparece no lugar
do placeholder automaticamente.

```
public/images/
  hero.jpg                        → Hero (banner principal)
  cta-final.jpg                   → CTA final (bar cheio)
  andar-1.jpg, andar-1-2.jpg, andar-1-3.jpg, andar-1-4.jpg   → Espaço, 1º andar
  andar-2.jpg, andar-2-2.jpg, andar-2-3.jpg, andar-2-4.jpg   → Espaço, 2º andar
  experiencias/
    almoco.jpg
    happy-hour.jpg
    aniversario.jpg
    eventos.jpg
  almoco/
    prato-01.jpg, prato-02.jpg, prato-03.jpg
  happy-hour/
    destaque.jpg
  aniversario/
    destaque.jpg
  eventos/
    destaque.jpg
  comidas/
    comida-01.jpg ... comida-04.jpg
  drinks/
    drink-01.jpg ... drink-04.jpg
  galeria/
    01.jpg ... 08.jpg
```

Recomendações:
- Prefira fotos horizontais em alta resolução (mín. 1600px de largura) para
  o hero, o CTA final e as fotos grandes dos andares.
- Fotos quadradas ou 4:5 funcionam melhor nos cards de comidas, drinks e na
  galeria.
- Otimize o peso dos arquivos (WebP ou JPG comprimido) antes de publicar.
