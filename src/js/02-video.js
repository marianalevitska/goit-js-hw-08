import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

 const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', onPlay);
player.on('loaded', throttle(updateTime, 1000));

function onPlay() {
 player.getCurrentTime().then(function(seconds) {
    localStorage.setItem(LOCALSTORAGE_KEY, seconds);
    })
}

function updateTime() {
    const savedTime = localStorage.getItem(LOCALSTORAGE_KEY)
    player.setCurrentTime(savedTime).then(function (seconds) { 
        console.log(seconds);
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                break;
        }
    })
}
