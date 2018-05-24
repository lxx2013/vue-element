<template>
<div>
<div class="el-menu-out">
<el-menu
  :default-active="activeIndex2"
  class="el-menu-top"
  mode="horizontal"
  background-color="#409EFF"
  text-color="#fff"
  active-text-color="#303133">
  <el-menu-item index="0" disabled class="hidden-xs-only"><img src="http://intern.appht.ml/dist/xiaohui.png?37cb9e0f8b8e56ec8822ed244b995004" alt=""></el-menu-item>
  <el-menu-item index="1">首页</el-menu-item>
  <el-menu-item index="2">简历管理</el-menu-item>
  <el-menu-item index="3" >应聘进展</el-menu-item>
  <el-menu-item index="4">登录</el-menu-item>
</el-menu></div>
<carousel></carousel>

<el-card style="width:80%;margin:10px auto" v-for="o in 4">
    <div slot="header" >
        <span>招聘信息</span>
        <el-button style="float:right;padding:3px 20px" type="text">详细信息</el-button>
    </div>
    <el-tooltip class="jp" effect="dark" placement="bottom-start" content="にほんご"><span>阿里妈妈</span></el-tooltip><br>
    <el-tooltip class="jp" effect="dark" placement="bottom-start" content="にほんご"><span>前端工程师</span></el-tooltip><br>
    <el-tooltip class="jp" effect="dark" placement="bottom-start" content="にほんご"><span>15-25k/月</span></el-tooltip>
</el-card>


</div>
</template>
<script>
    import carousel from "./carousel.vue"
    export default {
        components: {
            carousel
        },
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
    .el-menu-top {
        max-width: 1200px;
        margin: 0 auto !important;
        .el-menu-item {
            height: 60px;
            img {
                height: 60px;
            }
            &:last-of-type {
                float: right;
            }
            &.is-disabled {
                opacity: 1;
                cursor: default;
            }
        }
        border-bottom-color: #409EFF !important;
    }

    .el-menu-out {
        background: #409EFF;
        width: 100%;
        box-shadow: 0 2px 12px 0px rgba(0, 0, 0, 0.3);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
    }

</style>
