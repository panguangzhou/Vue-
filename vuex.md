# Gitstar Ranking (git 排名)

# git rank

vuex的步骤（装B) 

NPM 方法安装
 
`npm install vuex --save`

main.js
```
//引入状态管理
import Vuex from 'vuex'
Vue.use(Vuex)
```


创建仓库
```
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
    searchText:''
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
  }
})
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

```
xsearch.vue
```
@keyip='setSearchText'
setSearchText(){
            this.$store.dispatch('setSearchText',this.searchText)
        }

```

```
computed:{
        searchText(){
                return this.$store.getters.getSearchText;
                console.log(this.$store.getters.getSearchText)
            },
            //v-for遍历这个数组
        computedArrs(){
            let newArrs=this.arrs.filter(function(val){
                return val.title.indexOf(this.searchText)!=-1
            }.bind(this))
            console.log(newArrs)
            return newArrs
        }
    },

```
