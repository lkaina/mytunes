// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.collection.bind('add', this.onAdd, this);
    this.collection.bind('remove', this.onRemove, this);
  },

  onAdd: function() {
    this.render();
  },

  onRemove: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    return this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      }));
  }

});
