/*
 * 能源指标
 * */
export default [
  {
    path: "energy",
    name: "energy",
    component: () =>
      import(/* webpackChunkName: "energy" */ "@/pages/energy/energy.vue")
  },
  {
    path: "ZHJiaoTou",
    name: "ZHJiaoTou",
    component: () =>
      import(
        /* webpackChunkName: "energy" */ "@/pages/energy/children/ZHJiaoTou.vue"
      )
  },
  // 营收
  {
    path: "energyrevenue",
    name: "energyrevenue",
    component: () =>
      import(
        /* webpackChunkName: "energy" */ "@/pages/energy/children/energyrevenue.vue"
      )
  },
  // 利润

  {
    path: "energprofit",
    name: "energprofit",
    component: () =>
      import(
        /* webpackChunkName: "energy" */ "@/pages/energy/children/energprofit.vue"
      )
  },
  {
    path: "YPLingShou",
    name: "YPLingShou",
    component: () =>
      import(
        /* webpackChunkName: "energy" */ "@/pages/energy/children/YPLingShou.vue"
      )
  },
  {
    path: "FYPLingShou",
    name: "FYPLingShou",
    component: () =>
      import(
        /* webpackChunkName: "energy" */ "@/pages/energy/children/FYPLingShou.vue"
      )
  },
  {
    path: "JYZXiangQing",
    name: "JYZXiangQing",
    component: () =>
      import(
        /* webpackChunkName: "energy" */ "@/pages/energy/children/JYZXiangQing.vue"
      )
  },
  {
    path: "piFa",
    name: "piFa",
    component: () =>
      import(
        /* webpackChunkName: "energy" */ "@/pages/energy/children/piFa.vue"
      )
  },
  {
    path: "profit",
    name: "profit",
    component: () =>
      import(
        /* webpackChunkName: "energy" */ "@/pages/energy/children/profit.vue"
      )
  },
  {
    path: "budgetControl",
    name: "budgetControl",
    component: () =>
      import(
        /* webpackChunkName: "energy" */ "@/pages/energy/children/budgetControl.vue"
      )
  },
  {
    path: "wholesale",
    name: "wholesale",
    component: () =>
      import(
        /* webpackChunkName: "energy" */ "@/pages/energy/children/wholesale.vue"
      )
  },
  {
    path: "gasSource",
    name: "gasSource",
    component: () =>
      import(
        /* webpackChunkName: "energy" */ "@/pages/energy/children/gasSource.vue"
      )
  },
  {
    path: "accountsReceivable",
    name: "accountsReceivable",
    component: () =>
      import(
        /* webpackChunkName: "energy" */ "@/pages/energy/children/accountsReceivable.vue"
      )
  },
  {
    path: "gasWholesale",
    name: "gasWholesale",
    component: () =>
      import(
        /* webpackChunkName: "energy" */ "@/pages/energy/children/gasWholesale.vue"
      )
  },
  {
    path: "gasRetail",
    name: "gasRetail",
    component: () =>
      import(
        /* webpackChunkName: "energy" */ "@/pages/energy/children/gasRetail.vue"
      )
  },
  {
    path: "gaoLuYouZhan",
    name: "gaoLuYouZhan",
    component: () =>
      import(
        /* webpackChunkName: "energy" */ "@/pages/energy/children/gaoLuYouZhan.vue"
      )
  },
  {
    path: "guoChu",
    name: "guoChu",
    component: () =>
      import(
        /* webpackChunkName: "energy" */ "@/pages/energy/children/guoChu.vue"
      )
  },
  {
    path: "jingGangJiaRui",
    name: "jingGangJiaRui",
    component: () =>
      import(
        /* webpackChunkName: "energy" */ "@/pages/energy/children/jingGangJiaRui.vue"
      )
  },
  {
    path: "xinNengYuan",
    name: "xinNengYuan",
    component: () =>
      import(
        /* webpackChunkName: "energy" */ "@/pages/energy/children/xinNengYuan.vue"
      )
  },
  {
    path: "zhongHuaJiaoTou",
    name: "zhongHuaJiaoTou",
    component: () =>
      import(
        /* webpackChunkName: "energy" */ "@/pages/energy/children/zhongHuaJiaoTou.vue"
      )
  },
  {
    path: "zhongShiHua",
    name: "zhongShiHua",
    component: () =>
      import(
        /* webpackChunkName: "energy" */ "@/pages/energy/children/zhongShiHua.vue"
      )
  }
];
