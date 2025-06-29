import Hero from '@/components/hero/Hero'
import React from 'react'
import Products from '@/components/products/Product'
import { useNavigate } from 'react-router-dom'
import { useProduct } from '@/api/hooks/useProduct'
import Rasm from '@/components/rasm/Rasm'

const Home = () => {
  const {getProduct} = useProduct()
  const {data, isLoading} = getProduct({limit: 8})
  const navigate = useNavigate();
  return (
    <>
      <Hero />
      <h1 className='text-center text-3xl font-bold mt-8 mb-4'>Browse The Range</h1>
      <p className='text-center text-gray-600 mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Rasm />
      <Products data={data?.data?.products} loading={isLoading} count={8}/>
      <div className="text-center mt-12 mb-12">
                <button
                    onClick={() => navigate('/shop')}
                    className="border px-6 py-2 rounded hover:bg-gray-100 transition"
                >
                    Show More
                </button>
      </div>
    </>
  )
}

export default Home