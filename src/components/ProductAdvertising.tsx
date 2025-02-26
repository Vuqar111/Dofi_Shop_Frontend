import React from 'react'

const ProductAdvertising = () => {
  return (
    <div className='w-[80%] mx-auto flex flex-col md:flex-row gap-4 mt-24'>
      <div className='w-full md:w-1/2'>
        <img className='w-full h-auto' src="https://miko.ai/cdn/shop/files/Copy_of_18_a05ff5e1-53fb-4e80-8044-40c2354d45ca.jpg?v=1735102230&width=713" alt='productImage' />
      </div>
      <div className='w-full md:w-1/2 mt-4 md:mt-12'>
        <h3 className='text-4xl md:text-6xl font-bold text-gray-500'>About the <span className='text-green-400'>Doffy</span></h3>
        <p className='pt-4 opacity-[0.7] text:sm'>The Doofy was announced at CES2017, is an early education consumer robot for children. It has received the best honor at red dot award 2017-a top international product and communication design prize beating thousands of other quality entries from more than 60 countries.</p>
        <div className='grid grid-cols-2 gap-4 pt-4'>
          <div className='flex items-center gap-2 bg-gray-100 p-4 rounded-lg w-[100%]'>
            <img className='w-12 h-12' src="https://cdn-icons-png.freepik.com/256/7172/7172577.png?ga=GA1.1.1847706705.1740395403&semt=ais_hybrid" alt=''/>
            <p className='text-lg'>Intelligent Quotient</p>
          </div>
          <div className='flex items-center gap-2 bg-gray-100 p-4 rounded-lg w-[100%]'>
            <img className='w-12 h-12' src="https://cdn-icons-png.freepik.com/256/7172/7172577.png?ga=GA1.1.1847706705.1740395403&semt=ais_hybrid" alt=''/>
            <p className='text-lg'>Intelligent Quotient</p>
          </div>
          <div className='flex items-center gap-2 bg-gray-100 p-4 rounded-lg w-[100%]'>
            <img className='w-12 h-12' src="https://cdn-icons-png.freepik.com/256/7172/7172577.png?ga=GA1.1.1847706705.1740395403&semt=ais_hybrid" alt=''/>
            <p className='text-lg'>Intelligent Quotient</p>
          </div>
          <div className='flex items-center gap-2 bg-gray-100 p-4 rounded-lg w-[100%]'>
            <img className='w-12 h-12' src="https://cdn-icons-png.freepik.com/256/7172/7172577.png?ga=GA1.1.1847706705.1740395403&semt=ais_hybrid" alt=''/>
            <p className='text-lg'>Intelligent Quotient</p>
          </div>
          <div className='flex items-center gap-2 bg-gray-100 p-4 rounded-lg w-[100%]'>
            <img className='w-12 h-12' src="https://cdn-icons-png.freepik.com/256/7172/7172577.png?ga=GA1.1.1847706705.1740395403&semt=ais_hybrid" alt=''/>
            <p className='text-lg'>Intelligent Quotient</p>
          </div>
          <div className='flex items-center gap-2 bg-gray-100 p-4 rounded-lg w-[100%]'>
            <img className='w-12 h-12' src="https://cdn-icons-png.freepik.com/256/7172/7172577.png?ga=GA1.1.1847706705.1740395403&semt=ais_hybrid" alt=''/>
            <p className='text-lg'>Intelligent Quotient</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductAdvertising