
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player')

const player = new Player(iframe);

 player.on('timeupdate', throttle(onTimeupdateLocalStorage, 500));

 function onTimeupdateLocalStorage(e) {
        localStorage.setItem("videoplayer-current-time", JSON.stringify(e))
    };

window.addEventListener('load', function onCurrentTime () {
    const objCurrentTime = JSON.parse(localStorage.getItem("videoplayer-current-time")) || 0;
    const secondsCurrentTime = Number(objCurrentTime.seconds);
    player.setCurrentTime(secondsCurrentTime).then(function(seconds) {
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                break;
    
            default:
                break;
        }
    });
})

