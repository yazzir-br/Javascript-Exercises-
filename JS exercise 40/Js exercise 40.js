const video = document.getElementById("video");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress-bar");
const volume = document.getElementById("volume");
const speed = document.getElementById("speed");
const current = document.getElementById("current");
const duration = document.getElementById("duration");

const videos = [
    { src: "https://vjs.zencdn.net/v/oceans.mp4" }];
   
let index = 0;

function loadVideo(i) {
    video.src = videos[i].src;
    video.load();
    play.innerText = "▶";
}

loadVideo(index);
play.onclick = () => {
    if (video.paused) {
        video.play();
        play.innerText = "⏸";
    } else {
        video.pause();
        play.innerText = "▶";
    }
};

next.onclick = () => {
    index = (index + 1) % videos.length;
    loadVideo(index);
    video.play();
    play.innerText = "⏸";
};

prev.onclick = () => {
    index = (index - 1 + videos.length) % videos.length;
    loadVideo(index);
    video.play();
    play.innerText = "⏸";
};

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    if (sec < 10) sec = "0" + sec;
    return `${min}:${sec}`;
}

video.ontimeupdate = () => {
    if (!video.duration) return;

    const percent = (video.currentTime / video.duration) * 100;
    progress.style.width = percent + "%";

    current.innerText = formatTime(video.currentTime);
    duration.innerText = formatTime(video.duration);
};

progressBar.onclick = (e) => {
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    video.currentTime = (clickX / width) * video.duration;
};

volume.oninput = (e) => {
    video.volume = e.target.value;
};

speed.onchange = (e) => {
    video.playbackRate = parseFloat(e.target.value);
};

video.onended = () => {
    next.click();
};

document.addEventListener("keydown", (e) => {
    switch (e.code) {
        case "Space":
            e.preventDefault();
            play.click();
            break;
        case "ArrowRight":
            video.currentTime = Math.min(video.currentTime + 5, video.duration);
            break;
        case "ArrowLeft":
            video.currentTime = Math.max(video.currentTime - 5, 0);
            break;
        case "ArrowUp":
            e.preventDefault();
            video.volume = Math.min(video.volume + 0.1, 1);
            volume.value = video.volume;
            break;
        case "ArrowDown":
            e.preventDefault();
            video.volume = Math.max(video.volume - 0.1, 0);
            volume.value = video.volume;
            break;
    }
});