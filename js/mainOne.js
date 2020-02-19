$.noConflict();
jQuery(function($) {
  var liElements = $("li").not(".hoverAn"),
    activeAn = $(".hoverAn"),
    currentUl = $("ul"),
    ulDim = currentUl.offset();
  liElements.each(function() {
    $(this).mouseenter(function() {
      let x = $(this).offset();
      activeAn.css({
        transform: "scaleX(1)",
        transformOrigin: "left",
        left: x.left + 16 - ulDim.left
      });
    });
    $(this).mouseleave(function() {
      activeAn.css({
        transform: "scaleX(0)",
        transformOrigin: "left"
      });
    });
  });
});
