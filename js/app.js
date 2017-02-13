var juego = new Phaser.Game(370, 550, Phaser.CANVAS, 'escena');
var fondoJuego;
var btnJuego;

var estadoPrincipal = {
    preload: function () {
        //precarga de todos los recursos
        juego.stage.backgroundColor = '#555'; //color de fondo
        juego.load.image('fondo', 'img/bg.jpeg');//cargando imagen
        juego.load.image('pajaro', 'img/pajaro1.png');
        juego.load.image('btn', 'img/btn.png');
    },
    create: function () {
        //se ejecuta una sola ves despues de la pregcarga
        fondoJuego = juego.add.tileSprite(0, 0, 370, 550, 'fondo');
        juego.add.sprite(0, 0, 'pajaro');
    },
    update: function () {
        //esta funcion se ejcuta permanente mente
        fondoJuego.tilePosition.x -= 1;//anima el fondo
    }
};

juego.state.add('principal', estadoPrincipal);
juego.state.start('principal');




