import OrderCard from '../components/Profile/OrderCard';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { orderList } from '../redux/features/orderSlice'
import { AppDispatch } from '../redux/store'
import Loading from '../components/Loader'
import BreadCrumb from "../components/BreadCrumb";

const OrdersScreen = () => {
  const dispatch: AppDispatch = useDispatch()
  const { loading, error, orders: data } = useSelector((state: any) => state.orders)

  const [isOpened, setIsOpened] = useState(false)


  const breadcrumbPaths = [
    { name: 'Ana Səhifə', href: '/' },
    { name: 'Profile', href: '/profile' },
    { name: 'Sifarişlər', href: '/profile/orders' },
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
      <h2 className='pb-4 text-xl md:text-2xl'>Sənin sifarişlərin</h2>
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