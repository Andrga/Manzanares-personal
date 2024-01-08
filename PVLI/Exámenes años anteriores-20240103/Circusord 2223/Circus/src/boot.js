export default class Boot extends Phaser.Scene {
    constructor() {
        super({ key: 'Boot' });
    }

    preload(){
        // Backgrounds
        this.load.image('background', './assets/sprites/background.png');
        this.load.image('background2', './assets/sprites/background2.png');
        
        this.load.image('stars', './assets/sprites/stars.png')
        this.load.image('platform', './assets/sprites/platform.png')

        // Load Spritessheets
        this.load.spritesheet('lion', './assets/sprites/lion.png', {
            frameWidth: 36,  // Ancho de cada frame en la hoja de sprites
            frameHeight: 16  // Altura de cada frame en la hoja de sprites
        });
        this.load.spritesheet('clown', './assets/sprites/clown.png', {
            frameWidth: 16,  // Ancho de cada frame en la hoja de sprites
            frameHeight: 24  // Altura de cada frame en la hoja de sprites
        });
        this.load.spritesheet('ring', './assets/sprites/ring.png', {
            frameWidth: 26,  // Ancho de cada frame en la hoja de sprites
            frameHeight: 80  // Altura de cada frame en la hoja de sprites
        });
        this.load.spritesheet('fire', './assets/sprites/fire.png', {
            frameWidth: 25,  // Ancho de cada frame en la hoja de sprites
            frameHeight: 31  // Altura de cada frame en la hoja de sprites
        });

        // Sonidos
        this.load.audio('lose', './assets/sounds/failure.mp3');
        this.load.audio('win', './assets/sounds/final.wav');
        this.load.audio('jumpSound', './assets/sounds/jump.wav');
        this.load.audio('menuMusic', './assets/sounds/menu.mp3');
        this.load.audio('scoreSound', './assets/sounds/score.wav');
        this.load.audio('stageMusic', './assets/sounds/stage.mp3');

    }

    create(){
        this.anims.create({
            key: 'lionIdle',
            frames: this.anims.generateFrameNumbers('lion', { start: 2, end: 2 }),
            frameRate: 6,
            repeat: -1
        });
        this.anims.create({
            key: 'lionWalk',
            frames: this.anims.generateFrameNumbers('lion', { start: 0, end: 2 }),
            frameRate: 6,
            repeat: -1
        });
        this.anims.create({
            key: 'lionJump',
            frames: this.anims.generateFrameNumbers('lion', { start: 0, end: 0 }),
            frameRate: 6,
            repeat: -1
        });
        this.anims.create({
            key: 'lionDead',
            frames: this.anims.generateFrameNumbers('lion', { start: 3, end: 3 }),
            frameRate: 6,
            repeat: -1
        });
        this.anims.create({
            key: 'clownIdle',
            frames: this.anims.generateFrameNumbers('clown', { start: 0, end: 0 }),
            frameRate: 6,
            repeat: -1
        });
        this.anims.create({
            key: 'clownJump',
            frames: this.anims.generateFrameNumbers('clown', { start: 1, end: 1 }),
            frameRate: 6,
            repeat: -1
        });
        this.anims.create({
            key: 'clownDead',
            frames: this.anims.generateFrameNumbers('clown', { start: 4, end: 4 }),
            frameRate: 6,
            repeat: -1
        });
        this.anims.create({
            key: 'clownWin',
            frames: this.anims.generateFrameNumbers('clown', { start: 2, end: 3 }),
            frameRate: 3,
            repeat: -1
        });
        this.anims.create({
            key: 'fireAnim',
            frames: this.anims.generateFrameNumbers('fire', { start: 0, end: 1 }),
            frameRate: 6,
            repeat: -1
        });
        this.anims.create({
            key: 'ringAnim',
            frames: this.anims.generateFrameNumbers('ring', { start: 0, end: 1 }),
            frameRate: 6,
            repeat: -1
        })
        
        this.scene.start('Title');
    }
}