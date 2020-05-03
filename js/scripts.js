// JavaScript Document
$(document).ready(function() {
    // all custom jQuery will go here
$( ".topicheader" ).click(function() {
  $( this ).next( ".topicbody" ).slideToggle( "fast" );
});
$('nav li ul').hide().removeClass('hidden');
$('nav li').hover(
  function () {
    $('ul', this).stop().slideDown(100);
  },
  function () {
    $('ul', this).stop().slideUp(100);
  }
);
});