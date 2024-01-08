import Player from "./player.js";
import Ring from "./ring.js"

export default class Level extends Phaser.Scene {
    constructor() {
        super({ key: 'Level' });

    }

    init(data) {
        this.goal = data;
    }

    create() {

        // -----Parametros del juego-----
        // Obtener la variable
        //const valorGuardado = sessionStorage.getItem('miVariable');
        this.maxPuntuacion = sessionStorage.getItem('highScore');
        if (this.maxPuntuacion == null) {
            this.maxPuntuacion = 0;
        }
        this.puntuacion = this.goal * 100
        this.endGame = false;
        this.end = this.physics.add.sprite(this.goal * 80, this.cameras.main.height - 120, 'platform').setOrigin(0, 1).setScale(3, 3).setDepth(2).setImmovable(true).setSize(37, 800)
        this.end.body.allowGravity = false; // no le afecta la gravedad  

        // -----Textos de puntuacion-----
        // Obtener datos de sessionStorage
        const valorRecuperado = sessionStorage.getItem('clave');
        console.log(valorRecuperado);  // Resultado: 'valor'
        this.stettingTexts()

        // Contador para actualizar textos
        this.time.addEvent({
            delay: 1000, // tiempo que dura el contador
            callback: () => {       // Funcion cuando pasa el tiempo del delay
                this.updatePunt();
            },
            callbackScope: this, // Donde se propaga el evento
            loop: true // Para que se haga continuamente.
        });


        // -----Sonido-----

        this.loseSound = this.sound.add('lose');
        this.winSound = this.sound.add('win');


        // -----Fondos-----
        this.backgrounds = [];      // Array de fondos
        this.leftBackground = 0;    // Fondo de la izquieda
        this.rightBackground = 3;   // Fondo de la derecha

        for (let i = 1; i <= 4; i++) {
            // Calcula la posicion x
            let x = 0;
            // x es 0 si el fondo que se esta creando es 0, si no se hace el if
            if (i - 1 > 0) {
                x = this.backgrounds[i - 2].x + this.backgrounds[i - 2].width;  // como i-1 es el fondo que estamos creando, cogemos la posicion x del i-2 que es el anterior, 
                                                                                //y le sumamos el ancho de una imagen, para ver la posicion x del actual
            }

            // si i es par entonces se coloca el fondo 2, si no el fondo 1
            if (i % 2 === 0) {
                const background = (this.add.image(x, this.cameras.main.height, 'background2').setOrigin(0, 1));
                this.backgrounds.push(background); // añade el background al array
            } else {
                const background = (this.add.image(x, this.cameras.main.height, 'background').setOrigin(0, 1));
                this.backgrounds.push(background); // añade el background al array
            }

            // -----actualizacion de posiciones de los fondos en el update-----
        }
        


        // -----Marcas de metros-----
        for (let i = 0; i <= this.goal; i += 10) {
            // Grafico de marca
            let mark = this.add.graphics();

            // Configurar las propiedades del objeto mark
            mark.fillStyle(0x000000, 1); // Relleno negro con opacidad 1
            mark.fillRect(0, 0, 100, 50); // Rectangulo en la posicion (0, 0) con size 100*50
            mark.lineStyle(4, 0xFF0000, 1); // Linea roja con grosor 4 y opacidad 1
            mark.strokeRect(0, 0, 100, 50); // Contorno del rectangulo en la posicion (0, 0) con size 100*50
            mark.setPosition(80 * i, this.cameras.main.height - 100); //setea la posicion

            // Add el texto
            this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 125, this.goal - i + "M", {
                fontSize: '20px',
                color: 'red',
                fontFamily: 'arcade_classic',

            }).setOrigin(0, 0).setPosition(80 * i + 5, this.cameras.main.height - 95)
            //console.log(mark.x + "/" + mark.y)
        }

