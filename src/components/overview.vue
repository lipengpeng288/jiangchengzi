<template>
    <div class="container">
        <v-chart :options="dismissionPerMonthOption" class="echart"/>
        <el-row type="flex" justify="space-between" style="margin-top: 20px;">
            <el-col :span="12">
                <v-chart :options="staffOption" class="echart"/>
            </el-col>
            <el-col :span="12">
                <v-chart :options="levelOption" class="echart"/>
            </el-col>
        </el-row>
        <el-row type="flex" style="margin-top: 20px;">
            <el-col :span="12">
                <v-chart :options="educationByDepartmentOption" class="echart"/>
            </el-col>
            <el-col :span="12">
                <v-chart :options="educationOption" class="echart"/>
            </el-col>
        </el-row>
       
    </div>
    
</template>
<script>
    // import {getAsset} from '../service/api';
    import ECharts from 'vue-echarts'
    // this.$echarts.init(document.getElementById('myChart01'),'macarons');
    // import theme from 'echarts/theme/macarons.js'
    // ECharts.registerTheme('ovilia-green', theme);
    
    export default {
        components: {
            'v-chart': ECharts
        },
        name: 'Overview',
        
        data() {
            return {
                dismissionPerMonthOption: {
                    title: {
                        text: '每月入职离职人员统计'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '入职',
                            type: 'line',
                            stack: '总量',
                            data: [14, 7, 35, 37, 20, 23, 38, 23, 30, 34, 18]
                        },
                        {
                            name: '离职',
                            type: 'line',
                            stack: '总量',
                            data: [19, 17, 20, 22, 28, 20, 28, 23, 10, 34, 18]
                        },
                    ]
                },
                staffOption: {
                    title: {
                        text: '各部门在职人员统计',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['生产部', '研发部', '人力资源部', '技术部', '财务部', '综合部', '质量保证部']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    series: [
                        {
                            name: '在职人员',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                {value: 150, name: '生产部'},
                                {value: 56, name: '研发部'},
                                {value: 3, name: '人力资源部'},
                                {value: 30, name: '技术部'},
                                {value: 5, name: '财务部'},
                                {value: 18, name: '综合部'},
                                {value: 8, name: '质量保证部'},
                            ]
                        }
                    ]
                }, // 各部门在职人数
                educationOption: {
                    // color: ['#3398DB', '', ''],
                    title: {
                        text: '在职学历人员统计'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['生产部', '研发部', '人力资源部', '技术部', '财务部', '综合部', '质量保证部'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '本科',
                            type: 'bar',
                            barWidth: '30%',
                            data: [10, 52, 3, 5, 4, 1, 15]
                        },
                        {
                            name: '硕士',
                            type: 'bar',
                            barWidth: '30%',
                            data: [0, 14, 0, 2, 0, 0, 0]
                        },
                        {
                            name: '博士',
                            type: 'bar',
                            barWidth: '30%',
                            data: [0, 2, 0, 4, 0, 0, 0]
                        }
                    ]
                }, // 各学历人数
                educationByDepartmentOption: {
                    color: ['#3398DB'],
                    title: {
                        text: '在职学历人员统计'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['本科', '硕士', '博士'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '学历',
                            type: 'bar',
                            barWidth: '60%',
                            data: [50, 10, 5]
                        }
                    ]
                },
                levelOption: {
                    title: {
                        text: '职位级别统计',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['主管以下', '主管及以上']
                    },
                    series: [
                        {
                            name: '职位级别',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                {value: 335, name: '主管以下'},
                                {value: 56, name: '主管及以上'}
                            ]
                        }
                    ]
                }
            }  
        },

        methods: {
           
                
        },

        mounted() {
            // getAsset().then((data) => {
            //     // console.log(data);
            // });
            // console.log(this.$echarts);
            // window.addEventListener('resize', ()=> {
            //     this.$echarts.methods.resize();
            // })
        }
    }
</script>

<style scoped>
    .container{
        width: 100%;
        padding: 20px 16px;
    }
    .echarts {
        width: 100%;
        height: 300px;
    }
</style>