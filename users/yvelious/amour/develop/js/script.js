$(function() {


  $("a.b-pagers__links").click(function() {
      $("a.b-pagers__links").removeClass("b-pagers__links_active");
    $(this).toggleClass("b-pagers__links_active");

  });

});