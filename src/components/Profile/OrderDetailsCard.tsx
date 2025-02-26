import { Link } from 'react-router-dom';

const OrderDetailsCard = ({ order }: { order: any }) => {
    console.log(order);
    return (
        <div className="shadow mb-4">
            <header className="flex item-center justify-between p-4">
                <div>
                    <p>Order number: <span>{order?.orderNumber}</span></p>
                </div>
                <div className="flex gap-2">
                    <span className="px-1 py-1 rounded:sm text:xs">Order date: 29.12.2023</span>
                    <span className="bg-green-400 text-white px-1 py-1 rounded:sm text:xs">{order?.payment?.payment_status}</span>
                    <span className="bg-orange-400 text-white px-1 py-1 rounded:sm text:sm">Delivered</span>
                </div>
            </header>
            <div className='border border-b border-gray-100'></div>
            <div className='grid grid-cols-3 gap-4'>
                <div>
                    <h2 className='p-4'>Delivery:</h2>
                    <div className='px-4 pt-2'>
                        <label>
                            <p>Country: {order?.delivery?.country}</p>
                        </label>
                        <label>
                            <p>City: {order?.delivery?.city}</p>
                        </label>
                        <label>
                            <p>Address: {order?.delivery?.address}</p>
                        </label>
                    </div>
                </div>

                <div>
                    <h2 className='p-4'>Contact:</h2>
                    <div className='px-4 pt-2'>
                        <label>
                            <p>First name: {order?.delivery?.first_name}</p>
                        </label>
                        <label>
                            <p>Last name: {order?.delivery?.last_name}</p>
                        </label>
                        <label>
                            <p>Email: {order?.delivery?.email}</p>
                        </label>
                        <label>
                            <p>Phone: {order?.delivery?.phone}</p>
                        </label>
                    </div>
                </div>

                

                <div>
                    <h2 className='p-4'>Payment:</h2>
                    <div className='px-4 pt-2'>
                        <label>
                            <p>Payment status: {order?.payment?.payment_status}</p>
                        </label>
                        <label>
                            <p>Payment type: {order?.payment?.payment_type}</p>
                        </label>

                    </div>
                </div>
            </div>


            <h2 className='p-4'>Ordered Products:</h2>
            <div>
                <div className="flex flex-col gap-2 p-4">
                    {order?.products.map((product: any) => (
                        <div key={product._id} className="">
                            <div className="flex items-center justify-between">
                                <div className='border p-2 border-gray-200'>
                                    <img src="https://strgimgr.umico.az/sized/280/924395-149dddc4a23ff41e4d2c834b88b9568f.jpg" alt={product.name} className="w-16 h-16 object-cover" />
                                </div>
                                <h2>{product?.name}</h2>
                                <p>{product?.color}</p>
                                <p>X {product?.qty}</p>
                                <p>{product?.totalPrice} AZN</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='border border-b border-gray-100'></div>

            <footer className='flex flex-col justify-end items-end flex-end p-4'>
                <h2 className='pb-1'>Subtotal cost: <span className='font-semibold'>{order?.totalEstimate} AZN</span></h2>
                <h2 className='pb-1'>Discount: <span className='font-semibold'>{order?.discount} AZN</span></h2>
                <h2>Total estimate: <span className='font-semibold'>{order?.totalEstimate} AZN</span></h2>
            </footer>
        </div>
    )
}

export default OrderDetailsCard