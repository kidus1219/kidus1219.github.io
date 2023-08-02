const getItsCss = (e, t) => window.getComputedStyle(e).getPropertyValue(t),
  debugPrint = (e) => {
    let t = 1;
    for (let n of ((demo.innerHTML = "<br>"), e))
      (demo.innerHTML += t + ".  = " + n + "<br>"), t++;
  },
  debugConrol = (e) => {
    1 == e
      ? (b.position.y -= b.velocity.y)
      : 2 == e
      ? (b.position.x -= b.velocity.x)
      : 3 == e
      ? (b.position.x += b.velocity.x)
      : 4 == e && (b.position.y += b.velocity.y);
  },
  normalizedAngle2 = (e, t) => {
    let n = (180 * Math.atan(t / Math.abs(e))) / Math.PI,
      l = 0;
    return (
      e > 0 && t < 0
        ? (l = n)
        : e < 0 && t < 0
        ? (l = -180 - n)
        : e < 0 && t > 0
        ? (l = -180 - n)
        : e > 0 && t > 0 && (l = -360 + n),
      l
    );
  },
  normalizedAngle = (e, t) => {
    let n = Math.atan(t / e);
    return (
      1 / e < 0 && (n += Math.PI),
      1 / n < 0 && (n += 2 * Math.PI),
      (180 * n) / Math.PI
    );
  },
  getRandInt = (e, t) => Math.floor(Math.random() * (t - e + 1)) + e,
  getOrSetGet = (e, t, n) => (t in e || (e[t] = n()), e[t]),
  turnPage = (e, t = null) => {
    (e.parentElement.style.display = "none"),
      null != t && (document.getElementById(t).style.display = "flex");
  };
