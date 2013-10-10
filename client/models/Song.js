// Song.js - Defines a backbone model class for songs.
var Song = Backbone.Model.extend({

  initialize: function(){
    this.set('playCount', 0);
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    this.set('playCount', this.get('playCount')+1);
  },

  ended: function(){
    this.trigger('ended', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  }

});
