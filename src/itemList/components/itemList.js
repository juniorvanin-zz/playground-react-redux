import React from 'react'

const handleSubmit = (addToCart) => (evt) => {
  evt.preventDefault()

  addToCart()
}

const handleOnClick = (evt) => {
  const btn = document.getElementById(evt.target.id)

  if (btn.classList.contains('add-to-cart')) {
    btn.classList.add('remove-from-cart')
    btn.classList.remove('add-to-cart')
    btn.innerHTML = "Remove from cart"
  } else {
    btn.classList.add('add-to-cart')
    btn.classList.remove('remove-from-cart')
    btn.innerHTML = "Add to cart"
  }
}

const ItemList = (state) => {
  const items = state.items.searchedItems.length !== 0 ? state.items.searchedItems : state.items.availables

  return (
    <div>
      <p className="search-result-message"> { state.items.searchResultMessage } </p>
      <ul className="shopping-card">
      {
        items.map(item =>
          (
            <form key={ item.id } onSubmit={ handleSubmit(() => state.addToCart(item.id)) }>
              <li>
                <p className="price">${ item.price }</p>
                <span>{ item.title }</span>
                <img src="./shopping-cart.png" alt="ilustrative item" />
                <p> { item.description }</p>
                <button id={item.id} onClick={handleOnClick} type="submit" className="add-to-cart">Add to cart</button>
              </li>
            </form>
          )
        )
      }
      </ul>
    </div>
  )
}

export default ItemList
