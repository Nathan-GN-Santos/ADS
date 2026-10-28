# Exercício 11.2 — pacote inicial

O guia completo da aula 9, agora esperando dados e estado. Toda a estrutura visual já vem pronta — você escreve só a lógica.

## Arquivos

| Arquivo | Papel | Você escreve? |
|---|---|---|
| `index.html` | O guia como a aula 9 deixou — cards no HTML + `filtros.js` ligado | **sim** (parte 3: esvazia e liga os scripts) |
| `sugerir.html` | Página "Sugerir": form + seção de sugestões | não |
| `local.html` | Página-modelo de detalhe (`#detalhe` vazio) | não |
| `style.css` | Skin do guia — cabeçalho, menu, rodapé (todas as páginas usam) | não |
| `index.css` | Estilo só do `index.html` — grade, filtros, hero, cards, agenda | não |
| `sugerir.css` | Estilo só do `sugerir.html` — form + lista | não |
| `local.css` | Estilo só do `local.html` — ficha de detalhe | não |
| `filtros.js` | Script legado dos filtros — **sai na parte 3** | não (você remove a tag) |
| `dados-guia.json` | Os locais do guia — a fonte do `fetch` | não |
| `cola.js` | `renderizarLocais()`, `mostrarDetalhe()` e os filtros de categoria | não |
| `*.svg` | Imagens dos locais | não |
| `scripts.js` | `carregarLocais()` — lógica do `index.html` | **sim** |
| `scripts-sugerir.js` | Lógica do form + lista (baseline do 11.1 já dentro) | **sim** |
| `scripts-local.js` | Lógica da página-modelo | **sim** |

## O exercício

**Parte 1 — `sugerir.html`:** a sugestão vira coleção (`sugestoes` + `renderizar()`).

**Parte 2 — `sugerir.html`:** cada `<li>` nasce com "Remover" + `data-indice`; um listener na `<ul>` remove por delegação.

**Parte 3 — `index.html` + `local.html`:** refatoração real. O `index` chega como a aula 9 deixou — cards escritos no HTML e filtros no `filtros.js` legado. Você migra isso para dados:

1. Apague as `<section class="categoria">` com os cards fixos e deixe no lugar:
   ```html
   <p id="status-locais"></p>
   <div class="cards" id="cards"></div>
   ```
2. Apague a tag `<script src="filtros.js" defer>` do `<head>` (os filtros já moram no `cola.js`).
3. No `<head>`, ligue os dois scripts com `defer`, nesta ordem:
   ```html
   <script src="cola.js" defer></script>
   <script src="scripts.js" defer></script>
   ```
4. Escreva `carregarLocais()` no `scripts.js` (fetch → `ok` → `json()` → `renderizarLocais`) e a lógica do `scripts-local.js` (`?id=` → achar → `mostrarDetalhe`).

## Servidor local

A parte 3 **só funciona por HTTP**: Live Server (VS Code) ou `python -m http.server`. Com `file://` o `fetch` é bloqueado — o console mostra o motivo (leia com o ritual: tipo → arquivo/linha → hipótese → teste).
