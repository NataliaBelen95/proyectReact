import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext  = createContext () ;



const DataProvider =  ({children}) =>{
   const [data, setData] = useState ([]);
   const [cart, setCart] = useState ([]);
  

   useEffect(()=>{
        axios.get("data.json").then((res=> setData(res.data.products)))

   },[])


   return <dataContext.Provider value={{data, cart, setCart}}>{children}</dataContext.Provider>;



}


export default DataProvider