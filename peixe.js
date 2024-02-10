




console.log("oaksdokasod");
var config = { 
    type: Phaser.AUTO,
    width: 800,
    heigth: 600,

    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};
    var game = new Phaser.Game(config);

    var peixe;
    var barao;

    function preload() {
        this.load.image('mar', 'assets/bg_azul-escuro.png');
        this.load.image('logo', 'assets/logo-inteli_branco.png');
        this.load.image('peixe', 'assets/peixes/baiacu.png');
        this.load.image('barao', 'assets/peixes/tubarao.png');

    }
    function create() {
        this.add.image(400, 300, 'mar').setScale(400 / 400, 500 / 300);

        this.add.image(400, 600, 'logo')

       peixe = this.add.image(400, 300, 'peixe').setOrigin(-1, 0.5).setFlip(true, false);
       barao = this.add.image(400, 300, 'barao').setOrigin(0.5, 0.5).setFlip(true, false);
       
    }
    function update() {
        peixe.x = this.input.x;
        peixe.y = this.input.y;
        barao.x = this.input.x;
        barao.y = this.input.y;
        
    }

