// Atualiza o ano automaticamente no rodapé
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// FAQ abre/fecha com clique
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const btn = item.querySelector(".faq-question");
  btn.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

// (Opcional) Prevenir envio real do formulário e exibir alerta amigável
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "Formulário ilustrativo enviado! Para resposta mais rápida, use o WhatsApp da WitFlux."
    );
  });
}