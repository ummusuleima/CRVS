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

  $("#logout_button").click(() => {
    $("#logout_menu").toggle()
    console.log("hellow");
  });
});