        // -----Suelo-----
        // Crear un objeto this.floor para dibujar el cuadrado
        this.floor = this.add.graphics();

        // Dibujar el cuadrado
        this.floor.fillStyle('0x000000')//.fillRect(0, 0, (this.goal * 800) / 10, 120).generateTexture();
        this.floor.setPosition(0, this.cameras.main.height - 120)

        // Habilitar físicas en el graphic
        this.physics.world.enable(this.floor);

        // Configurar el cuerpo del sprite como invisible
        //this.floor.body.enable = false;

        this.floor.body.setSize((this.goal * 800) / 10, 260).setImmovable(true);
        //this.floor.body.setCollideWorldBounds(true);
        this.floor.body.allowGravity = false; // no le afecta la gravedad
        //cube.body.setBounce(1, 1); // Objeto rebota
        //cube.body.setVelocity(100, 200); // Settea velocidad: x = 100, y = 200
        
        
        
        // -----Player-----
        this.player = new Player(this, 50, this.cameras.main.height - 304);
        
        console.log(this.player.x + "/" + this.player.y)
        
        // Iniciar el seguimiento de la cámara al jugador
        this.cameras.main.startFollow(this.player, true, 1, 0, -(this.cameras.main.width / 2 - 50), 76);
        //this.cameras.main.setFollowOffset(0, 0); // offset a parte, esta puesto en el startfollow (Desplazamiento en el eje Y (0 en este caso))
        

        // -----Setteo de obstaculos----
        // Array de fuegos
        this.fuegitos = [];

        this.settingObstacles();
        
        // Contador para que aparezca un nuevo ringito
        this.time.addEvent({
            delay: 5000, // tiempo que dura el contador
            callback: () => {       // Funcion cuando pasa el tiempo del delay
                //coge una bala de la pool
                let ring = this.ringPool.get();
                if (ring && !this.endGame) {
                    ring.activate();
                    //console.log(ring);
                }

                //console.log("asda");
            },
            callbackScope: this, // Donde se propaga el evento
            loop: true // Para que se haga continuamente.
        });


