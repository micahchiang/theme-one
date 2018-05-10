import Vue from 'vue';
import Router from 'vue-router';
import About from '../components/About.vue';
//Blog components
import Blog from '../components/Blog.vue';
import BlogList from '../components/BlogList.vue';
import PostProfile from '../components/PostProfile.vue';

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
    }
  ]
});
