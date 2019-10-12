import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import docterlogin from '@/components/docterlogin'
import headerno from '@/components/headerno'
import headerok from '@/components/headerok'
import docterinfo from '@/components/docterinfo'
import newsinfo from '@/components/newsinfo'
import foot from '@/components/foot'
import doctermain from '@/components/doctermain'
import docterwel from '@/components/docterwel'
import docterregist from '@/components/docterregist'
import docterupdate from '@/components/docterupdate'
import myanswer from '@/components/myanswer'
import answerquestion from '@/components/answerquestion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/docterlogin',
      name: 'docterlogin',
      component: docterlogin
    },
    {
      path: '/headerno',
      name: 'headerno',
      component: headerno
    },
    {
      path: '/headerok',
      name: 'headerok',
      component: headerok
    },
    {
      path: '/docterinfo',
      name: 'docterinfo',
      component: docterinfo
    },
    {
      path: '/newsinfo/:id',
      name: 'newsinfo',
      component: newsinfo
    },
    {
      path: '/foot',
      name: 'foot',
      component: foot
    },
    {
      path: '/doctermain/:id',
      name: 'doctermain',
      component: doctermain
    },
    {
      path: '/docterwel',
      name: 'docterwel',
      component: docterwel
    },
    {
      path: '/docterregist',
      name: 'docterregist',
      component: docterregist
    },
    {
      path: '/docterupdate/:id',
      name: 'docterupdate',
      component: docterupdate
    },
    {
      path: '/myanswer/:id',
      name: 'myanswer',
      component: myanswer
    },
    {
      path: '/answerquestion/:qid',
      name: 'answerquestion',
      component: answerquestion
    }
  ]
})
