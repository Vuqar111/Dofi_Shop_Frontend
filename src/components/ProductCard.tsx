import { Link } from "react-router-dom";
const ProductCard = ({ product }: { product: any }) => {
    const handleAddToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]')
        const existingProductIndex = cart.findIndex((item: any) => item._id === product._id)

        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += 1
        } else {
            cart.push({ ...product, quantity: 1 })
        }

        localStorage.setItem('cart', JSON.stringify(cart))
    }

    return (
        <div>
            <div>
                <div >
                    <div className="bg-gray-200 py-12 flex items-center justify-center">
                        <img className="" src="https://cdn.shopify.com/s/files/1/0685/0383/0762/files/ministore_mini_2.png?v=1732308855" />
                    </div>
                    <div >
                        <h3 className="pt-2 text-lg font-semibold">{product?.name}</h3>
                        <p className="opacity-[0.7] text-[14px]">AI powered conversational&nbsp;learning robot for kids&nbsp;that is small in size but big on personality.</p>
                        <div className="mt-3 flex items-center justify-between">
                            <div className="text-lg">
                                ${product?.salePrice}
                            </div>
                            <button className="text-white bg-green-400 text:sm px-2 py-2 cursor-pointer" onClick={handleAddToCart}>
                                <p>Add to cart</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard