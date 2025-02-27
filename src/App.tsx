import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
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
import CheckOutScreen from './screens/CheckOutScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
const DefaultLayout = lazy(() => import('./layout/layout'));
const App = () => {
  const dispatch: AppDispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   dispatch(profileDetails());
  //   setTimeout(() => setLoading(false), 1000);
  // }, [dispatch]);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/register" element={<RegisterScreen />} />
      <Route path="/auth/login" element={<LoginScreen />} />
      <Route path="/auth/forgot-password" element={<ForgotPassword />} />
      <Route path="/auth/reset-password" element={<ResetPasswordScreen />} />


      <Route path="/shop" element={<ShopScreen />} />
      <Route path="/products/:slug" element={<ProductDetailsScreen />} />
      <Route path="/about" element={<AboutScreen />} />
      <Route path="/cart" element={<CartScreen />} />

      <Route path='/checkout' element={<CheckOutScreen/>}/>
       
  
      {/* <Route path="/auth/forgot-password" element={<ForgotPassword />} />  */}
      <Route element={<DefaultLayout />}>
    
        {routes.map((route, index) => {
          const { path, component: Component } = route;
          return (
            <Route
              key={index}
              path={path}
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
