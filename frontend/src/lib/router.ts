import {createRouter, createWebHistory} from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Customer from "../components/customer/Customer.vue";



const routes=[
    {path: '/hello', name : 'hello', component: HelloWorld},
    {path: '/customer', name: 'customer', component: Customer}
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})