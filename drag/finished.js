$( document ).on('ready', function() {
  $( ".tile" ).draggable({
    revert: true,
    zIndex: 100
  });
});