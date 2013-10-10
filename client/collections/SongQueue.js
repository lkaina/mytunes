// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // this.bind('add', this.playFirst, this);
    this.on('add', function(song){
      if(this.length === 1){
        this.playFirst();
      }
    }, this);

    this.on('ended', function(song){
      this.remove(this.at(0));
      if (this.length) {
        this.playFirst();
      }
    });

    this.on('enqueue', function(song){
      this.add(song);
    });

    this.on('dequeue', function(song){
      song.ended();
    });

  },

  playFirst: function(){
    this.at(0).play();
  }

});
