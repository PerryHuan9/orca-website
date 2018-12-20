import Vue from 'vue';
import Router from 'vue-router';
import Root from './components/Root.vue';

Vue.use(Router);

const BeginView = () => import(/* webpackChunkName: "BeginView" */ './components/begin/BeginView');
const HomeRoot = () => import(/* webpackChunkName: "HomeRoot" */ './components/views/Root');
const HomeView = () => import(/* webpackChunkName: "HomeView" */ './components/views/HomeView');

export default new Router({
  mode: 'history',
  base: '/v1',
  routes: [
    {
      path: '/',
      component: Root,
      name: 'root',
      redirect: {name: 'view begin'},
      children: [
        {path: 'begin', name: 'view begin', component: BeginView},
        {
          path: 'main',
          name: 'home root',
          component: HomeRoot,
          children: [
            {path: 'home', name: 'view home', component: HomeView},
            {path: 'work', name: 'view work', component: HomeView},
            {path: 'our', name: 'view our', component: HomeView},
            {path: 'know', name: 'view know', component: HomeView},
            {path: 'join', name: 'view join', component: HomeView},
          ]
        },
      ]
    },
  ]
});
