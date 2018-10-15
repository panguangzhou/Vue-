<template>
    <div class="weui-gallery" :style="{display:isShowGallery?'block':'none'}">
        <span class="weui-gallery__img" :style="{backgroundImage:`url(${galleryUrl})`}"></span>
        <div class="weui-gallery__opr">
            <a href="javascript:" class="weui-gallery__del" @click="hideGallery">
                <i class="weui-icon-delete weui-icon_gallery-delete"></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
           
        }
    },
    computed:{
        isShowGallery(){
            return this.$store.state.isShowGallery;
        },
        galleryUrl(){
            return this.$store.state.galleryUrl;
        }
    },
    methods:{
        hideGallery(){
           return  this.$store.state.isShowGallery = false;
        }
    },
   mounted(){
       console.log(this.$store.state.isShowGallery)
   }
}
</script>

<style>

</style>
