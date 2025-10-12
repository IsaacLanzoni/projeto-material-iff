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
