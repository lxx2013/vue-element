<template>
<div>


<el-card style="width:90%;margin:10px auto" v-for="o in 4" :key="o">
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


</style>
