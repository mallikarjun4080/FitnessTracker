import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import SetProfile from '@/components/SetProfile'
import Dashboard from '@/components/Dashboard'
import DietPlan from '@/components/DietPlans/DietPlan'
import CreateDietPlan from '@/components/DietPlans/CreateDietPlan'
import WorkOut from '@/components/WorkOuts/WorkOut'
import CreateWorkout from '@/components/WorkOuts/CreateWorkout'
import CreateDailyActivity from '@/components/DailyActivities/CreateDailyActivity'
import DailyActivity from '@/components/DailyActivities/DailyActivity'
import CreateFitnessGoal from '@/components/FitnessGoals/CreateFitnessGoal'
import FitnessGoal from '@/components/FitnessGoals/FitnessGoal'
import Profile from '@/components/Profile/Profile'
import VueRouter from 'vue-router';
Vue.use(Router)

let router = new VueRouter({
  routes: [
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/set-profile',
      name: 'SetProfile',
      beforeEnter(to, from, next) {
        let accessToken = localStorage.getItem('_tk')
        if (to.fullPath === '/set-profile') {
          if (!accessToken) {
            next('/signin')
          } else {
            next()
          }
        }
      },
      component: SetProfile
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      beforeEnter(to, from, next) {
        let accessToken = localStorage.getItem('_tk')
        if (to.fullPath === '/dashboard') {
          if (!accessToken) {
            next('/signin')
          } else {
            next()
          }
        }
      },
      component: Dashboard
    },
    {
      path: '/dietplan',
      name: 'DietPlan',
      beforeEnter(to, from, next) {
        let accessToken = localStorage.getItem('_tk')
        if (to.fullPath === '/dietplan') {
          if (!accessToken) {
            next('/signin')
          } else {
            next()
          }
        }
      },
      component: DietPlan
    },
    {
      path: '/createdietplan',
      name: 'CreateDietPlan',
      beforeEnter(to, from, next) {
        let accessToken = localStorage.getItem('_tk')
        if (to.fullPath.indexOf('/createdietplan') !== -1) {
          if (!accessToken) {
            next('/signin')
          } else {
            next()
          }
        }
      },
      component: CreateDietPlan
    },
    {
      path: '/createworkout',
      name: 'CreateWorkout',
      beforeEnter(to, from, next) {
        let accessToken = localStorage.getItem('_tk')
        if (to.fullPath.indexOf('/createworkout') !== -1 ) {
          if (!accessToken) {
            next('/signin')
          } else {
            next()
          }
        }
      },
      component: CreateWorkout
    },
    {
      path: '/workouts',
      name: 'WorkOut',
      beforeEnter(to, from, next) {
        let accessToken = localStorage.getItem('_tk')
        if (to.fullPath === '/workouts') {
          if (!accessToken) {
            next('/signin')
          } else {
            next()
          }
        }
      },
      component: WorkOut
    },
    {
      path: '/dailyactivity',
      name: 'DailyActivity',
      beforeEnter(to, from, next) {
        let accessToken = localStorage.getItem('_tk')
        if (to.fullPath === '/dailyactivity') {
          if (!accessToken) {
            next('/signin')
          } else {
            next()
          }
        }
      },
      component: DailyActivity
    },
    {
      path: '/createdailyactivity',
      name: 'CreateDailyActivity',
      beforeEnter(to, from, next) {
        let accessToken = localStorage.getItem('_tk')
          if (to.fullPath.indexOf('/createdailyactivity') !== -1 ) {
          if (!accessToken) {
            next('/signin')
          } else {
            next()
          }
        }
      },
      component: CreateDailyActivity
    },
    {
      path: '/fitnessgoal',
      name: 'FitnessGoal',
      beforeEnter(to, from, next) {
        let accessToken = localStorage.getItem('_tk')
        if (to.fullPath === '/fitnessgoal') {
          if (!accessToken) {
            next('/signin')
          } else {
            next()
          }
        }
      },
      component: FitnessGoal
    },
    {
      path: '/createfitnessgoal',
      name: 'CreateFitnessGoal',
      beforeEnter(to, from, next) {
        let accessToken = localStorage.getItem('_tk')
        if (to.fullPath.indexOf('/createfitnessgoal') !== -1 ) {
          if (!accessToken) {
            next('/signin')
          } else {
            next()
          }
        }
      },
      component: CreateFitnessGoal
    },
    {
      path: '/profile',
      name: 'Profile',
      beforeEnter(to, from, next) {
        let accessToken = localStorage.getItem('_tk')
        if (to.fullPath === '/profile') {
          if (!accessToken) {
            next('/signin')
          } else {
            next()
          }
        }
      },
      component: Profile
    },
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]
});

export default router

// router.beforeEach((to, from, next) => {
//   let accessToken = null;
//   if (to.fullPath === '/dashboard') {
//     if (!accessToken) {
//       next('/signin');
//     }
//   }
//   if (to.fullPath === '/signin') {
//     // next('/dashboard')
//   }
//   next();
// });