let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nomeAmigo);
    atualizarLista();
    document.getElementById("amigo").value = ""; 
}

function atualizarLista() {
    let listaNome = document.getElementById("listaAmigos");
    listaNome.innerHTML = ""; 

    amigos.forEach(amigo => {
        let amigosNome = document.createElement("li");
        amigosNome.textContent = amigo;
        listaNome.appendChild(amigosNome);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos à lista antes de sortear.");
        return;
    }

    let numeroSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[numeroSorteado];

        document.getElementById("resultado").innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
    }