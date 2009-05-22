jQuery(document).ready(function($) {
  $('#events, #jobs, #projects, #presentations, #show, #edit').hover(
    function() {
      $(this).find('.crud').show();
    },
    function() {
      $(this).find('.crud').hide();
    }
  );

  $(document).bind('keydown', 'd', function(){ 
    $.under_construction.hideOverlayOfPendingElements();
    $.under_construction.toggleDisplayOfPendingElements();
  });
  $(document).bind('keydown', 'o', function(){ 
    $.under_construction.showPendingElements();
    $.under_construction.toggleOverlayOfPendingElements();
  });

  $('#people .collage').cycle({ fx: 'scrollDown',
                                timeout: 8000});
  
});
