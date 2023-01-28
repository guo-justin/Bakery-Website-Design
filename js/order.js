$(document).ready(function() {
    $("#pick-upBtn").click(function() {
        $("#deliveryForm").hide();
        $("#pick-upForm").show();
        $("#deliveryBtn").filter(".clicked").removeClass("clicked");
        $("#pick-upBtn").addClass("clicked");
    });

    $("#deliveryBtn").click(function() {
        $("#pick-upForm").hide();
        $("#deliveryForm").show();
        $("#pick-upBtn").filter(".clicked").removeClass("clicked");
        $("#deliveryBtn").addClass("clicked");
    });

    $("#telephone").keyup(function(e) {
        if (e.key != "Backspace"  && ($(this).val().length == 3 || $(this).val().length == 7)) {
            $(this).val($(this).val() + "-");
        };
    });

    $("#telephone2").keyup(function(e) {
        if (e.key != "Backspace"  && ($(this).val().length == 3 || $(this).val().length == 7)) {
            $(this).val($(this).val() + "-");
        };
    });

});

