import { formatDate } from '../../utils/convertDate';

const OrderDetailsCard = ({ order }: { order: any }) => {


    const allStatuses = ["Created", "Pending", "Shipped", "Delivered"];

    // Get current status and index
    const currentStatus = order?.status;
    const currentIndex = allStatuses.indexOf(currentStatus);

    // Determine if order is canceled
    const isCanceled = currentStatus === "Canceled";

    // Define steps to show (all steps for normal flow, only Created and Canceled for canceled orders)
    const displayStatuses = isCanceled ? ["Created", "Canceled"] : allStatuses;

    // Icons for different statuses
    const getStatusIcon = (status: string) => {
        switch (status) {
            case "Created":
                return (
                    <svg className="w-3.5 h-3.5 text-green-400 lg:w-4 lg:h-4 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                );
            case "Pending":
                return (
                    <svg className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                    </svg>
                );
            case "Shipped":
            case "Delivered":
                return (
                    <svg className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                    </svg>
                );
            case "Canceled":
                return (
                    <svg className="w-4 h-4 text-red-500 lg:w-5 lg:h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                );
            default:
                return (
                    <svg className="w-3.5 h-3.5 text-gray-500 lg:w-4 lg:h-4 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                );
        }
    };

    // Helper function to determine if a step is completed
    const isStepCompleted = (statusIndex: number, status: string) => {
        if (isCanceled) {
            return status === "Created"; // Only "Created" is completed in canceled orders
        }
        return statusIndex <= currentIndex;
    };



    return (
        <div className="shadow mb-4">
            <header className="flex md:flex-row flex-col item-center justify-between p-4">
                <div className='px-1 py-1'>
                    <p>Order code: <span>{order?.orderNumber}</span></p>
                </div>
                <div className="flex md:flex-row flex-col gap-2">
                    <span className="px-1 py-1 rounded:sm text:xs">Sifariş tarixi: {formatDate(order?.createdAt)}</span>
                    <span className={`text-white px-1 py-1 rounded:sm text:xs ${order?.payment?.payment_status === "Canceled" ? "bg-red-400" : "bg-green-400"}`}>
                        {order?.payment?.payment_status}
                    </span>
                    <span className={`text-white px-1 py-1 rounded:sm ${order?.status === "Canceled" ? "bg-red-400" : "bg-orange-400"}`}>
                        {order?.status}
                    </span>
                </div>
            </header>
            <div className='border border-b border-gray-100'></div>



            <ol className="flex items-center w-[70%] mx-auto mt-6">
                {displayStatuses.map((status, index) => {
                    const isCompleted = isStepCompleted(index, status);
                    const isLast = index === displayStatuses.length - 1;

                    // Special styling for canceled status
                    const stepColorClass = status === "Canceled"
                        ? "text-red-600"
                        : isCompleted
                            ? "text-green-600"
                            : "";

                    const bgColorClass = status === "Canceled"
                        ? "bg-red-100"
                        : isCompleted
                            ? "bg-green-100"
                            : "bg-green-100";

                    const connectorColorClass = status === "Canceled"
                        ? "after:border-red-100"
                        : isCompleted
                            ? "after:border-green-100"
                            : "after:border-green-100 ";

                    return (
                        <li key={status} className={`flex ${isLast ? 'items-center' : 'w-full items-center'} ${stepColorClass} ${!isLast ? `after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block ${connectorColorClass}` : ''}`}>
                            <span className={`flex items-center justify-center w-10 h-10 ${bgColorClass} rounded-full lg:h-12 lg:w-12 shrink-0`}>
                                {getStatusIcon(status)}
                            </span>
                        </li>
                    );
                })}
            </ol>




            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
                <div>
                    <h2 className='p-4'>Delivery:</h2>
                    <div className='px-4 pt-2 text-[14px]'>
                        <label>
                            <p>Country: <span className='opacity-[0.7]'>{order?.delivery?.country}</span></p>
                        </label>
                        <label>
                            <p>City: <span className='opacity-[0.7]'>{order?.delivery?.city}</span></p>
                        </label>
                        <label>
                            <p>Address: <span className='opacity-[0.7]'>{order?.delivery?.address}</span></p>
                        </label>
                    </div>
                </div>

                <div>
                    <h2 className='p-4'>Contact:</h2>
                    <div className='px-4 pt-2 text-[14px]'>
                        <label>
                            <p>Name: <span className='opacity-[0.7]'>{order?.delivery?.first_name}</span></p>
                        </label>
                        <label>
                            <p>Surname: <span className='opacity-[0.7]'>{order?.delivery?.last_name}</span></p>
                        </label>
                        <label>
                            <p>Email: <span className='opacity-[0.7]'>{order?.delivery?.email}</span></p>
                        </label>
                        <label>
                            <p>Telephone: <span className='opacity-[0.7]'>{order?.delivery?.phone}</span></p>
                        </label>
                    </div>
                </div>

                <div>
                    <h2 className='p-4'>Payment:</h2>
                    <div className='px-4 pt-2 text-[14px]'>
                        <label>
                            <p>Payment status: <span className='opacity-[0.7]'>{order?.payment?.payment_status}</span></p>
                        </label>
                        <label>
                            <p>Payment type: <span className='opacity-[0.7]'>{order?.payment?.payment_type}</span></p>
                        </label>
                    </div>
                </div>
            </div>

            <h2 className='p-4 mt-6'>Ordered products:</h2>

            <div>
                <div className="w-full flex flex-col gap-2 p-4">
                    {order?.products.map((product: any) => (
                        <div key={product._id} className="w-full grid md:grid-cols-4 gap-4 items-center">
                            <div className='flex gap-2'>
                                <img src="https://strgimgr.umico.az/sized/280/924395-149dddc4a23ff41e4d2c834b88b9568f.jpg" alt={product.name} className="w-16 h-16 object-cover" />
                                <div>
                                    <h3 className="font-semibold">{product.name}</h3>
                                    <p className="text-gray-400 text-sm flex items-center gap-2">Color: <div className={`w-[16px] h-[16px] bg-${product?.color?.replace("text-", "")} rounded-full`}></div></p>
                                </div>
                            </div>
                            <div>
                                    <p>{product.price} AZN</p>
                                </div>
                                <div>
                                    <p>x {product.qty}</p>
                                </div>
                                <div>
                                    <p>{product.totalPrice} AZN</p>
                                </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='border border-b border-gray-100'></div>

            <footer className='flex md:flex-col flex-row justify-end items-end flex-end p-4'>
                <h2 className='pb-1'>Quantity: <span className='font-semibold'>{order?.subTotalCost} AZN</span></h2>
                {order?.discount && (
                <h2 className='pb-1'>Discount code: <span className='font-semibold'>{order?.discount}</span></h2>
                )}
                <h2 className='pb-1'>Delivery: <span className='font-semibold'>0 AZN</span></h2>
                <h2>Total amount: <span className='font-semibold'>{order?.totalEstimate} AZN</span></h2>
            </footer>
        </div>
    )
}

export default OrderDetailsCard