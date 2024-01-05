export default class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, ) {
        super(scene, x, y, 'bell');

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
        
        this.body.velocity.y = 30;
        
        // Animacion de movimiento
        this.scene.tweens.add({     //Los tweens van en la escena por eso se pone scene detras de this
            targets: this.backgroundHCount,             // El objeto que se animará
            //x: 400,                        // La posición final en el eje X
            rotation: Phaser.Math.DegToRad(45),  // El Phaser trabaja en radianes por eso tiene este metodo para pasar de grados a radianes
            //delay: 100,                   // Espera gasta ejecutar el tween
            //alpha: 1,                       // Opacidad del fondo
            duration: 2000,                // Duración de la animación en milisegundos
            ease: 'Linear',                // Función de easing (puedes cambiar a 'Ease' diferente)
            repeat: -1,                     // Número de repeticiones (0 para no repetir, -1 es infinito)
            yoyo: true,                   // Si se debe repetir en reversa
            //onComplete: () => this.scene.start('Title')
            onSart: () => console.log("WE")
        });
    }

    update(){
        if(this.y> this.scene.cameras.main.worldView.bottom){
            //console.log("ABAJO");
            this.deactivate();
        }
    }

    //Metodo para cuando colisiona con otro objeto
    collideado(){
        console.log("Collideado PowerUp");
        //this.body.setEnable(false);  // Desactivar completamente el cuerpo de colisión
        this.deactivate();
    }    
}