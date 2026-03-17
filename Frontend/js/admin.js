async function carregar(){

let res = await fetch("http://localhost:3000/produtos");

let dados = await res.json();

let lista = document.getElementById("lista");

lista.innerHTML = "";

dados.forEach(p => {

lista.innerHTML += `
<div>
${p.nome} - ${p.preco}

<button onclick="deletar(${p.id})">Excluir</button>

</div>
`;

});

}

async function cadastrar(){

let nome = document.getElementById("nome").value;
let preco = document.getElementById("preco").value;

await fetch("http://localhost:3000/produtos",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({nome,preco})
});

carregar();

}

async function deletar(id){

await fetch("http://localhost:3000/produtos/"+id,{
method:"DELETE"
});

carregar();

}

carregar();