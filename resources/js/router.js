import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './vuex/store';

import Welcome from './components/views/Welcome.vue';
import Register from './components/views/auth/Register.vue';
import Login from './components/views/auth/Login.vue';
import Home from './components/views/Home.vue';
import Dashboard from './components/views/admin/Dashboard.vue';
import Users from './components/views/user/List.vue';
import NewUsers from './components/views/user/Datatable.vue';
import AddUser from './components/views/user/Add.vue';
import ShowUser from './components/views/user/View.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Welcome,
        name: 'Welcome'
    },
    {
        path: '/register',
        component: Register,
        name: 'Register'
    },
    {
        path: '/login',
        component: Login,
        name: 'Login'
    },

    // protected routes
    {
        path: '/admin',
        component: Home,
        redirect: '/admin/dashboard',
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: Dashboard
            },
            {
                path: 'users',
                name: 'users',
                component: Users
            },
            {
                path: 'new_users',
                name: 'new_users',
                component: NewUsers
            },
            {
                path: 'user/add',
                name: 'add_user',
                component: AddUser
            },
            {
                path: 'user/:id',
                name: 'show_user',
                component: ShowUser
            }
        ]
    }
];

// Register routes
const router = new VueRouter({
    mode: 'history',
    routes: routes,
    linkActiveClass: 'active'
})

export default router