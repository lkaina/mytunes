// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // this.bind('add', this.playFirst, this);
    this.on('add', function(song){
      if(this.length === 1){
        this.playFirst();
      }
    }, this);

    this.on('', function(song){
      debugger;
      this.remove(song);
    });

  },

  playFirst: function(){
    this.models[0].play();
  }

});
