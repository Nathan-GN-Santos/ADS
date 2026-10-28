// sugerir.html — baseline do exercício 11.1 (form valida e responde).
// A lista viva entra aqui: estado em array + renderizar() + delegação.
const form = document.getElementById('sugestao');
const nomeInput = document.getElementById('nome');
const localInput = document.getElementById('local');
const motivoInput = document.getElementById('motivo');
const erroMsg = document.getElementById('erro');

const sugestoes = [];

// Cria ou seleciona a <ul> para renderizar a lista viva na página
let listaUl = document.getElementById('lista-sugestoes');
if (!listaUl) {
  listaUl = document.createElement('ul');
  listaUl.id = 'lista-sugestoes';
  form.parentNode.appendChild(listaUl);
}

function renderizar() {
  listaUl.innerHTML = '';
  sugestoes.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.local} — ${item.motivo} (por ${item.nome}) `;

    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.dataset.indice = index;

    li.appendChild(btnRemover);
    listaUl.appendChild(li);
  });
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = nomeInput.value.trim();
  const local = localInput.value.trim();
  const motivo = motivoInput.value.trim();

  erroMsg.textContent = '';
  erroMsg.className = '';

  if (!nome || !local || !motivo) {
    erroMsg.textContent = 'Por favor, preencha todos os campos.';
    erroMsg.classList.add('erro');
    return;
  }

  sugestoes.push({ nome, local, motivo });
  renderizar();
  form.reset();
});

listaUl.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') {
    const indice = Number(e.target.dataset.indice);
    sugestoes.splice(indice, 1);
    renderizar();
  }
});
// Parte 1 — a sugestão vira coleção:
//   const sugestoes = []  →  submit válido faz push → renderizar()
// Parte 2 — remover por delegação:
//   renderizar() cria <li> com botão "Remover" (data-indice)
//   um listener na <ul>: e.target → splice → renderizar()
