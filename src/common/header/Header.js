import React from 'react';
import './Header.css';
import SearchBar from '../../common/searchBar';

const Header = function (props) {
    return (
        <div className="header">
            {props.heading}

            <span className="searchBar"><SearchBar/></span>
        </div>
    )
}

export default Header;