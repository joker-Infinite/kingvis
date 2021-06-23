import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home";
import modules from "./modules";
import jtKanBan from "../pages/jt_KanBan/jtKanBan";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const routeModules = [];
for (const moduleName in modules) {
  const module = modules[moduleName];
  let res = [];
  if (module instanceof Array) {
    res = module;
  } else {
    res = module.res;
  }

  res.forEach(item => {
    routeModules.push({
      path: `/${moduleName}/${item.path}`,
      component: item.component,
      ...(item.children ? { children: item.children } : {})
    });
  });
}

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    meta: { title: "首页" },
    children: [...routeModules]
  },
  {
    path: "/login",
    component: () =>
      import(/* webpackChunkName: "frame" */ "../../src/components/login.vue")
  },
  {
    path: "/homeKanBan",
    component: jtKanBan
  },
  {
    path: "/temporary",
    component: () =>
      import(
        /* webpackChunkName: "frame" */ "../../src/components/common/temporary"
      )
  },
  {
    path: "/centerMapBase",
    component: () =>
      import(
        /* webpackChunkName: "frame" */ "../../src/pages/homeKanBan/children/centerMapBase"
      )
  },
  {
    path: "/EChartsTest",
    component: () =>
      import(/* webpackChunkName: "frame" */ "../../src/components/EChartsTest")
  },
  {
    path: "/403",
    component: () =>
      import(/* webpackChunkName: "frame" */ "../../src/components/common/403")
  },
  {
    path: "/imgParameter",
    component: () =>
      import(
        /* webpackChunkName: "frame" */ "../../src/components/imgParameter"
      )
  },
  {
    path: "/myPage",
    component: () =>
      import(/* webpackChunkName: \"frame\" */ "../../src/components/myPage")
  },
  /* {
        path: '/WorkReport',
        component: () => import(/!* webpackChunkName: \"frame\" *!/"../components/WorkReport.vue")
    }, */ {
    path: "/WorkReport",
    component: () =>
      import(/* webpackChunkName: \"frame\" */ "../pages/report/report")
  },
  {
    path: "/serviceArea/latitudeStatistics",
    component: () =>
      import(
        /* webpackChunkName: \"frame\" */ "../pages/latitudeStatistics/latitudeStatistics.vue"
      )
  }
];

const router = new VueRouter({
  routes
});
router.beforeEach((to, from, next) => {
  /* if (to.matched.length === 0) {
         from.name ? next({name: from.name}) : next("/403");
     } else {
         next();
     }
     if (to.path === '/login') {
         next();
     } else {
         let userPages = localStorage.getItem('userPages');
         let urls = JSON.parse(userPages).map(i => {
             return i["muenUrl"]
         });
         if (urls.indexOf(to.path) === -1 && to.path !== '/403') {
             next("/403")
         } else {
             next();
         }
     } */
  next();
});
export default router;
