import OrderDetailsCard from '../components/Profile/OrderDetailsCard';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { orderDetails } from '../redux/features/orderSlice'
import { AppDispatch } from '../redux/store'
import Loading from '../components/Loader'


const OrderDetailsScreen = () => {
    const dispatch: AppDispatch = useDispatch()
    const { fetchOrderDetailsLoading: loading, fetchOrderDetailsError: error, fetchOrderDetails: data } = useSelector((state: any) => state.orders)

    const id = window.location.pathname.split('/')[3]

    const [isOpened, setIsOpened] = useState(false)


    useEffect(() => {
        dispatch(
            orderDetails({ orderId: id })
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


    console.log(orderDetails)
    return (
        <>
            <div className=''>
                <div className="">
                    <div key={data?._id}>
                        <OrderDetailsCard order={data} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default OrderDetailsScreen