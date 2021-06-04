/*
 * 商业指标
 * */
export default [
  {
    path: "business",
    name: "business",
    component: () =>
      import(
        /* webpackChunkName: "serviceArea" */ "@/pages/business/business.vue"
      )
  },
  {
    path: "businesscosting",
    name: "businesscosting",
    component: () =>
      import(
        /* webpackChunkName: "serviceArea" */ "@/pages/business/children/businesscosting.vue"
      )
  },
  {
    path: "businessprofit",
    name: "businessprofit",
    component: () =>
      import(
        /* webpackChunkName: "serviceArea" */ "@/pages/business/children/businessprofit.vue"
      )
  },
  {
    path: "businessrevenue",
    name: "businessrevenue",
    component: () =>
      import(
        /* webpackChunkName: "serviceArea" */ "@/pages/business/children/businessrevenue.vue"
      )
  },
  //服务区对比
  {
    path: "comparison",
    name: "comparison",
    component: () =>
      import(/* webpackChunkName: "comparison" */ "@/pages/comparison/testZB.vue")
  },
  {
    path: "rateOfReturn",
    name: "rateOfReturn",
    component: () =>
      import(/* webpackChunkName: "comparison" */ "@/pages/business/children/rateOfReturn.vue")
  },
  
];
