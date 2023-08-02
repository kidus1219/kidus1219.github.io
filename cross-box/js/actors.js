class Shield {
  static __all__ = [];
  static maxSize = 60;
  static shielded = 0;
  constructor(size) {
    this.start = 0;
    this.end = 0;
    this.size = size;
    this.color = "teal";
    this.bleping = false;

    if (Shield.shielded + this.size > 360) {
      this.size = 360 - Shield.shielded;
    }
    if (this.size > Shield.maxSize) {
      new Shield(this.size - Shield.maxSize);
      this.size = Shield.maxSize;
    }

    Shield.shielded += this.size;
    if (this.size > 0) Shield.__all__.push(this);
  }
  grow(val) {
    if (this.shielded + val > 360) val = 360 - this.shielded;
    if (this.size + val > Shield.maxSize) {
      const temp = Shield.maxSize - this.size;
      this.size += temp;
      Shield.shielded += temp;
      val -= temp;
      for (let shield of Shield.__all__) {
        if (shield.size + val <= Shield.maxSize) {
          shield.size += val;
          Shield.shielded += val;
          return;
        }
      }
      new Shield(val);
    } else {
      this.size += val;
      Shield.shielded += val;
    }
  }
  shrink(val) {
    if (this.size - val <= 0) {
      Shield.__all__.splice(Shield.__all__.indexOf(this), 1);
      Shield.shielded -= this.size;
    } else {
      this.size -= val;
      this.shielded -= val;
    }
  }
  blepColor(color) {
    if (!this.bleping) {
      const temp = this.color;
      this.color = color;
      this.bleping = true;
      setTimeout(() => {
        this.color = temp;
        this.bleping = false;
      }, 300);
    }
  }
}

