window.onload = function () {
  // setTimeout(() => {
  //   showMessage();
  // }, 4000);
};

if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}

document.addEventListener("click", function () {
  document.getElementById("player").play();
});

function showMessage() {
  swal({
    title: "Happy Birth Day",
    text: "Happy Birth Day chị Dùm, chúc chị DÙm luôn vui vẻ, luôn xinh đẹp tươi tắn ",
    button: {
      text: "❤️️",
    },
  });
}
