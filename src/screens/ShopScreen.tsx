import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect,useState } from 'react'
import { productList } from '../redux/features/productSlice'
import { AppDispatch } from '../redux/store'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loader'
import Header from '../components/Header';
import Footer from '../components/Footer';
const ProductsScreen = () => {
  const dispatch: AppDispatch = useDispatch()
  const { loading, error, products: data } = useSelector((state: any) => state.products)

    const [isOpened, setIsOpened] = useState(false)
  
  const {
    name = '',
    category = '',
    createdAt = '',
  } = useParams()

  useEffect(() => {
    dispatch(
      productList({
        name: name !== 'all' ? name : '',
        category: category !== 'all' ? category : '',
        createdAt: createdAt !== 'all' ? createdAt : '',
      })
    )
  }, [dispatch, category, name, createdAt])

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
      <Header setIsOpened={setIsOpened} />
   
    <div className='my-6'>
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data?.map((product: any) => (
          <div key={product._id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default ProductsScreen