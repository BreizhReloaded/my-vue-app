import { defineUnstore } from 'unstorage-pinia-plugin';
import localStorageDriver from 'unstorage/drivers/localstorage';

export const useOther = defineUnstore(
  'other',
  {
    state: () => ({
      counter: -1
    }),
    getters: {
      doubleCount: (state) => state.counter * 2,
    },
    actions: {
      increment() {
        this.counter++;
      }
    }
  },
  {
    driver: localStorageDriver()
  }
);
