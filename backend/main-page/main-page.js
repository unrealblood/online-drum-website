//fetch sounds
var kickSoundAudio = new Audio("https://github.com/unrealblood/online-drum-website/raw/main/resources/sounds/kick-bass.mp3");
var snareSoundAudio = new Audio("https://github.com/unrealblood/online-drum-website/raw/main/resources/sounds/snare.mp3");
var tom1SoundAudio = new Audio("https://github.com/unrealblood/online-drum-website/raw/main/resources/sounds/tom-1.mp3");
var tom2SoundAudio = new Audio("https://github.com/unrealblood/online-drum-website/raw/main/resources/sounds/tom-2.mp3");
var tom3SoundAudio = new Audio("https://github.com/unrealblood/online-drum-website/raw/main/resources/sounds/tom-3.mp3");
var tom4SoundAudio = new Audio("https://github.com/unrealblood/online-drum-website/raw/main/resources/sounds/tom-4.mp3");
var crashSoundAudio = new Audio("https://github.com/unrealblood/online-drum-website/raw/main/resources/sounds/crash.mp3");

//sound play result holder
var playPromise;

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
    playPromise = kickSoundAudio.play();
    playPromise.then().catch(() => { alert("Kick sound not played"); })
}

function playSnareSound() {
    playPromise = snareSoundAudio.play();
    playPromise.then().catch(() => { alert("Snare sound not played"); })
}

function playTom1Sound() {
    playPromise = tom1SoundAudio.play();
    playPromise.then().catch(() => { alert("Tom1 sound not played"); })
}

function playTom2Sound() {
    playPromise = tom2SoundAudio.play();
    playPromise.then().catch(() => { alert("Tom2 sound not played"); })
}

function playTom3Sound() {
    playPromise = tom3SoundAudio.play();
    playPromise.then().catch(() => { alert("Tom3 sound not played"); })
}

function playTom4Sound() {
    playPromise = tom4SoundAudio.play();
    playPromise.then().catch(() => { alert("Tom4 sound not played"); })
}

function playCrashSound() {
    playPromise = crashSoundAudio.play();
    playPromise.then().catch(() => { alert("Crash sound not played"); })
}