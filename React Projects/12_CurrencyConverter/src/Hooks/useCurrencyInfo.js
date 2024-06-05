import { useState,useEffect } from "react";

export default function UseCurrencyInfo({currency}){
    let [data,setData]=useState({})
    useEffect(()=>{
         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>{
            return res.json()
        }).then((res)=>{
            setData(res[currency])
        })

     console.log(data);
        
    },[currency])

   
    return data
   
}