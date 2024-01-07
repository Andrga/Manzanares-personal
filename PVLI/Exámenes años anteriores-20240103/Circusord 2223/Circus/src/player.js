export default class Player extends Phaser.GameObjects.Container {
    constructor(scene, x, y) {
        super(scene, x, y);

        // -----Fisicas al contenedor-----
        // Activar las físicas para el sprite
        scene.physics.add.existing(this);

        // Configurar las propiedades de las físicas, si es necesario
        this.body.setCollideWorldBounds(false);
        this.body.setSize(144, 64, true); // Para que la caja de colision sea igual al sprite.


        //-----Añadir sprites al contenedor-----
        this.lionSpr = this.scene.add.sprite(0, 0, 'lion').setScale(4, 4).setOrigin(0, 0);
        this.clownSpr = this.scene.physics.add.sprite(0, 0, 'clown').setScale(4, 4).setOrigin(0, 0).setImmovable(true);
        this.clownSpr.body.allowGravity = false; // no le afecta la gravedad

        // Anade el sprite al contenedor
        this.add([this.lionSpr, this.clownSpr]);

        // Agregar el contenedor al juego
        scene.add.existing(this);

        //-----Parametros de la clase-----
        // booleano para comprobar si toca el suelo
        this.floor = false;
        // Posicion inicial del player
        this.posxOrigin = x
        // Input de teclas
        this.teclas;
        this.playerKeys();
    }
    
    preUpdate(){
        // Teclas horizontales
        if(this.floor){
            if (this.teclas.derecha.isDown) {
                this.body.velocity.x = 100;
            } else if (this.teclas.izquierda.isDown) {
                this.body.velocity.x = -100;
            } else {
                this.body.velocity.x = 0;
            }
            // Teclas verticales
            if (this.teclas.arriba.isDown) {
                this.body.velocity.y = -400;
                this.floor = false;
            }
        }

        if (this.x < this.posxOrigin){this.x = this.posxOrigin;}

    }

    onFloor(){
        this.floor = true;
    }

    playerKeys() {
        this.teclas = this.scene.input.keyboard.addKeys({
            arriba: Phaser.Input.Keyboard.KeyCodes.UP,
            derecha: Phaser.Input.Keyboard.KeyCodes.RIGHT,
            izquierda: Phaser.Input.Keyboard.KeyCodes.LEFT,
        });
    }

}