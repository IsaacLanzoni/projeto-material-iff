const lessonsData = {
    "Banco de Dados I": [
        { title: "Aula 1", date: "09/10/2025", url: "lessons/Banco de Dados I/aula1.html"},
        { title: "Aula 2", date: "10/10/2025", url: "lessons/Banco de Dados I/aula2.html" },
        { title: "Aula 3", date: "11/10/2025", url: "lessons/Banco de Dados I/aula3.html" },
    ],
    "Desenvolvimento Web I": [
        { title: "Aula 1", date: "12/10/2025", url: "lessons/Desenvolvimento Web I/aula1.html" },
        { title: "Aula 2", date: "13/10/2025", url: "lessons/Desenvolvimento Web I/aula2.html" },
    ],
    "Gestão Financeira e Contábil": [
        { title: "Aula 1", date: "14/10/2025", url: "lessons/Gestão Financeira e Contábil/aula1.html"},
        { title: "Aula 2", date: "15/10/2025", url: "lessons/Gestão Financeira e Contábil/aula2.html" },
        { title: "Aula 3", date: "16/10/2025", url: "lessons/Gestão Financeira e Contábil/aula3.html" },
        { title: "Aula 4", date: "17/10/2025", url: "lessons/Gestão Financeira e Contábil/aula4.html" },
    ],
    "Programação Orientada a Objetos II": [
        { title: "Aula 1", date: "18/10/2025", url: "lessons/Probabilidade e Estatística/aula1.html" },
    ],
    "Probabilidade e Estatística": [
        { title: "Aula 1", date: "19/10/2025", url: "lessons/Programação Orientada a Objetos II/aula1.html"},
        { title: "Aula 2", date: "20/10/2025", url: "lessons/Programação Orientada a Objetos II/aula2.html"},
    ],
    "Sistemas Operacionais": [
        { title: "Aula 1", date: "21/10/2025", url: "lessons/Sistemas Operacionais/aula1.html"},
        { title: "Aula 2", date: "22/10/2025", url: "lessons/Sistemas Operacionais/aula2.html"},
        { title: "Aula 3", date: "23/10/2025", url: "lessons/Sistemas Operacionais/aula3.html"},
    ]
};

function openLessons(disciplineName) {
  const card = document.querySelector(".lessons-card");
    const lessonsGrid = card.querySelector(".lessons-grid");

    card.querySelector("h2").textContent = disciplineName + " - Aulas";

    lessonsGrid.innerHTML = "";

    const lessons = lessonsData[disciplineName] || [];

    lessons.forEach((lesson, index) => {
        const lessonDiv = document.createElement("div");
        lessonDiv.classList.add("lesson-card");
        lessonDiv.innerHTML = `
            <span>${lesson.title}</span>
            <small>${lesson.date}</small>
        `;

        lessonDiv.addEventListener("click", () => {
            window.location.href = lesson.url;
        });

        lessonsGrid.appendChild(lessonDiv);
    });

    card.classList.add("show");
    card.classList.remove("z-index-remove");
}

function closeLessons(){
    const card = document.querySelector(".lessons-card");
    card.classList.remove("show");
    card.classList.add("z-index-remove");
}

function goToLesson(id) {
  // redireciona para a página da aula
  window.location.href = `aula.html?id=${id}`;
}