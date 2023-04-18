import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
  } from "../Constants/CartConstants";
  import axios from "axios";


  // Add to Cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const {data} = await axios.get(`/api/pn/getProductDetail/${id}`);
  // console.log("Cart action",data)

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.productDetail._id,
      name: data.productDetail.name,
      price: data.productDetail.price,
      image: data.productDetail.images.url,
      stock: data.productDetail.stock,
      quantity,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  
};