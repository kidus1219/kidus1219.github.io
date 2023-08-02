function _0xd825(_0x3f2213, _0x15ec1e) {
  const _0x40db57 = _0x40db();
  return (
    (_0xd825 = function (_0xd82530, _0x210283) {
      _0xd82530 = _0xd82530 - 0xdb;
      let _0x2cfb5c = _0x40db57[_0xd82530];
      return _0x2cfb5c;
    }),
    _0xd825(_0x3f2213, _0x15ec1e)
  );
}
const _0x40bbbf = _0xd825;
(function (_0x1bb33e, _0x28ce4f) {
  const _0x4e3d57 = _0xd825,
    _0x1424ac = _0x1bb33e();
  while (!![]) {
    try {
      const _0x5d7895 =
        -parseInt(_0x4e3d57(0xe1)) / 0x1 +
        parseInt(_0x4e3d57(0x126)) / 0x2 +
        (parseInt(_0x4e3d57(0x14e)) / 0x3) *
          (-parseInt(_0x4e3d57(0xde)) / 0x4) +
        parseInt(_0x4e3d57(0xf1)) / 0x5 +
        (parseInt(_0x4e3d57(0xe0)) / 0x6) * (parseInt(_0x4e3d57(0x132)) / 0x7) +
        parseInt(_0x4e3d57(0x10a)) / 0x8 +
        -parseInt(_0x4e3d57(0x111)) / 0x9;
      if (_0x5d7895 === _0x28ce4f) break;
      else _0x1424ac["push"](_0x1424ac["shift"]());
    } catch (_0xfde815) {
      _0x1424ac["push"](_0x1424ac["shift"]());
    }
  }
})(_0x40db, 0x7f070);
class Shield {
  static [_0x40bbbf(0x13d)] = [];
  static [_0x40bbbf(0x14d)] = 0x3c;
  static [_0x40bbbf(0x10e)] = 0x0;
  constructor(_0x35cfab) {
    const _0x17f496 = _0x40bbbf;
    (this[_0x17f496(0x175)] = 0x0),
      (this[_0x17f496(0x18d)] = 0x0),
      (this["size"] = _0x35cfab),
      (this[_0x17f496(0x125)] = "#c8b432"),
      (this["bleping"] = ![]);
    Shield[_0x17f496(0x10e)] + this[_0x17f496(0x116)] > 0x168 &&
      (this[_0x17f496(0x116)] = 0x168 - Shield["shielded"]);
    this[_0x17f496(0x116)] > Shield["maxSize"] &&
      (new Shield(this[_0x17f496(0x116)] - Shield[_0x17f496(0x14d)]),
      (this[_0x17f496(0x116)] = Shield[_0x17f496(0x14d)]));
    Shield[_0x17f496(0x10e)] += this[_0x17f496(0x116)];
    if (this[_0x17f496(0x116)] > 0x0) Shield["__all__"][_0x17f496(0x15a)](this);
  }
  ["grow"](_0x4c062b) {
    const _0x43e354 = _0x40bbbf;
    if (this[_0x43e354(0x10e)] + _0x4c062b > 0x168)
      _0x4c062b = 0x168 - this[_0x43e354(0x10e)];
    if (this["size"] + _0x4c062b > Shield[_0x43e354(0x14d)]) {
      if (_0x43e354(0x16d) !== "kjssw")
        this[_0x43e354(0xe6)] = _0x20ded0[_0x43e354(0x11f)](
          0x64,
          this[_0x43e354(0xe6)] + _0x4698b0
        );
      else {
        const _0x4f0eaf = Shield[_0x43e354(0x14d)] - this[_0x43e354(0x116)];
        (this[_0x43e354(0x116)] += _0x4f0eaf),
          (Shield["shielded"] += _0x4f0eaf),
          (_0x4c062b -= _0x4f0eaf);
        for (let _0x4c396f of Shield[_0x43e354(0x13d)]) {
          if (_0x43e354(0x114) !== _0x43e354(0xeb)) {
            if (_0x4c396f[_0x43e354(0x116)] + _0x4c062b <= Shield["maxSize"]) {
              (_0x4c396f[_0x43e354(0x116)] += _0x4c062b),
                (Shield[_0x43e354(0x10e)] += _0x4c062b);
              return;
            }
          } else {
            if (
              this[_0x43e354(0x14b)]["y"] >
              this[_0x43e354(0x168)][_0x43e354(0x14b)]["y"] -
                this["target"][_0x43e354(0x10b)] / 0x2
            ) {
              this[_0x43e354(0x168)][_0x43e354(0x17d)](this["color"]),
                this[_0x43e354(0x168)][_0x43e354(0xf5)](this[_0x43e354(0x135)]),
                _0x958e27[_0x43e354(0x13d)][_0x43e354(0x154)](
                  _0x352388[_0x43e354(0x13d)]["indexOf"](this),
                  0x1
                );
              return;
            }
            for (let _0x30092e of this["target"][_0x43e354(0x120)][
              _0x43e354(0x13d)
            ]) {
              if (
                this[_0x43e354(0x156)] >= _0x30092e[_0x43e354(0x175)] &&
                this[_0x43e354(0x156)] <=
                  _0x30092e[_0x43e354(0x175)] + _0x30092e["size"]
              ) {
                _0x30092e[_0x43e354(0x17d)](this["color"]),
                  _0x30092e[_0x43e354(0x10c)](this[_0x43e354(0x145)]),
                  _0x534748["__all__"][_0x43e354(0x154)](
                    _0x360693[_0x43e354(0x13d)][_0x43e354(0x147)](this),
                    0x1
                  );
                return;
              }
            }
          }
        }
        new Shield(_0x4c062b);
      }
    } else
      (this[_0x43e354(0x116)] += _0x4c062b),
        (Shield[_0x43e354(0x10e)] += _0x4c062b);
  }
  [_0x40bbbf(0x176)](_0x370494) {
    const _0x37993f = _0x40bbbf;
    if (this[_0x37993f(0x116)] - _0x370494 <= 0x0)
      Shield[_0x37993f(0x13d)][_0x37993f(0x154)](
        Shield[_0x37993f(0x13d)][_0x37993f(0x147)](this),
        0x1
      ),
        (Shield[_0x37993f(0x10e)] -= this[_0x37993f(0x116)]);
    else {
      if (_0x37993f(0x138) !== _0x37993f(0x189))
        (this[_0x37993f(0x116)] -= _0x370494),
          (this[_0x37993f(0x10e)] -= _0x370494);
      else {
        this[_0x37993f(0x11e)][_0x37993f(0x169)]();
        if (this[_0x37993f(0x16b)] != null) _0x361aab(this[_0x37993f(0x16b)]);
        this[_0x37993f(0x16b)] = null;
        if (this[_0x37993f(0xdf)] != null) _0x7abb23(this[_0x37993f(0xdf)]);
        (this["waterInterval"] = null),
          _0x7b096d["cancelAnimationFrame"](this[_0x37993f(0x105)]),
          (this["animationStartTime"] = null);
      }
    }
  }
  [_0x40bbbf(0x17d)](_0x4590d2) {
    const _0x4f0f23 = _0x40bbbf;
    if (!this[_0x4f0f23(0x130)]) {
      if (_0x4f0f23(0x12c) !== "MUjuL") {
        if (_0xc75abf["update"](_0x528cce) <= 0x0) this[_0x4f0f23(0x12a)]();
      } else {
        const _0x534ce1 = this["color"];
        (this[_0x4f0f23(0x125)] = _0x4590d2),
          (this[_0x4f0f23(0x130)] = !![]),
          setTimeout(() => {
            const _0x3b5142 = _0x4f0f23;
            _0x3b5142(0x15f) === _0x3b5142(0x188)
              ? this[_0x3b5142(0x18c)][
                  _0x40968e(0x0, this[_0x3b5142(0x18c)][_0x3b5142(0x151)] - 0x1)
                ][_0x3b5142(0x112)](
                  _0x215577(this[_0x3b5142(0xff)], this[_0x3b5142(0x181)]),
                  _0x48f9c3(0x0, this[_0x3b5142(0x13a)]),
                  this[_0x3b5142(0x11c)],
                  this[_0x3b5142(0x16c)]
                )
              : ((this[_0x3b5142(0x125)] = _0x534ce1), (this["bleping"] = ![]));
          }, 0x12c);
      }
    }
  }
}
class DamacasePlant {
  constructor(_0x369290, _0x15374b) {
    const _0x4e6ad2 = _0x40bbbf;
    (this[_0x4e6ad2(0x177)] = _0x15374b),
      (this[_0x4e6ad2(0x10b)] = 0x32),
      (this[_0x4e6ad2(0x166)] = 0x46),
      (this[_0x4e6ad2(0x125)] = _0x4e6ad2(0x11d)),
      (this[_0x4e6ad2(0x130)] = ![]),
      (this[_0x4e6ad2(0xe6)] = 0x64),
      (this[_0x4e6ad2(0x14b)] = {
        x: _0x369290["width"] / 0x2,
        y: _0x369290[_0x4e6ad2(0x17c)] / 0x2,
      }),
      (this["shields"] = Shield),
      new this[_0x4e6ad2(0x120)](0xb4),
      (this[_0x4e6ad2(0x12e)] = (_0x3a66cb) =>
        "<svg\x20fill=\x22" +
        _0x3a66cb +
        "\x22\x20id=\x22Capa_1\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20viewBox=\x220\x200\x2041.274\x2041.274\x22\x20xml:space=\x22preserve\x22\x20style=\x22--darkreader-inline-fill:darkgreen;\x20--darkreader-inline-stroke:lightgreen;\x22\x20stroke=\x22white\x22\x20data-darkreader-inline-fill=\x22\x22\x20data-darkreader-inline-stroke=\x22\x22>\x0a\x0a<g\x20id=\x22SVGRepo_bgCarrier\x22\x20stroke-width=\x220\x22/>\x0a\x0a<g\x20id=\x22SVGRepo_tracerCarrier\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22/>\x0a\x0a<g\x20id=\x22SVGRepo_iconCarrier\x22>\x20<g>\x20<g\x20id=\x22b47_leaf\x22>\x20<path\x20d=\x22M0,38.441l1.456,0.442l0.148-0.15c-0.138-0.324,7.082-8.532,7.054-8.888c-0.292-0.019-1.226-0.525-1.226-0.525\x20s-0.117,0.139-0.172,0.21C4.581,32.677,0,38.441,0,38.441z\x22/>\x20<path\x20d=\x22M40.7,14.569c-0.582-0.822-1.553-1.282-2.573-1.319c-0.139,0.431-0.303,0.865-0.521,1.289\x20c-0.502,0.969-1.15,1.765-1.864,2.388c0.193,1.338-0.072,2.926-0.854,4.445c-0.504,0.977-1.162,1.779-1.881,2.406\x20c-0.237,1.295-0.951,2.682-2.1,3.859c-1.164,1.2-2.558,1.954-3.865,2.211c-0.577,0.704-1.311,1.359-2.208,1.879\x20c-2.224,1.289-4.668,1.426-6.208,0.52c-0.32,0.254-0.666,0.49-1.037,0.705c-1.551,0.9-3.203,1.227-4.59,1.043\x20c0.736,1.158,2.194,1.855,3.99,1.855c0.848,0,1.71-0.155,2.558-0.456c0.205-0.075,0.398-0.155,0.588-0.236\x20c0.783,0.503,1.798,0.776,2.912,0.776c0.845,0,1.701-0.151,2.546-0.455c0.755-0.269,1.457-0.656,2.093-1.154\x20c1.221-0.078,2.498-0.551,3.627-1.35c1.106-0.785,1.966-1.815,2.45-2.92c0.716-0.464,1.345-1.04,1.872-1.725\x20c0.831-1.074,1.353-2.301,1.491-3.498c0.656-0.445,1.234-0.99,1.726-1.627c1.065-1.377,1.616-3.019,1.513-4.475\x20C41.426,17.536,41.584,15.816,40.7,14.569z\x22/>\x20<polygon\x20points=\x2218.213,25.134\x2018.066,25.251\x2018.738,25.454\x20\x22/>\x20<path\x20d=\x22M36.485,3.349c-1.035-1.01-2.67-1.062-3.923-0.221c-1.517-1.069-4.089-0.999-6.43,0.357\x20c-0.37,0.216-0.715,0.454-1.036,0.709c-1.538-0.91-3.981-0.774-6.204,0.517c-0.898,0.521-1.633,1.173-2.212,1.877\x20c-1.306,0.256-2.697,1.013-3.864,2.211c-1.149,1.183-1.863,2.565-2.097,3.86c-0.719,0.628-1.377,1.43-1.881,2.408\x20c-0.783,1.519-1.049,3.107-0.854,4.446c-0.713,0.621-1.363,1.419-1.862,2.384c-1.529,2.968-1.113,6.23,0.936,7.283\x20c0.115,0.062,0.246,0.095,0.375,0.138c1.847-2.373,3.921-4.551,6.032-6.676l-0.205,0.1l-1.49-4.533l2.398,3.729\x20c0.244-0.241,0.485-0.487,0.73-0.727c1.235-1.233,2.49-2.44,3.762-3.633l-1.307-3.98l2.09,3.25\x20c1.576-1.462,3.178-2.891,4.803-4.297l-0.938-2.853l1.517,2.358c2.281-1.958,4.593-3.879,6.966-5.72l0.104,0.123\x20c-2.226,1.941-4.379,3.954-6.506,5.994l2.452,1.489l-3.021-0.908l0.027-0.065c-0.394,0.381-0.789,0.749-1.18,1.128\x20c-1.152,1.113-2.283,2.244-3.408,3.382l3.331,2.02l-4.113-1.233c-1.233,1.263-2.455,2.541-3.65,3.836\x20c-0.311,0.335-0.6,0.688-0.905,1.028l3.292,2l0.525,0.32l-0.672-0.203l-3.895-1.168l0.089-0.197\x20c-1.934,2.189-3.812,4.416-5.713,6.619c0.036,0.087,0.06,0.184,0.109,0.268c0.533,0.922,1.534,1.453,2.729,1.609\x20c1.386,0.186,3.039-0.141,4.595-1.042c0.366-0.214,0.712-0.452,1.035-0.706c1.539,0.906,3.982,0.77,6.206-0.518\x20c0.896-0.522,1.628-1.175,2.21-1.876c1.304-0.261,2.697-1.016,3.863-2.214c1.151-1.18,1.861-2.565,2.099-3.859\x20c0.718-0.627,1.376-1.432,1.88-2.408c0.782-1.517,1.049-3.105,0.854-4.443c0.713-0.626,1.361-1.42,1.862-2.387\x20c0.221-0.428,0.387-0.859,0.525-1.291C37,10.153,37.022,8.683,36.61,7.531C37.62,6.227,37.597,4.431,36.485,3.349z\x22/>\x20</g>\x20<g\x20id=\x22Capa_1_234_\x22>\x20</g>\x20</g>\x20</g>\x0a\x0a</svg>"),
      (this[_0x4e6ad2(0x170)] = new Image()),
      (this[_0x4e6ad2(0x170)]["src"] =
        "data:image/svg+xml;charset=utf-8," +
        this[_0x4e6ad2(0x12e)](this[_0x4e6ad2(0x125)]));
  }
  [_0x40bbbf(0xf5)](_0x47d1c0) {
    const _0x40adc3 = _0x40bbbf;
    this[_0x40adc3(0xe6)] = Math[_0x40adc3(0x11f)](
      0x64,
      this[_0x40adc3(0xe6)] + _0x47d1c0
    );
  }
  [_0x40bbbf(0x109)](_0x5d89c9) {
    const _0x3571a = _0x40bbbf;
    this[_0x3571a(0xe6)] -= _0x5d89c9;
  }
  [_0x40bbbf(0x183)](_0x46c293 = this[_0x40bbbf(0x125)]) {
    const _0x39fc5d = _0x40bbbf;
    this[_0x39fc5d(0x170)][_0x39fc5d(0x118)] =
      _0x39fc5d(0xfe) + this["svgString"](_0x46c293);
  }
  [_0x40bbbf(0x17d)](_0x2fbd29) {
    const _0xd6b49b = _0x40bbbf;
    !this[_0xd6b49b(0x130)] &&
      (_0xd6b49b(0x162) !== _0xd6b49b(0x119)
        ? (this[_0xd6b49b(0x183)](_0x2fbd29),
          (this[_0xd6b49b(0x130)] = !![]),
          setTimeout(() => {
            const _0x72305d = _0xd6b49b;
            this[_0x72305d(0x183)](), (this["bleping"] = ![]);
          }, 0x12c))
        : ((this[_0xd6b49b(0x116)] += _0x59554d),
          (_0x2b001f[_0xd6b49b(0x10e)] += _0x5ee10e)));
  }
  [_0x40bbbf(0xef)]() {
    const _0x2e1bae = _0x40bbbf;
    this[_0x2e1bae(0x177)]["drawImage"](
      this[_0x2e1bae(0x170)],
      this[_0x2e1bae(0x14b)]["x"] - this[_0x2e1bae(0x10b)] / 0x2,
      this["position"]["y"] - this["radius"] / 0x2,
      this[_0x2e1bae(0x10b)],
      this[_0x2e1bae(0x10b)]
    );
  }
  [_0x40bbbf(0x172)](_0x5bdfa5) {
    const _0x4835c3 = _0x40bbbf;
    let _0xebe3 = 0x0;
    const _0x437181 =
      (0x168 - this[_0x4835c3(0x120)]["shielded"]) /
      this[_0x4835c3(0x120)]["__all__"][_0x4835c3(0x151)];
    this[_0x4835c3(0x177)]["lineWidth"] = 0x5;
    for (let _0x287764 of this["shields"][_0x4835c3(0x13d)]) {
      if ("BjcBl" !== _0x4835c3(0xfc)) {
        (_0x287764[_0x4835c3(0x175)] +=
          _0xebe3 + (_0x5bdfa5 - _0x287764[_0x4835c3(0x175)])),
          (_0x287764[_0x4835c3(0x18d)] =
            _0x287764[_0x4835c3(0x175)] + _0x287764[_0x4835c3(0x116)]);
        if (_0x287764[_0x4835c3(0x175)] > 0x168)
          _0x287764[_0x4835c3(0x175)] -= 0x168;
        if (_0x287764["end"] > 0x168) _0x287764["end"] -= 0x168;
        this["ctx"][_0x4835c3(0x161)](),
          this["ctx"][_0x4835c3(0x128)](
            this[_0x4835c3(0x14b)]["x"],
            this[_0x4835c3(0x14b)]["y"],
            this[_0x4835c3(0x166)],
            (_0x287764[_0x4835c3(0x175)] * Math["PI"]) / 0xb4,
            (_0x287764["end"] * Math["PI"]) / 0xb4
          ),
          (this[_0x4835c3(0x177)][_0x4835c3(0xe5)] = _0x287764["color"]),
          this[_0x4835c3(0x177)][_0x4835c3(0xdc)](),
          (_0xebe3 += _0x287764["size"] + _0x437181);
      } else
        (this[_0x4835c3(0x14b)] = { x: 0x0, y: _0x3d7d7c["height"] }),
          (this["lr"] = 0x1),
          (this["tb"] = -0x1),
          (this["curveStart"] = 0x10e);
    }
  }
  [_0x40bbbf(0x133)](_0x58868e) {
    const _0x353ddc = _0x40bbbf;
    return (
      this[_0x353ddc(0xef)](),
      this[_0x353ddc(0x172)](_0x58868e),
      this[_0x353ddc(0xe6)]
    );
  }
}
class Bullet {
  static ["__all__"] = [];
  static [_0x40bbbf(0x110)] = {};
  static ["bulletGarbageCollector"]() {
    const _0x225313 = _0x40bbbf;
    for (let _0x11dcea in Bullet[_0x225313(0x13d)]) {
      Bullet[_0x225313(0x13d)][_0x11dcea][_0x225313(0x134)]() &&
        Bullet[_0x225313(0x13d)][_0x225313(0x154)](_0x11dcea, 0x1);
    }
  }
  constructor(
    _0x4c103a,
    _0x4e61c7,
    _0x39a3fa,
    _0x4d0243,
    _0x319130,
    _0x5c9558,
    _0x5b40a6,
    _0x3f3610,
    _0x4d0032,
    _0x3a5eb0 = 0xa
  ) {
    const _0x46e98d = _0x40bbbf;
    (this[_0x46e98d(0x177)] = _0x4c103a),
      (this[_0x46e98d(0x14b)] = { x: _0x4e61c7["x"], y: _0x4e61c7["y"] }),
      (this[_0x46e98d(0x168)] = _0x39a3fa),
      (this[_0x46e98d(0x139)] = _0x319130),
      (this[_0x46e98d(0x125)] = _0x5c9558),
      (this[_0x46e98d(0x10b)] = _0x3a5eb0),
      (this[_0x46e98d(0xe7)] = _0x4d0243),
      (this[_0x46e98d(0xf0)] = _0x3f3610),
      (this["targetDamagePower"] = _0x4d0032);
    const _0x8fdf6e = getOrSetGet(
      Bullet[_0x46e98d(0x110)],
      "x" +
        this[_0x46e98d(0x14b)]["x"] +
        "_y" +
        this[_0x46e98d(0x14b)]["y"] +
        "_r" +
        _0x5b40a6,
      () => this[_0x46e98d(0xe4)](_0x5b40a6)
    );
    (this["vx"] = Math[_0x46e98d(0x153)](_0x8fdf6e) * this["speed"]),
      (this["vy"] = Math[_0x46e98d(0x143)](_0x8fdf6e) * this["speed"]),
      Bullet[_0x46e98d(0x13d)][_0x46e98d(0x15a)](this);
  }
  [_0x40bbbf(0xe4)](_0x196d0f) {
    const _0x3cd5a4 = _0x40bbbf,
      _0x47dc7a =
        this[_0x3cd5a4(0xe7)][_0x3cd5a4(0x136)] > this[_0x3cd5a4(0x14b)]["x"]
          ? this[_0x3cd5a4(0xe7)][_0x3cd5a4(0x136)] -
            this[_0x3cd5a4(0x14b)]["x"]
          : this[_0x3cd5a4(0x14b)]["x"] - this["bounds"]["xMin"];
    let _0x52477a =
      this[_0x3cd5a4(0x168)][_0x3cd5a4(0x14b)]["y"] -
      this[_0x3cd5a4(0x14b)]["y"];
    return (
      (_0x52477a = (0x2 / (0x3 + (_0x196d0f - 0x1) * 0x2)) * _0x52477a),
      Math[_0x3cd5a4(0xe9)](_0x52477a, _0x47dc7a)
    );
  }
  [_0x40bbbf(0x134)]() {
    const _0xbde37e = _0x40bbbf;
    return (
      this[_0xbde37e(0x14b)]["y"] < this[_0xbde37e(0xe7)][_0xbde37e(0x167)] ||
      this[_0xbde37e(0x14b)]["y"] > this[_0xbde37e(0xe7)][_0xbde37e(0x129)]
    );
  }
  [_0x40bbbf(0x121)]() {
    const _0x376b66 = _0x40bbbf,
      _0x24d1a9 =
        this[_0x376b66(0x14b)]["x"] -
        this[_0x376b66(0x168)][_0x376b66(0x14b)]["x"],
      _0x5d99ef =
        this["position"]["y"] - this[_0x376b66(0x168)][_0x376b66(0x14b)]["y"],
      _0x1623bb = Math["sqrt"](_0x24d1a9 * _0x24d1a9 + _0x5d99ef * _0x5d99ef);
    if (
      _0x1623bb <
      this[_0x376b66(0x10b)] + this[_0x376b66(0x168)][_0x376b66(0x166)]
    ) {
      if (_0x376b66(0xf2) !== _0x376b66(0xf2))
        new _0x3b2b81(
          this[_0x376b66(0x177)],
          this[_0x376b66(0x14b)],
          this[_0x376b66(0x168)],
          {
            xMin: 0x0,
            xMax: this["canvas"][_0x376b66(0xe8)],
            yMin: 0x0,
            yMax: this[_0x376b66(0x148)][_0x376b66(0x17c)],
          },
          _0x3462bd,
          this[_0x376b66(0x125)],
          _0x3479ca,
          _0x466559,
          _0x1ab34b
        );
      else {
        if (
          _0x1623bb <
          this[_0x376b66(0x10b)] + this[_0x376b66(0x168)]["radius"] - 0x5
        ) {
          if (_0x376b66(0x144) !== _0x376b66(0x152)) {
            this[_0x376b66(0x168)][_0x376b66(0x17d)](_0x376b66(0xe3)),
              this[_0x376b66(0x168)][_0x376b66(0x109)](this[_0x376b66(0x10d)]),
              Bullet[_0x376b66(0x13d)]["splice"](
                Bullet[_0x376b66(0x13d)][_0x376b66(0x147)](this),
                0x1
              );
            return;
          } else this[_0x376b66(0x13a)] += 0x1;
        }
        const _0x3b368f = normalizedAngle(_0x24d1a9, _0x5d99ef);
        for (let _0x30e500 of this[_0x376b66(0x168)][_0x376b66(0x120)][
          _0x376b66(0x13d)
        ]) {
          if (_0x376b66(0x174) === _0x376b66(0x101)) {
            if (this[_0x376b66(0xdf)] != null) _0x99ed3c(this[_0x376b66(0xdf)]);
            this[_0x376b66(0xdf)] = _0x3701ab(() => {
              const _0xf49dbe = _0x376b66;
              new _0x4bbae7(
                this[_0xf49dbe(0x177)],
                this[_0xf49dbe(0x18b)],
                this[_0xf49dbe(0xff)] / 0x4,
                this["waterTargetHealPower"],
                this[_0xf49dbe(0x115)]
              );
            }, this[_0x376b66(0x13b)]);
          } else {
            if (
              (_0x3b368f >= _0x30e500[_0x376b66(0x175)] &&
                _0x3b368f <=
                  _0x30e500[_0x376b66(0x175)] + _0x30e500[_0x376b66(0x116)]) ||
              (_0x30e500["start"] >= _0x30e500[_0x376b66(0x18d)] &&
                _0x3b368f < _0x30e500[_0x376b66(0x18d)])
            ) {
              const _0x1a2485 =
                ((_0x30e500["start"] + _0x30e500[_0x376b66(0x116)] / 0x2) *
                  Math["PI"]) /
                0xb4;
              (this["vx"] = this[_0x376b66(0x139)] * Math["cos"](_0x1a2485)),
                (this["vy"] =
                  this[_0x376b66(0x139)] * Math[_0x376b66(0x143)](_0x1a2485)),
                _0x30e500[_0x376b66(0x17d)](_0x376b66(0xe3)),
                _0x30e500[_0x376b66(0x176)](this[_0x376b66(0xf0)]);
              return;
            }
          }
        }
      }
    }
  }
  ["draw"]() {
    const _0x4a8546 = _0x40bbbf;
    (this[_0x4a8546(0x177)][_0x4a8546(0x146)] = this[_0x4a8546(0x125)]),
      this[_0x4a8546(0x177)][_0x4a8546(0x161)](),
      this["ctx"][_0x4a8546(0x128)](
        this[_0x4a8546(0x14b)]["x"],
        this[_0x4a8546(0x14b)]["y"],
        this[_0x4a8546(0x10b)],
        0x0,
        0x2 * Math["PI"]
      ),
      this[_0x4a8546(0x177)][_0x4a8546(0x106)]();
  }
  ["update"]() {
    const _0x2f2c91 = _0x40bbbf;
    (this[_0x2f2c91(0x14b)]["x"] += this["vx"]),
      (this[_0x2f2c91(0x14b)]["y"] += this["vy"]),
      this[_0x2f2c91(0x121)](),
      this[_0x2f2c91(0xef)](),
      (this[_0x2f2c91(0x14b)]["x"] < this[_0x2f2c91(0xe7)][_0x2f2c91(0x163)] ||
        this[_0x2f2c91(0x14b)]["x"] > this[_0x2f2c91(0xe7)]["xMax"]) &&
        (_0x2f2c91(0x10f) === _0x2f2c91(0x10f)
          ? (this["vx"] *= -0x1)
          : ((this[_0x2f2c91(0x190)] = 0x7d0),
            (this[_0x2f2c91(0x13b)] =
              this[_0x2f2c91(0x190)] * this[_0x2f2c91(0x178)])));
  }
}
class Water {
  static [_0x40bbbf(0x13d)] = [];
  constructor(_0x1a4ec6, _0x5ddede, _0x2cf388, _0x344c8e, _0x1bcb7c) {
    const _0x4ac40f = _0x40bbbf;
    (this[_0x4ac40f(0x177)] = _0x1a4ec6),
      (this[_0x4ac40f(0x10b)] = 0x5),
      (this["color"] = _0x4ac40f(0x165)),
      (this[_0x4ac40f(0x135)] = _0x344c8e),
      (this[_0x4ac40f(0x145)] = _0x1bcb7c),
      (this["vy"] = _0x2cf388),
      (this[_0x4ac40f(0x168)] = _0x5ddede),
      (this["position"] = {
        x: this[_0x4ac40f(0x168)][_0x4ac40f(0x14b)]["x"],
        y: 0x0,
      }),
      (this["angle"] = normalizedAngle(
        this["position"]["x"] - this[_0x4ac40f(0x168)][_0x4ac40f(0x14b)]["x"],
        this[_0x4ac40f(0x14b)]["y"] -
          this[_0x4ac40f(0x168)][_0x4ac40f(0x14b)]["y"]
      )),
      Water[_0x4ac40f(0x13d)][_0x4ac40f(0x15a)](this);
  }
  [_0x40bbbf(0x121)]() {
    const _0x2da1c7 = _0x40bbbf;
    if (
      this["position"]["y"] >
      this[_0x2da1c7(0x168)][_0x2da1c7(0x14b)]["y"] -
        this[_0x2da1c7(0x168)]["shieldDistance"] -
        this["radius"] * 0x2
    ) {
      if (
        this["position"]["y"] >
        this[_0x2da1c7(0x168)][_0x2da1c7(0x14b)]["y"] -
          this["target"][_0x2da1c7(0x10b)] / 0x2
      ) {
        this[_0x2da1c7(0x168)][_0x2da1c7(0x17d)](this["color"]),
          this["target"][_0x2da1c7(0xf5)](this[_0x2da1c7(0x135)]),
          Water[_0x2da1c7(0x13d)]["splice"](
            Water[_0x2da1c7(0x13d)][_0x2da1c7(0x147)](this),
            0x1
          );
        return;
      }
      for (let _0x4ee055 of this[_0x2da1c7(0x168)][_0x2da1c7(0x120)][
        _0x2da1c7(0x13d)
      ]) {
        if (
          this["angle"] >= _0x4ee055["start"] &&
          this["angle"] <=
            _0x4ee055[_0x2da1c7(0x175)] + _0x4ee055[_0x2da1c7(0x116)]
        ) {
          if (_0x2da1c7(0x180) !== _0x2da1c7(0x184)) {
            _0x4ee055[_0x2da1c7(0x17d)](this[_0x2da1c7(0x125)]),
              _0x4ee055[_0x2da1c7(0x10c)](this["shieldHealPower"]),
              Water["__all__"]["splice"](
                Water[_0x2da1c7(0x13d)][_0x2da1c7(0x147)](this),
                0x1
              );
            return;
          } else
            this["stop"](),
              (this["anaOut"]["style"][_0x2da1c7(0xec)] = _0x2da1c7(0x18a)),
              (this["gameOverDialog"]["style"][_0x2da1c7(0xec)] = "flex");
        }
      }
    }
  }
  [_0x40bbbf(0xef)]() {
    const _0x341f0a = _0x40bbbf;
    this[_0x341f0a(0x177)][_0x341f0a(0x161)](),
      this[_0x341f0a(0x177)][_0x341f0a(0x13f)](
        this[_0x341f0a(0x14b)]["x"],
        this["position"]["y"]
      ),
      this[_0x341f0a(0x177)][_0x341f0a(0x103)](
        this[_0x341f0a(0x14b)]["x"] - this["radius"],
        this[_0x341f0a(0x14b)]["y"] + this["radius"] * 0x2
      ),
      this[_0x341f0a(0x177)]["lineTo"](
        this["position"]["x"] + this[_0x341f0a(0x10b)],
        this[_0x341f0a(0x14b)]["y"] + this["radius"] * 0x2
      ),
      (this["ctx"][_0x341f0a(0x146)] = this["color"]),
      this[_0x341f0a(0x177)][_0x341f0a(0x106)](),
      this[_0x341f0a(0x177)][_0x341f0a(0x161)](),
      this[_0x341f0a(0x177)][_0x341f0a(0x128)](
        this[_0x341f0a(0x14b)]["x"],
        this[_0x341f0a(0x14b)]["y"] + this[_0x341f0a(0x10b)] * 0x2 - 0x1,
        this[_0x341f0a(0x10b)],
        0x0,
        (0xb4 * Math["PI"]) / 0xb4
      ),
      this[_0x341f0a(0x177)][_0x341f0a(0x106)]();
  }
  [_0x40bbbf(0x133)]() {
    const _0x2529e9 = _0x40bbbf;
    (this[_0x2529e9(0x14b)]["y"] += this["vy"]),
      this[_0x2529e9(0xef)](),
      this[_0x2529e9(0x121)]();
  }
}
class Gun {
  constructor(_0x432fa5, _0xe33ef8, _0x1f9d02, _0xb9cbab) {
    const _0x22f391 = _0x40bbbf;
    (this[_0x22f391(0x148)] = _0x432fa5),
      (this[_0x22f391(0x177)] = _0xe33ef8),
      (this[_0x22f391(0x168)] = _0xb9cbab),
      (this[_0x22f391(0x125)] = _0x22f391(0x12f)),
      (this[_0x22f391(0x151)] = 0x32);
    if (_0x1f9d02 === "tl")
      "vyMac" !== _0x22f391(0x12d)
        ? ((this[_0x22f391(0x14b)] = { x: 0x0, y: 0x0 }),
          (this["lr"] = 0x1),
          (this["tb"] = 0x1),
          (this["curveStart"] = 0x0))
        : (this[_0x22f391(0x170)]["src"] =
            _0x22f391(0xfe) + this["svgString"](_0x4f9e7d));
    else {
      if (_0x1f9d02 === "tr")
        (this["position"] = { x: _0x432fa5[_0x22f391(0xe8)], y: 0x0 }),
          (this["lr"] = -0x1),
          (this["tb"] = 0x1),
          (this[_0x22f391(0xe2)] = 0x5a);
      else {
        if (_0x1f9d02 === "bl") {
          if (_0x22f391(0x17b) !== _0x22f391(0x11a))
            (this[_0x22f391(0x14b)] = {
              x: 0x0,
              y: _0x432fa5[_0x22f391(0x17c)],
            }),
              (this["lr"] = 0x1),
              (this["tb"] = -0x1),
              (this[_0x22f391(0xe2)] = 0x10e);
          else
            for (let _0xf0c999 in _0x593af9[_0x22f391(0x13d)]) {
              _0x2ee484[_0x22f391(0x13d)][_0xf0c999][_0x22f391(0x134)]() &&
                _0x460f5a[_0x22f391(0x13d)][_0x22f391(0x154)](_0xf0c999, 0x1);
            }
        } else
          _0x1f9d02 === "br"
            ? _0x22f391(0xf9) !== _0x22f391(0xf9)
              ? (_0xb4e43d[_0x22f391(0x13d)][_0x22f391(0x154)](
                  _0x30bab4[_0x22f391(0x13d)][_0x22f391(0x147)](this),
                  0x1
                ),
                (_0xd56eb0[_0x22f391(0x10e)] -= this[_0x22f391(0x116)]))
              : ((this[_0x22f391(0x14b)] = {
                  x: _0x432fa5[_0x22f391(0xe8)],
                  y: _0x432fa5[_0x22f391(0x17c)],
                }),
                (this["lr"] = -0x1),
                (this["tb"] = -0x1),
                (this["curveStart"] = 0xb4))
            : _0x22f391(0x17f) === _0x22f391(0x171)
            ? ((this["bulletSpeedMin"] = 0x5),
              (this[_0x22f391(0x181)] = this[_0x22f391(0xff)] * 1.5))
            : ((this[_0x22f391(0x14b)] = { x: 0x0, y: 0x0 }),
              (this["lr"] = 0x1),
              (this["tb"] = 0x1),
              (this[_0x22f391(0xe2)] = 0x0));
      }
    }
  }
  [_0x40bbbf(0xef)]() {
    const _0x46921f = _0x40bbbf;
    this["ctx"][_0x46921f(0x161)](),
      this[_0x46921f(0x177)][_0x46921f(0x13f)](
        this[_0x46921f(0x14b)]["x"],
        this[_0x46921f(0x14b)]["y"]
      ),
      this["ctx"]["lineTo"](
        this[_0x46921f(0x14b)]["x"] + this["lr"] * this[_0x46921f(0x151)],
        this[_0x46921f(0x14b)]["y"]
      ),
      this[_0x46921f(0x177)][_0x46921f(0x128)](
        this[_0x46921f(0x14b)]["x"],
        this[_0x46921f(0x14b)]["y"],
        this["length"],
        (this["curveStart"] * Math["PI"]) / 0xb4,
        ((this[_0x46921f(0xe2)] + 0x5a) * Math["PI"]) / 0xb4
      ),
      this[_0x46921f(0x177)][_0x46921f(0x103)](
        this["position"]["x"],
        this[_0x46921f(0x14b)]["y"] + this["tb"] * this[_0x46921f(0x151)]
      ),
      (this[_0x46921f(0x177)][_0x46921f(0x146)] = this["color"]),
      this[_0x46921f(0x177)][_0x46921f(0x106)](),
      this["ctx"][_0x46921f(0x17e)]();
  }
  [_0x40bbbf(0x112)](_0x263fc3, _0x3a16dd, _0x4bd62b, _0x56ab42) {
    const _0x2702ca = _0x40bbbf;
    new Bullet(
      this["ctx"],
      this[_0x2702ca(0x14b)],
      this[_0x2702ca(0x168)],
      {
        xMin: 0x0,
        xMax: this[_0x2702ca(0x148)][_0x2702ca(0xe8)],
        yMin: 0x0,
        yMax: this[_0x2702ca(0x148)][_0x2702ca(0x17c)],
      },
      _0x263fc3,
      this["color"],
      _0x3a16dd,
      _0x4bd62b,
      _0x56ab42
    );
  }
}
class Game {
  static [_0x40bbbf(0xf8)] = null;
  constructor(_0x34cc2d) {
    const _0x274462 = _0x40bbbf;
    Game[_0x274462(0xf8)] instanceof Game &&
      (_0x274462(0x155) !== _0x274462(0x155)
        ? ((_0x26f59b[_0x274462(0x13d)] = []),
          (_0x570a71[_0x274462(0x14d)] = 0x3c),
          (_0x382bdd[_0x274462(0x10e)] = 0x0),
          (_0x23c278[_0x274462(0x13d)] = []),
          (_0x19082a[_0x274462(0x110)] = {}),
          (_0x5c90be["__all__"] = []),
          this[_0x274462(0xfb)](),
          (_0x3e6646["instance"] = null))
        : Game[_0x274462(0xf8)][_0x274462(0x164)]()),
      (this[_0x274462(0x122)] = _0x34cc2d),
      (this[_0x274462(0x148)] = _0x34cc2d[_0x274462(0x113)]["mainCanvas"]),
      (this[_0x274462(0x148)][_0x274462(0xe8)] = _0x34cc2d[_0x274462(0xdd)]),
      (this[_0x274462(0x148)][_0x274462(0x17c)] = _0x34cc2d["clientHeight"]),
      (this[_0x274462(0x177)] = this[_0x274462(0x148)][_0x274462(0x150)]("2d")),
      (this[_0x274462(0xf7)] =
        _0x34cc2d[_0x274462(0x113)]["scoreBoard"][_0x274462(0x113)][
          _0x274462(0x14c)
        ]["children"][_0x274462(0xf7)]),
      (this[_0x274462(0x16a)] =
        _0x34cc2d[_0x274462(0x113)][_0x274462(0xf4)]["children"][
          "scoreBoardRow2"
        ][_0x274462(0x113)][_0x274462(0x16a)]),
      (this[_0x274462(0x14a)] = _0x34cc2d[_0x274462(0x113)][_0x274462(0x14a)]),
      (this["gamePauseDialog"] = _0x34cc2d[_0x274462(0x113)][_0x274462(0x160)]),
      (this[_0x274462(0x159)] = _0x34cc2d[_0x274462(0x113)][_0x274462(0x159)]),
      (_0x34cc2d[_0x274462(0x113)][_0x274462(0xf4)]["children"][
        _0x274462(0x11b)
      ][_0x274462(0x113)][_0x274462(0x185)][_0x274462(0x14f)] =
        this[_0x274462(0x169)]),
      (gamePauseDialog["children"][_0x274462(0x13e)]["children"][
        _0x274462(0xfa)
      ][_0x274462(0x14f)] = this["resume"]),
      (gamePauseDialog[_0x274462(0x113)][_0x274462(0x13e)][_0x274462(0x113)][
        _0x274462(0xf3)
      ][_0x274462(0x14f)] = this[_0x274462(0x104)]),
      (gameOverDialog[_0x274462(0x113)][_0x274462(0x186)][_0x274462(0x113)][
        _0x274462(0x18e)
      ][_0x274462(0x14f)] = this[_0x274462(0x104)]),
      (gameOverDialog["children"]["gameOverDialogRow2"][_0x274462(0x113)][
        "newGameBtn"
      ]["onclick"] = this[_0x274462(0x108)]),
      (this[_0x274462(0x131)] = []),
      (this[_0x274462(0x15e)] = 0x0),
      (this[_0x274462(0x15d)] = 0x1388),
      (this[_0x274462(0x178)] = 0x6),
      (this["shootDelay"] = 0xbb8),
      (this[_0x274462(0x13b)] =
        this[_0x274462(0x190)] * this["shooterWaterConstant"]),
      (this[_0x274462(0xff)] = 0x5),
      (this[_0x274462(0x181)] = this[_0x274462(0xff)] * 1.5),
      (this[_0x274462(0x13a)] = 0x1),
      (this[_0x274462(0x16c)] = 0xf),
      (this["bulletShieldDamagePower"] = 0x5),
      (this["waterTargetHealPower"] = this[_0x274462(0x16c)] * 0x3),
      (this[_0x274462(0x115)] = this[_0x274462(0x11c)] * 0x3),
      (this[_0x274462(0x107)] = 0x1),
      (this[_0x274462(0x18b)] = new DamacasePlant(
        this[_0x274462(0x148)],
        this[_0x274462(0x177)]
      )),
      this[_0x274462(0x131)][_0x274462(0x15a)]({
        target: [this["damacasePlant"]],
        action: (_0x51a7b5) => {
          const _0x1bf557 = _0x274462;
          if (_0x51a7b5[_0x1bf557(0x133)](netAngle) <= 0x0)
            this[_0x1bf557(0x12a)]();
        },
      }),
      (this[_0x274462(0x18c)] = [
        new Gun(
          this[_0x274462(0x148)],
          this[_0x274462(0x177)],
          "tl",
          this[_0x274462(0x18b)]
        ),
        new Gun(
          this[_0x274462(0x148)],
          this[_0x274462(0x177)],
          "tr",
          this[_0x274462(0x18b)]
        ),
        new Gun(this["canvas"], this["ctx"], "bl", this[_0x274462(0x18b)]),
        new Gun(
          this[_0x274462(0x148)],
          this[_0x274462(0x177)],
          "br",
          this[_0x274462(0x18b)]
        ),
      ]),
      this[_0x274462(0x131)][_0x274462(0x15a)]({
        target: this[_0x274462(0x18c)],
        action: (_0x171aeb) => _0x171aeb[_0x274462(0xef)](),
      }),
      this[_0x274462(0x131)][_0x274462(0x15a)]({
        target: Bullet["__all__"],
        action: (_0x19378b) => _0x19378b[_0x274462(0x133)](),
      }),
      this[_0x274462(0x131)][_0x274462(0x15a)]({
        target: Water[_0x274462(0x13d)],
        action: (_0x5783c5) => _0x5783c5[_0x274462(0x133)](),
      }),
      this["taskList"][_0x274462(0x15a)]({
        target: [Bullet[_0x274462(0x124)]],
        action: (_0x5f2566) => _0x5f2566(),
      }),
      (this[_0x274462(0x16b)] = null),
      (this["waterInterval"] = null),
      (this["animationStartTime"] = null),
      (this["animationId"] = null),
      (this[_0x274462(0x11e)] = this[_0x274462(0xed)](
        "static/core/audio/background1.m4a"
      )),
      (Game[_0x274462(0xf8)] = this);
  }
  [_0x40bbbf(0x158)]() {
    const _0x293fae = _0x40bbbf;
    if (this[_0x293fae(0x16b)] != null) clearInterval(this["shootInterval"]);
    this[_0x293fae(0x16b)] = setInterval(() => {
      const _0x16bc32 = _0x293fae;
      this[_0x16bc32(0x18c)][
        getRandInt(0x0, this[_0x16bc32(0x18c)][_0x16bc32(0x151)] - 0x1)
      ][_0x16bc32(0x112)](
        getRandInt(this[_0x16bc32(0xff)], this[_0x16bc32(0x181)]),
        getRandInt(0x0, this[_0x16bc32(0x13a)]),
        this[_0x16bc32(0x11c)],
        this[_0x16bc32(0x16c)]
      );
    }, this["shootDelay"]);
  }
  [_0x40bbbf(0x16e)]() {
    const _0x156efd = _0x40bbbf;
    if (this[_0x156efd(0xdf)] != null) clearInterval(this["waterInterval"]);
    this["waterInterval"] = setInterval(() => {
      const _0x352fa6 = _0x156efd;
      new Water(
        this["ctx"],
        this["damacasePlant"],
        this[_0x352fa6(0xff)] / 0x4,
        this[_0x352fa6(0x15b)],
        this[_0x352fa6(0x115)]
      );
    }, this[_0x156efd(0x13b)]);
  }
  [_0x40bbbf(0x133)](_0x13387a) {
    const _0x2372ca = _0x40bbbf;
    this[_0x2372ca(0x177)]["clearRect"](
      0x0,
      0x0,
      this["canvas"][_0x2372ca(0xe8)],
      this["canvas"][_0x2372ca(0x17c)]
    );
    for (let _0x219e9e of this[_0x2372ca(0x131)]) {
      for (let _0x1817ef of _0x219e9e[_0x2372ca(0x168)]) {
        if ("wWVrL" !== _0x2372ca(0x123)) {
          (this[_0x2372ca(0x175)] = 0x0),
            (this[_0x2372ca(0x18d)] = 0x0),
            (this[_0x2372ca(0x116)] = _0x4a2ebe),
            (this[_0x2372ca(0x125)] = _0x2372ca(0xfd)),
            (this["bleping"] = ![]);
          _0x4af7c5[_0x2372ca(0x10e)] + this[_0x2372ca(0x116)] > 0x168 &&
            (this[_0x2372ca(0x116)] = 0x168 - _0x4c49fb[_0x2372ca(0x10e)]);
          this[_0x2372ca(0x116)] > _0x20e52f["maxSize"] &&
            (new _0x3930e0(this[_0x2372ca(0x116)] - _0xa5f8f5["maxSize"]),
            (this["size"] = _0x33d895[_0x2372ca(0x14d)]));
          _0x4f4131[_0x2372ca(0x10e)] += this[_0x2372ca(0x116)];
          if (this[_0x2372ca(0x116)] > 0x0)
            _0x52742f[_0x2372ca(0x13d)][_0x2372ca(0x15a)](this);
        } else _0x219e9e["action"](_0x1817ef);
      }
    }
    (this[_0x2372ca(0x15e)] =
      (_0x13387a - this[_0x2372ca(0x137)]) / this["ageTimeConstant"]),
      (this[_0x2372ca(0x16a)]["innerHTML"] =
        this[_0x2372ca(0x15e)][_0x2372ca(0x12b)](0x2)),
      (this["healthDisplay"][_0x2372ca(0x13c)] =
        this[_0x2372ca(0x18b)]["health"]);
    if (this[_0x2372ca(0x15e)] > 0x6 * this["levelPtr"]) {
      console[_0x2372ca(0x117)](_0x2372ca(0xee), this[_0x2372ca(0x107)]),
        (this["levelPtr"] += 0x1);
      if (this[_0x2372ca(0x181)] < 0x14) {
        if (_0x2372ca(0x17a) === _0x2372ca(0x15c)) {
          if (
            this[_0x2372ca(0x156)] >= _0x207ee7[_0x2372ca(0x175)] &&
            this["angle"] <= _0x1898dc["start"] + _0x2c3458[_0x2372ca(0x116)]
          ) {
            _0x2fe1a7[_0x2372ca(0x17d)](this[_0x2372ca(0x125)]),
              _0x4cf43b[_0x2372ca(0x10c)](this["shieldHealPower"]),
              _0xd22c22[_0x2372ca(0x13d)][_0x2372ca(0x154)](
                _0x5eabdd[_0x2372ca(0x13d)][_0x2372ca(0x147)](this),
                0x1
              );
            return;
          }
        } else
          (this[_0x2372ca(0xff)] += 0x3),
            (this[_0x2372ca(0x181)] = this[_0x2372ca(0xff)] * 1.5);
      } else
        (this[_0x2372ca(0xff)] = 0x5),
          (this[_0x2372ca(0x181)] = this["bulletSpeedMin"] * 1.5);
      this[_0x2372ca(0x190)] > 0x1f4
        ? _0x2372ca(0x187) !== _0x2372ca(0x18f)
          ? ((this[_0x2372ca(0x190)] -= 0x320),
            (this[_0x2372ca(0x13b)] =
              this[_0x2372ca(0x190)] * this[_0x2372ca(0x178)]),
            this[_0x2372ca(0x158)](),
            this[_0x2372ca(0x16e)]())
          : _0x58e439[_0x2372ca(0x179)](_0x37f126)
        : ((this[_0x2372ca(0x190)] = 0x7d0),
          (this[_0x2372ca(0x13b)] =
            this[_0x2372ca(0x190)] * this[_0x2372ca(0x178)])),
        this[_0x2372ca(0x13a)] < 0x3
          ? (this["reflectKMax"] += 0x1)
          : (this[_0x2372ca(0x13a)] = 0x0);
    }
  }
  [_0x40bbbf(0x100)] = (_0x3f79d1) => {
    const _0x534285 = _0x40bbbf;
    this[_0x534285(0x137)] == null &&
      (this[_0x534285(0x137)] =
        _0x3f79d1 - this[_0x534285(0x15e)] * this[_0x534285(0x15d)]),
      (this["animationId"] = window[_0x534285(0xf6)](this[_0x534285(0x100)])),
      this[_0x534285(0x133)](_0x3f79d1);
  };
  [_0x40bbbf(0xfb)] = () => {
    const _0x451cb9 = _0x40bbbf;
    this[_0x451cb9(0x11e)][_0x451cb9(0x169)]();
    if (this[_0x451cb9(0x16b)] != null) clearInterval(this["shootInterval"]);
    this[_0x451cb9(0x16b)] = null;
    if (this[_0x451cb9(0xdf)] != null) clearInterval(this[_0x451cb9(0xdf)]);
    (this[_0x451cb9(0xdf)] = null),
      window[_0x451cb9(0x16f)](this[_0x451cb9(0x105)]),
      (this[_0x451cb9(0x137)] = null);
  };
  [_0x40bbbf(0x157)] = () => {
    const _0x5b2383 = _0x40bbbf;
    this["bgMusic"][_0x5b2383(0x157)]();
    if (this[_0x5b2383(0x16b)] == null) this[_0x5b2383(0x158)]();
    if (this[_0x5b2383(0xdf)] == null) this[_0x5b2383(0x16e)]();
    window["requestAnimationFrame"](this["run"]);
  };
  [_0x40bbbf(0x169)] = () => {
    const _0x58b723 = _0x40bbbf;
    this[_0x58b723(0xfb)](),
      (this["anaOut"][_0x58b723(0x173)][_0x58b723(0xec)] = "none"),
      (this[_0x58b723(0x160)][_0x58b723(0x173)]["display"] = _0x58b723(0xdb));
  };
  [_0x40bbbf(0x127)] = () => {
    const _0x13e3c3 = _0x40bbbf;
    this[_0x13e3c3(0x157)](),
      (this[_0x13e3c3(0x14a)][_0x13e3c3(0x173)]["display"] = _0x13e3c3(0xdb)),
      (this[_0x13e3c3(0x160)][_0x13e3c3(0x173)]["display"] = "none");
  };
  [_0x40bbbf(0x108)] = () => {
    const _0x22cf28 = _0x40bbbf,
      _0x4f24aa = this[_0x22cf28(0x122)];
    new Game(_0x4f24aa)["play"](),
      (this["anaOut"][_0x22cf28(0x173)][_0x22cf28(0xec)] = _0x22cf28(0xdb)),
      (this["gameOverDialog"][_0x22cf28(0x173)][_0x22cf28(0xec)] =
        _0x22cf28(0x18a));
  };
  [_0x40bbbf(0x104)] = () => {
    const _0xf80fd4 = _0x40bbbf;
    this[_0xf80fd4(0x164)](),
      (this[_0xf80fd4(0x14a)]["style"][_0xf80fd4(0xec)] = _0xf80fd4(0xdb)),
      (this[_0xf80fd4(0x160)][_0xf80fd4(0x173)][_0xf80fd4(0xec)] =
        _0xf80fd4(0x18a)),
      (this[_0xf80fd4(0x159)]["style"][_0xf80fd4(0xec)] = _0xf80fd4(0x18a)),
      turnPage(this[_0xf80fd4(0x148)], "gateContainer");
  };
  ["over"] = () => {
    const _0x5b7f7f = _0x40bbbf;
    this[_0x5b7f7f(0xfb)](),
      (this[_0x5b7f7f(0x14a)][_0x5b7f7f(0x173)][_0x5b7f7f(0xec)] = "none"),
      (this[_0x5b7f7f(0x159)][_0x5b7f7f(0x173)][_0x5b7f7f(0xec)] =
        _0x5b7f7f(0xdb));
  };
  [_0x40bbbf(0x164)] = () => {
    const _0x11c05e = _0x40bbbf;
    (Shield[_0x11c05e(0x13d)] = []),
      (Shield[_0x11c05e(0x14d)] = 0x3c),
      (Shield[_0x11c05e(0x10e)] = 0x0),
      (Bullet[_0x11c05e(0x13d)] = []),
      (Bullet[_0x11c05e(0x110)] = {}),
      (Water[_0x11c05e(0x13d)] = []),
      this[_0x11c05e(0xfb)](),
      (Game[_0x11c05e(0xf8)] = null);
  };
  [_0x40bbbf(0xed)](_0x21352d) {
    const _0x313b48 = _0x40bbbf,
      _0x4c7861 = document[_0x313b48(0x102)](_0x313b48(0x182));
    return (
      (_0x4c7861[_0x313b48(0x118)] = _0x21352d),
      _0x4c7861[_0x313b48(0x149)]("preload", _0x313b48(0x140)),
      _0x4c7861[_0x313b48(0x149)](_0x313b48(0xea), _0x313b48(0x18a)),
      (_0x4c7861[_0x313b48(0x173)][_0x313b48(0xec)] = _0x313b48(0x18a)),
      document[_0x313b48(0x141)][_0x313b48(0x142)](_0x4c7861),
      _0x4c7861
    );
  }
}
function _0x40db() {
  const _0x280ee0 = [
    "curveStart",
    "red",
    "aim",
    "strokeStyle",
    "health",
    "bounds",
    "width",
    "atan2",
    "controls",
    "Hjtqd",
    "display",
    "sound",
    "herwego\x20again\x20",
    "draw",
    "shieldDamagePower",
    "1489900wAPMlI",
    "cjvMO",
    "exitPauseGameBtn",
    "scoreBoard",
    "heal",
    "requestAnimationFrame",
    "healthDisplay",
    "instance",
    "wqodz",
    "resumeGameBtn",
    "stop",
    "CqBtG",
    "#c8b432",
    "data:image/svg+xml,",
    "bulletSpeedMin",
    "run",
    "nxlTZ",
    "createElement",
    "lineTo",
    "exit",
    "animationId",
    "fill",
    "levelPtr",
    "new",
    "damage",
    "2806888QKEWnA",
    "radius",
    "grow",
    "targetDamagePower",
    "shielded",
    "SrmyZ",
    "fireAngle",
    "8559081jovEZb",
    "fire",
    "children",
    "LdJzo",
    "waterShieldHealPower",
    "size",
    "log",
    "src",
    "TKkaB",
    "CyYap",
    "scoreBoardRow2",
    "bulletShieldDamagePower",
    "green",
    "bgMusic",
    "min",
    "shields",
    "handleCollision",
    "gameContainer",
    "wWVrL",
    "bulletGarbageCollector",
    "color",
    "1882406acSnAk",
    "resume",
    "arc",
    "yMax",
    "over",
    "toFixed",
    "MUjuL",
    "DmevS",
    "svgString",
    "#1b6d85",
    "bleping",
    "taskList",
    "28VLbbiR",
    "update",
    "outOfBounds",
    "targetHealPower",
    "xMax",
    "animationStartTime",
    "HXWvl",
    "speed",
    "reflectKMax",
    "waterDelay",
    "value",
    "__all__",
    "gamePauseDialogRow2",
    "moveTo",
    "auto",
    "body",
    "appendChild",
    "sin",
    "lDlDh",
    "shieldHealPower",
    "fillStyle",
    "indexOf",
    "canvas",
    "setAttribute",
    "anaOut",
    "position",
    "scoreBoardRow1",
    "maxSize",
    "6858OtgBxs",
    "onclick",
    "getContext",
    "length",
    "gezZO",
    "cos",
    "splice",
    "sILQi",
    "angle",
    "play",
    "setShooter",
    "gameOverDialog",
    "push",
    "waterTargetHealPower",
    "XXbUj",
    "ageTimeConstant",
    "age",
    "bwyKW",
    "gamePauseDialog",
    "beginPath",
    "LQHZD",
    "xMin",
    "delete",
    "rgb(28,163,236)",
    "shieldDistance",
    "yMin",
    "target",
    "pause",
    "ageDisplay",
    "shootInterval",
    "bulletTargetDamagePower",
    "kjssw",
    "setWaterer",
    "cancelAnimationFrame",
    "icon",
    "tPaty",
    "drawShield",
    "style",
    "xgSrR",
    "start",
    "shrink",
    "ctx",
    "shooterWaterConstant",
    "action",
    "sNMZP",
    "XkmqD",
    "height",
    "blepColor",
    "closePath",
    "HjKIg",
    "GhTxh",
    "bulletSpeedMax",
    "audio",
    "changeSvgColor",
    "SYIGc",
    "pauseBtn",
    "gameOverDialogRow2",
    "mDnfz",
    "WduRy",
    "DBtwB",
    "none",
    "damacasePlant",
    "guns",
    "end",
    "exitOverGameBtn",
    "CgNYE",
    "shootDelay",
    "flex",
    "stroke",
    "clientWidth",
    "472BnxEsH",
    "waterInterval",
    "1513752FZHRfc",
    "858151hGDVKf",
  ];
  _0x40db = function () {
    return _0x280ee0;
  };
  return _0x40db();
}
