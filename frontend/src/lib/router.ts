import {createRouter, createWebHistory} from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Customer from "../components/customer/Customer.vue";
import FormNewUser from "../components/user/FormNewUser.vue";
import Login from "../components/user/Login.vue";



const routes=[
    {path: '/hello', name : 'hello', component: HelloWorld},
    {path: '/customer', name: 'customer', component: Customer},
    {path: '/user/new', name: 'create-user', component: FormNewUser},
    {path: '/login', name: 'login', component: Login}
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})