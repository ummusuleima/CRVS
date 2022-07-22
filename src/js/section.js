$(document).ready(function () {
  // Tag sections
  const sections = $("section");

  $.each(sections, function () {
    const loadFileHere = $(this).attr("include");
    $(this).load("../sections/" + loadFileHere);
  });
});
