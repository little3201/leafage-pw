import Main from "@/components/main/Main.vue";
import Sign from "@/components/sign/Sign.vue";
import Home from "@/views/home/Home.vue";

export default [
  {
    path: "/",
    name: "home",
    meta: { title: "首页" },
    component: Home,
    children: [
      {
        path: "/help",
        name: "help",
        meta: { title: "帮助" },
        component: () => import("@/views/Help.vue")
      },
      {
        path: "/share",
        name: "share",
        meta: { title: "分享" },
        component: () => import("@/views/Share.vue")
      }
    ]
  },
  {
    path: "/main",
    name: "main",
    meta: { title: "看板" },
    component: Main,
    children: [
      {
        path: "/user",
        name: "user",
        meta: { title: "用户管理" },
        /*  route level code-splitting
         this generates a separate chunk (about.[hash].js) for this route
         which is lazy-loaded when the route is visited */
        component: () => import("@/components/user/User.vue")
      }
    ]
  },
  {
    path: "/sign",
    name: "sign",
    component: Sign
  }
];
