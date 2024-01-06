import Player from "./player.js";
import Fuel from "./fuel.js";
import Ship from "./nave.js";
import Meteorito from "./meteoritos.js";

export default class Level extends Phaser.Scene {
    constructor() {
        super({ key: 'Level' });
    }

    init(data) {
        this.maxfuel = data.cantidad;
        this.meteorCooldown = data.frecuencia * 1000;
    }

    create() {

        // -----Configuracion-------
        // Setting los limites del mundo
        this.physics.world.setBounds(0, 0, 256, 192);
        // Aplicando el wrap
        // this.physics.world.wrap(this.player);  // Este metodo no funciona



        // -----Sonidos------
        this.winSound = this.sound.add('win');
        this.loseSound = this.sound.add('lose');
        // También puedes configurar opciones como volumen, bucle, etc.
        // this.miSonido.play({ volume: 0.5, loop: true });


        // -----Tile Map-----
        // create the Tilemap ('tilemap' key del JSON)
        const map = this.make.tilemap({ key: 'tilemap' })

        // add the tileset image we are using ('ground_ts' nombre del tileset(ver el JSON), 'base_tiles' nombre de la imagen del tileset)
        const tileset = map.addTilesetImage('ground_ts', 'base_tiles')

        // create the layers we want in the right order
        //const BackgroundLayer = map.createLayer("Background", tileset, 0, 0);

        // "Ground" layer will be on top of "Background" layer ('ground' nombre de la layer)
        const groundLayer = map.createLayer("ground", tileset, 0, 0);

        // colision por propiedad (si el tile tiene la propiedad collides en true entonces tendra colision)
        // worldLayer.setCollisionByProperty({ collides: true }); // Mirar la api para encontrar otro tipo de colisiones
        // groundLayer.setCollisionByExclusion(0, true);
        groundLayer.setCollisionBetween(1, 3); // se puede añadir tambien al map y luego especificar layer en caso necesario



        // ------Objetos del juego-----
        this.player = new Player(this, 0, 0);
        // Meteoritos
        // Crear un grupo para la pool de meteoritos
        this.meteorPool = this.physics.add.group({
            classType: Meteorito, // Clase de los elementos
            maxSize: 10, // Maximo de elementos
            runChildUpdate: true // En true ejecuta los metodos updates de los elementos
        });

        // Crear meteoritos iniciales en la pool
        for (var i = 0; i < 10; i++) {
            let meteor = new Meteorito(this, 0, 0);
            this.meteorPool.add(meteor);
            meteor.setActive(false).setVisible(false);
        }

        // Contador para que aparezca un nuevo meteorito
        this.time.addEvent({
            delay: this.meteorCooldown, // tiempo que dura el contador
            callback: () => {       // Funcion cuando pasa el tiempo del delay
                //coge una bala de la pool
                let meteor = this.meteorPool.get();
                if (meteor) {
                    meteor.activate();
                }

                //console.log("asda");
            },
            callbackScope: this, // Donde se propaga el evento
            loop: true // Para que se haga continuamente.
        });

        // Objeto del fuel
        this.fuel = new Fuel(this, 50, 0);

        // Nave
        this.ship = new Ship(this, this.cameras.main.centerX + 20, this.cameras.main.height - 56, this.maxfuel);
        //console.log



        // ------Colisiones-----
        // Añadimos el collider porque si no no colisiona
        this.physics.add.collider(this.player, groundLayer);
        this.physics.add.collider(this.fuel, groundLayer);
        this.physics.add.collider(this.player, this.fuel, (player, fuel) =>
            player.addFuel(fuel)
        );
        this.physics.add.collider(this.player, this.meteorPool, (player, meteor) =>
            player.golpeado()
        );
        //this.physics.add.collider(this.player, this.nave,  (player, fuel) => console.logg("ASDA"));

        // detecta el overlapeo de dos cuerpos con fisica
        this.physics.add.overlap(this.player, this.ship, (player, nave) => {
            // Esta función se ejecutará cuando haya una colisión (overlap) entre player y ship
            if (player.tienesFuel) {
                player.putFuel(this.fuel);
                nave.putFuel();
                this.fuel.restart();
            }
            // Puedes realizar más acciones o lógica aquí
        });

    }

    update() {
        this.player.update();
        this.ship.update();
    }

    win() {
        this.player.setActive(false).setVisible(false);

        //Sonido de victoria
        this.winSound.play();

        //Tween de salirse la nave
        this.tweens.add({
            targets: this.ship,             // El objeto que se animará
            y: -80,                        // La posición final en el eje X
            scaleX: 0.1,
            scaleY: 0.1,
            duration: 3000,                // Duración de la animación en milisegundos
            ease: 'Linear',                // Función de easing (puedes cambiar a 'Ease' diferente)
            repeat: 0,
            onComplete: () => this.scene.start('MainMenu')
        })

    }

    lose() {
        //Sonido de perder
        this.loseSound.play();

        // Tween de muerte
        this.tweens.add({
            targets: this.player,             // El objeto que se animará
            //y: -80,                        // La posición final en el eje X
            rotation: Phaser.Math.DegToRad(-90),
            duration: 3000,                // Duración de la animación en milisegundos
            ease: 'Linear',                // Función de easing (puedes cambiar a 'Ease' diferente)
            repeat: 0,
            onComplete: () => this.scene.start('MainMenu')
        })
    }
}