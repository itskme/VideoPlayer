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
    }
});

