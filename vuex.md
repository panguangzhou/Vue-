# Gitstar Ranking (git 排名)

# git rank

# Vuex

## 项目实例在vuex-project
	
- Vuex是一个专门为Vue.js应用程序开发的状态管理模式
- 它采用集中式存储管理应用的所有组件的状态，并以相对应的规则保证状态以一种可预测的方式发生变化
- 一个页面多个组件之间通信数据，可以使用Vuex

## 安装

`npm install vuex --save`

## 引用

- 在一个模块化的打包系统中，必须显示地通过Vue.use()来安装Vuex;

```main.js
import Vuex from 'vuex'//var Vuex = require('vuex')
Vue.use(Vuex)
```
## 开始
	
- 每一个Vuex应用的核心就是store(仓库)
- store基本上就是一个容器，它包含着你的应用中大部分的状态(state),Vuex和单纯的全局对象有两个不同点

1、Vuex的状态存储是响应式的。当Vuex组件从store中读取状态的时候，若stroe中的状态发生变化，那么响应的组件也会响应地得到高效更新
2、不能直接改变store中的状态，改变store中的状态的唯一途径就是显示地提交(commit)mutations。这样可以方便地跟踪每一个桩体的变化

## 使用

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
