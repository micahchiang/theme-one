import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Blog from '../components/Blog.vue';
import About from '../components/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
});
