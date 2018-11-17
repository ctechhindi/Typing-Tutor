import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import EnglishTyping from '@/components/EnglishTyping'
import HindiTyping from '@/components/HindiTyping'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/english',
      name: 'EnglishTyping',
      component: EnglishTyping
    },
    {
      path: '/hindi',
      name: 'HindiTyping',
      component: HindiTyping
    }
  ]
})
