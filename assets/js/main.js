MainMenu = function(game){

};

var gameBackground;
var button;

MainMenu.prototype = {
    create: function(game){
        gameBackground = game.add.sprite(game.world.centerX, game.world.centerY -192, "menuScreen");
        var button = game.add.button(game.world.centerX, game.world.centerY, "startButton", function(){
            this.state.start("level1", true, false);

        button.anchor.x = 0.5;
        button.anchor.y = 0.5;    
        });
        
        mainMusic = game.add.audio(game, "<name of background song>", 1, true)

    },
    update: function(game){

    }
}