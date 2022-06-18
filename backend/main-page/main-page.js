//fetch sounds
var kickSound = new Audio("resources/sounds/kick-bass.mp3");
var snareSound = new Audio("resources/sounds/snare.mp3");
var tom1Sound = new Audio("resources/sounds/tom-1.mp3");
var tom2Sound = new Audio("resources/sounds/tom-2.mp3");
var tom3Sound = new Audio("resources/sounds/tom-3.mp3");
var tom4Sound = new Audio("resources/sounds/tom-4.mp3");
var crashSound = new Audio("resources/sounds/crash.mp3");

//current sound file holder
var currentSound = new Audio();

//sound play result holder
var playPromise;

//handle keyboard events
document.addEventListener("keydown", (event) => {
    if (event.repeat) { return; }

    switch (event.key) {
        case "q":
            playKickSound();
            break;

        case "w":
            playSnareSound();
            break;

        case "e":
            playTom1Sound();
            break;

        case "r":
            playTom2Sound();
            break;

        case "t":
            playTom3Sound();
            break;

        case "y":
            playTom4Sound();
            break;

        case "u":
            playCrashSound();
            break;
    }
});

//kick event listener
document.querySelectorAll("img")[0].addEventListener("click", playKickSound);

//snare event listener
document.querySelectorAll("img")[1].addEventListener("click", playSnareSound);

//tom1 event listener
document.querySelectorAll("img")[2].addEventListener("click", playTom1Sound);

//tom2 event listener
document.querySelectorAll("img")[3].addEventListener("click", playTom2Sound);

//tom3 event listener
document.querySelectorAll("img")[4].addEventListener("click", playTom3Sound);

//tom3 event listener
document.querySelectorAll("img")[5].addEventListener("click", playTom4Sound);

//crash event listener
document.querySelectorAll("img")[6].addEventListener("click", playCrashSound);

function playKickSound() {
    if (!currentSound.paused) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }
    currentSound = kickSound;

    playPromise = currentSound.play();
    playPromise.then().catch(() => { alert("Kick sound could not played"); })
}

function playSnareSound() {
    if (!currentSound.paused) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }
    currentSound = snareSound;

    playPromise = currentSound.play();
    playPromise.then().catch(() => { alert("Snare sound could not played"); })
}

function playTom1Sound() {
    if (!currentSound.paused) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }
    currentSound = tom1Sound;

    playPromise = currentSound.play();
    playPromise.then().catch(() => { alert("Tom1 sound could not played"); })
}

function playTom2Sound() {
    if (!currentSound.paused) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }
    currentSound = tom2Sound;

    playPromise = currentSound.play();
    playPromise.then().catch(() => { alert("Tom2 sound could not played"); })
}

function playTom3Sound() {
    if (!currentSound.paused) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }
    currentSound = tom3Sound;

    playPromise = currentSound.play();
    playPromise.then().catch(() => { alert("Tom3 sound could not played"); })
}

function playTom4Sound() {
    if (!currentSound.paused) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }
    currentSound = tom4Sound;

    playPromise = currentSound.play();
    playPromise.then().catch(() => { alert("Tom4 sound could not played"); })
}

function playCrashSound() {
    if (!currentSound.paused) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }
    currentSound = crashSound;

    playPromise = currentSound.play();
    playPromise.then().catch(() => { alert("Crash sound could not played"); })
}