        //-----Colisiones-----
        // Suelo
        this.physics.add.collider(this.player, this.floor, () => {
            this.player.onFloor();
        });/*
        // Aros
        this.physics.add.collider(this.player, this.ringPool, () => {
            this.lose();
        });
        // Fuegos
        this.physics.add.collider(this.player, this.fuegitos, () => {
            this.lose();
        });*/
        // Fin
        this.physics.add.collider(this.player, this.end, () => {
            this.win();
        });


    }

    stettingTexts() {
        this.puntText = this.add.text(this.cameras.main.centerX, 75, 'Score: ' + this.puntuacion, {
            fontSize: '10px',
            color: 'white',
            fontFamily: 'arcade_classic',

        }).setOrigin(0.5, 0.5);
        this.puntMaxText = this.add.text(this.cameras.main.centerX, 50, 'High Score: ' + this.maxPuntuacion, {
            fontSize: '10px',
            color: 'red',
            fontFamily: 'arcade_classic',

        }).setOrigin(0.5, 0.5);
    }
    
    settingObstacles(){

        // -----Fuegos-----
        for (let i = 3; i <= (this.goal/10)-1; i ++) {
            let fir = this.physics.add.sprite(800 * i, this.cameras.main.height - 120, 'fire').setScale(3, 3).setOrigin(0, 1).setImmovable(true).setSize()
            fir.body.allowGravity = false; // no le afecta la gravedad

            fir.anims.play('fireAnim'); // Ponemos la animacion del fuego.
            this.fuegitos.push(fir);
        }

        // -----Pool de aros-----
        this.ringPool = this.physics.add.group({
            classType: Ring, // Clase de los elementos
            maxSize: 10, // Maximo de elementos
            runChildUpdate: true // En true ejecuta los metodos updates de los elementos
        });

        // Crear aros iniciales en la pool
        for (var i = 0; i < 10; i++) {
            let ring = new Ring(this, 0, 0);
            ring.body.allowGravity = false;
            this.ringPool.add(ring);
            ring.setActive(false).setVisible(false);
        }
    }

    update(t, dt) {
        // movimiento toroidal del fondo
        this.torosDelFondo();

        // Updatea posicion x de los textos con respecto a la camara
        this.puntText.x = this.cameras.main.worldView.left + this.cameras.main.centerX;
        this.puntMaxText.x = this.cameras.main.worldView.left + this.cameras.main.centerX;
    }

    torosDelFondo() {
        // si la posicion mas a la izquierda que ve la camara es mayor o igual que la posicion x del fondo mas a la izquierda + el ancho de un fondo.
        // (es decir, el fondo de mas a la izquierda se sale de pantalla) el fondo de la izquierda se pone a la derecha
        if (this.cameras.main.worldView.left >= this.backgrounds[this.leftBackground].x + this.backgrounds[this.leftBackground].width) {

            // Pone el fondo de la izquierda a la derecha del fondo mas a la derecha
            this.backgrounds[this.leftBackground].x = this.backgrounds[this.rightBackground].x + this.backgrounds[this.leftBackground].width;

            // Actualizacion del fondo de la derecha e izquierda
            this.leftBackground++;
            this.rightBackground++;

            //Si los indices se salen de los limites se resetean
            if (this.leftBackground >= this.backgrounds.length) {
                this.leftBackground = 0;
            } if (this.rightBackground >= this.backgrounds.length) {
                this.rightBackground = 0;
            }
        }

        // si la posicion mas a la izquierda que ve la camara es menor que la posicion x del fondo mas a la izquierda.
        // (es decir, el limite del fondo de la izquierda se ve en pantalla) el fondo de la derecha se pone a la izquierda
        if (this.cameras.main.worldView.left < this.backgrounds[this.leftBackground].x) {
            
            // Pone el fondo de la derecha a la izquierda del fondo mas a la izquierda
            this.backgrounds[this.rightBackground].x = this.backgrounds[this.leftBackground].x - this.backgrounds[this.leftBackground].width;

            // Actualizacion del fondo de la derecha e izquierda
            this.rightBackground--;
            this.leftBackground--;

            //Si los indices se salen de los limites se resetean
            if (this.rightBackground < 0) {
                this.rightBackground = this.backgrounds.length - 1;
            } if (this.leftBackground < 0) {
                this.leftBackground = this.backgrounds.length - 1;
            }
        }
    }

    updatePunt() {
        // Updatea puntuacion
        this.puntuacion -= 50

        // Updatea textos
        //console.log("SCORE: " + this.puntuacion)
        this.puntText.setText("SCORE: " + this.puntuacion);
    }

    lose() {
        const objetosActivos = this.ringPool.getChildren();

        // Imprimir información de los objetos activos
        objetosActivos.forEach((ring, i) => {
            //console.log(`Objeto ${i + 1}:`, ring);
            ring.stop();
        });

        this.player.die();
        this.loseSound.play();
        this.endGame = true;

        // Evento final del sonido
        this.loseSound.on('complete', () => this.exit());
    }

    win() {
        const objetosActivos = this.ringPool.getChildren();
        // Imprimir información de los objetos activos
        objetosActivos.forEach((ring, i) => {
            //console.log(`Objeto ${i + 1}:`, ring);
            ring.stop();
        });

        this.player.win(this.end.x, this.end.y - 90);
        this.endGame = true;
        this.winSound.play();


        // Guardar una variable durante la sesión actual
        if (this.puntuacion > this.maxPuntuacion) {
            this.maxPuntuacion = this.puntuacion;
            sessionStorage.setItem('highScore', this.maxPuntuacion);
        }

        // Evento final del sonido
        this.winSound.on('complete', () => this.exit());

    }

    exit() {
        this.scene.start('Title');
    }
}