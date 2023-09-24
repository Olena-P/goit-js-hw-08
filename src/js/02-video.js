import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoPlayer = document.getElementById('vimeo-player');
const player = new Player(videoPlayer);

const updateLocalStorage = throttle(function (data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000);

player.on('timeupdate', function (data) {
  updateLocalStorage(data);
});

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime !== null) {
  player.setCurrentTime(parseFloat(savedTime));
}
