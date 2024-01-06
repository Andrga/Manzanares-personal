export default class Meteorito extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y,) {
        super(scene, x, y, 'meteor');

        this.setDepth(2);
        this.setOrigin(0.5, 1)

        // Agregar el sprite al juego
        scene.add.existing(this);

        // Activar las físicas para el sprite
        scene.physics.add.existing(this);

        // Configurar las propiedades de las físicas, si es necesario
        this.body.setCollideWorldBounds(false);
        this.body.setSize(17, 24, true); // Para que la caja de colision sea igual al sprite.
        this.deactivate();
        
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
        
        this.body.velocity.x = Phaser.Math.Between(5, 10);
    }
    
    chocar(){
        this.body.setEnable(false);
        this.setPosition(0,0);
    }

    update(){
        if(this.y >= this.scene.cameras.main.heigh){
            this.deactivate();
        }
        console.log("fuera")
    }

}