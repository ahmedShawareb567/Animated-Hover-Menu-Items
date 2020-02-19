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
        left: x.left + 16 - ulDim.left,
        width: $(this).width() * 0.4
      });
    });
    $(this).mouseleave(function() {
      activeAn.css({
        transform: "scaleX(0)",
        transformOrigin: "left",
        width: $(this).width() * 0.75
      });
    });
  });
  $(window).resize(function() {
    ulDim = currentUl.offset();
  });
  (function animateText() {
    let textEl = [
        "Animated Hover Menu",
        "Hover Yes, Ok",
        "Hover No, Yup",
        "Ok Dont Mind"
      ],
      text = "",
      newArr = [],
      z = 0,
      y = 0,
      ind = 0;
    for (let x = 0; x < textEl.length; x++) {
      let splitElement = textEl[x].split("");
      newArr.push(splitElement);
    }
    setInterval(function() {
      if (z >= newArr.length) {
        z = 0;
        y = 0;
        text = "";
      } else {
        if (y >= newArr[z].length) {
          y = 0;
          text = "";
          z++;
        }
        text += newArr[z][y];
        $(".printElement").text(text);
        y++;
      }
    }, 400);
  })();
});
