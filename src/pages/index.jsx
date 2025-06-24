import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

// Lazy-loaded sahifalar
const Layout = lazy(() => import('./layout/Layout'));
const Home = lazy(() => import('./home/Home'));
const Shop = lazy(() => import('./shop/Shop'));
const About = lazy(() => import('./about/About'));
const Contact = lazy(() => import('./contact/Contact'));
const Profile = lazy(() => import('./profile/Profile'));
const Basket = lazy(() => import('./basket/Basket'));
const Wishlist = lazy(() => import('./wishlist/Wishlist'));
const Login = lazy(() => import('./login/Login'));
const Register = lazy(() => import('./register/Register'));
const DetailPage = lazy(() => import('./detailPage/DetailPage'));
const Cart = lazy(() => import('./cart/Cart'));

// Loader komponent (sizning ilovangizda bor deb hisoblayapman)
const Loader = () => <div className="p-10 text-center text-gray-500">Loading...</div>;

const MainRouters = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: (
        <Suspense fallback={<Loader />}>
          <Layout />
        </Suspense>
      ),
      children: [
        { index: true, element: <Home /> }, // "" o‘rniga `index: true`
        { path: 'home', element: <Home /> },
        { path: 'shop', element: <Shop /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: 'product/:id', element: <DetailPage /> },
        { path: 'profile', element: <Profile /> },
        { path: 'wishlist', element: <Wishlist /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'cart', element: <Cart /> },
      ]
    }
  ]);

  return routes;
};

export default MainRouters;
