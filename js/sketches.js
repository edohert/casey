$(document).ready(function(){

    // quick search 
    var qsRegex;
    var buttonFilter;
  
// init Isotope for sketches Page
    var $sketchesPageContent = $('#sketchesPageContent').isotope({
        itemSelector: '.sketches',
        layoutMode: 'fitRows',
        filter: function() {
            var $this = $(this);
            var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
            var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
            return searchResult && buttonResult;
        }
    });

    // filter items on button click
    $('#filters').on('click', 'button', function() {
        buttonFilter = $(this).attr('data-filter');
        $sketchesPageContent.isotope();
        return false;
    });

// use value of search field to filter paitings
    var $quicksearch = $('#sketchesSearch').keyup( debounce( function() {
        qsRegex = new RegExp($quicksearch.val(), 'gi');
        $sketchesPageContent.isotope();
    }) );  

    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
    });

// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  return function debounced() {
    if ( timeout ) {
      clearTimeout( timeout );
    }
    function delayed() {
      fn();
      timeout = null;
    }
    setTimeout( delayed, threshold || 100 );
  };
}

})