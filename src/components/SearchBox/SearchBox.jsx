import React from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ inputValue, handleChange }) => {
    return (
        <div className={css.SearchBox}>
            <p>Find contacts by name</p>
            <input type="text" value={inputValue} onChange={handleChange} />
        </div>
    );
};

export default SearchBox;
