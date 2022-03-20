export class Render {
  constructor(options) {
    this.options = {
      fps: 60,
      checkFps: false,
      ...options,
    };
    this.fps = this.options.fps;
    this.fpsInterval = 1000 / this.fps;
    this.frameId = null;
    this.fpsLast = null;
    this.active = false;
  }

  stop() {
    window.cancelAnimationFrame(this.frameId);
    this.fpsLast = null;
    this.active = false;
  }

  run() {
    // run
    this.step();
  }

  step() {
    this.frameId = window.requestAnimationFrame(this.step.bind(this));
    if (!this.fpsLast) {
      this.active = true;
      this.fpsLast = performance.now();
      return;
    }
    const now = performance.now();
    const elapsed = now - this.fpsLast;
    const { fpsInterval } = this;
    if (elapsed > fpsInterval) {
      if (this.options.checkFps) {
        console.log(1000 / elapsed); // check fps
      }
      // update fpsLast
      this.fpsLast = now - (elapsed % fpsInterval);
      // main draw
      this.draw(elapsed);
    }
  }

  draw() {}
}

export class CanvasRender extends Render {
  constructor(options) {
    super(options);
    this.engine = null;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.pixelRatio = {
      x: 1,
      y: 1,
    };
    this.resizeCallback = null;
    this.init();
  }

  init() {
    const { canvas, options } = this;
    canvas.width = options.width;
    canvas.height = options.height;

    this.resizeCallback = () => {
      const { width, height } = canvas.getBoundingClientRect();
      this.pixelRatio = {
        x: width / canvas.width,
        y: height / canvas.height,
      };
    };

    this.resizeCallback();
    document.addEventListener('resize', this.resizeCallback);
  }

  stop() {
    super.stop();
    document.removeEventListener('resize', this.resizeCallback);
  }

  run(engine) {
    // bind engine
    engine.renderer = this;
    this.engine = engine;
    super.run();
  }

  draw(elapsed) {
    const { ctx, engine, options, fpsInterval } = this;
    engine.timing.lastDelta = fpsInterval;
    engine.timing.lastElapsed = elapsed;
    // clear
    ctx.clearRect(0, 0, options.width, options.height);
    // background
    ctx.save();
    ctx.fillStyle = options.background;
    ctx.fillRect(0, 0, options.width, options.height);
    ctx.restore();
    // draw engine root
    engine.world.draw(ctx);
  }
}