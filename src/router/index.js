import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import adminLogin from '@/components/adminLogin'
import CRUD from '@/components/CRUD'
import doctorListPage from '@/components/doctorListPage'
import userListPage from '@/components/userListPage'
import partmentListPage from '@/components/partmentListPage'
import UserSelectById from '@/components/UserSelectById'
import DoctorSelectById from '@/components/DoctorSelectById'
import PartmentSelectById from '@/components/PartmentSelectById'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/adminLogin',
      name: 'adminLogin',
      component: adminLogin
    }, {
      path: '/CRUD',
      name: 'CRUD',
      component: CRUD
    }, {
      path: '/doctorListPage',
      name: 'doctorListPage',
      component: doctorListPage
    }, {
      path: '/userListPage',
      name: 'userListPage',
      component: userListPage
    }, {
      path: '/partmentListPage',
      name: 'partmentListPage',
      component: partmentListPage
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
