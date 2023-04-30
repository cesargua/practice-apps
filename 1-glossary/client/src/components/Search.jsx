import React from 'react';



const Search = ({searchHandler}) => {

    const search = (e) =>{
        e.preventDefault();
        searchHandler(e.target.value)
    }

    return (
        <form onChange={search}>
            <input id="search" type="text" placeholder='Search Term'/>
        </form>
    );
}

export default Search;
