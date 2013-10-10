// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // this.bind('add', this.playFirst, this);
    this.on('add', function(song){
      if(this.length === 1){
        this.playFirst();
      }
    }, this);

    this.on('ended', function(){
      this.remove(this.at(0));
      if (this.length) {
        this.playFirst();
      }
    });

  },

  playFirst: function(){
    this.models[0].play();
  }

});
