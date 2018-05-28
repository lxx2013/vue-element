<template>
    <el-row :gutter=20 style="max-width:1200px;margin:10px auto" >
        <el-col :span="17" id="left-col">
            <el-container direction="vertical">
                <el-card><img style="width:221px;height:192px;" src="http://intern.appht.ml/uploads/u1/%E5%BC%A0%E4%BA%88%E6%9B%A601_mo35Owe.jpg"></el-card>
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>基本信息</span>
                        <el-button style="float: right; padding: 3px 0" type="text">编辑</el-button>
                    </div>
                    <static-table :data="data[0]" :col_num="col_num"></static-table>
                </el-card>
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>奖励活动</span>
                        <el-button style="float: right; padding: 3px 0" type="text">编辑</el-button>
                    </div>
                    <static-table :data="data[1]" :col_num="1"></static-table>
                </el-card>
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>实践和项目经历</span>
                        <el-button style="float: right; padding: 3px 0" type="text">编辑</el-button>
                    </div>
                        <static-table :data="data[2]" :col_num="1"></static-table>
                </el-card>
            </el-container>
        </el-col>
        <el-col :span="7" id="right-col" style="max-width:200px;float:right"><el-container direction="vertical">
            <el-card :body-style="{padding:card_padding}">
                <el-button icon="el-icon-edit" type="primary" plain><span class="hidden-xs-only">编辑简历</span></el-button>
                <el-button icon="el-icon-printer" type="primary" plain><span class="hidden-xs-only">打印简历</span></el-button>
                <el-button icon="el-icon-share" type="primary" plain><span class="hidden-xs-only">申请职位</span></el-button>
            </el-card>
            <el-card :body-style="{padding:card_padding}">
                    <el-row>
                        <span class="hidden-xs-only" style="">简历完整度 : </span>
                        <el-tooltip content="简历完整度" placement="top">
  <span>{{parseInt(certi.completed[0]*100)}}%</span>
</el-tooltip>
                       </el-row>
                       <div class="hidden-xs-only">
                        <el-row v-for="(o,index) in certi.completed[1]" :key="index">
                            <span>{{certi.strs[index]}}</span>
                            <span style="margin-left:24%;" >
                                <i class="el-icon-circle-close-outline" style="color:#F56C6C" v-if="certi.completed[1][index]==0"></i>
                                <i class="el-icon-circle-check-outline" style="color:#409EFF" v-else-if="certi.completed[1][index]>=0.99"></i>
                                <i class="el-icon-time" v-else style="color:#909399"></i>
                            </span>
                        </el-row>
                        </div>
            </el-card>
            <el-card class="hidden-xs-only">
                <el-row><el-col :span="12">创建时间:</el-col><el-col :span="12"><span class="info">{{relative_time(certi.time.create_time)}}</span><span>前</span></el-col></el-row>
                <el-row><el-col :span="12">最后修改:</el-col><el-col :span="12"><span class="info">{{relative_time(certi.time.modify_time)}}</span><span>前</span></el-col></el-row>
            </el-card>
        </el-container></el-col>
    </el-row>
</template>
<script>
    import staticTable from '../components/static-table'
    import editTable from '../components/edit-table'
    import contentData from '../assets/content-data.js'
    export default {
        components: {
            staticTable,
            editTable
        },
        data() {
            return {
                certi: {
                    strs: [
                        '基本信息',
                        '教育经历',
                        '项目经历',
                        '奖励活动'
                    ],
                    completed: [
                        0.9, [
                            1,
                            0.5,
                            0.5,
                            0
                        ]
                    ],
                    time: {
                        create_time: "2018-05-20 18:00:00",
                        modify_time: "2018-05-26 17:00:00"
                    }
                },
                data: contentData,
                screenWidth: 1080,
                col_num: 1,
                card_padding: '20px'
            }
        },
        methods: {
            relative_time(time) {
                var d = new Date();
                var t = new Date(time);
                var sec = d.getTime() - t.getTime();
                sec = parseInt(sec / 1000);
                var min = parseInt(sec / 60);
                var hour = parseInt(min / 60);
                var day = parseInt(hour / 24);
                if (day >= 1) {
                    return day + "天"
                } else if (hour >= 1) {
                    return hour + "小时"
                } else if (min >= 1) {
                    return min + "分钟"
                } else {
                    return sec + "秒"
                }
            }
        },
        computed: {

        },
        watch: {
            screenWidth: function(vn, vo) {
                if (vn < 768) {
                    this.col_num = 1;
                    this.card_padding = '0px';
                } else {
                    this.col_num = 2;
                    this.card_padding = '20px';
                }
            }
        },
        mounted() {
            const that = this;
            this.screenWidth = document.body.clientWidth;
            window.onresize = () => {
                that.screenWidth = document.body.clientWidth;
            }
        }
    }

</script>
<style lang="less" scoped>
    .el-card {
        margin-bottom: 10px;
    }

    #right-col {
        .el-card:first-of-type {
            .el-button {
                margin: 0;
                display: block;
                position: relative;
                left: 50%;
                top: 0%;
                transform: translateX(-50%);
            }
        }
    }

    .info {
        color: #909399;
        background: #f4f4f5;
        border-color: #d3d4d6;
        display: inline-block;
        min-width: 50px;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        text-align: right;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 2px 3px;
        font-size: 14px;
        border-radius: 4px;
    }

    @media only screen and(max-width:767px) {
        #left-col {
            width: 100% !important;
        }
        #right-col {
            position: fixed !important;
            right: 0%;
            width: 70px;

        }
        #right-col .el-card__body {
            padding: 0 !important;
        }
        #right-col .el-card:nth-of-type(2) {
            span {
                padding: 0 8px;
            }
        }
    }

</style>
