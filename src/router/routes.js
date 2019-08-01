import Main from "@/components/main/Main.vue";
import Home from "@/views/Home.vue";
import Login from "@/components/sign/Login.vue";

export default [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "/help",
        name: "help",
        component: () => import("@/views/Help.vue")
      },
      {
        path: "/share",
        name: "share",
        component: () => import("@/views/Share.vue")
      },
      {
        path: "/article",
        name: "article",
        component: () => import("@/views/Article.vue")
      }
    ]
  },
  {
    path: "/main",
    name: "main",
    component: Main,
    children: [
      {
        path: "/folder",
        name: "folder",
        /*  route level code-splitting
         this generates a separate chunk (about.[hash].js) for this route
         which is lazy-loaded when the route is visited */
        component: () => import("@/components/folder/Folder.vue")
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/components/dashboard/Dashboard.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/components/sign/Register.vue")
  }
];
