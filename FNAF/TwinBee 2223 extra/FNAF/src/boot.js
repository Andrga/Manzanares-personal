export default class Boot extends Phaser.Scene {
    constructor() {
        super({ key: 'Boot' });
    }

    preload() {
        // Load images
        this.load.image('background', './assets/images/background.png');
        this.load.image('backgroundHcont', './assets/images/background_hcontrast.png');
        this.load.image('bell', './assets/images/green.png');

        // Sonidos
    }

    create() {

        this.scene.start('Title');
    }
}