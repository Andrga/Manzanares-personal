export default class Boot extends Phaser.Scene {
    constructor() {
        super({ key: 'Boot' });
    }

    preload() {

        // load the PNG file
        this.load.image('base_tiles', './assets/sprites/tileset.png');

        // load the JSON file
        this.load.tilemapTiledJSON('tilemap', './assets/map/tilemap.json');
    }

    create() {
        this.scene.start('MainMenu');
    }
}