
import { useContext } from "react"
import { dataContext } from "../context/DataContext"
import style from "../Products/Products.module.css"

import ProductsCard from "../ProductsCard/ProductsCard";





const Products = () => {
 






 return (
   
        <div className={style.ProductsContainer}>
          {data.map((product) => (
            <ProductsCard key={product.id} product={product} buyProduct={buyProduct} />
          ))}
        </div>
      );
    };



export default Products