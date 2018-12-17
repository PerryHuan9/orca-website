import Vue from 'vue';
import Router from 'vue-router';
import Root from './components/Root.vue';

Vue.use(Router);

const BeginView = () => import(/* webpackChunkName: "BeginView" */ './components/views/BeginView');
const HomeView = () => import(/* webpackChunkName: "HomeView" */ './components/views/HomeView');

export default new Router({
  mode: 'history',
  base: '/orca/v1',
  routes: [
    {
      path: '/',
      component: Root,
      name: 'root',
      redirect: {name: 'view begin'},
      children: [
        {path: 'begin', name: 'view begin', component: BeginView},
        {path: 'home', name: 'view home', component: HomeView}
      ]
    },
  ]
});
