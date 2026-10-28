// index.html — os locais do guia chegam de um arquivo.
//
// Passos:
// 1. Aponte o <p id="status-locais">.
// 2. Escreva carregarLocais() assíncrona:
//    fetch('dados-guia.json') → valide resposta.ok → resposta.json()
//    → renderizarLocais(dados.locais)  // fornecida em cola.js
// 3. Se a resposta falhar, escreva o motivo em #status-locais.
// 4. Chame carregarLocais() no fim do arquivo.
//
// Lembrete: precisa de servidor local (Live Server) — file:// bloqueia o fetch.
const statusLocais = document.getElementById('status-locais');
const containerCards = document.getElementById('cards');

async function carregarLocais() {
  try {
    if (statusLocais) statusLocais.textContent = 'Carregando locais...';
    
    const resposta = await fetch('dados-guia.json');
    if (!resposta.ok) {
      throw new Error('Erro ao carregar os dados.');
    }
    
    const dados = await resposta.json();
    if (statusLocais) statusLocais.textContent = '';
    renderizarLocais(dados.locais);
  } catch (erro) {
    if (statusLocais) {
      statusLocais.textContent = 'Não foi possível carregar os locais no momento.';
      statusLocais.classList.add('erro');
    }
  }
}

function renderizarLocais(locais) {
  if (!containerCards) return;
  containerCards.innerHTML = '';
  
  locais.forEach((local, index) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <h3>${local.nome}</h3>
      <p>${local.descricao}</p>
      <a href="local.html?id=${index}">Ver detalhes</a>
    `;
    containerCards.appendChild(card);
  });
}

carregarLocais();