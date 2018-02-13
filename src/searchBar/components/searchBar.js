import React from 'react'

const SearchBar = () => (
  <div className="search-bar">
    <form>
      <input type="text" id="searchedItem" placeholder="What are you looking for?" autocomplete="off"/>
      <button type="submit" class="">Submit</button>
    </form>
  </div>
)

export default SearchBar
