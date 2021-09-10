import VueRouter from 'vue-router'
import MainPage from './components/MainPage'
import Suggest from "./components/suggest";
const router = new VueRouter({
    routes: [
      // 动态路径参数 以冒号开头
      { path: '', component: MainPage },
      { path: '/suggest', component: Suggest}
    ]
  })

export { VueRouter, router}