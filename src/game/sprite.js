import { Composite } from './composite';
import { Collision } from './collision';
import collisions from './collisions.json';
import battlezones from './battlezone.json';

const mapInitOffset = {
  x: -1218,
  y: -800
};

const collisionBlocks = parseBoundary(collisions.data, 342, 40);
const battlezoneBlocks = parseBoundary(battlezones.data, 343, 40);

function parseBoundary(arr, target, size) {
  const ret = [];
  for (let i = 0; i < arr.length; i += size) {
    for (let j = i; j < i + size; j++) {
      if (arr[j] === target) {
        const boundary = {
          position: { x: (j-i) * 64, y: Math.floor(i/size)*64 },
          size: { width: 16, height: 16 }
        };
        boundary.position.x += mapInitOffset.x;
        boundary.position.y += mapInitOffset.y;
        ret.push(boundary);
      }
    }
  }
  return ret;
}

export function createCollisionComposite() {
  const composite = new Composite();
  const collisionBodys = [];
  collisionBlocks.forEach(({ position }) => {
    collisionBodys.push(new CollisionBlock(position.x, position.y));
  })
  composite.add(collisionBodys);
  composite.cid = 'collisions';
  return composite;
}

export function createBattlezoneComposite() {
  const composite = new Composite();
  const battlezoneBodys = [];
  battlezoneBlocks.forEach(({ position }) => {
    battlezoneBodys.push(new BattlezoneBlock(position.x, position.y));
  })
  composite.add(battlezoneBodys);
  composite.cid = 'battlezones';
  return composite;
}

export class Body {
  constructor(x, y, options = {}) {
    this.options = {
      render: {},
      ...options,
    };
    this.size = null;
    this.render = {
      fillStyle: 'yellow',
      ...options.render,
    };
    this.position = {
      x,
      y,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
  }

  translate(vector) {
    this.position.x += vector.x;
    this.position.y += vector.y;
  }

  setPosition(vector) {
    this.position.x = vector.x;
    this.position.y = vector.y;
  }

  setVelocity(vector) {
    this.velocity.x = vector.x;
    this.velocity.y = vector.y;
  }

  // predefined
  // eslint-disable-next-line
  draw(ctx) {}
}

export class Sprite extends Body {
  constructor(x, y, width, height) {
    super(x, y);
    this.size = {
      width,
      height,
    };
    this.opacity = 1;
  }

  draw(ctx) {
    const { position: pos, size, render } = this;
    ctx.fillStyle = render.fillStyle;
    ctx.fillRect(pos.x, pos.y, size.width * 4, size.height * 4);
  }

  attack({ attack, target }) {
    const self = this;
    const tl = gsap.timeline();
    let moveDistance = 20;
    let lifebar = '#enemy-life';
    if (this.isEnemy) {
      moveDistance = -moveDistance;
      lifebar = '#us-life';
    }
    tl.to(this.position, {
      x: this.position.x - moveDistance,
      duration: 0.3
    }).to(this.position, {
      x: this.position.x + moveDistance * 2,
      y: this.position.y - moveDistance,
      duration: 0.15,
      onComplete() {
        gsap.to(target.position, {
          x: target.position.x + moveDistance,
          repeat: 5,
          yoyo: true,
          duration: 0.08,
        })
        gsap.to(target, {
          opacity: 0,
          repeat: 5,
          yoyo: true,
          duration: 0.08,
        })
        gsap.to(lifebar, {
          width: target.health - attack.damage + '%',
          onComplete() {
            target.health -= attack.damage;
            if (target.health <= 0) {
              // battle end
              if (target.isEnemy) {
                const { world } = window.gameEngine;
                world.get('player').status = 'static';
                world.get('battlebg').open = false;
                world.remove(window.transport.battleEnemy);
                window.transport.stopBattle();
              }
            }
          }
        })
      }
    }).to(this.position, {
      x: this.position.x,
      y: this.position.y,
    })
  }
}

class CollisionBlock extends Sprite {
  constructor(x, y) {
    // offset y collision block
    super(x, y - 16, 16, 16);
    this.render.fillStyle = 'transparent';
  }
}

class BattlezoneBlock extends Sprite {
  constructor(x, y) {
    super(x, y, 16, 16);
    this.render.fillStyle = 'transparent';
  }
}

export class LandMap extends Sprite {
  constructor() {
    super(mapInitOffset.x, mapInitOffset.y, 0, 0);
    this.cid = 'map';
    this.image = window.gameLoader.assets.map;
  }

