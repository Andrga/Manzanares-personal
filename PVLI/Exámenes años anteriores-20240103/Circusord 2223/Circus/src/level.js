import Player from "./player.js";

export default class Level extends Phaser.Scene {
    constructor() {
        super({ key: 'Level' });

    }

    init(data) {
        this.goal = data;
    }

    create() {
        // -----Fondos-----
        this.backgrounds = [];
        this.lastbackground = 0;

        for (let i = 1; i <= 4; i++) {
            // Calcula la posicion x
            let x = 0;
            //console.log(i - 1);
            if (i - 1 > 0) {
                //console.log("no es cero")
                //console.log(this.backgrounds[i - 2]);
                x = this.backgrounds[i - 2].width;
            }


            if (i % 2 === 0) {
                const background = (this.add.image(x, this.cameras.main.height, 'background2').setOrigin(0, 1));
                this.backgrounds.push(background);
                //console.log(i-1);
            } else {
                const background = (this.add.image(x, this.cameras.main.height, 'background').setOrigin(0, 1));
                this.backgrounds.push(background);
                //console.log(i-1);
            }
        }
        
        console.log(this.backgrounds);
        // -----Suelo-----
        // Crear un objeto this.floor para dibujar el cuadrado
        this.floor = this.add.graphics();

        // Dibujar el cuadrado
        this.floor.fillStyle('0x000000').fillRect(0, 0, (this.goal*800)/10, 120).generateTexture();
        this.floor.setPosition(0, this.cameras.main.height - 120)

        // Habilitar físicas en el graphic
        this.physics.world.enable(this.floor);

        // Configurar el cuerpo del sprite como invisible
        //this.floor.body.enable = false;

        this.floor.body.setSize((this.goal*800)/10, 260).setImmovable(true);
        //this.floor.body.setCollideWorldBounds(true);
        this.floor.body.allowGravity = false; // no le afecta la gravedad
        //cube.body.setBounce(1, 1);
        //cube.body.setVelocity(100, 200);

        // -----Player-----
        this.player = new Player(this, 50, this.cameras.main.height - 304);

        console.log(this.player.x + "/" + this.player.y)

        //-----Colisiones-----
        this.physics.add.collider(this.player, this.floor, () => {
            this.player.onFloor();
        });

        // Iniciar el seguimiento de la cámara al jugador
        this.cameras.main.startFollow(this.player, true, 1, 0, -(this.cameras.main.width / 2 - 50), 76);
        //this.cameras.main.setFollowOffset(0, 0); // Desplazamiento en el eje Y (0 en este caso)

    }

    update() {
        if (this.cameras.main.worldView.left >= this.backgrounds[this.lastbackground].x + this.backgrounds[this.lastbackground].width) {
            console.log(this.backgrounds.length - this.lastbackground-1);
            // Pone el ultimo fondo a la derecha del todo
            this.backgrounds[this.lastbackground].x = this.backgrounds[this.backgrounds.length - this.lastbackground-1].x + this.backgrounds[this.lastbackground].width;

            // Actualizacion del last background
            this.lastbackground++;
            if (this.lastbackground >= this.backgrounds.length) {
                this.lastbackground = 0;
            }
        }
    }

}