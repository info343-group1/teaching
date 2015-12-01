$( document ).on('ready', function() {
  $( ".draggable" ).draggable({
    revert: true,
    zIndex: 100
  });
  $( "#droppable" ).droppable({
    drop: function( event, ui ) {
      var count = $(this).find('#count');
      count.text(parseInt(count.text()) + 1);
    }
  });
});