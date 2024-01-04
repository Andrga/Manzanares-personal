import Player from "./player.js";
import Bullet from "./bullet.js";
import EnemyGen from "./enemyGen.js";

export default class Level extends Phaser.Scene {
    constructor() {
        super({ key: 'Level' });

    }

    init(data) {
        this.players = data;
    }

    create() {
        // Setting los limites del mundo
        this.physics.world.setBounds(0, 0, 256, 256);

        // Añadir imagen de fondo.
        this.background = this.add.image(this.cameras.main.centerX, 376, 'background').setOrigin(0.5, 1).setDepth(0);

        //Creacion de naves.
        this.bees = []; // Array vacio de players
        this.loadPlayers();

        //Pool de balas con grupo
        // Crear un grupo para la pool de balas
        this.bulletsPool = this.physics.add.group({
            classType: Bullet, // Clase de los elementos
            maxSize: 100, // Maximo de elementos
            runChildUpdate: true // En true ejecuta los metodos updates de los elementos
        });

        // Crear balas iniciales en la pool
        for (var i = 0; i < 100; i++) {
            let bullet = new Bullet(this, 0, 0);
            this.bulletsPool.add(bullet);
            bullet.setActive(false).setVisible(false);
        }

        this.enemyGenerator = new EnemyGen(this);
    }

    update(t, dt) {
        // Update de las naves
        for (let i = 0; i < this.bees.length; i++) {
            this.bees[i].update(dt);
        }

        // Actualiza el generado
        this.enemyGenerator.update(dt);
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
        let bullet = this.bulletsPool.get();

        if (bullet) {
            bullet.activate(x, y);
        }

    }
}