  draw(ctx) {
    const { position: pos, image } = this;
    ctx.drawImage(
      image,
      pos.x,
      pos.y
    );
  }
}

export class ForegroundMap extends Sprite {
  constructor() {
    super(mapInitOffset.x, mapInitOffset.y, 0, 0);
    this.cid = 'foreground';
    this.image = window.gameLoader.assets.foreground;
  }

  draw(ctx) {
    const { position: pos, image } = this;
    ctx.drawImage(
      image,
      pos.x,
      pos.y
    );
  }
}

export class BattleBackground extends Sprite {
  constructor() {
    const { canvas } = window.gameRender;
    super(0, 0, canvas.width, canvas.height);
    this.cid = 'battlebg';
    this.image = window.gameLoader.assets.battlebg;
    this.open = false;
  }

  draw(ctx) {
    if (this.open) {
      const { position: pos, image, size } = this;
      ctx.drawImage(
        image,
        pos.x,
        pos.y,
        size.width,
        size.height,
      );
    }
  }
}

export class Player extends Sprite {
  constructor() {
    const { canvas } = window.gameRender;
    super(canvas.width/2, canvas.height/2, 16, 16);
    this.cid = 'player';
    this.status = 'static';
    this.direction = 'down';
    this.frame = 0;
    this.frameRow = {
      down: 0,
      up: 1,
      left: 2,
      right: 3
    };
    this.frameMax = 4;
    this.elapse = 0;
    this.movement = {
      down: [0, -4],
      up: [0, 4],
      left: [4, 0],
      right: [-4, 0]
    }
    this.engine = window.gameEngine;
    this.image = window.gameLoader.assets.player;

    this.onKeyDownListener = this.onKeyDown.bind(this);
    this.onKeyUpListener = this.onKeyUp.bind(this);
  }

  init() {
    document.addEventListener('keydown', this.onKeyDownListener);
    document.addEventListener('keyup', this.onKeyUpListener);
  }

  onKeyDown(e) {
    if (this.status === 'battle') return;
    if (['w','a','s','d'].includes(e.key)) {
      this.status = 'move';
    }
    switch (e.key) {
      case 'w':
        this.direction = 'up';
        break;
      case 's':
        this.direction = 'down';
        break;
      case 'a':
        this.direction = 'left';
        break;
      case 'd':
        this.direction = 'right';
        break;
    }
  }

  onKeyUp() {
    if (this.status === 'battle') return;
    this.status = 'static';
  }

  static(ctx) {
    const { position: pos, size, image, direction, frame, frameRow } = this;
    ctx.drawImage(
      image,
      frame * 16,
      frameRow[direction] * 16,
      size.width,
      size.height,
      pos.x,
      pos.y,
      size.width * 4,
      size.height * 4
    );
    this.elapse++;
    if (this.elapse % 10 === 0) {
      // reset frame
      if (frame < 1) this.frame++;
      else this.frame = 0;
    }
  }

  battle(ctx) {
    const { position: pos, size, image, direction, frame, frameRow } = this;
    ctx.drawImage(
      image,
      frame * 16,
      frameRow[direction] * 16,
      size.width,
      size.height,
      pos.x,
      pos.y,
      size.width * 4,
      size.height * 4
    );
  }

