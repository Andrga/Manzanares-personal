import Player from "./player.js";
import Fuel from "./fuel.js";

export default class Level extends Phaser.Scene {
    constructor() {
        super({ key: 'Level' });
    }

    init() {

    }

    create() {
        
        // create the Tilemap ('tilemap' key del JSON)
        const map = this.make.tilemap({ key: 'tilemap' })

        // add the tileset image we are using ('ground_ts' nombre del tileset(ver el JSON), 'base_tiles' nombre de la imagen del tileset)
        const tileset = map.addTilesetImage('ground_ts', 'base_tiles')

        // create the layers we want in the right order
        //const BackgroundLayer = map.createLayer("Background", tileset, 0, 0);

        // "Ground" layer will be on top of "Background" layer ('ground' nombre de la layer)
        const groundLayer = map.createLayer("ground", tileset, 0, 0);

        // colision por propiedad (si el tile tiene la propiedad collides en true entonces tendra colision)
        // worldLayer.setCollisionByProperty({ collides: true }); // Mirar la api para encontrar otro tipo de colisiones
        // groundLayer.setCollisionByExclusion(0, true);
        groundLayer.setCollisionBetween(1, 3); // se puede añadir tambien al map y luego especificar layer en caso necesario
        
        this.player = new Player(this, 0,0);
        
        
        // Setting los limites del mundo
        this.physics.world.setBounds(0, 0, 256, 192);
        // Aplicando el wrap
        // this.physics.world.wrap(this.player);  // Este metodo no funciona
        
        this.fuel = new Fuel(this, 50, 0);

        // Añadimos el collider porque si no no colisiona
        this.physics.add.collider(this.player, groundLayer);
        this.physics.add.collider(this.fuel, groundLayer);
        this.physics.add.collider(this.player, this.fuel,  (player, fuel) => this.colisionHandler(player, fuel));

    }

    update(){
        this.player.update();
    }

    colisionHandler(player, fuel){
        player.addFuel(fuel);
    }
}