class DamacasePlant {
  constructor(canvas, ctx) {
    this.ctx = ctx;
    this.radius = 50;
    this.shieldDistance = 70;
    this.color = "green";
    this.bleping = false;
    this.health = 100;
    this.position = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    };
    this.shields = Shield;
    new this.shields(180);
    this.svgString = (
      color
    ) => `<svg fill="${color}" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41.274 41.274" xml:space="preserve" style="--darkreader-inline-fill:darkgreen; --darkreader-inline-stroke:lightgreen;" stroke="white" data-darkreader-inline-fill="" data-darkreader-inline-stroke="">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <g> <g id="b47_leaf"> <path d="M0,38.441l1.456,0.442l0.148-0.15c-0.138-0.324,7.082-8.532,7.054-8.888c-0.292-0.019-1.226-0.525-1.226-0.525 s-0.117,0.139-0.172,0.21C4.581,32.677,0,38.441,0,38.441z"/> <path d="M40.7,14.569c-0.582-0.822-1.553-1.282-2.573-1.319c-0.139,0.431-0.303,0.865-0.521,1.289 c-0.502,0.969-1.15,1.765-1.864,2.388c0.193,1.338-0.072,2.926-0.854,4.445c-0.504,0.977-1.162,1.779-1.881,2.406 c-0.237,1.295-0.951,2.682-2.1,3.859c-1.164,1.2-2.558,1.954-3.865,2.211c-0.577,0.704-1.311,1.359-2.208,1.879 c-2.224,1.289-4.668,1.426-6.208,0.52c-0.32,0.254-0.666,0.49-1.037,0.705c-1.551,0.9-3.203,1.227-4.59,1.043 c0.736,1.158,2.194,1.855,3.99,1.855c0.848,0,1.71-0.155,2.558-0.456c0.205-0.075,0.398-0.155,0.588-0.236 c0.783,0.503,1.798,0.776,2.912,0.776c0.845,0,1.701-0.151,2.546-0.455c0.755-0.269,1.457-0.656,2.093-1.154 c1.221-0.078,2.498-0.551,3.627-1.35c1.106-0.785,1.966-1.815,2.45-2.92c0.716-0.464,1.345-1.04,1.872-1.725 c0.831-1.074,1.353-2.301,1.491-3.498c0.656-0.445,1.234-0.99,1.726-1.627c1.065-1.377,1.616-3.019,1.513-4.475 C41.426,17.536,41.584,15.816,40.7,14.569z"/> <polygon points="18.213,25.134 18.066,25.251 18.738,25.454 "/> <path d="M36.485,3.349c-1.035-1.01-2.67-1.062-3.923-0.221c-1.517-1.069-4.089-0.999-6.43,0.357 c-0.37,0.216-0.715,0.454-1.036,0.709c-1.538-0.91-3.981-0.774-6.204,0.517c-0.898,0.521-1.633,1.173-2.212,1.877 c-1.306,0.256-2.697,1.013-3.864,2.211c-1.149,1.183-1.863,2.565-2.097,3.86c-0.719,0.628-1.377,1.43-1.881,2.408 c-0.783,1.519-1.049,3.107-0.854,4.446c-0.713,0.621-1.363,1.419-1.862,2.384c-1.529,2.968-1.113,6.23,0.936,7.283 c0.115,0.062,0.246,0.095,0.375,0.138c1.847-2.373,3.921-4.551,6.032-6.676l-0.205,0.1l-1.49-4.533l2.398,3.729 c0.244-0.241,0.485-0.487,0.73-0.727c1.235-1.233,2.49-2.44,3.762-3.633l-1.307-3.98l2.09,3.25 c1.576-1.462,3.178-2.891,4.803-4.297l-0.938-2.853l1.517,2.358c2.281-1.958,4.593-3.879,6.966-5.72l0.104,0.123 c-2.226,1.941-4.379,3.954-6.506,5.994l2.452,1.489l-3.021-0.908l0.027-0.065c-0.394,0.381-0.789,0.749-1.18,1.128 c-1.152,1.113-2.283,2.244-3.408,3.382l3.331,2.02l-4.113-1.233c-1.233,1.263-2.455,2.541-3.65,3.836 c-0.311,0.335-0.6,0.688-0.905,1.028l3.292,2l0.525,0.32l-0.672-0.203l-3.895-1.168l0.089-0.197 c-1.934,2.189-3.812,4.416-5.713,6.619c0.036,0.087,0.06,0.184,0.109,0.268c0.533,0.922,1.534,1.453,2.729,1.609 c1.386,0.186,3.039-0.141,4.595-1.042c0.366-0.214,0.712-0.452,1.035-0.706c1.539,0.906,3.982,0.77,6.206-0.518 c0.896-0.522,1.628-1.175,2.21-1.876c1.304-0.261,2.697-1.016,3.863-2.214c1.151-1.18,1.861-2.565,2.099-3.859 c0.718-0.627,1.376-1.432,1.88-2.408c0.782-1.517,1.049-3.105,0.854-4.443c0.713-0.626,1.361-1.42,1.862-2.387 c0.221-0.428,0.387-0.859,0.525-1.291C37,10.153,37.022,8.683,36.61,7.531C37.62,6.227,37.597,4.431,36.485,3.349z"/> </g> <g id="Capa_1_234_"> </g> </g> </g>

</svg>`;
    this.icon = new Image();
    this.icon.src = `data:image/svg+xml;charset=utf-8,${this.svgString(
      this.color
    )}`;
  }
  heal(val) {
    // maybe do color shiner here
    this.health = Math.min(100, this.health + val);
  }
  damage(val) {
    this.health -= val;
  }
  changeSvgColor(color = this.color) {
    this.icon.src = `data:image/svg+xml,${this.svgString(color)}`;
  }
  blepColor(color) {
    if (!this.bleping) {
      this.changeSvgColor(color);
      this.bleping = true;
      setTimeout(() => {
        this.changeSvgColor();
        this.bleping = false;
      }, 300);
    }
  }
  draw() {
    this.ctx.drawImage(
      this.icon,
      this.position.x - this.radius / 2,
      this.position.y - this.radius / 2,
      this.radius,
      this.radius
    );
  }
  drawShield(netAngle) {
    let anglePtr = 0;
    const gap = (360 - this.shields.shielded) / this.shields.__all__.length;
    this.ctx.lineWidth = 5;
    for (let shield of this.shields.__all__) {
      shield.start += anglePtr + (netAngle - shield.start);
      shield.end = shield.start + shield.size;
      if (shield.start > 360) shield.start -= 360;
      if (shield.end > 360) shield.end -= 360;
      this.ctx.beginPath();
      this.ctx.arc(
        this.position.x,
        this.position.y,
        this.shieldDistance,
        (shield.start * Math.PI) / 180,
        (shield.end * Math.PI) / 180
      );
      this.ctx.strokeStyle = shield.color;
      this.ctx.stroke();
      anglePtr += shield.size + gap;
    }
  }
  update(netAngle) {
    this.draw();
    this.drawShield(netAngle);
    return this.health;
  }
}

