$(document).ready(function () {
    
    /*----------------page1 애니매이션---------------------------------------------------*/
    $("#section0 h1").delay(1000).animate({
        opacity: 1,
        top: 300
    }, 700, "swing", function () {
        $("#section0 h6").delay(500).animate({
            opacity: 0.8,
            top: 350
        }, 700, "swing");
        $("#section0 #scroll").delay(500).animate({
            opacity: 0.8,
            bottom: 250
        }, 700, "swing");
    });


    /*-------------구름----------------*/
    $('#section0 #logoimg').fadeIn(3000);
    $('#section0 .park').fadeIn(5000);
    $('#section0 .park2').fadeIn(2000);
    $('#section0 .cloud1').fadeIn(4000);
    $('#section0 .cloud2').fadeIn(3500);
    $('#section0 .cloud3').fadeIn(3000);
    $('#section0 .cloud4').fadeIn(2500);

});
