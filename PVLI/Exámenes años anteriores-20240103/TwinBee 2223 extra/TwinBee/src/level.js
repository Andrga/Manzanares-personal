import Player from "./player.js";
import Bullet from "./bullet.js";

export default class Level extends Phaser.Scene {
    constructor() {
        super({ key: 'Level' });

        // Setting los limites del mundo
        this.physics.world.setBounds(0, 0, 800, 600);
    }

    init(data) {
        this.players = data;
    }

    create() {
        // Añadir imagen de fondo.
        this.background = this.add.image(this.cameras.main.centerX, 376, 'background').setOrigin(0.5, 1);

        //Creacion de naves.
        this.bees = []; // Array vacio de players
        this.loadPlayers();

        // Crear un grupo para la pool de balas
        this.bullets = this.physics.add.group({
            classType: Bullet, // Clase de los elementos
            maxSize: 100, // Maximo de elementos
            runChildUpdate: false // En true ejecuta los metodos updates de los elementos
        });

        // Crear balas iniciales en la pool
        for (var i = 0; i < 100; i++) {
            let bullet = this.bullets.get(this, 0, 0);
            bullet.setActive(false).setVisible(false);
        }
    }

    update(t, dt) {
        // Update de las naves
        for (let i = 0; i < this.bees.length; i++) {
            this.bees[i].update(dt);
        }
    }

    // Creacion de los players
    loadPlayers() {
        // Creamos todos los jugadores necesarios.
        for (let i = 1; i <= this.players; i++) {
            this.bees[i - 1] = new Player(this,
                ((this.cameras.main.centerX * 2) / (this.players + 1)) * i,
                this.cameras.main.centerY + 100, i);
        }
    }

    // Dispara una bala
    shoot(x, y) {
        //coge una bala de la pool
        let bullet = this.bullets.get();

        if (bullet) {
            // Activa la bala
            bullet.activate(x, y);
        }
        
    }
}