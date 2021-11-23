import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

// router.beforeEach((to, next) => {
//   if (to.path === "/users/1") {
//     next('/');
//   } else {
//     next();
//   }
// });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
