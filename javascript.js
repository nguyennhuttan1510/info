var onScroll = function () {
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos < 300) {
      document.getElementById("navbar").style.background = "transparent";
    } else {
      document.getElementById("navbar").style.background = "#4a4747e3";
    }
    // prevScrollpos = currentScrollPos;
  };
};

onScroll();
// document.addEventListener(
//   "DOMcontentloaded",
//   () => {
//     const obclick = document.getElementById("image-avatar");
//     obclick.onclick = () => {};
//   },
//   false
// );
