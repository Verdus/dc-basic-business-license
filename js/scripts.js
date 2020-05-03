// JavaScript Document
$(document).ready(function() {
    // all custom jQuery will go here
$( ".topicheader" ).click(function() {
  $( this ).next( ".topicbody" ).slideToggle( "fast" );
});

});