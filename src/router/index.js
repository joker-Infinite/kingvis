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
            ...(item.children ? {children: item.children} : {})
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
        meta: {title: "首页"},
        children: [...routeModules]
    },
    {
        path: "/login",
        component: () =>
            import("../../src/components/login.vue")
    },
    {
        path: "/homeKanBan",
        component: jtKanBan
    },
    {
        path: "/temporary",
        component: () =>
            import("../../src/components/common/temporary")
    },
    {
        path: "/centerMapBase",
        component: () =>
            import("../../src/pages/homeKanBan/children/centerMapBase")
    },
    {
        path: "/EChartsTest",
        component: () => import("../../src/components/EChartsTest")
    },
    {
        path: "/403",
        component: () => import("../../src/components/common/403")
    },
    {
        path: "/imgParameter",
        component: () => import("../../src/components/imgParameter")
    },
    {
        path: "/myPage",
        component: () => import("../../src/components/myPage")
    },
    {
        path: "/WorkReport",
        component: () => import("../pages/report/report")
    },
    {
        path: "/serviceArea/latitudeStatistics",
        component: () => import("../pages/latitudeStatistics/latitudeStatistics.vue")
    },
    {
        path: "/financeDimension",
        component: () => import( "../pages/financeDimension/financeDimension.vue")
    },
    {
        path: "/serviceAreaDimension",
        component: () => import( "../pages/serviceAreaDimension/serviceAreaDimension.vue")
    },
    {
        path: "/gas",
        component: () => import( "../pages/gas/gas.vue")
    },
    {
        path: "/newFinanceDimension",
        component: () => import( "../pages/newFinanceDimension/newFinanceDimension.vue")
    },
    {
        path: "/test",
        component: () => import( "../pages/testPlugin/test.vue")
    },
    {
        path: "/MonthlyReport",
        component: () => import( "../pages/MonthlyReport/MonthlyReport.vue")
    },
    {
        path: "/Finance",
        component: () => import( "../pages/Finance/Finance.vue")
    },
    {
        path: "/report",
        component: () => import( "../pages/report/report.vue")
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
