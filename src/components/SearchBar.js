import React from 'react'
import './searchBar.css'

const SearchBar = ( {setInput})=>{

    return (
        <div className = 'searchBarContainer'>
             <h3>Searching movie by title</h3>
                <input style={{marginLeft: '20px'}} className = 'searchBar' type = "text" placeholder = "title of searched movie" onChange={(e) => setInput(e.target.value)}/>  
        </div>
    )
}

export default SearchBar