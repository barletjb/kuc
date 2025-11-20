import {createRouter, createWebHistory} from "vue-router";
import Kyc from "../components/kycprofile/kyc.vue";
import FormNewUser from "../components/user/FormNewUser.vue";
import Login from "../components/user/Login.vue";
import OAuth2CallBack from "../components/user/OAuth2CallBack.vue";


const routes = [
    {path: '/customer', name: 'customer', component: Kyc},
    {path: '/user/new', name: 'create-user', component: FormNewUser},
    {path: '/login', name: 'login', component: Login},
    {path: "/oauth2/callback", name: "oauth2-callback", component: OAuth2CallBack},
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})