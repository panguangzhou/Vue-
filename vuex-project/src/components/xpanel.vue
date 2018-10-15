<template>
    <div class="weui-panel weui-panel_access">
            <div class="weui-panel__bd">
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" v-for="(p,index) in computedArrs" :key="index">
                    <div class="weui-media-box__hd">
                        <img class="weui-media-box__thumb" :src='p.author.avatar_url' @click="showGallery(p.author.avatar_url)">
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title" v-text='p.title'></h4>
                        <p class="weui-media-box__desc" v-text="p.content"></p>
                    </div>
                </a>
            </div>
            <div class="weui-panel__ft">
			<a @click="getNews" href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
				<div class="weui-cell__bd">查看更多</div>
				<span class="weui-cell__ft"></span>
			</a>
		</div>
        </div>
</template>

<script>
export default {
    data(){
        return {
            arrs:[],
            page:0,
            dataImg:require('../assets/logo.png')
        }
    },
    methods:{
        getNews:function(){
            let _this= this;
            $.ajax({
                url:'https://cnodejs.org/api/v1/topics',
                type:'GET',
                data:{
                    page:_this.page++,
                    tab:'job',
                    limit:10
                },
                success(data){
                    _this.arrs=_this.arrs.concat(data.data)
                }
            })
        },
        showGallery(url){
             this.$store.state.isShowGallery =true;
             this.$store.state.galleryUrl=url;
        }
    },
    computed:{
        searchText(){
                return this.$store.getters.getSearchText;
                console.log(this.$store.getters.getSearchText)
            },
        computedArrs(){
            let newArrs=this.arrs.filter(function(val){
                return val.title.indexOf(this.searchText)!=-1
            }.bind(this))
            console.log(newArrs)
            return newArrs
        }
    },
    mounted:function(){
        this.getNews();
    }
}
</script>

<style>
.weui-panel {
       margin-bottom: 50px
	}
</style>
