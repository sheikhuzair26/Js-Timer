let timer = 120;
let min = 0;
let sec = 0;
let a = new Audio();

function backFunction() {
    window.history.back();      // For back page
}

let upgradeTime = function () {
    startTimer();
}


let dingAudio = document.getElementById("#myAudio");

let startTimer = () => {
    min = parseInt(timer / 60);
    sec = parseInt(timer % 60);

    if (timer <= 0) {                         //popup Page
        window.location = "wakeup.html";
        a.src = 'ding.mp3';
        a.play();
    }

    document.querySelector("#timer").innerHTML =
        "Time Left : " + "0" + min.toString() + ": " + sec.toString();
    timer--;

    setTimeout(upgradeTime, 1000);


}

