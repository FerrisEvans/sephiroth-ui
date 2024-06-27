import {Navigate} from "react-router";
import Dashboard from "@/pages/Dashboard.tsx";
import User from "@/pages/User.tsx";
import Blog from "@/pages/Blog.tsx";
import Page404 from "@/pages/Page404.tsx";
import ReactQuery from "@/pages/test/ReactQuery.tsx";
import Zustand from "@/pages/test/Zustand.tsx";
import Login from '@/views/Login'
import {createBrowserRouter, RouteObject, RouterProvider} from "react-router-dom";
import AuthenticatedRoute from "@/routes/auth/AuthenticatedRoute.tsx";
import UnauthenticatedRoute from "@/routes/auth/UnauthenticatedRoute.tsx";

const Routes = () => {
  const routesForPublic: RouteObject[] = [];
  const routesForAuthenticatedOnly: RouteObject[] = [
    {
      path: '/',
      element: <AuthenticatedRoute/>,
      children: [
        {
          path: 'dashboard',
          element: <Dashboard/>,
          index: true
        },
        {
          path: 'user',
          element: <User/>
        },
        {
          path: 'blog',
          element: <Blog/>
        },
      ],
    },
    {
      path: '/test',
      children: [
        {
          element: <Navigate to="/test/zustand"/>,
          index: true
        },
        {
          path: 'zustand',
          element: <Zustand/>
        },
        {
          path: 'react-query',
          element: <ReactQuery/>
        },
      ],
    },
    {
      path: '*',
      element: <Page404/>,
    },
  ];

  // 仅用于未通过身份验证的路由
  const routesForNotAuthenticatedOnly: RouteObject[] = [
    {
      path: '/',
      element: <UnauthenticatedRoute/>,
      children: [{path: 'login', element: <Login/>, index: true}],
    },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...routesForNotAuthenticatedOnly,
    ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router}/>;
}

export default Routes;