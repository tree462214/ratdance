const video = document.getElementById('video');
const audio = document.getElementById('audio');
const button = document.getElementById('button');

button.addEventListener('mousedown', startPress);
button.addEventListener('touchstart', startPress);

button.addEventListener('mouseup', endPress);
button.addEventListener('mouseleave', endPress);
button.addEventListener('touchend', endPress);
button.addEventListener('touchcancel', endPress);

function startPress() {

    video.loop = true;
    audio.loop = true;

    audio.volume = 0.5; 

    audio.play();
    video.play();
}

function endPress() {
    audio.pause();
    video.pause();

    video.loop = false;
    audio.loop = false;
}







