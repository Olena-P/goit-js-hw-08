import Player from '@vimeo/player';

const videoPlayer = document.getElementById('vimeo-player');
const player = new Player(videoPlayer);
player.on('timeupdate', function (data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
});
const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime !== null) {
  player.setCurrentTime(parseFloat(savedTime));
}
