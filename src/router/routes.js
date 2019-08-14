import Main from "@/components/main/Main.vue";
import Layout from "@/views/Layout.vue";
import Login from "@/components/sign/Login.vue";

export default [
  {
    path: "/",
    name: "home",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/Home.vue")
      },
      {
        path: "/share",
        name: "share",
        component: () => import("@/views/Share.vue")
      },
      {
        path: "/photograph",
        name: "photograph",
        component: () => import("@/views/Photograph.vue")
      }
    ]
  },
  {
    path: "/main",
    name: "main",
    component: Main,
    redirect: "/folder",
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
