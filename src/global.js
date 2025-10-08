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
        window.open("https://github.com/IsaacLanzoni", '_blank');
    } else if(n == 4){
        showLoading();
        setTimeout(() => {
            window.location.href = "../config/config.html";
        }, 3000);
    } else if(n == 5){
        feedbackAlert();
    }
}