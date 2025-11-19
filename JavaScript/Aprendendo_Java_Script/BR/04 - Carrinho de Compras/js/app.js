var totalGeral = 0;
limpar();

function adicionar() {
    // Recuperando valores: Nome, quantidade e valor.
    var produto = document.getElementById("produto").value;
    var nomeProduto = produto.split("-")[0];
    var valorUnitario = produto.split("R$")[1];
    var quantidade = document.getElementById("quantidade").value;

    if (!produto || produto.trim() == "") {
        alert("Selecione um produto válido.");
        return;
    }

    // Verificar se a quantidade inserida é válida e se não passa de 100.
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    } else if (quantidade > 100) {
        alert("É permitido comprar apenas 100 Unidades por cliente.");
        return;
    } 

    // Calcular preço.
    var subtotal = quantidade * valorUnitario;
    var carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
        </section>`;
    totalGeral = totalGeral + subtotal;

    var campoTotal = document.getElementById("valor-total");
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById("quantidade").value = '';
}

function limpar() {
    totalGeral = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent = "R$ 0";
}