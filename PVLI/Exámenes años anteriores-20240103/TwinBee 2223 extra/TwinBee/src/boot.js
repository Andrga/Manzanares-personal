export default class Boot extends Phaser.Scene {
    constructor() {
        super({ key: 'Boot' });
    }

    preload() {
        // Load images
        this.load.image('background', './assets/images/background.png');
        this.load.image('backgroundHcont', './assets/images/background_hcontrast.png');
        this.load.image('bullet', './assets/images/bullet.png');

        // Load Spritessheets
        this.load.spritesheet('ship1', './assets/images/twinbee.png', {
            frameWidth: 16,  // Ancho de cada frame en la hoja de sprites
            frameHeight: 16  // Altura de cada frame en la hoja de sprites
        });
        this.load.spritesheet('ship2', './assets/images/winbee.png', {
            frameWidth: 16,  // Ancho de cada frame en la hoja de sprites
            frameHeight: 16  // Altura de cada frame en la hoja de sprites
        });
    }

    create() {
        this.scene.start("Title");
    }
}