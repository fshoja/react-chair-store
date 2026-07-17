
import './cart.css'

import Header from '../../comp/header/Header'
import { useParams } from 'react-router-dom'
import { products } from '../../../data'

export default function Cart() {

  const {id}= useParams()


  

  const product =products.find(item => item.id==id)
  
  return (
    <>
    
    <Header/>

<div className="details">
  <div className="desc">
    <h1>{product.title} </h1>
    <p>
      {product.desc}
    </p>

  </div>
<div className="imgg">
   <img src={product.img} alt="" /> 
</div>
</div>



   </>
  )
}
