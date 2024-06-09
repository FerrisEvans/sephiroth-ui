import {createUseRoutes} from "@/utils/router.ts";
import {lazy} from "react";

export const routes = createUseRoutes([
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/user',
    redirect: '/user/login',
  },
  {
    path: '*',
    component: lazy(() => import('@/pages/404')),
  }
])