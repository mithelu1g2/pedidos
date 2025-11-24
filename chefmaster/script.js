// Quando o conteúdo da página carregar
document.addEventListener("DOMContentLoaded", function () {

  // Seleciona todos os botões "Adicionar ao Pedido"
  const buttons = document.querySelectorAll(".add-to-order");

  // Lista onde os itens serão adicionados
  const lista = document.getElementById("itensPedido");

  // Adiciona evento a cada botão
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {

      var item = this.getAttribute("data-item");
      var price = this.getAttribute("data-price");

      // Cria o elemento do item
      var li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = item + " — R$ " + price;

      // Adiciona à lista
      lista.appendChild(li);
    });
  });

});
