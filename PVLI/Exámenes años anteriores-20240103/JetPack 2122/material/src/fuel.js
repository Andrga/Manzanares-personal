export default class Fuel extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y,) {
        super(scene, x, y, 'fuel');

        this.setDepth(2);
        this.setOrigin(0.5, 1)

        // Agregar el sprite al juego
        scene.add.existing(this);

        // Activar las físicas para el sprite
        scene.physics.add.existing(this);

        // Configurar las propiedades de las físicas, si es necesario
        this.body.setCollideWorldBounds(false);
        this.body.setSize(17, 24, true); // Para que la caja de colision sea igual al sprite.
    }

    cogido(){
        this.setActive(false);
        this.setPosition(0,0);
    }

}