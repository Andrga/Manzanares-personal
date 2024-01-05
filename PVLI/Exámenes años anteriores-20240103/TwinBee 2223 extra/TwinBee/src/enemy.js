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
        this.setPosition(0,0);
        this.body.velocity.y = 0;
        this.body.velocity.x = 0;
        this.setActive(false).setVisible(false);
        
    }
    
    activate(){
        //Cambio de posicion
        this.setPosition(Phaser.Math.Between(10, 200), 0)
    
        //Activa visibilidad
        this.setActive(true).setVisible(true);

        this.body.velocity.y = 60;

    }

    update(){
        if(this.y> this.scene.cameras.main.worldView.bottom){
            console.log("ABAJO");
            this.deactivate();
        }
    }

    //Metodo para cuando colisiona con otro objeto
    collideado(){
        console.log("Collideado Enemy");
        //this.body.setEnable(false);  // Desactivar completamente el cuerpo de colisión
        this.deactivate();
    }    
}