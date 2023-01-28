$(document).ready(function() {
    $("#homeCupcakes").click(function() {
        $(".h-cookie, .h-brownie, .h-donut").hide();
        $(".h-cupcake").show();
        $("#homeCupcakes, #homeCookies, #homeBrownies, #homeDonuts").filter(".clicked").removeClass("clicked");
        $("#homeCupcakes").addClass("clicked");
        $("#homeMenuBtn").attr("href", "menu.html#cupcakeSection");
    });
    $("#homeCookies").click(function() {
        $(".h-brownie, .h-donut, .h-cupcake").hide();
        $(".h-cookie").show();
        $("#homeCupcakes, #homeCookies, #homeBrownies, #homeDonuts").filter(".clicked").removeClass("clicked");
        $("#homeCookies").addClass("clicked");
        $("#homeMenuBtn").attr("href", "menu.html#cookieSection");
    });
    $("#homeBrownies").click(function() {
        $(".h-cookie, .h-donut, .h-cupcake").hide();
        $(".h-brownie").show();
        $("#homeCupcakes, #homeCookies, #homeBrownies, #homeDonuts").filter(".clicked").removeClass("clicked");
        $("#homeBrownies").addClass("clicked");
        $("#homeMenuBtn").attr("href", "menu.html#brownieSection");
    });
    $("#homeDonuts").click(function() {
        $(".h-cookie, .h-brownie, .h-cupcake").hide();
        $(".h-donut").show();
        $("#homeCupcakes, #homeCookies, #homeBrownies, #homeDonuts").filter(".clicked").removeClass("clicked");
        $("#homeDonuts").addClass("clicked");
        $("#homeMenuBtn").attr("href", "menu.html#donutSection");
    });    
});