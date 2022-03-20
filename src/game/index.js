import { Engine } from './engine'
import { Loader } from './loader'
import { CanvasRender } from './render'
import { createCollisionComposite, createBattlezoneComposite, LandMap, ForegroundMap, BattleBackground, BattlePlayer, Player } from './sprite'

const loader = window.gameLoader = new Loader();
const cdn = process.env.CDN;

loader.add('map', `${cdn}/SproudLandMap.png`);
loader.add('foreground', `${cdn}/Foreground.png`);
loader.add('battlebg', `${cdn}/battle-background.png`);
loader.add('player', `${cdn}/Character.png`);
loader.add('spirit', `${cdn}/Spirit.png`);

export async function initGame() {
  const engine = window.gameEngine = new Engine();
  const render = window.gameRender = new CanvasRender({
    width: 640,
    height: 640,
    canvas: document.getElementById('my-game'),
    background: 'transparent'
  });

  await loader.load();

  const map = new LandMap();
  const foreground = new ForegroundMap();
  const battlebg = new BattleBackground();
  const player = new Player();
  const battlePlayer = new BattlePlayer();
  const collisions = createCollisionComposite();
  const battlezones = createBattlezoneComposite();

  player.init();

  window.translateList = [
    map,
    foreground,
    ...collisions.bodies,
    ...battlezones.bodies,
  ];

  window.transport.battlePlayer = battlePlayer;

  engine.world.add([
    map,
    player,
    collisions,
    battlezones,
    foreground,
    battlebg,
    battlePlayer,
  ]);
  render.run(engine);
}
