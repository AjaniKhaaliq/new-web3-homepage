import React from "react";

const SearchBar = (props) =>{
    return(
        <form>
            <input type="text"
             value={props.filterText}
            placeholder="Search..."
            onChange={(e) => props.onFilterText(e)}
            />
            <br/>
            <label>
                <input type="checkbox"
                 value={props.inStockOnly}
                 onChange={(e) => props.onInStockOnly(e)}
                  />{''}
                  Only show products in stock
            </label>
        </form>
    );
};

export default SearchBar;