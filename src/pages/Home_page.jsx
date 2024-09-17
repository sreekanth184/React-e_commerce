import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import ecom_instance from '../server/api'
import Categories from '../components/Categories'
import Search_products from '../components/Search_products'
import Categories_products from '../components/Categories_products'
import Dummy_products from '../components/Dummy_products'

function Home_page() {

  let [search, setSearch] = useState([])
  let [sproducts, setSproducts] = useState([])
  let [category, setCategory] = useState([])
  let [cproducts, setCproducts] = useState([])
  let [isCategoryView, setIsCategoryView] = useState(false);

  async function getProducts(search) {
    try {
      let res1 = await ecom_instance.get(`/products/search?q=${search}`)
      let res2 = await ecom_instance.get(`/products/categories`)
      setSproducts(res1.data)
      setCategory(res2.data)
      setIsCategoryView(false)
    }
    catch (error) {
      console.log(error)
    }
  }

  async function getCategoryProducts(prod) {
    try {
      let res3 = await ecom_instance.get(`/products/category/${prod}`)
      setCproducts(res3.data);
      setIsCategoryView(true)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  let display;
  if (isCategoryView) {
    display = <div className='grid grid-cols-4 gap-12 p-4'>
      {cproducts.products.map((product) => <Categories_products key={product.id} product={product} />)}
    </div>
  } else if (sproducts && sproducts.products && sproducts.products.length > 0) {
    display = <div className='grid grid-cols-4 gap-12 p-4'>{sproducts && sproducts.products ? (
      sproducts.products.map((product) => (
        <Search_products key={product.id} product={product} />
      ))) : ("loading...")}</div>
  } else {
    display = <div><Dummy_products /></div>
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className=' border border-gray-400 rounded-lg '><Search search={search} setSearch={setSearch} getProducts={getProducts} /></div>
      <div className='flex flex-row gap-4'>
        <div className='border border-gray-400 rounded-lg p-10 max-h-[900px]'>{category.length ? category.map((catg) => <Categories  key={catg.id} catg={catg} getCategoryProducts={getCategoryProducts} />) : "Fetching list"}</div>
        {display}
      </div>
    </div>
  )
}

export default Home_page
