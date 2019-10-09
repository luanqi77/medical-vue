import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import userRegist from '@/components/userRegist'
import userlogin from '@/components/userlogin'
import userMain from '@/components/userMain'
import userMessage from '@/components/userMessage'
import userAppoint from '@/components/userAppoint'
import userAsk from '@/components/userAsk'
import foot from '@/components/foot'
import okuserheader from '@/components/okuserheader'
import index from '@/components/index'
import userAnswer from '@/components/userAnswer'
import appointSelect from '@/components/appointSelect'

import adminLogin from '@/components/adminLogin'
import CRUD from '@/components/CRUD'
import doctorListPage from '@/components/doctorListPage'
import userListPage from '@/components/userListPage'
import partmentListPage from '@/components/partmentListPage'
import UserSelectById from '@/components/UserSelectById'
import DoctorSelectById from '@/components/DoctorSelectById'
import PartmentSelectById from '@/components/PartmentSelectById'
import DoctorAnswerListPage from '@/components/DoctorAnswerListPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/userRegist',
      name: 'userRegist',
      component: userRegist
    },
    {
      path: '/userlogin',
      name: 'userlogin',
      component: userlogin
    },
    {
      path: '/userMain/:username',
      name: 'userMain',
      component: userMain
    },
    {
      path: '/userMessage',
      name: 'userMessage',
      component: userMessage
    },
    {
      path: '/userAppoint',
      name: 'userAppoint',
      component: userAppoint
    },
    {
      path: '/userAsk',
      name: 'userAsk',
      component: userAsk
    },
    {
      path: '/foot',
      name: 'foot',
      component: foot
    },
    {
      path: '/okuserheader',
      name: 'okuserheader',
      component: okuserheader
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/userAnswer',
      name: 'userAnswer',
      component: userAnswer
    },
    {
      path: '/appointSelect',
      name: 'appointSelect',
      component: appointSelect
    },
      path: '/',
      name: 'adminLogin',
      component: adminLogin
    }, {
      path: '/CRUD',
      name: 'CRUD',
      component: CRUD,
      children:[
        {
          path: 'doctorListPage',
          name: 'doctorListPage',
          component: doctorListPage
        },  {
          path: 'userListPage',
          name: 'userListPage',
          component: userListPage
        },{
          path: 'partmentListPage',
          name: 'partmentListPage',
          component: partmentListPage
        },{
          path:'DoctorAnswerListPage',
          name:'DoctorAnswerListPage',
          component:DoctorAnswerListPage
        }
      ]
    },{
      path:'/UserSelectById/:uid',
      name:'UserSelectById',
      component:UserSelectById
    },{
      path:'/DoctorSelectById/:did',
      name:'DoctorSelectById',
      component:DoctorSelectById
    },{
      path:'/PartmentSelectById/:pid',
      name:'PartmentSelectById',
      component:PartmentSelectById
    }
  ]
})
