var esketit = 50
var Menu={

    but:null,
    preload:function(){
        game.load.image('back', 'background.jpg')
        game.load.image('but', 'play.png')
    },
    create:function(){
        this.but = game.add.sprite(0,0,"but")
        this.but.scale.setTo(0.25)
        this.but.inputEnabled = true
        this.but.events.onInputDown.add(this.nextLevel)
        game.add.text(15, 200, 'Score: 12', { font: '32px Lato', fill: '#FFFAF0' });

    },
    update:function(){

    },
    nextLevel:function(){
        game.state.start('game')
        esketit -= 25
        console.log(esketit)
    }
}