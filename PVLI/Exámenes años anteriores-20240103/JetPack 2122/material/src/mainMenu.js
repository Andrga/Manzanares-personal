export default class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenu' });
    }
    create() {
        this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 70, "JetPack", {
            fontSize: '16px',
            color: 'white',
            fontFamily: 'Pixeled',
        }).setOrigin(0.5, 0);

        this.newButton(this.cameras.main.centerX, this.cameras.main.centerY , "Easy", 'white', 2, 2);
        this.newButton(this.cameras.main.centerX, this.cameras.main.centerY + 20, "Normal", 'white', 3, 1);
        this.newButton(this.cameras.main.centerX, this.cameras.main.centerY + 40, "Hard", 'white', 5, 0.5);

    }

    // Metodo para crear botones
    newButton(x, y, text, color1, comb, frec) {
        let boton = this.add.text(x,y,text,{
            fontSize: '10px',
            color: color1,
            fontFamily: 'Pixeled',

        }).setOrigin(0.5,0).setInteractive();

        boton.on('pointerdown', ()=>{
            this.scene.start('Level', {cantidad: comb, frecuencia: frec});
        });
    }
}