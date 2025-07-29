import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from './screens/HomeScreen';
import Loader from './helpers/Loader';
import routes from './routes';
import { AppDispatch } from './redux/store';
import { useDispatch } from 'react-redux';
import PageNotFound from './components/PageNotFound';
import { ProtectedRoute } from './routes/ProtectedRoute';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPassword from "./screens/ForgotPasswordScreen";
import CartScreen from './screens/CartScreen';
import LoginScreen from "./screens/LoginScreen";
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ShopScreen from './screens/ShopScreen';
import AboutScreen from './screens/AboutScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import CheckOutScreen from './screens/CheckOutScreen';
import { useTranslation } from 'react-i18next';
import AppScreen from './screens/AppScreen';

const DefaultLayout = lazy(() => import('./layout/layout'));

const App = () => {
  const dispatch: AppDispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  // Get the current language from the path
  const currentLang = location.pathname.split('/')[1] || 'az';

  useEffect(() => {
    // Change language based on URL
    i18n.changeLanguage(currentLang);
  }, [currentLang, i18n]);



  return loading ? (
    <Loader />
  ) : (
    <Routes>
      {/* Language-specific Routes */}
      <Route path="" element={<Home />} />
      <Route path="/:lang" element={<Home />} />
      <Route path="/:lang/auth/register" element={<RegisterScreen />} />
      <Route path="/:lang/app" element={<AppScreen />} />
      <Route path="/:lang/auth/login" element={<LoginScreen />} />
      <Route path="/:lang/auth/forgot-password" element={<ForgotPassword />} />
      <Route path="/:lang/auth/reset-password" element={<ResetPasswordScreen />} />
      <Route path="/:lang/shop" element={<ShopScreen />} />
      <Route path="/:lang/shop/:slug" element={<ProductDetailsScreen />} />
      <Route path="/:lang/about" element={<AboutScreen />} />
      <Route path="/:lang/cart" element={<CartScreen />} />
      <Route path="/:lang/cart" element={<CartScreen />} />

      <Route
        path="/:lang/checkout"
        element={

          <CheckOutScreen />
        }
      />

      <Route element={<DefaultLayout />}>
        {routes.map((route, index) => {
          const { path, component: Component } = route;
          return (
            <Route
              key={index}
              path={`/:lang${path}`}
              element={
                <ProtectedRoute>
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                </ProtectedRoute>
              }
            />
          );
        })}
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
