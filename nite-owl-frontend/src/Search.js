import React from 'react';


function Search( { search, onSearch }) {


    function handleSearch(e) {
        onSearch(e.target.value)
    }
  return (
    <div className="search">

 

        <form>
            <input
            className="searchBar" 
            type='text' 
            placeholder='Look Around'
            value={search}
            onChange={handleSearch}
            ></input>
        </form>
    </div>
  )
}

export default Search