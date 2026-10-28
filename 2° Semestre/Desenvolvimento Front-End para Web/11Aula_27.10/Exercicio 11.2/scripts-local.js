// local.html — página-modelo: ?id= diz qual local mostrar.
//
// Passos:
// 1. Leia o id da URL: new URLSearchParams(location.search).get('id')
//    (vem como string — Number() antes de usar como posição)
// 2. Busque dados-guia.json com fetch + await — valide resposta.ok
//    e chame resposta.json() para ter o array.
// 3. Encontre o local em dados.locais[id] — se não existir,
//    mostre "Local não encontrado." no #status.
// 4. Chame mostrarDetalhe(local) — fornecida em cola.js.
//
// Lembrete: precisa de servidor local (Live Server) — file:// bloqueia o fetch.

async function mostrarDetalhe() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const detalheContainer = document.getElementById('detalhe-local') || document.querySelector('main');

  try {
    const resposta = await fetch('dados-guia.json');
    if (!resposta.ok) throw new Error();
    
    const dados = await resposta.json();

    if (id !== null && dados.locais[id]) {
      const local = dados.locais[id];
      detalheContainer.innerHTML = `
        <h1>${local.nome}</h1>
        <p>${local.descricao}</p>
      `;
    } else {
      detalheContainer.innerHTML = '<h1>Local não encontrado.</h1>';
    }
  } catch (e) {
    detalheContainer.innerHTML = '<h1>Erro ao carregar os detalhes do local.</h1>';
  }
}

mostrarDetalhe();
