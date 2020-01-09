
import VueRouter from 'vue-router';
import Vue from 'vue';
import Overview from './components/overview'
import Department from './components/department'
import Employee from './components/employee'
Vue.use(VueRouter);
const routes = [{ 
  path: '/overview', 
  component: Overview
},{
  path: '/department', 
  component: Department
}, {
  path: '/employee',
  component: Employee
},{
  path: '**',
  redirect: '/overview',
}]

const router = new VueRouter({
    routes
})
export default router