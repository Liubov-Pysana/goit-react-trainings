import React from "react";

const SearchBox = ({ inputValue, handleChange }) => {
    return (
        <div>
            <p>Find contacts by name</p>
            <input type="text" value={inputValue} onChange={handleChange} />
        </div>
    );
};

export default SearchBox;
