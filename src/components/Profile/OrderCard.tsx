import { Link,useLocation } from 'react-router-dom';
import { formatDate } from '../../utils/convertDate';
import { useTranslation } from 'react-i18next';

const OrderCard = ({ order }: { order: any }) => {
    const location = useLocation();
  const { t } = useTranslation();
  const currentLang = location.pathname.split('/')[1] || 'en';

  return (
    <div className="shadow mb-4">
      <header className="flex md:flex-row flex-col item-center justify-between p-4">
        <div>
          <p>        {t('profile_order_card_part1')}: {" "}
            <span>{order?.orderNumber}</span></p>
        </div>
        <div className="flex md:flex-row flex-col gap-2">
          <span className="px-1 py-1 rounded:sm text:xs"> {t('profile_order_card_part2')}: {" "} {formatDate(order?.createdAt)}
          </span>
          <span className="bg-orange-400 text-white px-1 py-1 rounded:sm text:sm">{order?.status}</span>
        </div>
      </header>
      <div className='border border-b border-gray-100'></div>
      <div>
        <div className="flex gap-2 p-4">
          {order?.products.map((product: any) => (
            <div key={product._id} className="border p-2 border-gray-200">
              <div className="flex items-center justify-center">
                <div>
                  <img src={product?.image}  alt={product.name} className="w-16 h-16 object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className='p-4 flex md:flex-row flex-col md:items-center justify-between'>
        <h2 className='text-green-500'>
          <Link to={`/${currentLang}/profile/orders/${order?._id}`}>{t('profile_order_card_part3')}</Link>
        </h2>
        <h2 className='md:pt-0 pt-4'>{t('profile_order_card_part4')}: {" "} <span className='font-semibold'>{order?.totalEstimate} AZN</span></h2>
      </footer>
    </div>
  )
}

export default OrderCard