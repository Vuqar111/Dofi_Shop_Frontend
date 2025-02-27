import {Link} from 'react-router-dom'
const OrderCard = ({order}: {order:any}) => {
  return (
    <div className="shadow mb-4">
      <header className="flex md:flex-row flex-col item-center justify-between p-4">
        <div>
          <p>Order number: <span>{order?.orderNumber}</span></p>
        </div>
        <div className="flex md:flex-row flex-col gap-2">
        <span className="px-1 py-1 rounded:sm text:xs">Order date: 29.12.2023</span>
          <span className="bg-green-400 text-white px-1 py-1 rounded:sm text:xs">{order?.payment?.payment_status}</span>
          <span className="bg-orange-400 text-white px-1 py-1 rounded:sm text:sm">Delivered</span>
        </div>
      </header>
      <div className='border border-b border-gray-100'></div>
      <div>
        <div className="flex gap-2 p-4">
          {order?.products.map((product: any) => (
            <div key={product._id} className="border p-2 border-gray-200">
              <div className="flex items-center justify-center">
                <div>
                  <img src="https://strgimgr.umico.az/sized/280/924395-149dddc4a23ff41e4d2c834b88b9568f.jpg" alt={product.name} className="w-16 h-16 object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className='p-4 flex md:flex-row flex-col md:items-center justify-between'>
        <h2 className='text-green-500'>
          <Link to={`/profile/orders/${order?._id}`}>Details about order</Link>
        </h2>
        <h2 className='md:pt-0 pt-4'>Total estimate: <span className='font-semibold'>{order?.totalEstimate} AZN</span></h2>
      </footer>
    </div>
  )
}

export default OrderCard