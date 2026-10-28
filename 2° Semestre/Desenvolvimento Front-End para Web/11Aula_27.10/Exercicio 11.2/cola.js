// Arquivo fornecido — não altere.
// Funções de desenho (DOM) e os filtros: quem implementa a lógica chama estas funções.

// index.html: desenha os cards dos locais dentro de #cards.
// Cada card carrega a categoria em data-categoria (os filtros usam isso)
// e um link para a página-modelo: local.html?id=<posição no array>.
const renderizarLocais = (locais) => {
  const cards = document.getElementById('cards');
  cards.innerHTML = '';
  locais.forEach((local, i) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.categoria = local.filtro;
    const imagem = document.createElement('img');
    imagem.src = local.imagem;
    imagem.alt = local.alt;
    const titulo = document.createElement('h3');
    titulo.textContent = local.nome;
    const descricao = document.createElement('p');
    descricao.textContent = local.descricao;
    const link = document.createElement('a');
    link.href = `local.html?id=${i}`;
    link.textContent = 'Ver detalhes →';
    card.appendChild(imagem);
    card.appendChild(titulo);
    card.appendChild(descricao);
    card.appendChild(link);
    cards.appendChild(card);
  });
};

// index.html: os botões de filtro. Os cards são re-consultados a cada
// clique porque nascem depois — quando o fetch termina.
document.querySelectorAll('[data-filtro]').forEach((botao) => {
  botao.addEventListener('click', () => {
    const filtro = botao.dataset.filtro;
    document.querySelectorAll('[data-filtro]').forEach((b) => b.classList.remove('ativo'));
    botao.classList.add('ativo');
    document.querySelectorAll('[data-categoria]').forEach((card) => {
      card.hidden = filtro !== 'todos' && card.dataset.categoria !== filtro;
    });
  });
});

// local.html: preenche a página-modelo #detalhe com um local.
const mostrarDetalhe = (local) => {
  const el = document.getElementById('detalhe');
  el.querySelector('img').src = local.imagem;
  el.querySelector('img').alt = local.alt;
  el.querySelector('h2').textContent = local.nome;
  el.querySelector('.cat').textContent = local.categoria;
  el.querySelector('.desc').textContent = local.descricao;
  el.querySelector('.end').textContent = local.endereco;
  el.querySelector('.hor').textContent = local.horario;
  el.querySelector('.nota').textContent = `Avaliação: ${local.avaliacao}`;
  const ul = el.querySelector('.destaques');
  ul.innerHTML = '';
  local.destaques.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
};
