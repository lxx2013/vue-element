<template>
<div id="app">
    <div class="el-menu-out">
        <el-menu :default-active="activeIndex" class="el-menu-top" mode="horizontal" background-color="#409EFF" text-color="#fff" active-text-color="#303133" router>
            <el-menu-item index="0" disabled class="hidden-xs-only"><img src="http://intern.appht.ml/dist/xiaohui.png?37cb9e0f8b8e56ec8822ed244b995004" alt=""></el-menu-item>
            <el-menu-item index="/index">首页</el-menu-item>
            <el-menu-item index="/certi">简历管理</el-menu-item>
            <el-menu-item index="/progre">应聘进展</el-menu-item>
            <el-menu-item index="/login">登录</el-menu-item>
        </el-menu>
      </div>
      <element_el></element_el>
   <router-view class="view"></router-view>
</div>
</template>

<script>
    import element_el from './components/element_el.vue'
    export default {
        name: 'app',
        components: {
            element_el
        },
        methods: {

        },
        data() {
            return {
                activeIndex: this.$route.path
            };
        }
    }

</script>

<style lang="less" scoped>
    #app {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        margin-top: 0px;
    }

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
