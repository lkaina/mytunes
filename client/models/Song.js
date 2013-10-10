// Song.js - Defines a backbone model class for songs.
var Song = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  end: function(){
    this.trigger('end', this);
  }

});
