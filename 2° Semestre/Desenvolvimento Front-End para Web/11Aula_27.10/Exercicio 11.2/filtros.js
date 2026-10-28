// Filtros de categoria — script legado, embutido nas páginas antigas do guia.
// Na parte 3 você remove a tag <script src="filtros.js"> do index.html:
// quem assume os filtros é o cola.js (eles reconsultam os cards a cada clique).
const botoes = document.querySelectorAll('[data-filtro]');
const cards = document.querySelectorAll('[data-categoria]');

botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    const filtro = botao.dataset.filtro;
    botoes.forEach((item) => item.classList.remove('ativo'));
    botao.classList.add('ativo');
    cards.forEach((card) => {
      card.hidden = filtro !== 'todos' && card.dataset.categoria !== filtro;
    });
  });
});
