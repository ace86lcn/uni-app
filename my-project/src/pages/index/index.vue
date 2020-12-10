<template>
	<view class="content">
		<view class="rpx">rpx</view>
		<view class="vw">vw</view>
		<view class="sass">sass</view>
	</view>
</template>

<script>
	export default {
	}
</script>

<style lang="scss">
	.rpx{
		/* rpx小程序单位，750rpx等于屏幕的宽度 */
		width: 750rpx;
		height: 100px;
		background-color: aqua;
	}
	.vw{
		/* vw,vh H5单位 100vw等于屏幕宽，100vh等于屏幕高*/
		width: 100vw;
		height: 20vh;
		background-color: aquamarine;
	}
	.content{
		.sass{
			width: 750rpx;
			height:200px;
			background-color:red;
		}
	}
</style>
