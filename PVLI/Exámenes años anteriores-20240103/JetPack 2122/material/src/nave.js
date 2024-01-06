export default class Ship extends Phaser.GameObjects.Container {
    constructor(scene, x, y, maxPunt) {
        super(scene, x, y);

        this.setDepth(2);
        //this.setOrigin(0.5,1);

        // Activar las físicas para el sprite
        scene.physics.add.existing(this);

        // Configurar las propiedades de las físicas, si es necesario
        this.body.setCollideWorldBounds(false);
        this.body.setSize(17, 48, true); // Para que la caja de colision sea igual al sprite.

        this.body.isTrigger = true; // detecta colision pero no choca
        this.body.allowGravity = false; // no le afecta la gravedad

        // Puntuacion
        this.maxPunt = maxPunt;
        this.currentPunt = 0;


        // Sprite del player
        this.shipSpr = scene.add.sprite(0, 0, 'spaceShip').setOrigin(0, 0);
        this.textRemains = scene.add.text(8, - 10, this.currentPunt + "/" + this.maxPunt, {
            fontSize: '7px',
            color: 'white',
            fontFamily: 'Pixeled',

        }).setOrigin(0.5, 0.5)

        //console.log(this.textRemains);
        // Anade el sprite al contenedor
        this.add([this.shipSpr, this.textRemains]);

        // Agregar el contenedor al juego
        scene.add.existing(this);
    }

    update() {
        if (this.currentPunt >= this.maxPunt) {
            this.win();
        } else {
            this.textRemains.setText(this.currentPunt + "/" + this.maxPunt);
        }
    }

    putFuel() {
        this.currentPunt++;
    }

    win(){
        this.textRemains.setVisible(false).setActive(false);
        this.scene.win();
    }
}
