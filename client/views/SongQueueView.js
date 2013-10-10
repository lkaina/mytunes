// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.collection.bind('add', this.render, this);
    this.collection.bind('remove', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    return this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      }));
  }

});
