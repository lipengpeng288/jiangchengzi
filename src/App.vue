<template>
  <div id="app">
    <el-container>
      <el-header class="header" height="64px" >
        <el-row justify="start" type="flex">
          <el-col :span="23" :pull="10"><div class="grid-content bg-purple" style="color: white; font-size: 20px;">员工信息管理系统</div></el-col>
          <el-col :span="1" class="grid-content bg-purple">
            <i class="el-icon-user"></i>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px" height="100%;">
          <div class="aside">
              <div v-for="(val, index) in config" v-bind:key="index" class="item" :style="{background: index === configIndex ? '#BBDEFB' : '#FFFFFF'}">
                <el-row justify="start">
                  <el-col :span="12"><i :class="val.icon"></i></el-col>
                  <el-col :span="12" :pull="6"><router-link :to="val.link" style="text-decoration: none; color:#303133;">{{val.name}}</router-link></el-col>
                </el-row>
              </div>
          </div>
        </el-aside>
        <el-main class="main-content">
          <router-view style="box-sizing: border-box;"></router-view>
        </el-main>
      </el-container>
    </el-container>
     
  </div>
</template>

<script>

    export default {
        data() {
            return {
                config: [{
                    type: 'item',
                    name: '概览',
                    icon: 'el-icon-s-help',
                    link: '/overview'
                }, {
                    type: 'item',
                    name: '员工信息',
                    icon: 'el-icon-user-solid',
                    link: '/employee'
                }, {
                    type:'item',
                    name: '部门',
                    icon: 'el-icon-s-custom',
                    link: '/department'
                }],
                configIndex: 0
            }
        },
        name: 'app',
        components: { 
        },
        methods: {
            checkRouterLocal(path) {
                // 查找当前路由下标高亮
                this.configIndex = this.config.findIndex(item => item.link === path);
            }
        },
        watch: {
            "$route"() {
                // 获取当前路径
                let path = this.$route.path;
                // 检索当前路径
                this.checkRouterLocal(path);
            }
        },
        created: function() {
            // 获取当前路径
            let path = this.$route.path;
            // 检索当前路径
            this.checkRouterLocal(path);
        }
    }
</script>

<style>

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.header{
    width: 100%;
    background-color: #409EFF;
}
.aside{
  background-color: #FFFFFF;
  margin-top: 20px; 
  min-height: 1312px;
  border-right: 1px solid #DCDFE6; 
}
.item{
  height: 45px;
  line-height: 45px;
  border: 2px solid rgba(0,0,0,0);
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    line-height: 64px;
  }
  .row-bg {
    padding: 10px 0;
  }
</style>
