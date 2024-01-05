export default class Boot extends Phaser.Scene {
    constructor() {
        super({ key: 'Boot' });
    }

    preload() {
        // Load images
        this.load.image('background', './assets/images/background.png');
        this.load.image('backgroundHcont', './assets/images/background_hcontrast.png');
        this.load.image('bullet', './assets/images/bullet.png');
        this.load.image('bell', './assets/images/green.png');

        // Load Spritessheets
        this.load.spritesheet('ship1', './assets/images/twinbee.png', {
            frameWidth: 16,  // Ancho de cada frame en la hoja de sprites
            frameHeight: 16  // Altura de cada frame en la hoja de sprites
        });
        this.load.spritesheet('ship2', './assets/images/winbee.png', {
            frameWidth: 16,  // Ancho de cada frame en la hoja de sprites
            frameHeight: 16  // Altura de cada frame en la hoja de sprites
        });
        this.load.spritesheet('enemy', './assets/images/enemy.png', {
            frameWidth: 16,  // Ancho de cada frame en la hoja de sprites
            frameHeight: 16  // Altura de cada frame en la hoja de sprites
        });

        // Sonidos
    }

    create() {
        //Animacion por frame
        this.anims.create({
            key: 'rotingEnemy',     // Nombre único de la animación
            frames: this.anims.generateFrameNumbers('enemy', { start: 0, end: 3 }),  // Rango de frames a utilizar
            frameRate: 10,              // Velocidad de la animación (frames por segundo)
            repeat: -1                  // -1 para que la animación se repita indefinidamente
        });

        //Nave 1
        this.anims.create({
            key: 'idleNave1',     // Nombre único de la animación
            frames: this.anims.generateFrameNumbers('ship1', { start: 0, end: 0 }),  // Rango de frames a utilizar
            frameRate: 10,              // Velocidad de la animación (frames por segundo)
            repeat: -1                  // -1 para que la animación se repita indefinidamente
        });
        this.anims.create({
            key: 'leftNave1',     // Nombre único de la animación
            frames: this.anims.generateFrameNumbers('ship1', { start: 1, end: 1 }),  // Rango de frames a utilizar
            frameRate: 10,              // Velocidad de la animación (frames por segundo)
            repeat: -1                  // -1 para que la animación se repita indefinidamente
        });
        this.anims.create({
            key: 'rightNave1',     // Nombre único de la animación
            frames: this.anims.generateFrameNumbers('ship1', { start: 2, end: 2 }),  // Rango de frames a utilizar
            frameRate: 10,              // Velocidad de la animación (frames por segundo)
            repeat: -1                  // -1 para que la animación se repita indefinidamente
        });
        this.anims.create({
            key: 'shootNave1',     // Nombre único de la animación
            frames: this.anims.generateFrameNumbers('ship1', { start: 3, end: 3 }),  // Rango de frames a utilizar
            frameRate: 10,              // Velocidad de la animación (frames por segundo)
            repeat: -1                  // -1 para que la animación se repita indefinidamente
        });

        //Nave 2
        this.anims.create({
            key: 'idleNave2',     // Nombre único de la animación
            frames: this.anims.generateFrameNumbers('ship2', { start: 0, end: 0 }),  // Rango de frames a utilizar
            frameRate: 10,              // Velocidad de la animación (frames por segundo)
            repeat: -1                  // -1 para que la animación se repita indefinidamente
        });
        this.anims.create({
            key: 'leftNave2',     // Nombre único de la animación
            frames: this.anims.generateFrameNumbers('ship2', { start: 1, end: 1 }),  // Rango de frames a utilizar
            frameRate: 10,              // Velocidad de la animación (frames por segundo)
            repeat: -1                  // -1 para que la animación se repita indefinidamente
        });
        this.anims.create({
            key: 'rightNave2',     // Nombre único de la animación
            frames: this.anims.generateFrameNumbers('ship2', { start: 2, end: 2 }),  // Rango de frames a utilizar
            frameRate: 10,              // Velocidad de la animación (frames por segundo)
            repeat: -1                  // -1 para que la animación se repita indefinidamente
        });
        this.anims.create({
            key: 'shootNave2',     // Nombre único de la animación
            frames: this.anims.generateFrameNumbers('ship2', { start: 3, end: 3 }),  // Rango de frames a utilizar
            frameRate: 10,              // Velocidad de la animación (frames por segundo)
            repeat: -1                  // -1 para que la animación se repita indefinidamente
        });



        this.scene.start("Title");
    }
}