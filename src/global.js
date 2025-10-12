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
        feedbackAlert();
    }
}


// ====== Configurações de tema e fonte ======
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  const savedFont = localStorage.getItem("font") || "'Roboto', sans-serif";

  setTheme(savedTheme);
  setFont(savedFont);

  // Atualiza selects/botões se existirem
  const fontSelect = document.getElementById("fontSelect");
  if (fontSelect) fontSelect.value = savedFont;

  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.textContent = savedTheme === "dark" ? "Tema Claro" : "Tema Escuro";
  }
});

// ====== Função para definir tema ======
function setTheme(theme) {
  if (theme === "dark") {
    document.documentElement.style.setProperty("--cor0", "#1E5128");
    document.documentElement.style.setProperty("--cor1", "#A62C2B");
    document.documentElement.style.setProperty("--cor2", "#D9D7D7");
    document.documentElement.style.setProperty("--cor3", "#0D0C0C");
    document.documentElement.style.setProperty("--cor4", "#145A44");
    document.documentElement.style.setProperty("--bg-color", "#393E46");
    document.documentElement.style.setProperty("--text-color", "#E5E5E5");
  } else {
    document.documentElement.style.setProperty("--cor0", "#2F9E41");
    document.documentElement.style.setProperty("--cor1", "#CD191E");
    document.documentElement.style.setProperty("--cor2", "#D9D7D7");
    document.documentElement.style.setProperty("--cor3", "#D9D7D7");
    document.documentElement.style.setProperty("--cor4", "#19655B");
    document.documentElement.style.setProperty("--bg-color", "#F5F5F5");
    document.documentElement.style.setProperty("--text-color", "#D9D7D7");
  }

  document.body.style.backgroundColor = "var(--bg-color)";
  document.body.style.color = "var(--text-color)";
  localStorage.setItem("theme", theme);

  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle)
    themeToggle.textContent = theme === "dark" ? "Tema Claro" : "Tema Escuro";
}

// ====== Função para alternar tema ======
function toggleTheme() {
  const currentTheme = localStorage.getItem("theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
}

// ====== Função para definir fonte ======
function setFont(font) {
  document.body.style.fontFamily = font;
  localStorage.setItem("font", font);
}

// ====== Listener de mudança de fonte (para o <select>) ======
function changeFont(selectElement) {
  const selectedFont = selectElement.value;
  setFont(selectedFont);
}
