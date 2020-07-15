<template>
    <div class="container">
        <div style="display: flex;  justify-content: flex-end;margin-bottom: 10px;">
             <el-button type="primary" @click="dialogFormVisible = true">新建部门</el-button>
        </div>
        <el-table :data="departments" style="width: 100%" border>
            <el-table-column prop="dname" label="部门名称"></el-table-column>
            <el-table-column prop="parent" label="父级部门"></el-table-column>
            <el-table-column label="创建时间">
                <template slot-scope="props">
                    <span>{{props.row.createdAt ?  (new Date(props.row.createdAt) | formatDate) : null}}</span>
                </template>
            </el-table-column>
        </el-table>
        <div style="display: flex;  justify-content: flex-end;margin-top: 20px;">
            <el-pagination background ref="paginator" layout="total, prev, pager, next,sizes, jumper" :total="total" :page-sizes="[10, 30, 50, 100]" :page-size="pageSize" :current-page="currentPage" @size-change="sizeChange" @current-change="pageChange"></el-pagination>
        </div>


        <el-dialog title="新建部门" :visible.sync="dialogFormVisible" width="540px">
        <el-form :model="department">
            <el-form-item label="部门名称" :label-width="formLabelWidth">
                <el-input v-model="department.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="父级部门" :label-width="formLabelWidth">
                <el-input v-model="department.parent" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="创建时间" :label-width="formLabelWidth">
                <el-date-picker v-model="department.createdAt" align="right" type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="apply">确 定</el-button>
        </div>
        </el-dialog>
    </div>
</template>

<script lang="ts">
    import {getDepartment, createDepartment} from '../service/api';
    var padDate = function(va){
        va=va<10?'0'+va:va;
        return va
    }

    export default {
        data() {
            return {
                departments: [],
                total: 0,
                dialogTableVisible: false,
                dialogFormVisible: false,
                department: {
                    name: '',
                    parent: '',
                    createdAt: null
                },
                formLabelWidth: '100px',
                pageSize: 10,
                currentPage: 1,
            }
        },
        methods: {
            apply() {
                const department = this.department;
                department.createdAt = new Date(department.createdAt).getTime();
                this.dialogFormVisible = false;
                createDepartment({data: department}).then((data) => {
                    console.log(data);
                }).catch((err) => {
                    console.log(err);
                })

            },
            pageChange(val) {
                const _this = this;
                _this.currentPage = val;
                getDepartment({index: _this.currentPage -1, size: _this.pageSize}).then((data) => {
                    _this.departments = data.departments;
                    _this.total  = data.total;
                });
            },

            sizeChange(val) {
                const _this = this;
                _this.pageSize = val;
                _this.currentPage = 1;
                getDepartment({index: _this.currentPage -1, size: _this.pageSize}).then((data) => {
                    _this.departments = data.departments;
                    _this.total  = data.total;
                });
            }
        },
        mounted() {
            getDepartment({index: this.currentPage -1,size: this.pageSize}).then((data) => {
                this.departments = data.departments;
                this.total  = data.total;
               
            }).catch((err) =>{
                throw(err);
            })
        },
        filters:{
            formatDate:function (val) {
                console.log(1111);
                var value=new Date(val);
                var year=value.getFullYear();
                var month=padDate(value.getMonth()+1);
                var day=padDate(value.getDate());
                var hour=padDate(value.getHours());
                var minutes=padDate(value.getMinutes());
                var seconds=padDate(value.getSeconds());
                return year+'-'+month+'-'+day+' '+hour+':'+minutes+':'+seconds;
            }
    
        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
        padding: 20px 16px;
    }
</style>