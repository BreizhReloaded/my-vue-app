import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import localStorageDriver from 'unstorage/drivers/localstorage';

export const useDemo = defineStore(
  'demo',
  () => {
    const counter = ref(0);
    const doubleCount = computed(() => counter.value * 2);
    const increment = () => counter.value++;

    return { counter, doubleCount, increment };
  },
  {
    unstorage: {
      driver: localStorageDriver()
    }
  }
);
