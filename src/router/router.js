import Vue from 'vue';
import Router from 'vue-router';
import store from '../services/store';
import About from '../components/client/about/About.vue';
//Blog components
import Blog from '../components/client/Blog.vue';
import BlogList from '../components/client/BlogList.vue';
import PostProfile from '../components/client/PostProfile.vue';
//Session components
import Login from '../components/session/Login.vue';
import AdminDashboard from '../components/session/admin/AdminDashboard.vue';

Vue.use(Router);

const isAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/login');
};

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
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: AdminDashboard,
      beforeEnter: isAuthenticated
    }
  ]
});
