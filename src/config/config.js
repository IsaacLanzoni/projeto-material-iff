// Tema padrão
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  const savedFont = localStorage.getItem("font") || "'Roboto', sans-serif";

  setTheme(savedTheme);
  setFont(savedFont);
});

function setTheme(theme) {
  if (theme === "dark") {
    document.documentElement.style.setProperty("--cor0", "#1E5128");
    document.documentElement.style.setProperty("--cor1", "#A62C2B");
    document.documentElement.style.setProperty("--cor2", "#D9D7D7");
    document.documentElement.style.setProperty("--cor3", "#0D0C0C");
    document.documentElement.style.setProperty("--cor4", "#145A44");
  } else {
    document.documentElement.style.setProperty("--cor0", "#2F9E41");
    document.documentElement.style.setProperty("--cor1", "#CD191E");
    document.documentElement.style.setProperty("--cor2", "#0D0C0C");
    document.documentElement.style.setProperty("--cor3", "#D9D7D7");
    document.documentElement.style.setProperty("--cor4", "#19655B");
  }

  localStorage.setItem("theme", theme);
}

function setFont(font) {
  document.body.style.fontFamily = font;
  localStorage.setItem("font", font);
}
