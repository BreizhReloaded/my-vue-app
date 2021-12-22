import { defineStore } from 'pinia';
import { defineStoreStorage } from 'unstorage-pinia-plugin';
import localStorageDriver from 'unstorage/drivers/localstorage';

export const useDemo = defineStore('demo', {
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    }
  }
});

defineStoreStorage('demo', {
  driver: localStorageDriver({ base: 'here' })
});
