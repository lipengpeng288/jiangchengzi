<template>
    <div class="container">

        <el-row type="flex" justify="center">
           <el-con :span="24" >新建员工</el-con>
        </el-row>
        <el-form :model="employee" :rules="rules" ref="form">
            <el-divider content-position="left">基本信息</el-divider>
            <el-row type="flex" justify="center" :gutter="20">
                <el-col :span="6">
                    <el-form-item label="姓名" prop="name" :label-width="formLabelWidth" class="form-item">
                        <el-input v-model="employee.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="性别" :label-width="formLabelWidth" class="form-item">
                        <el-input v-model="employee.sex" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="身份证号" :label-width="formLabelWidth" class="form-item">
                        <el-input v-model="employee.cardId" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="出生年月" :label-width="formLabelWidth" class="form-item">
                        <el-input v-model="employee.birthday" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row type="flex" justify="space-around" :gutter="20">
                <el-col :span="4">
                    <el-form-item label="电话" :label-width="formLabelWidth" class="form-item">
                        <el-input v-model="employee.phone" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="3">
                    <el-form-item label="紧急联系人" :label-width="formLabelWidth" class="form-item">
                        <el-input v-model="employee.sex" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="3">
                    <el-form-item label="紧急联系人电话" :label-width="formLabelWidth" class="form-item">
                        <el-input v-model="employee.sex" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="现居住住址" :label-width="formLabelWidth" class="form-item">
                        <el-input v-model="employee.cardId" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="户口所在地" :label-width="formLabelWidth" class="form-item">
                        <el-input v-model="employee.birthday" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-divider content-position="left">学历信息</el-divider>
            <div>
                <div style="display: flex; justify-content: flex-end;">
                    <el-button type="primary" icon="el-icon-circle-plus-outline">添加</el-button>
                </div> 
                <el-row type="flex" justify="space-around" :gutter="20">
                    <el-col :span="6">
                        <el-form-item label="学校" :label-width="formLabelWidth" class="form-item">
                            <el-input v-model="employee.phone" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="专业" :label-width="formLabelWidth" class="form-item">
                            <el-input v-model="employee.sex" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item label="毕业时间" :label-width="formLabelWidth" class="form-item">
                            <el-input v-model="employee.sex" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item label="学位" :label-width="formLabelWidth" class="form-item">
                            <el-input v-model="employee.cardId" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2">
                        <div style="display: flex; justify-content: flex-end;">
                            <el-button type="danger" icon="el-icon-delete" style="margin-top: 41px; text-align: right;">删除</el-button>
                        </div>
                        
                    </el-col>
                 
                </el-row>       
            </div>
            
            <el-divider content-position="left"></el-divider>
            <el-divider content-position="left">工作经历</el-divider>
            <div>
                <div style="display: flex; justify-content: flex-end;">
                    <el-button type="primary" icon="el-icon-circle-plus-outline">添加</el-button>
                </div> 
                <el-row type="flex" justify="space-around" :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="时间" :label-width="formLabelWidth" class="form-item">
                            <el-input v-model="employee.phone" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="单位" :label-width="formLabelWidth" class="form-item">
                            <el-input v-model="employee.sex" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="岗位" :label-width="formLabelWidth" class="form-item">
                            <el-input v-model="employee.sex" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    
                </el-row>
                <el-row type="flex" justify="space-around" :gutter="20">
                    <el-col :span="24">
                        <el-form-item label="工作内容" :label-width="formLabelWidth" class="form-item">
                            <el-input type="textarea" v-model="employee.sex" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="space-around" :gutter="20">
                    <el-col :span="22">
                        <el-form-item label="工作内容" :label-width="formLabelWidth" class="form-item">
                            <el-input v-model="employee.sex" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2">
                        <div style="display: flex; justify-content: flex-end;">
                            <el-button type="danger" icon="el-icon-delete" style="margin-top: 41px; text-align: right;">删除</el-button>
                        </div>
                        
                    </el-col>
                </el-row>
                <el-divider content-position="left"></el-divider>
            </div>
            
            <el-divider content-position="left">所获奖项及证书</el-divider>
            <div>
                <div style="display: flex; justify-content: flex-end;">
                    <el-button type="primary" icon="el-icon-circle-plus-outline">添加</el-button>
                </div> 
                <el-row type="flex" justify="space-around" :gutter="20">
                    <el-col :span="22">
                        <el-form-item label="证书" :label-width="formLabelWidth" class="form-item">
                            <el-input v-model="employee.sex" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2">
                         <div style="display: flex; justify-content: flex-end;">
                            <el-button type="danger" icon="el-icon-delete" style="margin-top: 41px; text-align: right;">删除</el-button>
                        </div>
                    </el-col>
                </el-row>
                <el-divider content-position="left"></el-divider>
            </div>
            <el-divider content-position="left">上传相关文件</el-divider>
            <el-row type="flex" justify="end">
                <el-col :span="6" :pull="18">
                    <el-button color="primary" size="small"  @click="open">上传文件</el-button>
                    <input type="file" multiple ref="file" v-show="false">
                    <span>只能上传jpg/png文件，且不超过500kb</span>
                </el-col>
            </el-row>
            
            
        </el-form>
       
    </div>
</template>

<script lang="ts">

    export default {

        data() {
            return {
                employee:{
                    name: '',
                    sex: '',
                    cardId: '',
                    birthday: '',
                    phone: '',

                },
                rules: {
                    name: [{
                        required: true, message: '请输入姓名',trigger: 'blur'
                    }, {
                        min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur'
                    }],
                    sex: [{
                        required: true, message: '请输入性别', trigger: 'blur'
                    }, {
                        min: 1, max: 1, message: ''
                    }]
                },
                fileList: [{name: 'sssss.png'}]
            }
        },
        methods: {
            submitUpload() {
                this.$refs.upload.submit();
                console.log(this.$refs);
            },
            open() {
                console.log(this.$refs);
                this.$refs.file.click();
            }
        },
        wathch() {
            
        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
        padding: 20px 16px;
    }
    .form-item {
        margin: 0;
    }
</style>