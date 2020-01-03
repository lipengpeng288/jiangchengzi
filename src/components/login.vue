
<template>
    <div class="container">
        <div class="login">
            <el-dialog title="登录" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
            </el-dialog>
        </div>
    </div>
</template>
<script>
    import {getAsset} from '../service/api';
    export default {
        name: 'Test',
        
        data() {
            return {
                msg: 'heeeeeee'
            }
        },

        methods: {
           
                
        },

        mounted() {
            getAsset().then((data) => {
                console.log(data);
            });
        }
    }
</script>

<style scoped>
    .container{
        width: 100%;
        height: 100%;
        background: center/contain no-repeat url('../assets/images/loginbg.gif');
    }
    .login{
        width: 500px;
        height: 500px;
        position: absolute;
        top:50%;
        left: 50%;
        background-color: rgba(0, 0, 0, 0.1);
    }
</style>