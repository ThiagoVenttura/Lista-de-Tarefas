const input = document.querySelector("input");
const botao = document.querySelector("#botao");
const lista = document.querySelector("#lista");
const botaoLimpar = document.querySelector("#limpar");

botao.addEventListener("click", function () {
    const texto = input.value;

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const li = document.createElement("li");
    li.innerText = texto;

    li.addEventListener("click", function () {
        li.style.textDecoration = "line-through";
    });

    li.addEventListener("dblclick", function () {
        lista.removeChild(li);
    });

    lista.appendChild(li);
    input.value = "";
});

botaoLimpar.addEventListener("click", function () {
    const confirmar = confirm("Tem certeza que deseja apagar todas as tarefas?");

    if (confirmar) {
        lista.innerHTML = "";
    }
});
