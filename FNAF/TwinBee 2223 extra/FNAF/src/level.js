
export default class Level extends Phaser.Scene {
    constructor() {
        super({ key: 'Level' });

    }

    init() {
    }

    create() {
        this.add.image(0,0, 'backgroundHcont');
     }

    update(t, dt) {
        

    }
}