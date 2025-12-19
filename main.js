$(document).ready(function () {
  // Adicionar tarefa
  $("form").on("submit", function (e) {
    e.preventDefault();

    const tarefa = $("#input-tarefa").val().trim();
    if (tarefa === "") return;

    const novaTarefa = `
      <li class="tarefa">
        <span class="texto">${tarefa}</span>
        <button class="remover-btn" title="Remover tarefa">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </li>
    `;

    $("#lista-tarefa").append(novaTarefa);
    $("#input-tarefa").val("");
  });

  // Remover tarefa ao clicar no botão X
  $("#lista-tarefa").on("click", ".remover-btn", function (e) {
    e.stopPropagation(); // evita conflito com o clique do li
    $(this).closest("li").remove();
  });

  // Botão cancelar
  $("#cancelar-tarefa").on("click", function () {
    $("#input-tarefa").val("");
  });
});
