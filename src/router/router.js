export const routes = [
  {
    path: '/',
    name: 'Layout',
    redirect: { name: 'Dashboard' },
    component: () => import('../layout/index.vue'),
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () => import("../views/dashboard/index.vue")
      },
      {
        path: "job",
        name: "Jobs",
        component: () => import("../views/job/index.vue"),
      },
      {
        path: "employee",
        name: "Employee",
        component: () => import("../views/employee/index.vue"),
      },
      {
        path: "setting",
        name: "Setting",
        component: () => import("../views/setting/index.vue"),
      },
    ]
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      public: true
    },
    component: () => import("../views/auth/index.vue"),
  }
];
