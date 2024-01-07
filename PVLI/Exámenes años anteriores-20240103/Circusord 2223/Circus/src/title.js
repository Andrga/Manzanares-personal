export default class Title extends Phaser.Scene {
    constructor() {
        super({ key: 'Title' });

    }
    
    create() {
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY - 125, 'stars').setOrigin(0.5,0.5).setScale(4,4);
        
        this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 125, 'Circus', {
            fontSize: '50px',
            color: 'white',
            fontFamily: 'arcade_classic',

        }).setOrigin(0.5, 0.5)

        this.newButton(this.cameras.main.centerX, this.cameras.main.centerY + 50, 'Easy', 50);
        this.newButton(this.cameras.main.centerX, this.cameras.main.centerY + 125, 'Medium', 100);
        this.newButton(this.cameras.main.centerX, this.cameras.main.centerY + 200, 'Hard', 200);
    }

    // Metodo para crear botones
    newButton(x, y, text, goal) {
        let boton = this.add.text(x, y, text, {
            fontSize: '25px',
            color: 'white',
            fontFamily: 'arcade_classic',

        }).setOrigin(0.5, 0).setInteractive();

        boton.on('pointerdown', () => {
            this.scene.start('Level', goal)
        });
    }
}