const container = document.getElementById("container");
const gateContainer = document.getElementById("gateContainer");
const gameContainer = document.getElementById("gameContainer");
const anaOut = document.getElementById("anaOut");
const demo = document.getElementById("demo");
const mainCanvas = document.getElementById("mainCanvas");

// mainCanvas.width = gameContainer.clientWidth;
// mainCanvas.height = gameContainer.clientHeight;

let anaOutCx,
  anaOutCy,
  initTouchAngle = 0,
  currentTouchAngle = 0,
  initAnaAngle = 0,
  netAngle = 0;

//setup analog
(function () {
  anaOut.style.top =
    gameContainer.clientHeight -
    parseFloat(getItsCss(anaOut, "height")) -
    50 +
    "px";
  anaOut.style.left =
    gameContainer.clientWidth / 2 -
    parseFloat(getItsCss(anaOut, "width")) / 2 +
    "px";
  anaOutCx =
    parseFloat(anaOut.style.left) + parseFloat(getItsCss(anaOut, "width")) / 2;
  anaOutCy =
    parseFloat(anaOut.style.top) + parseFloat(getItsCss(anaOut, "height")) / 2;
})();

// steering wheel
anaOut.addEventListener("touchstart", function (e) {
  const touchobj = e.changedTouches[0];
  initTouchAngle = normalizedAngle(
    touchobj.clientX - anaOutCx,
    touchobj.clientY - anaOutCy
  );
  initAnaAngle =
    parseFloat(
      anaOut.style.transform.replace("rotateZ(", "").replace("deg)", "")
    ) || 0;
});
anaOut.addEventListener("touchmove", function (e) {
  const touchobj = e.changedTouches[0];
  currentTouchAngle = normalizedAngle(
    touchobj.clientX - anaOutCx,
    touchobj.clientY - anaOutCy
  );

  netAngle = currentTouchAngle - initTouchAngle + initAnaAngle;
  netAngle =
    netAngle > 360 ? netAngle - 360 : netAngle < 0 ? netAngle + 360 : netAngle;

  this.style.transform = "rotateZ(" + netAngle + "deg)";
});
anaOut.addEventListener("touchend", function (e) {
  // const touchobj = e.changedTouches[0]
});

window.onload = () => {
  for (let x of container.children) x.style.display = "none";
  gateContainer.style.display = "flex";
};
const startSurvivalGame = () => {
  new Game(gameContainer).play();
};
