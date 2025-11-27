let participantes = [];

function adicionar() {
    let amigo = document.getElementById("nome-amigo");

    if (amigo.value == "") {
        alert ("Informe o nome de um participante!");
        return;
    }

    if (participantes.includes(amigo.value)) {
        alert("O nome já foi adicionado. ");
        return;
    }

    let lista = document.getElementById("lista-amigos");
    participantes.push(amigo.value);
    
    if (lista.textContent == "") {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ", " + amigo.value;
    }
    amigo.value = "";
}

function sortear() {
    if (participantes.length < 4) {
        alert ("Adicione pelo menos 4 participantes!");
        return;
    }
    embaralhar(participantes);
    let sorteio = document.getElementById("lista-sorteio");

    for (let i = 0; i < participantes.length; i++) {

        if (i == participantes.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + participantes[i] + " --> " + participantes[0] + "<br>"
        } else {
            sorteio.innerHTML = sorteio.innerHTML + participantes[i] + " --> " + participantes[i + 1] + "<br>"
        }   
    }    
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    participantes = [];
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
}