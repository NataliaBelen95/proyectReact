
import React from 'react'
import { dataContext } from '../context/DataContext'
import { useContext } from 'react'
import style from "../ProductsCard/ProductsCard.module.css"

function ProductsCard() {
    const {data, cart, setCart} = useContext(dataContext)
    
 
    function buyProduct (product) {
      
           setCart([...cart, product])
          
    }
   
   
   
   
   
   
    return (
       <div >
   
               {data.map((product)=> {
                   return (
                       <div key={product.id} className={style.containerProduct}>
                       <span><h2>{product.name}</h2></span>
                        <img src={product.img} className={style.imgProduct}/>
                        <span> <p>{product.description}</p></span>
                        
                        <div>
                       
                        <button  onClick={()=>buyProduct(product)} className={style.buttonBuyProduct}>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
       <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
     </svg>
   </button>
   <button className={style.deleteButton}>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
       <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
     </svg>
   </button>
                        </div>
       
                        
                   </div>
                   )
               } )}
   
   
             
              
   
   
   
   
       </div>
    )
   
   
}

export default ProductsCard
