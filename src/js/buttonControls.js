$(document).ready(function () {
  $("#open_sidebar").click(() => {
    $("#sidebar").removeClass("hidden");
    $("#sidebar").addClass("block");
    
  });
  
  $("#close_sidebar").click(() => {
    $("#sidebar").addClass("hidden");
    $("#sidebar").removeClass("block");
    
  });

  $("#logout_button").click(() => {
    $("#logout_menu").toggle() 
  });
  // $("#logout_button").focusout(function () {
  //   $("#logout_menu").hide();
  // });
});
