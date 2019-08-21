let timer = 60;
let min = 0;
let sec = 0;

let ding;                 //AUDIO

function preload() {
    ding = dingAudio.play();
}
function backFunction() {
    window.history.back();      // For back page
}

let dingAudio = document.getElementById("#myAudio");

let startTimer = () => {
    min = parseInt(timer / 60);
    sec = parseInt(timer % 60);

    if (timer <= 0) {
        window.location = "wakeup.html";
        ding;
    }

    document.querySelector("#timer").innerHTML =
        "Time Left : " + "0" + min.toString() + ": " + sec.toString();
    timer--;


    setTimeout(function () {
        startTimer();
    }, 1000);

}

