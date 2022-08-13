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

    $(".heightstepper").attr("style", "height: 1800px");

    // $("#motherDiv").addClass(" slide-in-right animation fast");

    // $("#childDiv").addClass(" slide-out-left animation fast");
    $("#motherDiv").attr("style", "display: block");

    $("#childDiv").attr("style", "display: none");
    $("#childInfoId").addClass("stepper-completed");
  });

  $("#prevChild").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#childInfoId").addClass("stepper-active");
    $("#motherInfoId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1000px");

    // $("#childDiv").addClass(" slide-in-left animation fast");

    // $("#motherDiv").addClass(" slide-out-right animation fast");

    $("#childDiv").attr("style", "display: block");
    $("#motherDiv").attr("style", "display: none");
  });

  $("#fatherNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#motherInfoId").removeClass("stepper-active");
    $("#fatherInfoId").addClass("stepper-active ");

    $(".heightstepper").attr("style", "height: 1300px");

    // $("#fatherDiv").addClass(" slide-in-right animation fast");
    $("#fatherDiv").attr("style", "display: block");
    $("#motherDiv").attr("style", "display: none");
    $("#fatherInfoId").addClass("stepper-completed");
  });

  $("#prevMother").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#motherInfoId").addClass("stepper-active");
    $("#fatherInfoId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1800px");

    // $("#childDiv").addClass(" slide-in-left animation fast");

    // $("#motherDiv").addClass(" slide-out-right animation fast");

    $("#motherDiv").attr("style", "display: block");
    $("#fatherDiv").attr("style", "display: none");
  });

  $("#InfoNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#fatherInfoId").removeClass("stepper-active");
    $("#InfoId").addClass("stepper-active ");

    $(".heightstepper").attr("style", "height:1000px");

    // $("#fatherDiv").addClass(" slide-in-right animation fast");
    $("#infomDiv").attr("style", "display: block");
    $("#fatherDiv").attr("style", "display: none");
    // $("#fatherInfoId").addClass("stepper-completed");
  });

  $("#prevFather").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#fatherInfoId").addClass("stepper-active");
    $("#InfoId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1300px");

    // $("#childDiv").addClass(" slide-in-left animation fast");

    // $("#motherDiv").addClass(" slide-out-right animation fast");

    $("#fatherDiv").attr("style", "display: block");
    $("#infomDiv").attr("style", "display: none");
  });
});
