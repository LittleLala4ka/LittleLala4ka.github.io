$(document).ready(function() {

    setInterval( function() {
        var minutes = new Date().getMinutes();
        $("#contacts-time-minutes").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);

    setInterval( function() {
        var hours = new Date().getHours();
        $("#contacts-time-hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000);				
});