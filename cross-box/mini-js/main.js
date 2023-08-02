const container = document.getElementById("container"),
  gateContainer = document.getElementById("gateContainer"),
  gameContainer = document.getElementById("gameContainer"),
  anaOut = document.getElementById("anaOut"),
  demo = document.getElementById("demo"),
  mainCanvas = document.getElementById("mainCanvas");
let anaOutCx,
  anaOutCy,
  initTouchAngle = 0,
  currentTouchAngle = 0,
  initAnaAngle = 0,
  netAngle = 0;
(anaOut.style.top =
  gameContainer.clientHeight -
  parseFloat(getItsCss(anaOut, "height")) -
  50 +
  "px"),
  (anaOut.style.left =
    gameContainer.clientWidth / 2 -
    parseFloat(getItsCss(anaOut, "width")) / 2 +
    "px"),
  (anaOutCx =
    parseFloat(anaOut.style.left) + parseFloat(getItsCss(anaOut, "width")) / 2),
  (anaOutCy =
    parseFloat(anaOut.style.top) + parseFloat(getItsCss(anaOut, "height")) / 2),
  anaOut.addEventListener("touchstart", function (n) {
    let t = n.changedTouches[0];
    (initTouchAngle = normalizedAngle(
      t.clientX - anaOutCx,
      t.clientY - anaOutCy
    )),
      (initAnaAngle =
        parseFloat(
          anaOut.style.transform.replace("rotateZ(", "").replace("deg)", "")
        ) || 0);
  }),
  anaOut.addEventListener("touchmove", function (n) {
    let t = n.changedTouches[0];
    (netAngle =
      (netAngle =
        (currentTouchAngle = normalizedAngle(
          t.clientX - anaOutCx,
          t.clientY - anaOutCy
        )) -
        initTouchAngle +
        initAnaAngle) > 360
        ? netAngle - 360
        : netAngle < 0
        ? netAngle + 360
        : netAngle),
      (this.style.transform = "rotateZ(" + netAngle + "deg)");
  }),
  anaOut.addEventListener("touchend", function (n) {}),
  (window.onload = () => {
    for (let n of container.children) n.style.display = "none";
    gateContainer.style.display = "flex";
  });
const startSurvivalGame = () => {
  new Game(gameContainer).play();
};
