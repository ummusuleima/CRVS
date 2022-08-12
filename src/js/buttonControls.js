$(document).ready(function () {
  $("#open_sidebar").click(() => {
    $("#sidebar").removeClass("hidden");
    $("#sidebar").addClass("block");
  });

  $("#close_sidebar").click(() => {
    $("#sidebar").addClass("hidden");
    $("#sidebar").removeClass("block");
  });

  $("#motherNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#childInfoId").removeClass("stepper-active");
    $("#motherInfoId").addClass("stepper-active ");

    $(".heightstepper").attr("style", "height: 2010px");

    $("#motherDiv").addClass(" slide-in-right animation fast");
    $("#motherDiv").attr("style", "display: block");
    $("#childDiv").attr("style", "display: none");
    $("#childInfoId").addClass("stepper-completed");
  });

  $("#prevChild").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#childInfoId").addClass("stepper-active");
    $("#motherInfoId").removeClass("stepper-active ");

    $(".heightstepper").attr("style", "height: 800px");

    $("#motherDiv").addClass(" slide-out-left animation fast");
    $("#childDiv").attr("style", "display: block");
    $("#motherDiv").attr("style", "display: none");
    // $("#childInfoId").addClass("stepper-completed");
  });

  $("#fatherNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#motherInfoId").removeClass("stepper-active");
    $("#fatherInfoId").addClass("stepper-active ");

    $(".heightstepper").attr("style", "height: 1800px");

    $("#fatherDiv").addClass(" slide-in-right animation fast");
    $("#fatherDiv").attr("style", "display: block");
    $("#motherDiv").attr("style", "display: none");
    $("#fatherInfoId").addClass("stepper-completed");
  });
});
