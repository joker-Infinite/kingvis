/*
 * 系统设置
 * */
export default [
  {
    // 菜单管理
    path: "menuManagement",
    name: "menuManagement",
    component: () =>
      import(
        /* webpackChunkName: "authorityManagement" */ "@/pages/systemSettings/menuManagement.vue"
      )
  },
  {
    // 菜单管理
    path: "dataDictionary",
    name: "dataDictionary",
    component: () =>
      import(
        /* webpackChunkName: "authorityManagement" */ "@/pages/systemSettings/dataDictionary.vue"
      )
  }
];
