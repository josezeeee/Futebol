// Puxa produtos do backend
fetch("http://localhost:3000/produtos")
  .then(res => res.json())
  .then(produtos => {
    const container = document.querySelector("#produtos .row");
    container.innerHTML = produtos.map(p => `
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card h-100 border-0 shadow-sm rounded-4 text-center">
          <h5>${p.nome}</h5>
          <p>R$ ${p.preco},00</p>
        </div>
      </div>
    `).join("");
  })
  .catch(err => console.error("Erro ao buscar produtos:", err));