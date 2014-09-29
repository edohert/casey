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

// isotope
    var $wrapper = $("#wrapper");
    // init
    $wrapper.isotope({
        // options
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

//images outside hover fade
    $("#paintingPageContent, #digitalArtPageContent, #sketchesPageContent, #brandIDPageContent").children().hover(function() {
        $(this).siblings().stop().fadeTo(500,0.5);
    }, function() {
        $(this).siblings().stop().fadeTo(500,1);
        });

})

 