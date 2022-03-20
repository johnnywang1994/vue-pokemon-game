export const Collision = {
  detect(bodyA, bodyB, ratio = 1) {
    const { position: posA, size: sizeA } = bodyA;
    const { position: posB, size: sizeB } = bodyB;
    if (
      posA.x <= posB.x + sizeB.width * ratio &&
      posA.x + sizeA.width * ratio >= posB.x &&
      posA.y <= posB.y + sizeB.height * ratio &&
      posA.y + sizeA.height * ratio >= posB.y
    ) {
      return true;
    }
    return false;
  },

  detectAt(vector, bodyB) {
    const { x, y } = vector;
    const { position: posB, size } = bodyB;
    if (
      x >= posB.x &&
      x <= posB.x + size.width &&
      y >= posB.y &&
      y <= posB.y + size.height
    ) {
      return true;
    }
    return false;
  },

  detectArea(bodyA, bodyB, ratio = 1) {
    const { position: posA, size: sizeA } = bodyA;
    const { position: posB, size: sizeB } = bodyB;
    const width = Math.min(posA.x+sizeA.width*ratio,posB.x+sizeB.width*ratio) -
      Math.max(posA.x,posB.x);
    const height = Math.min(posA.y+sizeA.height*ratio,posB.y+sizeB.height*ratio) -
      Math.max(posA.y,posB.y);
    return width * height;
  },
};
