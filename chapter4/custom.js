/**
 * Created with IntelliJ IDEA.
 * User: mayooran
 * Date: 8/7/13
 * Time: 11:44 AM
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(function() {
    $('.speech').addClass("default-font")

    $('#switcher-large').click(function() {
        $('.speech').removeClass("default-font") ;
        $('.speech').removeClass("small-font") ;
        $('.speech').addClass("big-font");
       // $('.speech').css({'backgroundColor':'blue'}) ;
       event.stopPropagation();
    });

    $('#switcher-default').click(function() {
        $('.speech').addClass("default-font")
        $('.speech').removeClass("big-font");
        $('.speech').removeClass("small-font") ;
       event.stopPropagation();
    });

    $('#switcher-small').click(function() {
        $('.speech').removeClass("big-font");
        $('.speech').removeClass("default-font") ;
        $('.speech').addClass("small-font");
        event.stopPropagation();
    });

});





