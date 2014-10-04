$(document).ready(function(){

   // changes the title box (currenly not working)
    $(".fancybox").fancybox();
    $(".fancybox").fancybox({
        helpers : {
            title: {
                type: 'outside'
            }       
        }
    });     

    //removes the white outline (currently working)
    $(".fancybox")
        .attr('rel', 'gallery')
        .fancybox({
            padding : 0
        });

//VIDEO PLAYER
    $(".video").click(function() {
        $.fancybox({
            'padding'       : 0,
            'autoScale'     : false,
            'transitionIn'  : 'none',
            'transitionOut' : 'none',
            'title'         : this.title,
            'width'         : 640,
            'height'        : 385,
            'href'          : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
            'type'          : 'swf',
            'swf'           : {
            'wmode'             : 'transparent',
            'allowfullscreen'   : 'true'
            }
        });

        return false;
    });
   
//images outside hover fade
    $("#slideshow").children().hover(function() {
        $(this).siblings().stop().fadeTo(500,0.5);
    }, function() {
        $(this).siblings().stop().fadeTo(500,1);
        });


//removes annoying title box from mouse hover
    $("img").hover(function(){
        imgTitle = $(this).attr("title");
        $(this).removeAttr("title");
    }, function(){
        $(this).attr("title", imgTitle);
    });

    $("a").hover(function(){
        imgTitle = $(this).attr("title");
        $(this).removeAttr("title");
    }, function(){
        $(this).attr("title", imgTitle);
    });

    // adds image caption on over
    $("img.caption").captionjs({
        'class_name'      : 'captionjs', // Class name assigned to each <figure>
        'schema'          : true,        // Use schema.org markup (i.e., itemtype, itemprop)
        'mode'            : 'animated',   // default | static | animated | hide
        'debug_mode'      : false,       // Output debug info to the JS console
        'force_dimensions': false,       // Force the dimensions in case they can't be detected (e.g., image is not yet painted to viewport)
        'is_responsive'   : false        // Ensure the figure and image change size when in responsive layout. Requires a container to control responsiveness!
    });

    // quick search 
    var qsRegex;
    var buttonFilter;
  
// init Isotope for Paitings Page
    var $paintingPageContent = $('#paintingPageContent').isotope({
        itemSelector: '.paintings',
        layoutMode: 'fitRows',
        filter: function() {
            var $this = $(this);
            var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
            var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
            return searchResult && buttonResult;
        }
    });

    // filter items on Paiting button click
    $('#filters').on('click', 'button', function() {
        buttonFilter = $(this).attr('data-filter');
        $paintingPageContent.isotope();
        return false;
    });

// use value of search field to filter paitings
    var $quicksearch = $('#paintingSearch').keyup( debounce( function() {
        qsRegex = new RegExp($quicksearch.val(), 'gi');
        $paintingPageContent.isotope();
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









