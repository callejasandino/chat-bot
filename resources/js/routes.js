import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: Home */ './Pages/Home/Home.vue'),
        children: [
            {
                path: '/faqs',
                component: () => import(/* webpackChunkName: faqs */ './Pages/Faqs/Faq.vue')
            },
            {
                path: '/admin_login',
                component: () => import(/* webpackChunkName: admin_login */ './Pages/Login/Login.vue')
            },
            {
                path: '/chat',
                component: () => import(/* webpackChunkName: qanda */ './Pages/Chat/Chat.vue')
            },
            {
                path: '/dashboard',
                component: () => import(/* webpackChunkName: qanda */ './Pages/Dashboard/Dashboard.vue')
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
