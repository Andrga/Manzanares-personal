export default class Player extends Phaser.GameObjects.Container {
    constructor(scene, x, y,) {
        super(scene, x, y);

        this.setDepth(2);
        //this.setOrigin(0.5, 0)

        
        // Activar las físicas para el sprite
        scene.physics.add.existing(this);

        // Configurar las propiedades de las físicas, si es necesario
        this.body.setCollideWorldBounds(false);
        this.body.setSize(17, 24, true); // Para que la caja de colision sea igual al sprite.

        // Sprite del player
        this.playerSpr = scene.add.sprite(0, 0, 'player').setOrigin(0,0);
        // Anade el sprite al contenedor
        this.add([this.playerSpr]);

        // Agregar el contenedor al juego
        scene.add.existing(this);

        // ------- Otra opcion del imput pero mal hecha porque no funciona---------
        /*this.scene.input.keyboard.on('keydown-A', () => {
            this.body.velocity.x = -100;
            console.log("PULSA ESPACIO");
        });
        this.scene.input.keyboard.on('keydown-D', () => {
        });
        this.scene.input.keyboard.on('keydown-SPACE', () => {
            this.body.velocity.y = -100;
            console.log("PULSA ESPACIO");
        });
        this.scene.input.keyboard.on('keyup', () =>{
            this.body.velocity.x = 0;            
        });*/

        // Input de teclas
        this.teclas;
        this.playerKeys();

        // Propiedades
        this.tienesFuel = false;

    }

    preUpdate() {
        
        // Teclas horizontales
        if (this.teclas.derecha.isDown) {
            this.body.velocity.x = 75;
            this.playerSpr.setFlipX(false);
            //Animacion
            if (!this.playerSpr.anims.isPlaying) {
            this.playerSpr.anims.play('walk', true);}
        } else if (this.teclas.izquierda.isDown) {
            this.body.velocity.x = -75;
            this.playerSpr.setFlipX(true);
            //Animacion
            if (!this.playerSpr.anims.isPlaying) {
            this.playerSpr.anims.play('walk', true);}
        } else {
            this.body.velocity.x = 0;
            //Animacion
            this.playerSpr.anims.play('idle', true);
        }

        // Teclas verticales
        if (this.teclas.arriba.isDown) {
            this.body.velocity.y = -50;
            //Animacion
            this.playerSpr.anims.play('fly', true);
        }
    }

    update() {
        if (this.x <= 0) {
            this.x = this.scene.cameras.main.width-1;
        } else if (this.x >= this.scene.cameras.main.width) {
            this.x = 1;
        }
    }

    playerKeys() {
        this.teclas = this.scene.input.keyboard.addKeys({
            arriba: Phaser.Input.Keyboard.KeyCodes.UP,
            derecha: Phaser.Input.Keyboard.KeyCodes.RIGHT,
            izquierda: Phaser.Input.Keyboard.KeyCodes.LEFT,
        });
    }

    golpeado(){
        this.scene.lose();
    }

    addFuel(fuel){
        // Anade el sprite al contenedor
        this.add([fuel]);
        fuel.cogido();
        this.tienesFuel = true;
    }

    putFuel(fuel){
        this.tienesFuel = false;
        this.remove(fuel, false); // El segundo argumento (true) destruye el objeto eliminado
   
    }
}