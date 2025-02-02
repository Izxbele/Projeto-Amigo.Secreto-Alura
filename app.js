let amigos = []; 

function adicionarAmigo() {
    let campoDeNome = document.getElementById("amigo"); 
    let nome = campoDeNome.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return; 
    }

    amigos.push(nome); 
    mostrarAmigos(); 
    campoDeNome.value = ""; 
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = ""; 

    amigos.forEach(function(amigo) {
        let item = document.createElement("li");
        item.textContent = amigo; 
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length < 1) {
        alert("Adicione pelo menos 1 amigo para sortear.");
        return; 
    }

    let amigoGanhador = amigos[Math.floor(Math.random() * amigos.length)];
    
    let resultado = document.getElementById("resultado"); 
    resultado.textContent = `O ganhador do Amigo Secreto é: ${amigoGanhador}`; 

    // Desabilita o campo de texto depois do sorteio
    let campoDeNome = document.getElementById("amigo");
    campoDeNome.disabled = true; 
}

// Função para adicionar amigo ao apertar "Enter"
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionarAmigo(); 
    }
});
