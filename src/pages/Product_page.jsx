import React, { useEffect, useState } from 'react'
import Product_details from '../components/Product_details'
import { useParams } from 'react-router-dom'
import ecom_instance from '../server/api';

function Product_page() {
let {productId}=useParams();
let [item, setitem]=useState([])

async function getItems(){
    try{
        let res= await ecom_instance.get(`/product/${productId}`)
        setitem(res.data)
    }
    catch(error){
        console.log(error)
    }  
}

useEffect(()=>{
    getItems();
},[])

  return (
    <div>
      <Product_details item={item}/>
    </div>
  )
}

export default Product_page
