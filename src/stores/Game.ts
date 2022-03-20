import { defineStore } from 'pinia';
import services from '@/services';
import { useApi } from './utils';
import type { GameStateType, DrawParamType } from './types';

const GameState = (): GameStateType => ({
  APILoading: false,
  profile: {
    nickname: 'johnny',
  },
});

export const useGame = defineStore('Game', {
  state: GameState,
  getters: {},
  actions: {
    updateAPILoading(bool: boolean) {
      this.APILoading = bool;
    },

    async getProfile() {
      const res = await useApi({
        api: () => services.getProfile(),
      });
      this.profile = res;
    },

    async postDraw(data: DrawParamType) {
      const res = await useApi({
        api: () => services.postDraw(data),
      });
      if (res) {
        // ...
      }
    },
  },
});
