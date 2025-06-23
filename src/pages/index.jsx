import { Suspense } from '@/utils';
import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./home/Home"));
const Shop = lazy(() => import("./shop/Shop"));
const About = lazy(() => import("./about/About"));
const Contact = lazy(() => import("./contact/Contact"));
const Profile = lazy(() => import("./profile/Profile"));
const Basket = lazy(() => import("./basket/Basket"));
const Like = lazy(() => import("./like/Like"));
const Login = lazy(() => import("./login/Login"));
const Register = lazy(() => import("./register/Register"));
const DetailPage = lazy(() => import("./detailPage/DetailPage"));

const MainRouters = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Suspense><Layout /></Suspense>,
      children: [
        { path: "", element: <Suspense><Home /></Suspense> },
        { path: "shop", element: <Suspense><Shop /></Suspense> },
        { path: "about", element: <Suspense><About /></Suspense> },
        { path: "contact", element: <Suspense><Contact /></Suspense> },
        { path: "product/:id", element: <Suspense><DetailPage /></Suspense> },
        { path: "profile", element: <Suspense><Profile /></Suspense> },
        { path: "basket", element: <Suspense><Basket /></Suspense> },
        { path: "like", element: <Suspense><Like /></Suspense> },
        { path: "login", element: <Suspense><Login /></Suspense> },
        { path: "register", element: <Suspense><Register /></Suspense> },
      ]
    }
  ]);

  return routes;
};

export default MainRouters;
