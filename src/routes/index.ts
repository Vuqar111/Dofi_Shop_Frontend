import { lazy } from 'react';
const ProfileScreen = lazy(() => import('../screens/ProfileScreen'));
const SecurityScreen = lazy(() => import('../screens/SecurityScreen'));
const CheckOutScreen = lazy(() => import('../screens/CheckOutScreen'));
const OrdersScreen = lazy(() => import('../screens/OrdersScreen'));
const OrderDetailsScreen = lazy(() => import('../screens/OrderDetailsScreen'));
const coreRoutes = [
    {
      path: '/profile',
      title: 'Profile',
      component: ProfileScreen,
    },
    {
      path: '/profile/security',
      title: 'Profile',
      component: SecurityScreen,
    },
    {
      path: '/profile/orders',
      title: 'Orders',
      component: OrdersScreen,
    },
    {
      path: '/profile/orders/:id',
      title: 'Order Details',
      component: OrderDetailsScreen,
    },
];

const routes = [...coreRoutes];
export default routes;
