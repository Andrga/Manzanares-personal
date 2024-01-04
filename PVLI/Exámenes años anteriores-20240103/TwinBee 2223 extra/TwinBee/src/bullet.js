
export default class Bullet extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'bullet', { key: 'Bullet' });

        this.setOrigin(0.5, 0.5)

        // Agregar el sprite al juego
        scene.add.existing(this);

        // Activar las físicas para el sprite
        scene.physics.add.existing(this);

        // Configurar las propiedades de las físicas, si es necesario
        this.setCollideWorldBounds(true); // Choca co los bordes del mundo

        // Evento que detecta cuando choca con los limites del mapa
        this.on('worldbounds', () => {
            console.log("ha salido la bala");
            this.setActive(false).setVisible(false);
        });

    }

    activate(x, y) {
        // Cambia posicion
        this.x = x;
        this.y = y;

        // Activar y mostrar la bala
        this.setActive(true).setVisible(true);

        // Asignar la velocidad de la bala
        this.setVelocityY(-250);
    }
}