class Bullet {
  static __all__ = [];
  static __bulletPool__ = [];
  static __active__ = [];
  static fireAngle = {};
  static bulletGarbageCollector() {
    for (let i in Bullet.__all__) {
      if (Bullet.__all__[i].outOfBounds()) {
        Bullet.__all__.splice(i, 1);
      }
    }
  }
  static bulletActiveCollector() {
    for (let i in Bullet.__active__) {
      if (Bullet.__active__[i].outOfBounds()) {
        Bullet.__bulletPool__.push(Bullet.__active__.splice(i, 1)[0]);
      }
    }
  }
  constructor(
    ctx,
    position,
    target,
    bounds,
    color,
    speed = null,
    reflectK = null,
    shieldDamagePower = null,
    targetDamagePower = null,
    radius = 10
  ) {
    this.ctx = ctx;
    this.position = {
      x: position.x,
      y: position.y,
    };
    this.target = target;
    this.speed = speed;
    this.color = color;
    this.radius = radius;
    this.bounds = bounds;
    this.shieldDamagePower = shieldDamagePower;
    this.targetDamagePower = targetDamagePower;
    this.reflectK = reflectK
    // const fireAngle = getOrSetGet(
    //   Bullet.fireAngle,
    //   "x" + this.position.x + "_y" + this.position.y + "_r" + this.reflectK,
    //   () => this.aim(this.reflectK)
    // );
    // this.vx = Math.cos(fireAngle) * this.speed;
    // this.vy = Math.sin(fireAngle) * this.speed;

    Bullet.__all__.push(this);
  }
  aimFire() {
        const fireAngle = getOrSetGet(
      Bullet.fireAngle,
      "x" + this.position.x + "_y" + this.position.y + "_r" + this.reflectK,
      () => this.aim(this.reflectK)
    );
    this.vx = Math.cos(fireAngle) * this.speed;
    this.vy = Math.sin(fireAngle) * this.speed;

  }

  aim(reflectK) {
    const dx =
      this.bounds.xMax > this.position.x
        ? this.bounds.xMax - this.position.x
        : this.position.x - this.bounds.xMin;
    let dy = this.target.position.y - this.position.y;
    dy = (2 / (3 + (reflectK - 1) * 2)) * dy;
    return Math.atan2(dy, dx);
  }
  outOfBounds() {
    return (
      this.position.y < this.bounds.yMin || this.position.y > this.bounds.yMax
    );
  }
  handleCollision() {
    const dx = this.position.x - this.target.position.x;
    const dy = this.position.y - this.target.position.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < this.radius + this.target.shieldDistance) {
      if (dist < this.radius + this.target.radius - 5) {
        this.target.blepColor("red");
        this.target.damage(this.targetDamagePower);
        // Bullet.__all__.splice(Bullet.__all__.indexOf(this), 1);
        Bullet.__bulletPool__.push(Bullet.__active__.splice(Bullet.__active__.indexOf(this), 1)[0]);
        return;
      }
      const nowAngle = normalizedAngle(dx, dy);
      for (let shield of this.target.shields.__all__) {
        if (
          (nowAngle >= shield.start &&
            nowAngle <= shield.start + shield.size) ||
          (shield.start >= shield.end && nowAngle < shield.end)
        ) {
          const vAngle = ((shield.start + shield.size / 2) * Math.PI) / 180;
          this.vx = this.speed * Math.cos(vAngle);
          this.vy = this.speed * Math.sin(vAngle);
          shield.blepColor("red");
          shield.shrink(this.shieldDamagePower);
          return;
        }
      }
    }
  }
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fill();
  }
  update() {
    this.position.x += this.vx;
    this.position.y += this.vy;
    this.handleCollision();
    this.draw();
    if (
      this.position.x < this.bounds.xMin ||
      this.position.x > this.bounds.xMax
    ) {
      this.vx *= -1;
    }
  }
}

