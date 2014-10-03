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

//search function for paintings
    $("#paintingSearch").keyup(function () {
        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(),
            count = 0;
        // Loop through the menu list
        $("#paintingPageContent .paintings").each(function () {
            // If the list item does not contain the text phrase fade it out
            if ($(this).attr("id").search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut("slow");
                $(".horizontalLine").hide("slow");
                // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                $(".horizontalLine").show();
                count++;
            }
        });
        // Update the count
        if (count > 0) {
            $("#filter-count").text("Top " + count + " results for: " + filter);
        } else {
            $("#filter-count").text("No results for: " + filter);
        }
        if (filter == "") {
            $("#filter-count").text("")
        }
    });

//search function for brandID
    $("#brandIDSearch").keyup(function () {
        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(),
            count = 0;
        // Loop through the menu list
        $("#brandIDPageContent .brandID").each(function () {
            // If the list item does not contain the text phrase fade it out
            if ($(this).attr("id").search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut("slow");
                $(".horizontalLine").hide("slow");
                // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                $(".horizontalLine").show();
                count++;
            }
        });
        // Update the count
        if (count > 0) {
            $("#filter-count").text("Top " + count + " results for: " + filter);
        } else {
            $("#filter-count").text("No results for: " + filter);
        }
        if (filter == "") {
            $("#filter-count").text("")
        }
    });

//search function for DigitalArt
    $("#digitalArtSearch").keyup(function () {
        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(),
            count = 0;
        // Loop through the menu list
        $("#digitalArtPageContent .digitalArt").each(function () {
            // If the list item does not contain the text phrase fade it out
            if ($(this).attr("id").search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut("slow");
                $(".horizontalLine").hide("slow");
            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                $(".horizontalLine").show();
                count++;
            }
        });
        // Update the count
        if (count > 0) {
            $("#filter-count").text("Top " + count + " results for: " + filter);
        } else {
            $("#filter-count").text("No results for: " + filter);
        }
        if (filter == "") {
            $("#filter-count").text("")
        }
    });

//search function for Sketches
    $("#sketchSearch").keyup(function () {
        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(),
            count = 0;
        // Loop through the menu list
        $("#sketchesPageContent .sketches").each(function () {
            // If the list item does not contain the text phrase fade it out
            if ($(this).attr("id").search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut("slow");
                $(".horizontalLine").hide("slow");
            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                $(".horizontalLine").show();
                count++;
            }
        });
        // Update the count
        if (count > 0) {
            $("#filter-count").text("Top " + count + " results for: " + filter);
        } else {
            $("#filter-count").text("No results for: " + filter);
        }
        if (filter == "") {
            $("#filter-count").text("")
        }
    });

//search function for 3D
    $("#threeDSearch").keyup(function () {
        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(),
            count = 0;
        // Loop through the menu list
        $("#threeDPageContent .threeD").each(function () {
            // If the list item does not contain the text phrase fade it out
            if ($(this).attr("id").search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut("slow");
                $(".horizontalLine").hide("slow");
            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                $(".horizontalLine").show();
                count++;
            }
        });
        // Update the count
        if (count > 0) {
            $("#filter-count").text("Top " + count + " results for: " + filter);
        } else {
            $("#filter-count").text("No results for: " + filter);
        }
        if (filter == "") {
            $("#filter-count").text("")
        }
    });

    // isotope BrandID
//    var $brandIDPageContent = $("#brandIDPageContent");
    // init
//    $brandIDPageContent.isotope({
        // options
//        itemSelector: '.brandID',
//        layoutMode: 
 //   });

// isotope Paintings
//    var $paintingPageContent = $("#paintingPageContent");
    // init
//    $paintingPageContent.isotope({
        // options
//        itemSelector: '.paintings',
 //       layoutMode: 'vertical' 
//    });    

//images outside hover fade
    $("#slideshow").children().hover(function() {
        $(this).siblings().stop().fadeTo(500,0.5);
    }, function() {
        $(this).siblings().stop().fadeTo(500,1);
        });

//slideshow
//$("#slideshow > div:gt(5)");

//setInterval(function() { 
//  $('#slideshow > div:first')
 //   .fadeOut(2000)
  //  .fadeIn(2000)
  //  .end()
  //  .appendTo('#slideshow');
// },  3000);

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

    // isotope Paintings
    var $paintingPageContent = $("#paintingPageContent").isotope({
        // options
        itemSelector: '.paintings',
        layoutMode: 'fitRows',
    });  

// filter items on button click
    $('#filters').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $paintingPageContent.isotope({ filter: filterValue });
  });

$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  
})





















