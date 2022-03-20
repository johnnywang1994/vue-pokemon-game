<template>
  <div class="game-wrapper">
    <canvas id="my-game"></canvas>
    <div id="battle-overlay"></div>
    <template v-if="battleRef">
      <div class="battle-lifebar battle-lifebar__enemy">
        <h4>Spirit</h4>
        <div class="lifebar-wrapper">
          <div id="enemy-life" class="lifebar"></div>
        </div>
      </div>
      <div class="battle-lifebar battle-lifebar__us">
        <h4>Maju</h4>
        <div class="lifebar-wrapper">
          <div id="us-life" class="lifebar"></div>
        </div>
      </div>
      <div v-if="usTurn" id="battle-panel">
        <div class="left">
          <div @click="MajuAttack('tackle')">Tackle</div>
          <div @click="MajuAttack('tackle')">Tackle</div>
        </div>
        <div class="right">Attack Type</div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { initGame } from '@/game';

const battleRef = ref(false);
const usTurn = ref(true);

const transport = {
  startBattle,
  stopBattle,
};

const attackMap = {
  tackle: {
    type: 'tackle',
    damage: 50,
  },
}

let enemyTimer = null;

function startBattle() {
  console.log('battle start');
  battleRef.value = true;
}

function stopBattle() {
  console.log('battle end');
  clearTimeout(enemyTimer);
  battleRef.value = false;
  usTurn.value = true;
  // TODO: recover player life
  transport.battlePlayer.health = 100;
}

function MajuAttack(attackType) {
  usTurn.value = false;
  transport.battlePlayer.attack({
    attack: attackMap[attackType],
    target: transport.battleEnemy,
  });
  enemyTimer = setTimeout(() => {
    EnemyAttack('tackle');
  }, 2000);
}

function EnemyAttack(attackType) {
  transport.battleEnemy.attack({
    attack: attackMap[attackType],
    target: transport.battlePlayer,
  });
  setTimeout(() => {
    usTurn.value = true;
  }, 2000);
}

onMounted(() => {
  window.transport = transport;
  initGame();
})
</script>

<style lang="scss">
.game-wrapper {
  position: relative;
  display: inline-block;
  #my-game {
    width: 640px;
    height: 640px;
  }
  #battle-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    background: #000;
  }
  #battle-panel {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 100px;
    border-top: 4px solid;
    background: #fff;
    font-family: 'Press Start 2P';
    display: flex;
    .left {
      display: flex;
      width: 66.67%;
      > * {
        display: flex;
        flex: auto;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:hover {
          background: #eee;
        }
      }
    }
    .right {
      width: 33.32%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-left: 4px solid;
    }
  }

  .battle-lifebar {
    position: absolute;
    padding: 14px;
    background: #fff;
    width: 250px;
    border: 4px solid;
    font-family: 'Press Start 2P';
    text-align: left;
    &__enemy {
      top: 200px;
      left: 20px;
    }
    &__us {
      top: 450px;
      right: 20px;
    }
    > h4 {
      font-weight: bold;
    }
    > .lifebar-wrapper {
      position: relative;
      width: 100%;
      height: 4px;
      background: #ccc;
      margin-top: 10px;
      > .lifebar {
        position: absolute;
        width: 100%;
        height: 4px;
        background: green;
      }
    }
  }
}
</style>
