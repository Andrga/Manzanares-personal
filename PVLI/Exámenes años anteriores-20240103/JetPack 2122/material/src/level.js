export default class Level extends Phaser.Scene {
    constructor() {
        super({ key: 'Level' });
    }

    init() {

    }

    create() {
        this.startMap();
    }

    startMap(){
        
        // create the Tilemap ('tilemap' key del JSON)
        const map = this.make.tilemap({ key: 'tilemap' })

        // add the tileset image we are using ('ground_ts' nombre del tileset(ver el JSON), 'base_tiles' nombre de la imagen del tileset)
        const tileset = map.addTilesetImage('ground_ts', 'base_tiles')

        // create the layers we want in the right order
        //const BackgroundLayer = map.createLayer("Background", tileset, 0, 0);

        // "Ground" layer will be on top of "Background" layer ('ground' nombre de la layer)
        const aboveLayer = map.createLayer("ground", tileset, 0, 0);

        // colision por propiedad (si el tile tiene la propiedad collides en true entonces tendra colision)
        // worldLayer.setCollisionByProperty({ collides: true }); // Mirar la api para encontrar otro tipo de colisiones
    }
}