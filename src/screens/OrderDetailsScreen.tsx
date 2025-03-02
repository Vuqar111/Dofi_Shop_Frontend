import OrderDetailsCard from '../components/Profile/OrderDetailsCard';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { orderDetails } from '../redux/features/orderSlice'
import { AppDispatch } from '../redux/store'
import Loading from '../components/Loader'
import BreadCrumb from "../components/BreadCrumb";


const OrderDetailsScreen = () => {
    const dispatch: AppDispatch = useDispatch()
    const { fetchOrderDetailsLoading: loading, fetchOrderDetailsError: error, fetchOrderDetails: data } = useSelector((state: any) => state.orders)

    const id = window.location.pathname.split('/')[3]


    const breadcrumbPaths = [
        { name: 'Ana Səhifə', href: '/' },
        { name: 'Profil', href: '/profile' },
        { name: 'Sifarişlər', href: '/profile/orders' },
        { name: 'Sifariş', href: '/profile/orders/' },
    ];

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


    return (
        <>
            <BreadCrumb paths={breadcrumbPaths}/>
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