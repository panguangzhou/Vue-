import Vue from 'vue'
import App from './App.vue'
import 'weui'
import $ from 'jquery'
window.$ =$

Vue.config.productionTip = false
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  //状态
  state: {
    searchText:'',
    isShowGallery:false,
    galleryUrl:''
  },
  mutations: {
    changeSearchText (state,data) {
      state.searchText=data
    },
  },
  actions:{
    setSearchText(context,data){
      context.commit('changeSearchText',data)
    },
  //actions---(commit)-->mutations--->state
  },
  getters:{
    getSearchText(state){
      return state.searchText
    }
  },

})
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