class Water {
  static __all__ = [];
  constructor(ctx, target, vy, targetHealPower, shieldHealPower) {
    this.ctx = ctx;
    this.radius = 5;
    this.color = "rgb(28,163,236)";
    this.targetHealPower = targetHealPower;
    this.shieldHealPower = shieldHealPower;
    this.vy = vy;
    this.target = target;
    this.position = {
      x: this.target.position.x,
      y: 0,
    };
    this.angle = normalizedAngle(
      this.position.x - this.target.position.x,
      this.position.y - this.target.position.y
    );
    Water.__all__.push(this);
  }
  handleCollision() {
    if (
      this.position.y >
      this.target.position.y - this.target.shieldDistance - this.radius * 2
    ) {
      if (this.position.y > this.target.position.y - this.target.radius / 2) {
        this.target.blepColor(this.color);
        this.target.heal(this.targetHealPower);
        Water.__all__.splice(Water.__all__.indexOf(this), 1);
        return;
      }
      for (let shield of this.target.shields.__all__) {
        if (
          this.angle >= shield.start &&
          this.angle <= shield.start + shield.size
        ) {
          shield.blepColor(this.color);
          shield.grow(this.shieldHealPower);
          Water.__all__.splice(Water.__all__.indexOf(this), 1);
          return;
        }
      }
    }
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.position.x, this.position.y);
    this.ctx.lineTo(
      this.position.x - this.radius,
      this.position.y + this.radius * 2
    );
    this.ctx.lineTo(
      this.position.x + this.radius,
      this.position.y + this.radius * 2
    );
    // this.ctx.closePath(); // read more
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.arc(
      this.position.x,
      this.position.y + this.radius * 2 - 1,
      this.radius,
      0,
      (180 * Math.PI) / 180
    );
    this.ctx.fill();
  }
  update() {
    this.position.y += this.vy;
    this.draw();
    this.handleCollision();
  }
}

class Gun {
  constructor(canvas, ctx, cord, target) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.target = target; //TODO use this to replace cord !Advanced
    this.color = "brown";
    this.length = 50;

    if (cord === "tl") {
      this.position = { x: 0, y: 0 };
      this.lr = 1;
      this.tb = 1;
      this.curveStart = 0;
    } else if (cord === "tr") {
      this.position = { x: canvas.width, y: 0 };
      this.lr = -1;
      this.tb = 1;
      this.curveStart = 90;
    } else if (cord === "bl") {
      this.position = { x: 0, y: canvas.height };
      this.lr = 1;
      this.tb = -1;
      this.curveStart = 270;
    } else if (cord === "br") {
      this.position = { x: canvas.width, y: canvas.height };
      this.lr = -1;
      this.tb = -1;
      this.curveStart = 180;
    } else {
      this.position = { x: 0, y: 0 };
      this.lr = 1;
      this.tb = 1;
      this.curveStart = 0;
    }
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.position.x, this.position.y);
    this.ctx.lineTo(this.position.x + this.lr * this.length, this.position.y);
    this.ctx.arc(
      this.position.x,
      this.position.y,
      this.length,
      (this.curveStart * Math.PI) / 180,
      ((this.curveStart + 90) * Math.PI) / 180
    );
    this.ctx.lineTo(this.position.x, this.position.y + this.tb * this.length);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  }
  fire(
    bulletSpeed,
    reflectK,
    bulletShieldDamagePower,
    bulletTargetDamagePower
  ) {
    new Bullet(
      this.ctx,
      this.position,
      this.target,
      { xMin: 0, xMax: this.canvas.width, yMin: 0, yMax: this.canvas.height },
        this.color,
      bulletSpeed,
      reflectK,
      bulletShieldDamagePower,
      bulletTargetDamagePower
    );
  }
  fireFromPool(bullet) {
    bullet.position = { ...this.position }
    bullet.aimFire()
    Bullet.__active__.push(bullet)
  }
}

