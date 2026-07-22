import React, { useState } from 'react'
import './shop.css'
import { products } from '../../../data'
import { Link } from 'react-router-dom'

export default function Shop() {
  const [allproducts, setAllproducts]=useState(products)

  return (
   <>
<div className="container">




{
  allproducts.map(item=>(
     <div className="cart-product">
    <h1>{item.title}</h1>
    <p>
{item.desc}    </p>

    <div className="box-img">  
         <img src={item.img} alt="" /> </div>
   
   
<div className="info">
     <p className="price">${item.price}</p>
     <Link to={ `/chair/${item.id}`}>
          <a className='btn' href="#">See More</a>
 
     </Link>
  
</div>
  </div>

  ))
}
 
</div>

   </>
  )
}
