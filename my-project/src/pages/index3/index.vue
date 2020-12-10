<template>
	<view class="content">
        <view data-index="111" @click="handleClick(1, $event)">点击</view>
        <view data-index="222" @click="handleClick(2, $event)">点击</view>
        <view>------------</view>
        <img-border :src="srcImgs" @handleChangeImage="clickImg"></img-border>
        <form>
            <view>
                <input type="text">
                <radio></radio>
                <checkbox></checkbox>
            </view>
        </form>
	</view>
</template>

<script>
import imgBorder from '@/components/img-border'
import Form from '@/components/form.vue'
	export default {
        components: { imgBorder, Form },
        data() {
            return {
                srcImgs: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607625158641&di=9a9ea34186b3b428045df94bc9716082&imgtype=0&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2018-11-30%2F145720313.jpg'
            }
        },
        methods: {
            handleClick(index, event) {
                console.log(index)
                console.log(event)
                console.log(event.currentTarget.dataset.index)
            },
            clickImg(e) {
                console.log(e)
            }
        },
        // onLoad 页面加载完毕时触发
        onLoad() {
            console.log(this.baseUrl)
            // globalData 小程序用来获取数据，使用getApp()调用
            console.log(getApp().globalData.base)
            console.log('onLoad -- 页面加载完毕')
        },
        onShow() {
            console.log('onShow -- 页面显示时')
        }
	}
</script>

<style lang="scss">
</style>
