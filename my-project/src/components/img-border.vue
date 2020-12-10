<template>
    <view>
        <img :src="imgSrc" alt="" class="imgs" @click="handleClick">
        <img :src="src" alt="" class="imgs" @click="handleClick">
    </view>
</template>
<script>
export default {
    props: {
        src: {
            type: String,
            default: '11'
        }
    },
    data() {
        return {
            imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607624874847&di=39f9768d2e1da8331a4d08ba5293bff5&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201501%2F30%2F20150130200414_FfEVi.jpeg'
        }
    },
    methods: {
        handleClick() {
            this.$emit('handleChangeImage', this.imgSrc)
        }
    }
}
</script>
<style scoped>
    .imgs{
        border-radius: 50%;
        height: 200px;
    }
</style>