import OrderCard from '../components/Profile/OrderCard';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { orderList } from '../redux/features/orderSlice'
import { AppDispatch } from '../redux/store'
import Loading from '../components/Loader'
import BreadCrumb from "../components/BreadCrumb";
import { useTranslation } from 'react-i18next';

const OrdersScreen = () => {

  const dispatch: AppDispatch = useDispatch()
  const { t } = useTranslation();
  const { loading, error, orders: data } = useSelector((state: any) => state.orders)



  const breadcrumbPaths = [
    { name: t('breadcrumb_home'), href: '/' },
    { name: t('breadcrumb_profile'), href: '/profile' },
    { name: t('breadcrumb_orders'), href: '/profile/orders' },
];


  useEffect(() => {
    dispatch(
      orderList({})
    )
  }, [dispatch])

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    )
  }
  if (error) {
    return <div>{error}</div>
  }
  return (
    <>
    <BreadCrumb paths={breadcrumbPaths}/>
      <div className=''>
      <h2 className='pb-4 text-xl md:text-2xl'>
        {t('profile_orders_page_title')}
      </h2>
        <div className="grid grid-cols-1 ">
          {data?.map((order: any) => (
            <div key={order._id}>
              <OrderCard order={order} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default OrdersScreen