class Game {
  static instance = null;
  //take profile data as parameter
  constructor(gameContainer) {
    if (Game.instance instanceof Game) {
      Game.instance.delete();
    }

    this.gameContainer = gameContainer;
    this.canvas = gameContainer.children.mainCanvas;
    this.canvas.width = gameContainer.clientWidth;
    this.canvas.height = gameContainer.clientHeight;
    this.ctx = this.canvas.getContext("2d");
    this.healthDisplay =
      gameContainer.children.scoreBoard.children.scoreBoardRow1.children.healthDisplay;
    this.ageDisplay =
      gameContainer.children.scoreBoard.children.scoreBoardRow2.children.ageDisplay;
    this.anaOut = gameContainer.children.anaOut;
    this.gamePauseDialog = gameContainer.children.gamePauseDialog;
    this.gameOverDialog = gameContainer.children.gameOverDialog;

    gameContainer.children.scoreBoard.children.scoreBoardRow2.children.pauseBtn.onclick =
      this.pause;
    gamePauseDialog.children.gamePauseDialogRow2.children.resumeGameBtn.onclick =
      this.resume;
    gamePauseDialog.children.gamePauseDialogRow2.children.exitPauseGameBtn.onclick =
      this.exit;
    gameOverDialog.children.gameOverDialogRow2.children.exitOverGameBtn.onclick =
      this.exit;
    gameOverDialog.children.gameOverDialogRow2.children.newGameBtn.onclick =
      this.new;

    this.taskList = [];
    this.age = 0;
    this.ageTimeConstant = 5000;
    this.shooterWaterConstant = 4;
    this.shootDelay = 5000;
    this.waterDelay = this.shootDelay * this.shooterWaterConstant;
    this.bulletSpeedMin = 3;
    this.bulletSpeedMax = this.bulletSpeedMin * 1.5;
    this.reflectKMax = 1;
    this.bulletTargetDamagePower = 10;
    this.bulletShieldDamagePower = 5;
    this.waterTargetHealPower = this.bulletTargetDamagePower * 3;
    this.waterShieldHealPower = this.bulletShieldDamagePower * 3;
    this.levelPtr = 1;

    this.damacasePlant = new DamacasePlant(this.canvas, this.ctx);

    for(let i = 0;i < 20; i++) {
      Bullet.__bulletPool__.push(new Bullet(
          this.ctx,
          {x: this.canvas.width/2, y: this.canvas.height/2},
          this.damacasePlant,
          { xMin: 0, xMax: this.canvas.width, yMin: 0, yMax: this.canvas.height },
          "brown",
      ));
    }

    this.taskList.push({
      target: [this.damacasePlant],
      action: (target) => {
        if (target.update(netAngle) <= 0) this.over();
      },
    });
    this.guns = [
      new Gun(this.canvas, this.ctx, "tl", this.damacasePlant),
      new Gun(this.canvas, this.ctx, "tr", this.damacasePlant),
      new Gun(this.canvas, this.ctx, "bl", this.damacasePlant),
      new Gun(this.canvas, this.ctx, "br", this.damacasePlant),
    ];
    this.taskList.push({
      target: this.guns,
      action: (target) => target.draw(),
    });
    this.taskList.push({
      target: Bullet.__active__,
      action: (target) => target.update(),
    });
    this.taskList.push({
      target: Water.__all__,
      action: (target) => target.update(),
    });
    this.taskList.push({
      target: [Bullet.bulletActiveCollector],
      action: (target) => target(),
    });

    this.shootInterval = null;
    this.waterInterval = null;

    this.animationStartTime = null;
    this.animationId = null;
    this.animationRunning = false;

    this.bgMusic = this.sound("./audio/background1.m4a");
    Game.instance = this;
    window.bp = Bullet.__bulletPool__;
    window.ac = Bullet.__active__;
  }
  setShooter() {
    if (this.shootInterval != null) clearInterval(this.shootInterval);
    this.shootInterval = setInterval(() => {
      if(Bullet.__bulletPool__.length < 1) {
        return
      }
      let bulletTemp = Bullet.__bulletPool__.pop()
      bulletTemp.speed = getRandInt(this.bulletSpeedMin, this.bulletSpeedMax)
      bulletTemp.reflectK = getRandInt(0, this.reflectKMax)
      bulletTemp.shieldDamagePower = this.bulletShieldDamagePower
      bulletTemp.targetDamagePower = this.bulletTargetDamagePower

      this.guns[getRandInt(0, this.guns.length - 1)].fireFromPool(
        bulletTemp
      );
      // this.guns[getRandInt(0, this.guns.length - 1)].fire(
      //   getRandInt(this.bulletSpeedMin, this.bulletSpeedMax),
      //   getRandInt(0, this.reflectKMax), //TODO something
      //   this.bulletShieldDamagePower,
      //   this.bulletTargetDamagePower
      // );
    }, this.shootDelay);
  }
  setWaterer() {
    if (this.waterInterval != null) clearInterval(this.waterInterval);
    this.waterInterval = setInterval(() => {
      new Water(
        this.ctx,
        this.damacasePlant,
        this.bulletSpeedMin / 4,
        this.waterTargetHealPower,
        this.waterShieldHealPower
      );
    }, this.waterDelay);
  }

