$( document ).on('ready', function() {
  $( ".tile" ).draggable({
    revert: true,
    zIndex: 100
  });
  $( ".cart" ).droppable({
    drop: function( event, ui ) {
      var count = $(this).find('#item-count');
      count.text(parseInt(count.text()) + 1);
    }
  });
});