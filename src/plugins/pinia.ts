import { createPinia } from 'pinia';
import { createUnstoragePlugin } from 'unstorage-pinia-plugin';
import localStorageDriver from 'unstorage/drivers/localstorage';

const pinia = createPinia();

pinia.use(createUnstoragePlugin({
  driver: localStorageDriver()
}));

export default pinia;
