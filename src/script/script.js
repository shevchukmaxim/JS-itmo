$(document).ready(() => {
  $("#hide-buttn").click(function() {
    $("#theory").toggleClass("hidden");
    $("#editor-block").toggleClass("moved");
    $("#browser").toggleClass("moved");
    $("#hide-buttn").toggleClass("moved");
    $("#arrow").toggleClass("active");
  });
});