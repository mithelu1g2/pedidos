document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("itensPedido");

  // Evento de adicionar item ao pedido
  document.querySelectorAll(".add-to-order").forEach(button => {
    button.addEventListener("click", (e) => {
      const item = e.target.getAttribute("data-item");
      const price = e.target.getAttribute("data-price");

      // Criar item na lista de pedidos
      const li = document.createElement("li");
      li.classList.add("list-group-item");
      li.textContent = `${item} - R$${price}`;
      lista.appendChild(li);
    });
  });
});
