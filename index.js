const playButtonEl = document.querySelector(".play");
const stopButtonEl = document.querySelector(".stop");
const playerEl = document.querySelector("video");
const wholeVideoCanvasEl = document.getElementById("whole");
const croppedVideoCanvasEl = document.getElementById("cropped");

const wholeVideoContext = wholeVideoCanvasEl.getContext('2d');
const croppedVideoContext = croppedVideoCanvasEl.getContext('2d');

playerEl.addEventListener("play", () => {
    function step() {
        wholeVideoContext.drawImage(playerEl, 0, 0, wholeVideoCanvasEl.width, wholeVideoCanvasEl.height);
        croppedVideoContext.drawImage(playerEl, 500, 300, 500, 300, 0, 0, 640, 360);
        requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
});


playerEl.addEventListener('loadeddata', onVideoLoaded);

function onVideoLoaded() {
    x = playerEl.clientHeight/playerEl.clientWidth
    wholeVideoCanvasEl.height = wholeVideoCanvasEl.width*x;
    console.log(wholeVideoCanvasEl.height )
}

playButtonEl.addEventListener('click', onPlayButtonClick);

function onPlayButtonClick() {
    playerEl.play();
}

stopButtonEl.addEventListener('click', onStopButtonClick);

function onStopButtonClick() {
    playerEl.pause();
}


