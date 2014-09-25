$(document).ready(function(){
    $(document).ready(function() {
    //painting not w/in hover fade
        $("#paintingPageContent").children().hover(function() {
            $(this).siblings().stop().fadeTo(500,0.5);
        }, function() {
            $(this).siblings().stop().fadeTo(500,1);
    });
});
    //$('.fancybox').fancybox();
})