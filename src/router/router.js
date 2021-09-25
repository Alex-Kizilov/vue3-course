import Main from "../pages/Main";
import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import PostsPages from "../pages/PostsPages";
import About from "../pages/About";
import PostIdPages from "../pages/PostIdPages";
import PostsPagesWithStore from "../pages/PostsPagesWithStore";
import PostsPagesCompositionApi from "../pages/PostsPagesCompositionApi";


const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: PostsPages
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/posts/:id',
    component: PostIdPages
  },
  {
    path: '/store',
    component: PostsPagesWithStore
  },
  {
    path: '/composition',
    component: PostsPagesCompositionApi
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router