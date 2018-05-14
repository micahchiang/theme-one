import Vue from 'vue';
import Router from 'vue-router';
import About from '../components/client/About.vue';
//Blog components
import Blog from '../components/client/Blog.vue';
import BlogList from '../components/client/BlogList.vue';
import PostProfile from '../components/client/PostProfile.vue';
//Session components
import Login from '../components/session/Login.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Blog,
      children: [
        {
          path: '/',
          component: BlogList
        },
        {
          path: '/blog/posts/:id',
          component: PostProfile,
          props: true
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
});
