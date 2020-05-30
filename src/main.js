import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.prototype.$addStorageEvent = function (key, data) {
  // 创建一个StorageEvent事件
  var newStorageEvent = document.createEvent('StorageEvent');
  const storage = {
    setItem: function (k, val) {
      localStorage.setItem(k, val);
      // 初始化创建的事件
      newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, null, null);
      // 派发对象
      window.dispatchEvent(newStorageEvent);
    }
  }
  return storage.setItem(key, data);
}

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
