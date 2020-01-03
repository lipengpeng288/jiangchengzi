<template>
    <div class="container">
        <v-chart :options="polar"/>
    </div>
    
</template>
<script>
    // import {getAsset} from '../service/api';
    import ECharts from 'vue-echarts'
    import 'echarts/lib/chart/line'
    import 'echarts/lib/component/polar'
    export default {
        components: {
            'v-chart': ECharts
        },
        name: 'Overview',
        
        data() {
            let data = []

            for (let i = 0; i <= 360; i++) {
                let t = i / 180 * Math.PI
                let r = Math.sin(2 * t) * Math.cos(2 * t)
                data.push([r, i])
            }

            return {
                polar: {
                    title: {
                        text: '极坐标双数值轴'
                    },
                    legend: {
                        data: ['line']
                    },
                    polar: {
                        center: ['50%', '54%']
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    angleAxis: {
                        type: 'value',
                        artAngle: 0
                    },
                    radiusAxis: {
                        min: 0
                    },
                    series: [{
                        coordinateSystem: 'polar',
                        name: 'line',
                        type: 'line',
                        showSymbol: false,
                        data: data
                    }
                    ],
                    animationDuration: 2000
                }
            }   
        },

        methods: {
           
                
        },

        // mounted() {
        //     getAsset().then((data) => {
        //         // console.log(data);
        //     });
        // }
    }
</script>

<style scoped>
    .container{
        width: 500px;
        height: 200px;
    }
    .echarts {
        width: 100%;
        height: 100%;
    }
</style>