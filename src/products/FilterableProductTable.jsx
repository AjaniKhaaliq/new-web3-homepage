import React, {useState} from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FilterableProductTable = (props) =>{

    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    const handleFilterText = (e) =>{
        setFilterText(e.target.value);
    };

    const handleInStockOnly = (e) =>{
        setInStockOnly(e.target.checked);
    }
    return(
        <React.Fragment>
            <SearchBar 
            filterText={filterText}
            inStockOnly={inStockOnly}
            onFilterText={handleFilterText}
            onInStockOnly={handleInStockOnly}
            />
            <ProductTable
            filterText={filterText}
            inStockOnly={inStockOnly}
            products={props.products}/>
        </React.Fragment>
    );
}




export default FilterableProductTable;