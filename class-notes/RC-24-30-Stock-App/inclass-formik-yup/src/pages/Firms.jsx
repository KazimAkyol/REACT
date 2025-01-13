import React from 'react'
import useStockCall from '../hook/useStockCall'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Firms = () => {

 const {getStockData}=useStockCall()
 const {firms}=useSelector((state)=>state.stock)
console.log(firms)
 
 useEffect(()=>{
  getStockData("firms")
 },[])



  return (
    <div>Firms</div>
  )
}

export default Firms