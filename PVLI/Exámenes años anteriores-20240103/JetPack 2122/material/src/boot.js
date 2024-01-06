export default class Boot extends Phaser.Scene {
    constructor() {
        super({ key: 'Boot' });
    }

    preload() {

        // load the PNG file
        this.load.image('base_tiles', './assets/sprites/tileset.png');
        this.load.image('spaceShip', './assets/sprites/spaceship.png');
        this.load.image('fuel', './assets/sprites/fuel.png');

        // load the JSON file
        this.load.tilemapTiledJSON('tilemap', './assets/map/tilemap.json');

        // Load Spritessheets
        this.load.spritesheet('player', './assets/sprites/jetpac.png', {
            frameWidth: 17,  // Ancho de cada frame en la hoja de sprites
            frameHeight: 24  // Altura de cada frame en la hoja de sprites
        });
        this.load.spritesheet('meteor', './assets/sprites/meteor.png', {
            frameWidth: 16,  // Ancho de cada frame en la hoja de sprites
            frameHeight: 14  // Altura de cada frame en la hoja de sprites
        });
        
        // Carga el archivo de sonido en el método preload
        this.load.audio('win', './assets/sounds/win.wav');
        //this.load.audio('win', './assets/sounds/win.wav');
        this.load.audio('lose', './assets/sounds/lose.wav');
    }

    create() {
        //player
        this.anims.create({
            key: 'idle',     // Nombre único de la animación
            frames: this.anims.generateFrameNumbers('player', { start: 4, end: 4 }),  // Rango de frames a utilizar
            frameRate: 7,              // Velocidad de la animación (frames por segundo)
            repeat: -1               // -1 para que la animación se repita indefinidamente
        });
        this.anims.create({
            key: 'walk',     // Nombre único de la animación
            frames: this.anims.generateFrameNumbers('player', { start: 4, end: 7 }),  // Rango de frames a utilizar
            frameRate: 7,              // Velocidad de la animación (frames por segundo)
            repeat: -1                  // -1 para que la animación se repita indefinidamente
        });this.anims.create({
            key: 'fly',     // Nombre único de la animación
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),  // Rango de frames a utilizar
            frameRate: 7,              // Velocidad de la animación (frames por segundo)
            repeat: -1                  // -1 para que la animación se repita indefinidamente
        });

        this.scene.start('MainMenu');
    }
}