// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('es6-promise').polyfill()
import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import router from './router'
import axios from 'axios'
import store from './store/store.js'
import '@/assets/css/main.css'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui'
import ElementLocale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueI18n)
Vue.use(store)
Vue.use(ElementUI)

const i18n = new VueI18n({
  locale: 'zh', // 语言标识
  // this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    zh: Object.assign(require('@/lib/lang/zh'), zhLocale), // 中文语言包
    en: Object.assign(require('@/lib/lang/en'), enLocale) // 英文语言包
  }
})
ElementLocale.i18n((key, value) => i18n.t(key, value))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  template: '<App/>',
  components: { App }
})

console.log(SERVER_URL, SERVER_ENV) // eslint-disable-line
