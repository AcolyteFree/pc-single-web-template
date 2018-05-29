/* eslint-disable */
/**
 * vuex 仓库地址
 *
 */
import Vue from "vue";
import Vuex from "vuex";
import Promise from "es6-promise";

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    userMetaInfo: {}
  },
  getters: {
    userToken(state) {
      return state.userMetaInfo.token
    },
    userId(state) {
      return state.userMetaInfo.userId
    },
    username(state) {
      return state.userMetaInfo.username
    }
  },
  mutations: {
    muUserMetaInfo(state, data) {
      state.userMetaInfo = { ...state.userMetaInfo, ...data }
    }
  },
  actions: {

  }

})

/**
 * 创建一个新的Promise
 * @param fn
 */
function npromise(fn) {
  return new Promise(function (resolve, reject) {
    fn(resolve, reject)
  })
}
export default store;
