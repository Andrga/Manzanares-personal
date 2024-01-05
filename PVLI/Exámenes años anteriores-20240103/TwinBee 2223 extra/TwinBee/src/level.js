import Player from "./player.js";
import Bullet from "./bullet.js";
import EnemyGen from "./enemyGen.js";
import PowerUpGen from "./powerUpGen.js";

export default class Level extends Phaser.Scene {
    constructor() {
        super({ key: 'Level' });

    }

    init(data) {
        this.players = data;
    }

    create() {
        this.end = false;
        this.deadPlayers = 0;

        // Setting los limites del mundo
        this.physics.world.setBounds(0, 0, 256, 256);

        // Añadir imagen de fondo.
        this.background = this.add.image(this.cameras.main.centerX, 376, 'background').setOrigin(0.5, 1).setDepth(0);
        this.backgroundHCount = this.add.image(this.cameras.main.centerX, 376, 'backgroundHcont').setOrigin(0.5, 1).setDepth(0).setAlpha(0.01);



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

        // Generador de enemigos
        this.enemyGenerator = new EnemyGen(this);
        
        // Generador de powerUps
        this.powerUpGenerator = new PowerUpGen(this);

        // Deteccion de colisiones
        this.physics.add.collider(this.bulletsPool, this.enemyGenerator.enemyPool, (bullet, enemy) => this.collisionHandler(bullet, enemy));
        this.physics.add.collider(this.bees, this.enemyGenerator.enemyPool, (bee, enemy) => this.collisionHandler(bee, enemy));
        this.physics.add.collider(this.bees, this.powerUpGenerator.powerUpPool, (bee, powerUp) => this.colisionPowerUp(bee, powerUp));
    }

    update(t, dt) {
        if (!this.end) {
            if (this.background.y >= 1536) {
                this.win();
            } else {
                this.background.y += 0.5;
            }

            // Update de las naves
            for (let i = 0; i < this.bees.length; i++) {
                this.bees[i].update(dt);
            }

            // Actualiza los generadores
            this.enemyGenerator.update(dt);
            this.powerUpGenerator.update(dt);

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
    shoot(x, y, desviacion) {
        //coge una bala de la pool
        let bullet = this.bulletsPool.get();

        if (bullet) {
            bullet.activate(x, y, desviacion);
        }

    }
    colisionPowerUp(player, powerUp){
        powerUp.collideado();
        player.getPowerUp();
    }
    collisionHandler(obj1, obj2) {

        if (obj1.active && obj2.active) {
            obj1.collideado();
            obj2.collideado();
        }
    }

    win() {
        this.end = true;

        this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 70, "Win", {
            fontSize: '32px',
            color: 'green',
            fontFamily: 'gummy',
            stroke: 'white', // Color del delineado
            strokeThickness: 5 //grosor del delineado
        }).setOrigin(0.5, 0);

        for (let i = 0; i < this.bees.length; i++) {
            this.bees[i].win();
        }

        this.returnTitle();
    }

    lose() {
        this.end = true;

        //this.background.setTexture('backgroundHcont');  // Settea la textura directamente, vale con imagenes y sprites
        this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 70, "Defeat", {
            fontSize: '32px',
            color: 'green',
            fontFamily: 'gummy',
            stroke: 'white', // Color del delineado
            strokeThickness: 5 //grosor del delineado
        }).setOrigin(0.5, 0);

        this.returnTitle();
    }

    // Puedes guardar el tween en una variable y reproducirlo cuando quieras con .play();
    returnTitle() {
        this.backgroundHCount.y = this.background.y;

        // tween de opacidad del fondo
        this.tweens.add({
            targets: this.backgroundHCount,             // El objeto que se animará
            //x: 400,                        // La posición final en el eje X
            //delay: 100,                   // Espera gasta ejecutar el tween
            alpha: 1,                       // Opacidad del fondo
            duration: 3000,                // Duración de la animación en milisegundos
            ease: 'Linear',                // Función de easing (puedes cambiar a 'Ease' diferente)
            repeat: 0,                     // Número de repeticiones (0 para no repetir)
            //yoyo: false,                   // Si se debe repetir en reversa
            onComplete: () => this.scene.start('Title')
        });

    }
}