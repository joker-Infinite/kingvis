/*
 * 传媒指标
 * */
export default [
  {
    path: "media",
    name: "media",
    component: () =>
      import(/* webpackChunkName: "serviceArea" */ "@/pages/media/media.vue")
  },
  {
    path: "mediarevenue",
    name: "mediarevenue",
    component: () =>
      import(/* webpackChunkName: "serviceArea" */ "@/pages/media/children/mediarevenue.vue")
  },
  // mediaprofit
  {
    path: "mediaprofit",
    name: "mediaprofit",
    component: () =>
      import(/* webpackChunkName: "serviceArea" */ "@/pages/media/children/mediaprofit.vue")
  },
  {
    path: "mediacosting",
    name: "mediacosting",
    component: () =>
      import(/* webpackChunkName: "serviceArea" */ "@/pages/media/children/mediacosting.vue")
  },
  // mediaAreaNumber
  {
    path: "mediaAreaNumber",
    name: "mediaAreaNumber",
    component: () =>
      import(/* webpackChunkName: "serviceArea" */ "@/pages/media/children/mediaAreaNumber.vue")
  },
  // mediavacancy
  {
    path: "mediavacancy",
    name: "mediavacancy",
    component: () =>
      import(/* webpackChunkName: "serviceArea" */ "@/pages/media/children/mediavacancy.vue")
  },
];
