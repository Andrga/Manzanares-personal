import Level from './level.js';
import MainMenu from './mainMenu.js';
import Boot from './boot.js'

window.onload = ()=>{

    const config = {
        type: Phaser.AUTO,
        scale: {
            width: 256,
            height: 192,
            zoom: 3,
            autoCenter: Phaser.Scale.Center.CENTER_HORIZONTALLY
        },
        pixelArt: true,
        scene: [ Boot, MainMenu, Level ],
        physics: { 
            default: 'arcade', 
            arcade: { 
                gravity: { y: 200 }, 
                debug: true 
            },
            checkCollision: {
                up: true,
                down: true,
                left: true,
                right: true
            }
        }
        /*audio: {
            disableWebAudio: false // Habilitar Web Audio API (predeterminado)
        }*/
    };

    new Phaser.Game(config);
};