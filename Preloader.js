Game.Preloder = function(game) {
    this.preloaderBar = null;
};

Game.Preloader.prototype = {
    preload: function() {
        this.preloadBar  = this.add.sprite(this.world.centerX,
                                            this.world.centerY,'preloaderBar');

       this.preloadBar.anchor.setTo(0.5,0.5);
       
       this.time.advancedTiming = true;

       this.load.setPreloadSprite(this.preloadBar);

       //load all assets


    },

    create:function(){
        this.state.start('Level1');
    }
};