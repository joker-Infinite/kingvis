/*
 * 服务区指标
 * */
export default [
  {
    path: "serviceArea",
    name: "serviceArea",
    component: () =>
      import(
        /* webpackChunkName: "serviceArea" */ "@/pages/serviceArea/serviceArea.vue"
      )
  },
  // 利润
  {
    path: "revenue",
    name: "revenue",
    component: () =>
      import(
        /* webpackChunkName: "serviceArea" */ "@/pages/serviceArea/children/revenue.vue"
      )
  },
  // 营收
  {
    path: "profit",
    name: "profit",
    component: () =>
      import(
        /* webpackChunkName: "serviceArea" */ "@/pages/serviceArea/children/profit.vue"
      )
  },
  // 成本
  {
    path: "costing",
    name: "costing",
    component: () =>
      import(
        /* webpackChunkName: "serviceArea" */ "@/pages/serviceArea/children/costing.vue"
      )
  },
  // 业态结构
  {
    path: "construction",
    name: "construction",
    component: () =>
      import(
        /* webpackChunkName: "serviceArea" */ "@/pages/serviceArea/children/construction.vue"
      )
  },
  // 服务区对比
  {
    path: "comparison",
    name: "comparison",
    component: () =>
      import(/* webpackChunkName: "comparison" */ "@/pages/comparison/test.vue")
  },
  // 回款率
  {
    path: "rateOfReturn",
    name: "rateOfReturn",
    component: () =>
      import(
        /* webpackChunkName: "rateOfReturn" */ "@/pages/serviceArea/children/rateOfReturn.vue"
      )
  },
  // 基础信息
  {
    path: "basicInformation",
    name: "basicInformation",
    component: () =>
      import(
        /* webpackChunkName: "basicInformation" */ "@/pages/serviceArea/children/basicInformation.vue"
      )
  },
  // 评论
  {
    path: "comment",
    name: "comment",
    component: () =>
      import(
        /* webpackChunkName: "basicInformation" */ "@/pages/serviceArea/children/comment.vue"
      )
  },
  // 供应商
  {
    path: "supplier",
    name: "supplier",
    component: () =>
      import(
        /* webpackChunkName: "basicInformation" */ "@/pages/serviceArea/children/supplier.vue"
      )
  },
  {
    path: "huangGang",
    name: "huangGang",
    component: () =>
      import(
        /* webpackChunkName: "serviceArea" */ "@/pages/serviceArea/children/huangGang.vue"
      )
  },
  {
    path: "enShi",
    name: "enShi",
    component: () =>
      import(
        /* webpackChunkName: "serviceArea" */ "@/pages/serviceArea/children/enShi.vue"
      )
  },
  {
    path: "shiYan",
    name: "shiYan",
    component: () =>
      import(
        /* webpackChunkName: "serviceArea" */ "@/pages/serviceArea/children/shiYan.vue"
      )
  },
  {
    path: "xianNing",
    name: "xianNing",
    component: () =>
      import(
        /* webpackChunkName: "serviceArea" */ "@/pages/serviceArea/children/xianNing.vue"
      )
  },
  {
    path: "xiaoGan",
    name: "xiaoGan",
    component: () =>
      import(
        /* webpackChunkName: "serviceArea" */ "@/pages/serviceArea/children/xiaoGan.vue"
      )
  },
  {
    path: "yiChang",
    name: "yiChang",
    component: () =>
      import(
        /* webpackChunkName: "serviceArea" */ "@/pages/serviceArea/children/yiChang.vue"
      )
  },
  {
    path: "FWQYeTai",
    name: "FWQYeTai",
    component: () =>
      import(
        /* webpackChunkName: "serviceArea" */ "@/pages/serviceArea/children/FWQYeTai.vue"
      )
  },
  {
    path: "ComparedTest",
    name: "ComparedTest",
    component: () =>
      import(
        /* webpackChunkName: "serviceArea" */ "@/pages/comparison/ComparedTest.vue"
      )
  },
  {
    path: "compared",
    name: "compared",
    component: () =>
      import(
        /* webpackChunkName: "serviceArea" */ "@/pages/serviceCompared/compared.vue"
      )
  },
  {
    path: "latitudeStatistics",
    name: "latitudeStatistics",
    component: () =>
      import(
        /* webpackChunkName: "serviceArea" */ "@/pages/latitudeStatistics/latitudeStatistics.vue"
      )
  },
  {
    path: "businessComparison",
    name: "businessComparison",
    component: () =>
      import(
        /* webpackChunkName: "serviceArea" */ "@/pages/businessComparison/businessComparison.vue"
      )
  },
  {
    path: "gas",
    name: "gas",
    component: () =>
      import(/* webpackChunkName: "serviceArea" */ "@/pages/gas/gas.vue")
  },
  {
    path: "financialChart",
    name: "financialChart",
    component: () =>
      import(
        /* webpackChunkName: "serviceArea" */ "@/pages/financialChart/financialChart.vue"
      )
  }
];
