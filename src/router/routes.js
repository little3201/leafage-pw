import Main from "@/components/main/Main.vue";
import Home from "@/views/home/Home.vue";
import Login from "@/components/sign/Login.vue";

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
        meta: { title: "技术博客" },
        component: () => import("@/views/Help.vue")
      },
      {
        path: "/share",
        name: "share",
        meta: { title: "摄影分享" },
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
        path: "/folder",
        name: "folder",
        meta: { title: "文章管理" },
        /*  route level code-splitting
         this generates a separate chunk (about.[hash].js) for this route
         which is lazy-loaded when the route is visited */
        component: () => import("@/components/folder/Folder.vue")
      },
      {
        path: "/dashboard",
        name: "dashboard",
        meta: { title: "首页" },
        component: () => import("@/components/dashboard/Dashboard.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
  ,
  {
    path: "/register",
    name: "register",
    component: () => import("@/components/sign/Register.vue")
  }
];
