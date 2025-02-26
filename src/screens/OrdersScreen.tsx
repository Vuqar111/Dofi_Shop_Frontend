import OrderCard from '../components/Profile/OrderCard';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { orderList } from '../redux/features/orderSlice'
import { AppDispatch } from '../redux/store'
import Loading from '../components/Loader'


const OrdersScreen = () => {
  const dispatch: AppDispatch = useDispatch()
  const { loading, error, orders: data } = useSelector((state: any) => state.orders)

  const [isOpened, setIsOpened] = useState(false)


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
      <div className=''>
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