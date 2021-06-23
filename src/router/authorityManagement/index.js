/*
 * 权限管理
 * */
export default [
  {
    // 用户管理
    path: "userManagement",
    name: "userManagement",
    component: () =>
      import(
        /* webpackChunkName: "authorityManagement" */ "@/pages/authorityManagement/userManagement.vue"
      )
  }
];
