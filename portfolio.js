
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.height = "6rem";
      document.getElementById("logo-personal").style.marginLeft="30px"
    } else {
      document.getElementById("header").style.height = "8rem";
      document.getElementById("logo-personal").style.marginLeft="initial";
    }
  }
  