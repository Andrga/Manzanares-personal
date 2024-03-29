export default class Generador extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, obstaculos, secuencias) {
        super(scene, x, y);

        this.scene.add.existing(this);
        this.arraySec = secuencias;
        this.arrayObs = obstaculos;

        console.log("Generador: generador de cosas hecho.");
    }
    preUpdate(t, dt) {
        super.preUpdate(t, dt);
    }
    update() {

    }
    secuenciaGenerador() {
        let i = Math.floor(Math.random() * this.arraySec.length);
        return this.arraySec[i];
    }
    osbtaculoGenerador() {
        let i = Math.floor(Math.random() * this.arrayObs.length);
        return this.arrayObs[i];
    }
}