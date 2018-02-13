import React from 'react'

const handleSubmit = (addToCart) => (evt) => {
  evt.preventDefault()
  console.log(addToCart())

  addToCart()
}

const Item = (item, addToCart) => {
  console.log(addToCart)
    return (
    <form onSubmit={handleSubmit(() => addToCart({item.id}))}>
      <li key={ item.id }>
        <p className="price">${ item.price }</p>
        <span>{ item.title }</span>
        <img src="./shopping-cart.png" alt="ilustrative item" />
        <p> { item.description }</p>
        <button type="submit">Add to cart</button>
      </li>
    </form>
  )
}

export default Item
