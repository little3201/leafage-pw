import Main from "@/components/main/Main.vue";
import Sign from "@/components/sign/Sign.vue";
import Home from "@/views/home/Home.vue";

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
      }
    ]
  },
  {
    path: "/main",
    name: "main",
    component: Main,
    children: [
      {
        path: "/user",
        name: "user",
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
