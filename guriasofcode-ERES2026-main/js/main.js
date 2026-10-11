// ⚡ ETAPA 5 — NOSSO PRIMEIRO JAVASCRIPT
// HTML = o que aparece na página | CSS = como fica bonito | JavaScript = o que acontece quando você interage
// 💡 Toda linha que começa com // é um comentário: um recado para nós, o computador ignora.
// Só mexa aqui quando o blog já estiver montado. 😉


// 🔎 PASSO 1 — Procurar na página todos os botões que têm a classe "botao-post".
// const = cria uma variável: uma caixa com nome, que guarda alguma coisa.
// Aqui, a caixa se chama "botoes" e guarda a lista de botões encontrados.
const botoes = document.querySelectorAll(".botao-post");

// 🔁 PASSO 2 — Para cada botão da lista, fazer a mesma coisa (forEach = "para cada um").
botoes.forEach(function (botao) {

    // 👂 Ficar esperando a pessoa clicar ("click") neste botão.
    botao.addEventListener("click", function () {

        // 💬 PASSO 3 — Quando clicar, mostrar uma janelinha com uma mensagem.
        // ✏️ Troque o texto entre as aspas pela mensagem de vocês!
        alert("Você clicou em um dos nossos posts! 💜");

    });

});
