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
            window.location.href = "../../../home/home.html";
        }, 3000);
    } else if(n == 2){
        showLoading();
        setTimeout(() => {
            window.location.href = "../../../disciplines/disciplines.html";
        }, 3000);   
    } else if(n == 3){
        window.open("https://github.com/IsaacLanzoni/projeto-material-iff", '_blank');
    } else if(n == 4){
        showLoading();
        setTimeout(() => {
            window.location.href = "../../../config/config.html";
        }, 3000);
    } else if(n == 5){
        feedbackAlert();
    }
}

function downloadPDF(){
    const content = document.getElementById("content");
    let h1 = document.querySelector(".lesson-discipline");

    h1 = h1.textContent;

    const options = {
      margin: 10,
      filename: h1,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(options).from(content).save();
}