import { createPinia } from 'pinia';
import { createStoragePlugin } from 'unstorage-pinia-plugin';
import localStorageDriver from 'unstorage/drivers/localstorage';

const pinia = createPinia();

pinia.use(createStoragePlugin({
  driver: localStorageDriver()
}));

export default pinia;
