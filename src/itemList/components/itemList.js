import React from 'react'

const handleSubmit = (addToCart) => (evt) => {
  evt.preventDefault()
  addToCart()
}

const ItemList = (state) => {
  const items = state.items.searchedItems.length !== 0 ? state.items.searchedItems : state.items.availables

  return (
    <form>
      <ul className="shopping-card">
      {
        items.map(item =>
          (
            <form onSubmit={ handleSubmit(() => state.addToCart(item.id)) }>
              <li key={ item.id }>
                <p className="price">${ item.price }</p>
                <span>{ item.title }</span>
                <img src="./shopping-cart.png" alt="ilustrative item" />
                <p> { item.description }</p>
                <button type="submit">Add to cart</button>
              </li>
            </form>
          )
        )
      }
      </ul>
    </form>
  )
}

export default ItemList
