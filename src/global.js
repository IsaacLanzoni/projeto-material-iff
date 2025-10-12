document.getElementById('open_btn').addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('open-sidebar');
});

function feedbackAlert(){
  alert("Por enquanto essa função não está disponivel, o ADM ficou com preguiça de fazer, mas em breve vai implementar");
}

function redirect(n){
  if(n == 1){
      showLoading();
      setTimeout(() => {
          window.location.href = "../home/home.html";
      }, 3000);
  } else if(n == 2){
      showLoading();
      setTimeout(() => {
          window.location.href = "../disciplines/disciplines.html";
      }, 3000);   
  } else if(n == 3){
      window.open("https://github.com/IsaacLanzoni/projeto-material-iff", '_blank');
  } else if(n == 4){
      showLoading();
      setTimeout(() => {
          window.location.href = "../config/config.html";
      }, 3000);
  } else if(n == 5){
      //
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  const savedFont = localStorage.getItem("font") || "'Roboto'";

  setTheme(savedTheme);
  setFont(savedFont);

  const fontSelect = document.getElementById("fontSelector");
  if (fontSelect) fontSelect.value = savedFont;

  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.textContent = savedTheme === "dark" ? "Tema Claro" : "Tema Escuro";
  }
});


function setTheme(theme) {
  if (theme === "dark") {
    document.documentElement.style.setProperty("--layer-color", "#0D0D0B");
    document.documentElement.style.setProperty("--layer-background-color", "#878C80");
    document.documentElement.style.setProperty("--neutral-color", "#262621");
    document.documentElement.style.setProperty("--background-color", "#BDBFAE");
    document.documentElement.style.setProperty("--element-background-color", "#4F5954");
    document.documentElement.style.setProperty("--text-color", "#E6E6E6");
  } else {
    document.documentElement.style.setProperty("--layer-color", "#2F9E41");
    document.documentElement.style.setProperty("--layer-background-color", "#CD191E");
    document.documentElement.style.setProperty("--neutral-color", "#0D0C0C");
    document.documentElement.style.setProperty("--background-color", "#D9D7D7");
    document.documentElement.style.setProperty("--element-background-color", "#19655B");
    document.documentElement.style.setProperty("--text-color", "#D9D7D7");
  }

  document.body.style.backgroundColor = "var(--background-color)";
  document.body.style.color = "var(--text-color)";
  localStorage.setItem("theme", theme);

  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle)
    themeToggle.textContent = theme === "dark" ? "Tema Claro" : "Tema Escuro";
}


function toggleTheme() {
  const currentTheme = localStorage.getItem("theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
}


function setFont(font) {
  document.documentElement.style.setProperty("--main-font", font);
  localStorage.setItem("font", font);
}


function changeFont(selectElement) {
  const selectedFont = selectElement.value;
  setFont(selectedFont);
}

function feedback() {
  // Evita abrir várias janelas
  if (document.querySelector(".feedback-popup")) return;

  // Criação do container do pop-up
  const popup = document.createElement("div");
  popup.classList.add("feedback-popup");
  popup.style.cssText = `
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--element-background-color);
    color: var(--background-color);
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 90%;
    max-width: 400px;
  `;

  popup.innerHTML = `
    <h2 style="text-align:center;">Envie seu Feedback</h2>
    <input type="email" id="feedback-email" placeholder="Seu e-mail" style="padding: 10px; border-radius: 8px; border: none; width: 100%;">
    <textarea id="feedback-msg" placeholder="Digite seu feedback..." style="padding: 10px; border-radius: 8px; height: 100px; resize: none; border: none; width: 100%;"></textarea>
    <div style="display: flex; justify-content: space-between;">
      <button id="send-feedback" style="padding: 8px 16px; border: none; border-radius: 8px; background: var(--layer-color); color: white; cursor: pointer;">Enviar</button>
      <button id="close-feedback" style="padding: 8px 16px; border: none; border-radius: 8px; background: var(--layer-background-color); color: white; cursor: pointer;">Cancelar</button>
    </div>
  `;

  document.body.appendChild(popup);

  // Eventos dos botões
  document.getElementById("close-feedback").addEventListener("click", () => popup.remove());

  document.getElementById("send-feedback").addEventListener("click", async () => {
    const email = document.getElementById("feedback-email").value.trim();
    const message = document.getElementById("feedback-msg").value.trim();

    if (!email || !message) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xblzplkk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message })
      });

      if (response.ok) {
        alert("✅ Feedback enviado com sucesso!");
        popup.remove();
      } else {
        alert("❌ Ocorreu um erro ao enviar o feedback. Tente novamente.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Erro de conexão. Tente novamente mais tarde.");
    }
  });
}

