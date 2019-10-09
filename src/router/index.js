import Vue from 'vue'
import Router from 'vue-router'

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
