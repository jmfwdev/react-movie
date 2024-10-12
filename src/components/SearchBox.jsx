import React from "react";
import searchIcon from "../assets/searchIcon.svg";

function SearchBox (props) {

    return (
        <div className="search-bar">
            <input  placeholder="Type to search"
                    value={props.value} 
                    onChange={() => props.setSearchValue(event.target.value)} 
            />
            <img src={searchIcon} alt="Search Icon" className="search-icon" />
        </div>
    )
}

export default SearchBox;