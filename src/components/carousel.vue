<template>

<el-carousel :interval="5000" arrow="always" >
    <el-carousel-item v-for="item in 4" :key="item">
        <div></div>
    </el-carousel-item>
  </el-carousel>

</template>
<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {

        }
    }

</script>
<style lang="less" scope>
    .el-carousel__item div {
        background: url(../assets/banner.jpg);
        height: 300px;
        background-position: center center;
        background-size: cover;
    }

    .el-carousel {
        max-width: 1200px;
        margin: 61px auto 0 auto;
    }

</style>
