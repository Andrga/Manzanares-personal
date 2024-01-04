

export default class Player extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, player) {
        super(scene, x, y, 'ship' + player, { key: 'player' + player });

        this.setOrigin(0.5, 0)

        // Agregar el sprite al juego
        scene.add.existing(this);

        // Activar las físicas para el sprite
        scene.physics.add.existing(this);

        // Configurar las propiedades de las físicas, si es necesario
        this.setCollideWorldBounds(true);

        // Input de teclas
        this.teclas;
        this.playerKeys(player)

        // Contador disparos
        this.maxShootTime = 3
        this.elapsedShootTime = this.maxShootTime;

        // Evento que detecta cuando choca con los limites del mapa
        this.on('worldbounds', () => {
            console.log("ha salido la bala");
        });

    }

    update(dt) {
        // Teclas verticales
        if (this.teclas.arriba.isDown) {
            this.body.velocity.y = -50;
        } else if (this.teclas.abajo.isDown) {
            this.body.velocity.y = 50;
        } else {
            this.body.velocity.y = 0;
        }

        // Teclas horizontales
        if (this.teclas.derecha.isDown) {
            this.body.velocity.x = 50;
        } else if (this.teclas.izquierda.isDown) {
            this.body.velocity.x = -50;
        } else {
            this.body.velocity.x = 0;
        }

        // Disparo
        if (this.teclas.disparo.isDown && this.elapsedShootTime <= 0) {
            this.elapsedShootTime = this.maxShootTime;
            console.log("DISPARO");
            this.scene.shoot(this.x, this.y)
        }else{
            this.elapsedShootTime -= (dt/1000);
        }
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
}