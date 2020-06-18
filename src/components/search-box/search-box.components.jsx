import React from 'react'
import '../search-box/search-box.styles.css'

function SearchBox ({placeholder, changeHandler}) {
    return (
            <input 
            className='search' 
            type='search' 
            placeholder={placeholder} 
            onChange={changeHandler}/>
    )
}

export default SearchBox;
