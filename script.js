const fileInput = document.getElementById('file-input');
const videoPlayer = document.querySelector('.video-player');
const video = document.getElementById('video');
const playPauseButton = document.getElementById('play-pause');
const stopButton = document.getElementById('stop');
const progressBar = document.getElementById('progress');
const volumeBar = document.getElementById('volume');
const playbackSpeedSelect = document.getElementById('playback-speed');
const seekBackButton = document.getElementById('seek-back');
const seekForwardButton = document.getElementById('seek-forward');
const fullscreenButton = document.getElementById('fullscreen');

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        video.src = url;
        videoPlayer.style.display = 'block';
        fileInput.style.display = 'none'; 
    }
});

playPauseButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseButton.textContent = 'Pause';
    } else {
        video.pause();
        playPauseButton.textContent = 'Play';
    }
});

stopButton.addEventListener('click', () => {
    video.pause();
    video.currentTime = 0;
    playPauseButton.textContent = 'Play';
});

video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.value = progress;
});

progressBar.addEventListener('change', () => {
    const progress = progressBar.value;
    const currentTime = (progress / 100) * video.duration;
    video.currentTime = currentTime;
});

volumeBar.addEventListener('change', () => {
    const volume = volumeBar.value / 100;
    video.volume = volume;
});

playbackSpeedSelect.addEventListener('change', () => {
    const playbackSpeed = playbackSpeedSelect.value;
    video.playbackRate = playbackSpeed;
})

seekBackButton.addEventListener('click', () => {
    video.currentTime -= 15;
});

seekForwardButton.addEventListener('click', () => {
    video.currentTime += 15;
});

fullscreenButton.addEventListener('click', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
        fullscreenButton.textContent = 'Fullscreen';
    } else {
        videoPlayer.requestFullscreen();
        fullscreenButton.textContent = 'Exit FS';
    }
});