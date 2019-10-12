import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import docterlogin from '@/components/docterlogin'
import headerno from '@/components/headerno'
import headerok from '@/components/headerok'
import docterinfo from '@/components/docterinfo'
import newsinfo from '@/components/newsinfo'
import doctermain from '@/components/doctermain'
import docterwel from '@/components/docterwel'
import docterregist from '@/components/docterregist'
import docterupdate from '@/components/docterupdate'
import myanswer from '@/components/myanswer'
import answerquestion from '@/components/answerquestion'
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

//高健的：
import Yao from '@/components/Yao'
import selectYaoById from '@/components/selectYaoById'
import insertYao from '@/components/insertYao'
import NewsList from '@/components/NewsList'
import insertNews from '@/components/insertNews'
import updateNews from '@/components/updateNews'
import HospitalList from '@/components/HospitalList'
import insertHospital from '@/components/insertHospital'
import updateHospital2 from '@/components/updateHospital2'
import GuahaoList from '@/components/GuahaoList'
import insertGuahao from '@/components/insertGuahao'
import updateGuahao from '@/components/updateGuahao'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index/:username',
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
      path: '/userMessage/:username',
      name: 'userMessage',
      component: userMessage
    },
    {
      path: '/userAppoint/:username',
      name: 'userAppoint',
      component: userAppoint
    },
    {
      path: '/userAsk/:username',
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
      path: '/index/:username',
      name: 'index',
      component: index
    },
    {
      path: '/userAnswer/:description/:username',
      name: 'userAnswer',
      component: userAnswer
    },
    {
      path: '/appointSelect/:username/:hname',
      name: 'appointSelect',
      component: appointSelect
    },
    { path:'/adminLogin',
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
        },
        {
          path:'Yao',
          name:'Yao',
          component:Yao
        },
        {
          path:'NewsList',
          name:'NewsList',
          component:NewsList
        },
        {
          path:'HospitalList',
          name:'HospitalList',
          component:HospitalList
        },
        {
          path:'GuahaoList',
          name:'GuahaoList',
          component:GuahaoList
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
    },
    {
      path:'/selectYaoById/:yid',
      name:'selectYaoById',
      component:selectYaoById
    },
    {
      path:'/insertYao',
      name:'insertYao',
      component:insertYao
    },
    {
      path:'/insertNews',
      name:'insertNews',
      component:insertNews
    },
    {
      path:'/updateNews/:nid',
      name:'updateNews',
      component:updateNews
    },
    {
      path:'/insertHospital',
      name:'insertHospital',
      component:insertHospital
    },
    {
      path:'/updateHospital2/:hid',
      name:'updateHospital2',
      component:updateHospital2
    },
    {
      path:'/updateGuahao/:gid',
      name:'updateGuahao',
      component:updateGuahao
    },
    {
      path:'/insertGuahao',
      name:'insertGuahao',
      component:insertGuahao
    }
  ]
})
