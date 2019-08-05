import Vue from "vue"
import Router from "vue-router"

//signup & signin
import homeComponent from "@/components/home"
import signinComponent from "@/components/auth/signin"
import forgotComponent from "@/components/auth/forgot"


Vue.use(Router)
const router =  new Router({
    mode: "hash",
    routes: [
        { path: '', component: homeComponent },
        { path: '/signin', component: signinComponent },
        { path: '/forgot', component: forgotComponent },
    ]
  })

router.beforeResolve((to, from, next) => {
//   checkPermissions();
  setTimeout(function () {
    next();
  }, 150);
  
})

export {router}