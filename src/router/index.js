import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Photos from "../views/Photos";
import Users from "../views/Users";
import Posts from "../views/Posts";
import Stepper from "../views/Stepper";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        redirect: '/users'
    },
    {
        path: '/users',
        name: 'Users',
        component: Users,
    },
    {
        path: '/posts',
        name: 'Posts',
        component: Posts
    }, {
        path: '/photos',
        name: 'Photos',
        component: Photos,
        children: [
            {
                path: 'albums',
                component: () => import("../components/nestedRoutes/UserAlbum")
            },
            {
                path: 'pictures',
                component: () => import("../components/nestedRoutes/UserPictures")
            },
        ]
    }, {
        path: '/stepper',
        name: 'Stepper',
        component: Stepper
    }, {
        path: '/administration',
        name: 'Administration',
        component: Home
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
