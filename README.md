# vue

Vue on some of the study DEMO, as well as some of my understanding of the Vue and angular two framework, the integration of some of the documents, but also can be forkstar

# 知识点目录
- [认识Vue](#demo1)
- [认识数据驱动模式](#demo2)
- [认识MVVM模式](#demo3)
- [模板语句](#demo4)
- [样式绑定](#demo5)
- [Vue 实例化时基本属性](#demo6)
- 修饰符
- 组件
- 指令
- 自定义指令
- [动画和过渡效果](https://github.com/panguangzhou/Vue-elemen/issues/6)
- [路由](https://github.com/panguangzhou/Vue-elemen/issues/5)
- [Vuex](#Vuex)

# 认识Vue
   <a href='#demo1'>认识Vue</a>
- 一套用于构建用户界面的渐进式框架
- Vue被设计为可以自底向上逐层应用
- Vue的核心库只关注视图层，不仅易上手，还便于与第三方库或既有项目整合
- 现代化的工具链以及各种支持类库结合使用


# 认识数据驱动模式
	<a href='#demo2'>认识数据驱动模式</a>

- 数据驱动是vuejs最大的特点
- 当数据发生变化的时候，用户界面发生响应的变化，开发者不需要手动去修改dom

## Vue是通过实现一个观察者来实现的数据驱动

![模式图](https://images2015.cnblogs.com/blog/746387/201702/746387-20170223160001695-377065898.png)

- Vue在实例化的过程中，会对遍历传给实例化对象选项中的data选项
- 遍历其所有属性并使用Object.defineProperty把这些属性全部转为getter/setter
- 每一个实例都有一个watcher实例对象,在模板编译的过程中，用getter去访问data的属性，watcher此时就会把用到的data属性记为依赖，这样就建立了试图与数据之间的联系
- 渲染试图的数据依赖发生改变（即数据的seeter被调用）的时候，watcher会对比前后两个数值是否发生变化，然后确定是否通知视图进行重新渲染
- 这样就实现数据对于视图的驱动


# 认识MVVM模式

	<a href='#demo3'>认识MVVM模式</a>

MVVM分为三个部分：分别是M（Model,模型层），V（View，视图层），VM（ViewModel，V与M连接的桥梁，可以看作为控制器）

1、M：模型层，主要负责业务数据相关
2、V：视图层，负责视图相关
3、VM：实现数据双向绑定的要点

## 关系图
![关系图](http://www.runoob.com/wp-content/uploads/2017/01/20151109171527_549.png)


# 模板语句
	<a href='#demo4'>模板语句</a>

## 文本

- `v-text=''`
- `v-html=''`
- `{{}}`

## 指令

- `v-if`
- `v-else`
- `v-else-if`
- `v-for`
- `v-bind:css === :css`
- `v-on:click===@click`
- `v-show`

## 修饰符
[官网详细教程](https://cn.vuejs.org/v2/guide/syntax.html#%E4%BF%AE%E9%A5%B0%E7%AC%A6)


## 计算和方法

- computed:{}

- methods:{}

- computed 和methods区别
	computed计算的结果如果不发生改变就不会触发result这个函数
	methods中一般都是定义的需要事件触发的一些函数，只要触发事件，就会执行对应的方法，会浪费性能
	computed必须返回一个页面绑定的才能取得值，而methods可以执行逻辑带啊，可以有返回值，也可以没有

# 样式绑定
	<a href='#demo5'>样式绑定</a>

## 对象语法
	v-bind:class

## 数组语法
	v-bind:class='[class1,class2]'

## 用在组件上
 	```
 	//自定义组件 my-component
	Vue.component('my-component',{
		template:'<p class='foo bar'>hello world</p>'
		})
	//然后在使用它的时候添加一些class:
	<my-component class='baz boo'></my-component>
	```

## 内联样式
	`v-bind:style`

# Vue 实例化时基本属性
	<a href='#demo6'>实例化基本属性</a>
	
# <a href="#Vuex">这是Vuex</a>
