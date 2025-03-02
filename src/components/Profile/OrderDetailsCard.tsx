import { formatDate } from '../../utils/convertDate';

const OrderDetailsCard = ({ order }: { order: any }) => {
    const statuses = ["Created", "Pending", "Shipped", "Delivered", "Canceled"];
    const currentIndex = statuses.indexOf(order?.status);

    return (
        <div className="shadow mb-4">
            <header className="flex md:flex-row flex-col item-center justify-between p-4">
                <div className='px-1 py-1'>
                    <p>Order number: <span>{order?.orderNumber}</span></p>
                </div>
                <div className="flex md:flex-row flex-col gap-2">
                    <span className="px-1 py-1 rounded:sm text:xs">Order date: {formatDate(order?.createdAt)}</span>
                    <span className="bg-green-400 text-white px-1 py-1 rounded:sm text:xs">{order?.payment?.payment_status}</span>
                    <span className="bg-orange-400 text-white px-1 py-1 rounded:sm text:sm">{order?.status}</span>
                </div>
            </header>
            <div className='border border-b border-gray-100'></div>

            <div className='w-[70%] mx-auto p-4 flex items-center justify-between w-full'>
                {statuses.map((status, index) => (
                    <div key={status} className='flex flex-col items-center w-full'>
                        <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${index <= currentIndex ? "bg-green-400 border-green-400 text-white" : "bg-gray-200 border-gray-300 text-gray-500"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </div>
                        {index < statuses.length - 1 && (
                            <div className={`h-1 w-full ${index < currentIndex ? "bg-green-400" : "bg-gray-300"}`}></div>
                        )}
                        <p className={`mt-2 text-sm ${index <= currentIndex ? "text-green-400 font-bold" : "text-gray-400"}`}>{status}</p>
                    </div>
                ))}
            </div>


            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
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

            <footer className='flex md:flex-col flex-row  justify-end items-end flex-end p-4'>
                <h2 className='pb-1'>Subtotal cost: <span className='font-semibold'>{order?.totalEstimate} AZN</span></h2>
                <h2 className='pb-1'>Discount: <span className='font-semibold'>{order?.discount} AZN</span></h2>
                <h2>Total estimate: <span className='font-semibold'>{order?.totalEstimate} AZN</span></h2>
            </footer>
        </div>
    )
}

export default OrderDetailsCard