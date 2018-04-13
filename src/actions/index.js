import axios from 'axios'

export const searchItemsByWord = word => ({
  type: 'SEARCH_ITEM_BY_WORD',
  word
})

export const addToCart = id => ({
  type: 'ADD_ITEM_TO_CART',
  id
})

export const toggleShoppingCart = () => ({
  type: 'TOGGLE_SHOPPING_CART'
})

export const removeFromCart = id => ({
  type: 'REMOVE_ITEM_FROM_CART',
  id
})

const receiveProducts = products => ({
  type: 'RECEIVE_PRODUCTS',
  products
})

export const fetchProducts = () => (dispatch) => {
  axios.get('http://localhost:8081/v1/products')
    .then(response => (
      dispatch(receiveProducts(response.data))
    ))
}
