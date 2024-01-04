export default class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, ) {
        super(scene, x, y, 'enemy');

        // Configuracion
        this.setOrigin(0.5, 0.5);
        this.setDepth(1);

        // Agregar el sprite al juego
        scene.add.existing(this);

        // Activar las físicas para el sprite
        scene.physics.add.existing(this);

        // Configurar las propiedades de las físicas, si es necesario
        //this.body.setCollideWorldBounds();
        //this.body.setSize(6, 6, true); // Para que la caja de colision sea igual al sprite.

        this.scene.add.existing(this); // Lo metemos en la escena.

    }

    deactivate(){
        // Desactivacion
        this.setActive(false).setVisible(false);
        
    }
    
    activate(){
        //Cambio de posicion
        this.setPosition(Phaser.Math.Between(10, 200), 0)
    
        //Activa visibilidad
        this.setActive(true).setVisible(true);

        this.body.velocity.y = 50;

    }

    update(){
        if(this.y>camaraPrincipal.worldView.bottom){
            console.log("ABAJO");
            this.deactivate();
        }
    }
    
}