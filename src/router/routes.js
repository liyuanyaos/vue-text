import Home from "@/views/home";
// import Mine from "@/views/mine";
const routes = [
  {
    path: "/",
    redirect: "/abountmv",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index"),
  },
  {
    path: "/logins",
    name: "logins",
    component: () => import("@/views/login/verify"),
  },
  {
    path: "/orders",
    name: "Orders",
    component: () => import("@/views/mine/index"),
  },
  {
    path: "/mylogin",
    name: "mylogin",
    component: () => import("@/views/mylogin/index"),
  },
  {
    path: "/abountmv",
    name: "abountmv",
    component: () => import("@/views/aboutmv/index"),
  },
  {
    path: "/playmv",
    name: "playmv",
    component: () => import("@/views/aboutmv/playmv"),
  },
  {
    path: "/playmp3",
    name: "playmp3",
    component: () => import("@/components/playMp3"),
  },
];

export default routes;
