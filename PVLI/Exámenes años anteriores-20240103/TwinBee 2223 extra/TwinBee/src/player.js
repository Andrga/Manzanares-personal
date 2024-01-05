export default class Bullet extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, player) {
        super(scene, x, y, 'ship' + player);

        this.setDepth(2);
        this.setOrigin(0.5, 0)

        // Agregar el sprite al juego
        scene.add.existing(this);

        // Activar las físicas para el sprite
        scene.physics.add.existing(this);

        // Configurar las propiedades de las físicas, si es necesario
        this.body.setCollideWorldBounds(true);
        this.body.setSize(16, 16, true); // Para que la caja de colision sea igual al sprite.

        // Input de teclas
        this.teclas;
        this.playerKeys(player);

        // Contador disparos
        this.maxShootTime = 1;
        this.elapsedShootTime = this.maxShootTime;

        // Evento que detecta cuando choca con los limites del mapa
        

    }

    update(dt) {
        // Teclas verticales
        if (this.teclas.arriba.isDown) {
            this.body.velocity.y = -75;
        } else if (this.teclas.abajo.isDown) {
            this.body.velocity.y = 75;
        } else {
            this.body.velocity.y = 0;
        }

        // Teclas horizontales
        if (this.teclas.derecha.isDown) {
            this.body.velocity.x = 75;
        } else if (this.teclas.izquierda.isDown) {
            this.body.velocity.x = -75;
        } else {
            this.body.velocity.x = 0;
        }

        // Disparo
        if (this.teclas.disparo.isDown && this.elapsedShootTime <= 0) {
            this.elapsedShootTime = this.maxShootTime;
            console.log("DISPARO");
            this.scene.shoot(this.x, this.y)
        } else {
            this.elapsedShootTime -= (dt / 1000);
        }
        //console.log(this.x + "/" + this.y)
    }

    // Asignacion de las teclas segun el jugador que sea
    playerKeys(player) {
        if (player === 1) {
            // Teclas para el player 1
            this.teclas = this.scene.input.keyboard.addKeys({
                arriba: Phaser.Input.Keyboard.KeyCodes.W,
                derecha: Phaser.Input.Keyboard.KeyCodes.D,
                abajo: Phaser.Input.Keyboard.KeyCodes.S,
                izquierda: Phaser.Input.Keyboard.KeyCodes.A,
                disparo: Phaser.Input.Keyboard.KeyCodes.SPACE
            });
        } else {
            // Teclas para el player 2
            this.teclas = this.scene.input.keyboard.addKeys({
                arriba: Phaser.Input.Keyboard.KeyCodes.UP,
                derecha: Phaser.Input.Keyboard.KeyCodes.RIGHT,
                abajo: Phaser.Input.Keyboard.KeyCodes.DOWN,
                izquierda: Phaser.Input.Keyboard.KeyCodes.LEFT,
                disparo: Phaser.Input.Keyboard.KeyCodes.ENTER
            });
        }
    }

    win(){ 
        this.scene.tweens.add({    
            targets: this,             // El objeto que se animará
            y: -10,                        // La posición final en el eje X
            duration: 3000,                // Duración de la animación en milisegundos
            ease: 'Linear',                // Función de easing (puedes cambiar a 'Ease' diferente)
            repeat: 0        
        })
    }

    //Metodo para cuando colisiona con otro objeto
    collideado(){
        console.log("collideado player");

        // Desactiva al player
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;
        this.body.setEnable(false);  // Desactivar completamente el cuerpo de colisión
        this.setActive(false).setVisible(false);

        // Metodo que gestiona la perdida
        this.scene.lose();
    }
}