export default class Bullet extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, 'bullet');

        this.setOrigin(0.5, 0.5);
        this.setDepth(1);

        // Agregar el sprite al juego
        scene.add.existing(this);

        // Activar las físicas para el sprite
        scene.physics.add.existing(this);

        // Configurar las propiedades de las físicas, si es necesario
        this.body.setCollideWorldBounds();
        //this.body.setSize(6, 6, true); // Para que la caja de colision sea igual al sprite.

        this.scene.add.existing(this); // Lo metemos en la escena.


        // Evento que detecta cuando choca con los limites del mapa
        //this.on('worldbounds', () => this.deactivate());

    }

    // Desactiva la bala
    deactivate() {
        //console.log("desactivar bala");
        this.setPosition(0, 0);
        this.setActive(false).setVisible(false);
    }

    // Activa la bala
    activate(x, y, desviacion) {
        //Cambio de posicion
        this.setPosition(x, y)
        
        //Activa visibilidad
        this.setActive(true).setVisible(true);
        
        //Cambia velocidades
        this.body.velocity.y = -60;
        this.body.velocity.x = desviacion;

        console.log(this);
    }

    preUpdate(t, dt) {
        // No se por que se hace pero Pablo me ha dicho que se hace
        super.preUpdate(t, dt);

        // Salida de los limites
        if (this.y <= 0) {
            //console.log(this)
            this.deactivate();
        }
    }

    //Metodo para cuando colisiona con otro objeto
    collideado() {
        console.log("Collideado bullet");
        this.deactivate();

    }
}