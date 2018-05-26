<template>
    <el-row>
        <el-col :span="Math.floor(24/col_num)" v-for="(o,index) in col_num" :key="index">
            <el-row v-for="(r,index_r) in row_num" :key="index_r" style="padding:5px 0;">
                <el-col :span="span_width" style="text-align:right" v-if="index*row_num+index_r<data_length"><span>{{data[index*row_num+index_r]['title']}}</span></el-col>
                <el-col :span="24-span_width-1" :offset=1 v-if="index*row_num+index_r<data_length"><span>{{data[index*row_num+index_r]['content']}}</span></el-col>
            </el-row>
        </el-col>
    </el-row>
</template>
<script>
    export default {
        props: {
            data: {
                type: Array,
                required: true
            },
            col_num: {
                type: Number,
                default: 1
            }
        },
        data() {
            return {

            }
        },
        computed: {
            data_length() {
                return Object.keys(this.data).length
            },
            row_num() {
                return Math.ceil(this.data_length / this.col_num)
            },
            span_width() {
                if (this.col_num == 1) {
                    return 4;
                } else {
                    return 8;
                }
            }
        },
        methods: {
            say() {
                this.$notify({
                    message: this.data
                });
            }
        }
    }

</script>
<style lang="less" scoped>
    span {
        line-height: 100%;
    }

</style>
