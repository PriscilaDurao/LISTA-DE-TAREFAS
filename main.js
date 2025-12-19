$(document).ready(function () {
  // Adicionar tarefa
  $("form").on("submit", function (e) {
    e.preventDefault();

    const tarefa = $("#input-tarefa").val().trim();
    if (tarefa === "") return;

    const novaTarefa = `
      <li class="tarefa">
      
      <span class="texto">${tarefa}</span>

      <div class="botoes-tarefa">      
      <button class="check-btn" title="Concluir tarefa">
        <i class="fa-regular fa-circle-check"></i>
      </button>
        <button class="remover-btn" title="Remover tarefa">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      </li>
    `;

    $("#lista-tarefa").append(novaTarefa);
    $("#input-tarefa").val("");
  });

  // Riscar tarefa ao clicar no botão check
  $("#lista-tarefa").on("click", ".check-btn", function (e) {
    e.stopPropagation();

    const li = $(this).closest("li");
    li.find(".texto").toggleClass("tarefa-concluida");

    // opcional: mudar o ícone ao concluir
    $(this).find("i").toggleClass("fa-regular fa-solid");
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
