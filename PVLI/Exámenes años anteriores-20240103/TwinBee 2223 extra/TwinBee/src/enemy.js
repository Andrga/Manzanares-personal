export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, player) {
        super(scene, x, y, 'ship' + player, { key: 'player' + player });

        this.setOrigin(0.5, 0)

        // Agregar el sprite al juego
        scene.add.existing(this);

        // Activar las físicas para el sprite
        scene.physics.add.existing(this);

        // Configurar las propiedades de las físicas, si es necesario
        this.setCollideWorldBounds(true);
    }
    
}