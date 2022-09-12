import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Test from '@/components/basics/Test'
import ComponentTestView from "@/views/basics/ComponentTestView";
import ConcaveBoardView from "@/views/game/ConcaveBoardView";
import VueToSpringView from "@/views/axiosTest/VueToSpringView";
import RpgGameView from "@/views/rpg/RpgGameView";
import DataSendTestView from "@/views/basics/DataSendTestView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/component-test',
    name: 'ComponentTestView',
    component: ComponentTestView
  },
  {
    path: '/concave-board-game',
    name: 'concaveBoardView',
    component: ConcaveBoardView
  },
  {
    path: '/vue2spring',
    name: 'vue2spring',
    component: VueToSpringView
  },
  {
    path: '/rpg-game',
    name: 'RpgGameView',
    component: RpgGameView
  },
  {
    path: '/data-send-test',
    name: 'DataSendTestView',
    component: DataSendTestView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
