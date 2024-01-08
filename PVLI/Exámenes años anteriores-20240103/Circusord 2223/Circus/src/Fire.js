export default class Fire extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'fire');

        // Configuracion
        this.setOrigin(0.5, 0.5);
        this.setDepth(1);

        this.velocity = velocity;

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
        this.setActive(false).setVisible(false);
        
    }
    
    activate(){
        //Cambio de posicion
        this.setPosition(Phaser.Math.Between(10, 200), 0)
    
        //Activa visibilidad
        this.setActive(true).setVisible(true);
        
        //Animacion
        this.anims.play('rotingEnemy');

    }

    update(){
        if(this.x< this.scene.cameras.main.worldView.left){
           // console.log("ABAJO");
            this.deactivate();
        }
    }
}