import Vue from 'vue';
import Router from 'vue-router';
import { StorageService } from './services/storage.service';

Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "login" */ './views/Login.vue'),
      meta: {
        public: true,
        onlyWhenLoggedOut: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () =>
        import(/* webpackChunkName: "register" */ './views/Register.vue'),
      meta: {
        public: true,
        onlyWhenLoggedOut: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () =>
        import(/* webpackChunkName: "profile" */ './views/Profile.vue'),
      meta: {
        public: false
      }
    },
    {
      path: '/post-job',
      name: 'post-job',
      component: () =>
        import(
          /* webpackChunkName: "post-job" */ './views/projects/PostJob.vue'
        ),
      meta: {
        public: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public);
  const onlyWhenLoggedOut = to.matched.some(
    record => record.meta.onlyWhenLoggedOut
  );
  const loggedIn = !!StorageService.getToken();

  if (!isPublic && !loggedIn) {
    return next({
      path: '/login',
      query: { redirect: to.fullPath } // Store the full path to redirect the user to after login
    });
  }

  // Do not allow user to visit login page or register page if they are logged in
  if (loggedIn && onlyWhenLoggedOut) {
    return next('/');
  }

  next();
});

export default router;
