
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player')
const LOCAL_STOREGE_KEY = "videoplayer-current-time";

const player = new Player(iframe);

 player.on('timeupdate', throttle(onTimeupdateLocalStorage, 500));

 function onTimeupdateLocalStorage(e) {
        localStorage.setItem(LOCAL_STOREGE_KEY, JSON.stringify(e.seconds))
    };

window.addEventListener('load', function onCurrentTime () {
    const secondsCurrentTime = localStorage.getItem(LOCAL_STOREGE_KEY) || 0;
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