  update(time) {
    //console.log('bg ==> ', window.bp, '\n\nac ==> ', window.ac)
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let x of this.taskList) {
      for (let y of x.target) {
        x.action(y);
      }
    }
    this.age = (time - this.animationStartTime) / this.ageTimeConstant;
    this.ageDisplay.innerHTML = this.age.toFixed(2);
    this.healthDisplay.value = this.damacasePlant.health; // maybe do min(thisu, healthDisplay.max)
    if (this.age > 3 * this.levelPtr) {
      //console.log("here we go again ", this.levelPtr);
      this.levelPtr += 1;
      if (this.bulletSpeedMax < 15) {
        this.bulletSpeedMin += 1;
        this.bulletSpeedMax = this.bulletSpeedMin * 1.5;
      } else {
        this.bulletSpeedMin = 3;
        this.bulletSpeedMax = this.bulletSpeedMin * 1.5;
      }
      if (this.shootDelay > 1000) {
        this.shootDelay -= 500;
        this.waterDelay = this.shootDelay * this.shooterWaterConstant;
        this.setShooter();
        this.setWaterer();
      } else {
        this.shootDelay = 5000;
        this.waterDelay = this.shootDelay * this.shooterWaterConstant;
      }
      if (this.reflectKMax < 3) {
        this.reflectKMax += 1;
      } else {
        this.reflectKMax = 1;
      }
    }
  }
  run = (time) => {
    // if (this.animationStartTime == null) {
    if (!this.animationRunning) {
      this.animationStartTime = time - this.age * this.ageTimeConstant;
      this.animationRunning = true
    }
    this.animationId = window.requestAnimationFrame(this.run);
    this.update(time);
  };
  stop = () => {
    this.bgMusic.pause();
    if (this.shootInterval != null) clearInterval(this.shootInterval);
    this.shootInterval = null;
    if (this.waterInterval != null) clearInterval(this.waterInterval);
    this.waterInterval = null;
    window.cancelAnimationFrame(this.animationId);
    // this.animationStartTime = null;
    this.animationRunning = false
  };
  play = () => {
    this.bgMusic.play();
    if (this.shootInterval == null) this.setShooter();
    if (this.waterInterval == null) this.setWaterer();
    window.requestAnimationFrame(this.run);

  };

  pause = () => {
    this.stop();
    this.anaOut.style.display = "none";
    this.gamePauseDialog.style.display = "flex";
  };
  resume = () => {
    this.play();
    this.anaOut.style.display = "flex";
    this.gamePauseDialog.style.display = "none";
  };
  new = () => {
    const gameContainer = this.gameContainer;
    new Game(gameContainer).play();
    this.anaOut.style.display = "flex";
    this.gameOverDialog.style.display = "none";
  };
  exit = () => {
    this.delete();
    this.anaOut.style.display = "flex";
    this.gamePauseDialog.style.display = "none";
    this.gameOverDialog.style.display = "none";
    turnPage(this.canvas, "gateContainer");
    //turn page
  };
  over = () => {
    this.stop();
    this.anaOut.style.display = "none";
    this.gameOverDialog.style.display = "flex";

    if(!localStorage.highscore || (localStorage.highscore && Number(localStorage.highscore) < this.age)) {
      localStorage.highscore = this.age.toFixed(2)
    }
  };
  delete = () => {
    Shield.__all__ = [];
    Shield.maxSize = 60;
    Shield.shielded = 0;

    Bullet.__all__ = [];
    Bullet.fireAngle = {};

    Water.__all__ = [];

    this.stop();
    Game.instance = null;
  };

  sound(src) {
    const sound = document.createElement("audio");
    sound.src = src;
    sound.setAttribute("preload", "auto");
    sound.setAttribute("controls", "none");
    sound.style.display = "none";
    document.body.appendChild(sound);
    // this.play = () => this.sound.play();
    // this.stop = () => this.sound.pause();
    return sound;
  }
}
