<template>
	<view class="content">
        <view>{{msg}}</view>
        <view>{{boll}}</view>
        <view>{{per.name}}--{{per.exc}}</view>
        <view :data-color='color'>{{color}}</view>
        <view>----------------</view>
        <view v-for="i in list" :key="i.id">{{i.id}} -- {{i.name}}</view>
        <view v-show="true">显示</view>
        <view v-show="true">显示</view>
        <view v-show="false">隐藏</view>
        <view v-if="false">隐藏</view>
        <view> -------- </view>
        <view>{{moneys}}</view>
        <view> -------- </view>
        <view v-for="i in filterMath" :key="i.id">{{i.id}} -- {{i.name}}</view>
	</view>
</template>

<script>
	export default {
        data() {
            return {
                msg: 'Hello, World',
                boll: 100,
                money: 500,
                per: {
                    name: 'lcn',
                    exc: 'man'
                },
                color: 'red',
                list: [
                    {
                        id: 0,
                        name: 'xh'
                    },
                    {
                        id: 1,
                        name: 'xm'
                    },
                    {
                        id: 2,
                        name: 'xz'
                    }
                ]
            }
        },
        computed: {
            // 金额
            moneys() {
                return '$' + this.money
            },
            // 过滤数组
            filterMath() {
                return this.list.filter(v => v.id > 0)
            }
        }
	}
</script>

<style lang="scss">
</style>
