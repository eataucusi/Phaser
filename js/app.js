var juego = new Phaser.Game(370, 550, Phaser.CANVAS, 'escena');
var fondoJuego;
var btnJuego;
var flappy;
var tDerecha;


var estadoPrincipal = {
    preload: function () {
        //precarga de todos los recursos
        juego.stage.backgroundColor = '#555'; //color de fondo
        juego.load.image('fondo', 'img/bg.jpeg');//cargando imagen
        juego.load.spritesheet('pajaros', 'img/pajaro.png', 43, 30);
    },
    create: function () {
        //se ejecuta una sola ves despues de la pregcarga
        fondoJuego = juego.add.tileSprite(0, 0, 370, 550, 'fondo');//fondo
        //flappy = juego.add.sprite(juego.width/2, juego.height/2, 'pajaro');//imagen
//        flappy.anchor.setTo(0.5);//modifica punto de anclaje
//        flappy.scale.setTo(1,1);//aumentar escala si es negativo se voltea la imagen
        //flappy.angle = 360;//angulo de rotacion
        flappy = juego.add.sprite(100, 100, 'pajaros');
        flappy.frame = 1;//que fotograma utilizamos
        flappy.animations.add('vuelo', [1, 0, 2], 8, true);

        tDerecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    },
    update: function () {
        //esta funcion se ejcuta permanente mente
        flappy.animations.play('vuelo');
        
        if (tDerecha.isDown) {
            flappy.position.x += 1;
        }
    }
};

juego.state.add('principal', estadoPrincipal);
juego.state.start('principal');




