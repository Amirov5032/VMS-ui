import Vue from 'vue'
import Router from 'vue-router'
import home from './components/home'
import zones from './components/zones'
import assets from './components/assets'
import servers from './components/servers'
import statistics from './components/statistics'
import vulnerabilities from './components/vulnerabilities'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: home,
      component: home
    },
    {
      path: '/zones',
      name: zones,
      component: zones
    },
    {
      path: '/assets',
      name: assets,
      component: assets
    },
    {
      path: './servers',
      name: servers,
      component: servers
    },
    {
      path: './statistics',
      name: statistics,
      component: statistics
    },
    {
      path: './vulnerabilities',
      name: vulnerabilities,
      component: vulnerabilities
    }
  ]
})
