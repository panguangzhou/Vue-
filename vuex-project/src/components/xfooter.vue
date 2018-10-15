<template>
    <div class="weui-tabbar">
                <a href="javascript:;" class="weui-tabbar__item" v-for="(p,index) in contents" @click="green(index)" :class="{'weui-bar__item_on':page === index}" :key="index">
                    <span style="display: inline-block;position: relative;">
                        <img :src="img" alt="" class="weui-tabbar__icon">
                        <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;" v-show="p.page>0" v-text="p.page"></span>
                    </span>
                    <p class="weui-tabbar__label" v-text="p.toggle"></p>
                </a>
            </div>
</template>

<script>
export default {
    data(){
        
        return{
            img:require("../assets/icon_tabbar.png"),
            page:0,
            contents:[
                {
                    toggle:'微信',
                    page:8,
                    isShowOut:false
                },
                {
                    toggle:'通信录',
                    page:0,
                    isShowOut:false
                },
                {
                    toggle:'发现',
                    page:0,
                    isShowOut:false
                },
                {
                    toggle:'我',
                    page:0,
                    isShowOut:false
                }
            ]
        }
    },
    methods:{
        green:function(index){
            this.page=index;
        }
    }
}
</script>

<style>
.weui-tabbar {
		position: fixed!important;
		bottom: 0;
		left: 0;
		width: 100%;
	}
</style>
