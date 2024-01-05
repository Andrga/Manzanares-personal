import PowerUp from "./powerUp.js";

export default class PowerUpGen {
    constructor(scene) {

        // Pool de enemigos con array, en una clase quedaria mas limpito pero lo hago aqui porque si
        this.powerUpPool = [];
        this.oldPowerUp = 0;

        // Crear enemigos iniciales en la pool
        for (var i = 0; i < 10; i++) {
            this.powerUpPool[i] = new PowerUp(scene, 0, 0);
            this.powerUpPool[i].setActive(false).setVisible(false);
        }

        // Contador aparecer enemigo
        this.elapsedTime;
        this.timeToAppear();

        //  ---Evento de tiempo para hacer tu propio contador y reloj---
        this.timeToNewPowerUp = 0;

        this.time.addEvent({
            delay: this.elapsedTime, // tiempo que dura el contador
            callback: () => {       // Funcion cuando pasa el tiempo del delay
                this.timeToAppear();
                this.PowerUpAppear();
            },
            callbackScope: this, // Donde se propaga el evento
            loop: true // Para que se haga continuamente.
        });
    }

    update(dt) {

        // Updates de los enemigos
        for (var i = 0; i < this.powerUpPool.length; i++) {
            this.powerUpPool[i].update();
        }
    }

    // Genera el tiempo de aparecer para el siguiente enemigo
    timeToAppear() {
        this.elapsedTime = Phaser.Math.Between(5, 10);
    }

    // Apatece el nuevo enemigo
    PowerUpAppear() {

        //console.log(this.oldPowerUp);
        // Activar el nuevo enemigo
        this.powerUpPool[this.oldPowerUp].activate()

        // Actualizar el old enemy para que indique el enemigo mas viejo        
        this.oldPowerUp++;

        if (this.oldPowerUp >= this.powerUpPool.length) {
            this.oldPowerUp -= this.powerUpPool.length;
        }

    }

}