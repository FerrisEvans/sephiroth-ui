import {Navigate, useRoutes} from "react-router";
import Dashboard from "@/pages/Dashboard.tsx";
import User from "@/pages/User.tsx";
import Blog from "@/pages/Blog.tsx";
import Page404 from "@/pages/Page404.tsx";
import ReactQuery from "@/pages/test/ReactQuery.tsx";
import Zustand from "@/pages/test/Zustand.tsx";
import Login from '@/views/Login'

const Router = () => {
  return useRoutes([
    {
      path: '/',
      children: [
        {
          element: <Navigate to={'/login'} />,
          index: true
        },
        {
          path: 'dashboard',
          element: <Dashboard />
        },
        {
          path: 'user',
          element: <User />
        },
        {
          path: 'blog',
          element: <Blog />
        }
      ]
    },
    {
      path: '/test',
      children: [
        { element: <Navigate to="/test/zustand" />, index: true },
        { path: 'zustand', element: <Zustand /> },
        { path: 'react-query', element: <ReactQuery /> },
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '*',
      element: <Page404 />
    },
  ])
}

export default Router