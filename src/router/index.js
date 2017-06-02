import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import account from  '@/components/account'
import contact from '@/components/contact'
import opp from '@/components/opp'
import me from '@/components/me'
Vue.use(Router)

export default [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path:'/account',
    name:'account',
    component:account
  },
  {
    path:'/contact',
    name:'contact',
    component:contact
  },
  {
    path:'/opp',
    name:'opp',
    component:opp
  },
  {
    path:'/me',
    name:'me',
    component:me
  },
];
