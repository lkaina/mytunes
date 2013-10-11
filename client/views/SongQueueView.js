// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.collection.bind('add', this.render, this);
    this.collection.bind('remove', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    debugger;
    this.$el.html('<div><th>Queue</th>');
    this.$el.html('<button class="addQueue">Add Queue</button>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      }));
    return this.$el.append('</div>');
  }

});
