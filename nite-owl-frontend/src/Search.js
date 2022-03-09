import React from 'react';


function Search( { search, onSearch }) {

    function handleSearch(e) {
        onSearch(e.target.value)
    }
  return (
    <div>
        <h4>Search Restaurants</h4>
        <form>
            <input 
            type='text' 
            placeholder='Restaurant Name' 
            value={search}
            onChange={handleSearch}
            ></input>
        </form>
    </div>
  )
}

export default Search