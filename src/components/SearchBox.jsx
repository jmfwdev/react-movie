import React from "react";

function SearchBox (props) {

    return (
        <div className="search-bar">
            <input  placeholder="Type To Search" 
                    value={props.value} 
                    onChange={() => props.setSearchValue(event.target.value)} 
            />
        </div>
    )
}

export default SearchBox;