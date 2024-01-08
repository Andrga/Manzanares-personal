export default class Ring extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'ring');

        // Configuracion
        this.setOrigin(0.5, 0.5).setScale(3,3).setDepth(1);

        // Agregar el sprite al juego
        scene.add.existing(this);

        // Activar las físicas para el sprite
        scene.physics.add.existing(this);
        //settea inmovible y tamaño
        this.body.setImmovable(true).setSize(3,80);
        this.body.setAllowGravity(false); // no le afecta la gravedad
        // Desfasar el cuerpo físico con respecto al sprite
        this.body.setOffset(10, 80); // Desplazar 10 píxeles en el eje X
        this.body.setCollideWorldBounds(true);


        // Configurar las propiedades de las físicas, si es necesario
        //this.body.setCollideWorldBounds();
        //this.body.setSize(6, 6, true); // Para que la caja de colision sea igual al sprite.

        this.scene.add.existing(this); // Lo metemos en la escena.

        // Animacion del anillo
        this.anims.play('ringAnim'); // Ponemos la animacion del aro.

    }

    deactivate(){
        // Desactivacion
        this.setPosition(0,0);
        //this.body.velocity.y = 0;
        this.body.velocity.x = 0;
        this.setActive(false).setVisible(false);
        
    }
    
    activate(){
        //Cambio de posicion
        this.setPosition(this.scene.cameras.main.worldView.right - 13, 410)
    
        //Activa visibilidad
        this.setActive(true).setVisible(true);
        //settea inmovible y tamaño
        this.body.setImmovable(true);
        this.body.setAllowGravity(false); // no le afecta la gravedad

        //Velocidad del objeto
        this.body.velocity.x = -60;
        this.body.velocity.y = 0;

    }

    update(){
        if(this.x< this.scene.cameras.main.worldView.left){
           // console.log("ABAJO");
            this.deactivate();
        }
    }

    stop(){
        this.body.velocity.x = 0;
        this.body.enable = false;

    }
}