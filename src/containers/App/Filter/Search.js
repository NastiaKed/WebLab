import React from "react";
const Search = ({searchValue, handleSearchValueChange}) =>{

    return(
        <input
        type="text"
        name="title"
        id="search"
        placeholder="Search"
        value={searchValue}
        onChange={handleSearchValueChange}
    />
    )
}
export default Search;