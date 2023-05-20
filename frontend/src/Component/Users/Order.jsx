import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { myOrders } from '../../Actions/OrderAction';

const Order = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(myOrders())
    })
  return (
    <>
      
    </>
  )
}

export default Order
