$(document).ready(function(){
    //painting not w/in hover fade
    $("#paintingPageContent, #digitalArtPageContent, #sketchesPageContent, #brandIDPageContent").children().hover(function() {
        $(this).siblings().stop().fadeTo(500,0.5);
    }, function() {
        $(this).siblings().stop().fadeTo(500,1);
        });

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

    //search function
    
    $("#paintingSearch").keyup(function () {
        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(),
            count = 0;
        // Loop through the menu list
        $("#paintingPageContent .paintings").each(function () {
            // If the list item does not contain the text phrase fade it out
            if ($(this).attr("id").search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
                // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
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

})

 // Twitter button   
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],
    p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){
    js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}
    (document, 'script', 'twitter-wjs');

    