/*
 * 详情页
 * */
export default [
  {
    path: "serviceDetails",
    name: "serviceDetails",
    component: () =>
      import(
        /* webpackChunkName: "details" */ "@/pages/details/serviceDetails.vue"
      )
  }
];