  move(ctx) {
    const { translateList } = window;
    const collisions = this.engine.world.get('collisions');
    const battlezones = this.engine.world.get('battlezones');
    const { position: pos, size, image, direction, frame, frameRow, frameMax, movement } = this;
    const move = movement[direction];
    ctx.drawImage(
      image,
      frame * 16,
      frameRow[direction] * 16,
      size.width,
      size.height,
      pos.x,
      pos.y,
      size.width * 4,
      size.height * 4
    );
    this.elapse++;
    if (this.elapse % 10 === 0) {
      // reset frame
      if (frame < frameMax - 1) this.frame++;
      else this.frame = 2;
    }
    // check collision
    const collisionBodys = collisions.bodies;
    let moving = true;
    for (let i = 0; i < collisionBodys.length; i++) {
      const cbody = collisionBodys[i];
      // "precheck" next step to prevent moving forward
      if (Collision.detect(this, {
        position: {
          x: cbody.position.x + move[0],
          y: cbody.position.y + move[1],
        },
        size: cbody.size,
      }, 3.5)) { // collision offset
        moving = false;
        break;
      }
    }
    if (moving) {
      // move background
      translateList.forEach((item) => {
        item.translate({ x: move[0], y: move[1] });
      })
      // check battlezone
      const battlezoneBodys = battlezones.bodies;
      for (let i = 0; i < battlezoneBodys.length; i++) {
        const bbody = battlezoneBodys[i];
        const { size } = this;
        if (
          Collision.detect(this, bbody, 4) &&
          Collision.detectArea(this, bbody, 4) > size.width * size.height * 16 / 2 &&
          Math.random() < 0.05
        ) {
          const battlebg = this.engine.world.get('battlebg');
          const newEnemy = new BattleSpirit();
          this.engine.world.add(newEnemy);
          this.status = 'battle';
          gsap.to('#battle-overlay', {
            opacity: 1,
            repeat: 3,
            duration: 0.4,
            onComplete() {
              // start battle
              gsap.to('#battle-overlay', {
                opacity: 0,
              })
              battlebg.open = true;
              window.transport.battleEnemy = newEnemy;
              window.transport.startBattle()
            }
          })
          break;
        }
      }
    }
  }

  draw(ctx) {
    if (typeof this[this.status] === 'function') {
      this[this.status](ctx);
    }
  }
}

export class BattlePlayer extends Sprite {
  constructor() {
    super(100, 450, 16, 16);
    this.status = 'static';
    this.image = window.gameLoader.assets.player;
    this.frame = 0;
    this.elapse = 0;
    this.engine = window.gameEngine;
    this.health = 100;
  }

  static(ctx) {
    const battlebg = this.engine.world.get('battlebg');
    if (battlebg.open) {
      const { position: pos, size, image, frame, opacity } = this;
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.drawImage(
        image,
        frame * 16,
        16,
        size.width,
        size.height,
        pos.x,
        pos.y,
        size.width * 4,
        size.height * 4
      );
      ctx.restore();
      this.elapse++;
      if (this.elapse % 10 === 0) {
        // reset frame
        if (frame < 1) this.frame++;
        else this.frame = 0;
      }
    }
  }

  draw(ctx) {
    if (typeof this[this.status] === 'function') {
      this[this.status](ctx);
    }
  }
}

export class BattleSpirit extends Sprite {
  constructor() {
    super(450, 300, 16, 16);
    this.status = 'static';
    this.image = window.gameLoader.assets.spirit;
    this.frame = 0;
    this.frameMax = 4;
    this.elapse = 0;
    this.engine = window.gameEngine;
    this.isEnemy = true;
    this.health = 100;
  }

  static(ctx) {
    const battlebg = this.engine.world.get('battlebg');
    if (battlebg.open) {
      const { position: pos, size, image, frame, frameMax, opacity } = this;
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.drawImage(
        image,
        0,
        frame * 16,
        size.width,
        size.height,
        pos.x,
        pos.y,
        size.width * 4,
        size.height * 4
      );
      ctx.restore();
      this.elapse++;
      if (this.elapse % 10 === 0) {
        // reset frame
        if (frame < frameMax - 1) this.frame++;
        else this.frame = 0;
      }
    }
  }

  draw(ctx) {
    if (typeof this[this.status] === 'function') {
      this[this.status](ctx);
    }
  }
}