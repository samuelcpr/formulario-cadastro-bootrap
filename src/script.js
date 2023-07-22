const dadosFormulario = []; // Array para armazenar os dados do formulário

// Função para adicionar os dados do formulário no array
function adicionarDadosFormulario(nome, email, mensagem) {
  dadosFormulario.push({ nome, email, mensagem });
}

// Função para enviar os dados do formulário e evitar o redirecionamento
function enviarFormulario(event) {
  event.preventDefault(); // Evita o redirecionamento após o envio do formulário
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  adicionarDadosFormulario(nome, email, mensagem);
  document.getElementById("formulario").reset(); // Limpa o formulário após o envio
}

// Evento de envio do formulário
document.getElementById("formulario").addEventListener("submit", enviarFormulario);


console.log(dadosFormulario)