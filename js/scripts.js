// JavaScript Document
$(document).ready(function() {
    // all custom jQuery will go here
	function(event) {
  event.preventDefault();
  var topicheader = $(this).parent(".topicheader");
  topicHeader.next(".topicbody").slideToggle("fast", function() {
    if ($(this).css("display") == "none") {
      topicHeader
        .addClass("Open")
        .next(".topicbody")
        .removeAttr("style");
    } else {
      topicHeader
        .removeClass("Open")
        .next(".topicbody")
        .removeAttr("style");
    }
  });
}
});