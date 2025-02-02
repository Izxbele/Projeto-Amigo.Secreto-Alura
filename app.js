let amigos = [];
let sorteioFeito = false;

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim();

    if (!nome) {
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    mostrarAmigos();
    document.getElementById("amigo").value = "";
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        
        // Cria o botão de remover, desabilita se o sorteio foi feito e adiciona ao item da lista
        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "X";
        botaoRemover.disabled = sorteioFeito;
        botaoRemover.onclick = () => removerAmigo(index);

        item.appendChild(botaoRemover);
        lista.appendChild(item);
    });
}

// Remove o amigo da lista pelo índice e atualiza a lista
function removerAmigo(index) {
    amigos.splice(index, 1);
    mostrarAmigos();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos 1 amigo para sortear.");
        return;
    }

    let ganhador = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML = `O ganhador do Amigo Secreto é: <strong>${ganhador}</strong>`;
    sorteioFeito = true;
    mostrarAmigos();
}

// Quando "Enter" é pressionado, adiciona o amigo
document.getElementById("amigo").addEventListener("keydown", (event) => {
    if (event.key === "Enter") adicionarAmigo();
});
