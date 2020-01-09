<template>
    <div class="container">
        <el-row>
            <el-col :span="4">
                <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
                <el-tree style="margin-top:20px;" @node-click="select" :data="departments" :default-expand-all="false" :filter-node-method="filterNode" ref="tree" :highlight-current="true"></el-tree>
            </el-col>
            <el-col :span="19" :push="1" >
                <div style="display: flex;  justify-content: flex-end;margin:0 10px 20px 0;">
                    <el-button type="primary" size="mini">新增员工</el-button>
                </div>
                
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="姓名">
                            <span>{{ props.row.name }}</span>
                        </el-form-item>
                        <el-form-item label="性别">
                            <span>{{ props.row.sex }}</span>
                        </el-form-item>
                        <el-form-item label="身份证号">
                            <span>{{ props.row.cardID }}</span>
                        </el-form-item>
                        <el-form-item label="出生年月">
                            <span>{{ props.row.birthday }}</span>
                        </el-form-item>
                        <el-form-item label="电话">
                            <span>{{ props.row.phone }}</span>
                        </el-form-item>
                        <el-form-item label="年龄">
                            <span>{{ props.row.age }}</span>
                        </el-form-item>
                        <el-form-item label="部门">
                            <span>{{ props.row.department }}</span>
                        </el-form-item>
                        </el-form>
                    </template>
                    </el-table-column>
                    <el-table-column type="index" :index="indexMethod" label="序号"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="sex" label="性别"></el-table-column>
                    <el-table-column prop="cardID" label="身份证号"></el-table-column>
                    <el-table-column prop="birthday" label="出生年月"></el-table-column>
                    <el-table-column prop="phone" label="电话"></el-table-column>
                    <el-table-column prop="age" label="年龄"></el-table-column>
                    <el-table-column prop="department" label="部门"></el-table-column>
                    <el-table-column prop="post" label="岗位"></el-table-column>
                    <el-table-column label="操作"  width="170">
                        <template slot="header"></template>
                        <template>
                            <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">详细信息</el-button>
                            <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div style="display: flex;  justify-content: flex-end;margin-top: 20px;">
                    <el-pagination background layout="prev, pager, next" :total="1000" ></el-pagination>
                </div>
            </el-col>
        </el-row>
       
        
    </div>
</template>

<script lang="ts">

    export default {
        data() {
            return {
                tableData: [],
                employee: [{
                    id: 1,
                    name: '李三',
                    sex: '男',
                    cardID: 130424198804056718,
                    birthday: '1988-04-05',
                    phone: 15035578903,
                    age: '31', // 实时计算
                    department: '生产部',
                    post: '工段长',
                    level: '',
                    retirementTime: '2048-04-05',
                    highestEducation: '本科',
                    educationInfo: {
                        school: '中国农业大学',
                        discipline: '制药工程',
                        education: '本科',
                        degree: '学历',
                        graduationTime: '2015.06',
                    },
                    registedResidence: '河北省石家庄市深泽县赵八乡大勿头村',
                    residence: '河北省石家庄市深泽县赵八乡大勿头村',
                    workExperience: '2015.7-2018.10 石药集团中诺药业车间操作工',
                    LaborContract: '2018.11.05-2019.11.04',
                    certificate: ['英语四级', '英语六级']

                }],
                filterText: '',
                departments: [{
                    id: 1,
                    label: '研发部',
                    children: [{
                        id: 4,
                        label: '制剂研发部'
                    },{
                        id: 9,
                        label: '研发分析部'
                    }, {
                        id: 10,
                        label: '原料药研发部'
                    }]
                }, {
                    id: 3,
                    label: '生产部'
                }]
            }
        },
        watch: {
            filterText(val) {
                this.$refs.tree.filter(val);
            }
        },
        methods: {
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            indexMethod(index) {
                return index + 1;
            },
            select (data)  {
                const tableData = [];
                for (const each of this.employee) {
                    if (each.department === data.label) {
                        tableData.push(each);
                    }
                }
                this.tableData = tableData;
            }
        },
        created() {
            this.tableData = this.employee;
        }
    }

</script>

<style scoped>
    .container{
        width: 100%;
        padding: 20px 16px;
    }
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
  } 
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>



