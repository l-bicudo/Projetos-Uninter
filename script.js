const links = document.querySelectorAll(".navbar-links a");
const sections = document.querySelectorAll("section");

// Acrescenta efeito hover ao clicar no link na navbar
links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("ativo"));
    link.classList.add("ativo");
  });
});

// Confirmação de envio de formulário com popup
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Formulário enviado com sucesso!");
  // Limpa o formulário após envio
  form.reset(); 
});
