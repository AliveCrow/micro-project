/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-01-17 11:01:05
 * @LastEditTime: 2022-01-19 10:28:48
 */

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home/index.vue')
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: () => import(/* webpackChunkName: "recommend" */ '@/views/Recommend/index.vue')
  },
  {
    path: '/rank',
    name: 'Rank',
    component: () => import(/* webpackChunkName: "rank" */ '@/views/Rank/index.vue')
  },
  {
    path: '/singer',
    name: 'Singer',
    component: () => import(/* webpackChunkName: "singer" */ '@/views/Singer/index.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import(/* webpackChunkName: "category" */ '@/views/Category/index.vue')
  },
  {
    path: '/singer-detail',
    name: 'SingerDetail',
    component: () => import(/* webpackChunkName: "category" */ '@/views/Detail/Singer')
  },
  {
    path: '/album-detail',
    name: 'AlbumDetail',
    component: () => import(/* webpackChunkName: "category" */ '@/views/Detail/Album')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import(/* webpackChunkName: "category" */ '@/views/Category/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
