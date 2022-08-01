$(document).ready(function () {
  $("#open_sidebar").click(() => {
    $("#sidebar").removeClass("hidden");
    $("#sidebar").addClass("block");
    console.log("hellow");
  });
  
  $("#close_sidebar").click(() => {
    $("#sidebar").addClass("hidden");
    $("#sidebar").removeClass("block");
    console.log("hellow");
  });

  $("#logout_button").focus(() => {
    $("#logout_menu").show()
    console.log("hellow");
  });
  $("#logout_button").focusout(function () {
    $("#logout_menu").hide();
  });
});
