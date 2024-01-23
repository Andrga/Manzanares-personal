
export default class Title extends Phaser.Scene {
    constructor() {
        super({ key: 'Title' });
    }

    create() {
        this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 70, "FNAF", {
            fontSize: '32px',
            color: 'green',
            fontFamily: 'gummy',
            stroke: 'white', // Color del delineado
            strokeThickness: 5 //grosor del delineado
        }).setOrigin(0.5, 0);

        this.newButton(this.cameras.main.centerX, this.cameras.main.centerY + 70, "Play", 'blue', 'white');

    }

    // Metodo para crear botones
    newButton(x, y, text, color1, color2) {
        let boton = this.add.text(x,y,text,{
            fontSize: '25px',
            color: color1,
            fontFamily: 'gummy',
            stroke: color2, // Color del delineado
            strokeThickness: 5 //grosor del delineado

        }).setOrigin(0.5,0).setInteractive();

        boton.on('pointerdown', ()=>{
            this.scene.start('Level')
        });
    }
}