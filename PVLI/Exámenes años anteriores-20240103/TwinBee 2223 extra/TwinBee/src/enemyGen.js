import Enemy from "./enemy.js";

export default class EnemyGen {
    constructor(scene) {

        // Pool de enemigos con array, en una clase quedaria mas limpito pero lo hago aqui porque si
        this.enemyPool = [];
        this.oldEnemy = 0;

        // Crear enemigos iniciales en la pool
        for (var i = 0; i < 10; i++) {
            this.enemyPool[i] = new Enemy(scene, 0, 0);
            this.enemyPool[i].setActive(false).setVisible(false);
        }

        // Contador aparecer enemigo
        this.elapsedTime;
        this.timeToAppear();
    }

    update(dt) {
        //Contador para que aparezca nuevo enemigo
        if (this.elapsedTime <= 0) {
            this.enemyAppear();
            this.timeToAppear();
        } else {
            this.elapsedTime -= dt / 1000;
        }

        // Updates de los enemigos
        for (var i = 0; i < this.enemyPool.length; i++) {
            this.enemyPool[i].update;
        }
    }

    // Genera el tiempo de aparecer para el siguiente enemigo
    timeToAppear() {
        this.elapsedTime = Phaser.Math.Between(5, 10);
    }

    // Apatece el nuevo enemigo
    enemyAppear() {
        
        console.log(this.oldEnemy);
        // Activar el nuevo enemigo
        this.enemyPool[this.oldEnemy].activate()
        
        // Actualizar el old enemy para que indique el enemigo mas viejo        
        this.oldEnemy++;

        if (this.oldEnemy >= this.enemyPool.length) {
            this.oldEnemy -= this.enemyPool.length;
        }
        
    }

}