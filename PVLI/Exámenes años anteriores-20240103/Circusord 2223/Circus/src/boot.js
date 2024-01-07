export default class Boot extends Phaser.Scene {
    constructor() {
        super({ key: 'Boot' });
    }

    preload(){
        // Backgrounds
        this.load.image('background', './assets/sprites/background.png');
        this.load.image('background2', './assets/sprites/background2.png');
        
        this.load.image('stars', './assets/sprites/stars.png')

        // Load Spritessheets
        this.load.spritesheet('lion', './assets/sprites/lion.png', {
            frameWidth: 36,  // Ancho de cada frame en la hoja de sprites
            frameHeight: 16  // Altura de cada frame en la hoja de sprites
        });
        this.load.spritesheet('clown', './assets/sprites/clown.png', {
            frameWidth: 16,  // Ancho de cada frame en la hoja de sprites
            frameHeight: 24  // Altura de cada frame en la hoja de sprites
        });
    }

    create(){
        this.scene.start('Title');
    }
}