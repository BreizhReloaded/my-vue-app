import { createPinia } from 'pinia';

// const pinia = createPinia();

// pinia.use(({ store }) => {
//   store.$subscribe(() => {
//     localStorage.setItem(store.$id, JSON.stringify(store.$state));
//   });
// });

export default createPinia();
