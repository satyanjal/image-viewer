import React from 'react';
import './Header.css';
import DropDownMenu from '../../common/dropDown';
import SearchBar from '../../common/searchBar';
import ProfileIconBtn from '../../common/profileIconBtn';


const Header = function (props) {

    let afterLogin;
    let profileIcon;
    profileIcon = <ProfileIconBtn imageSrc={props.imageSrc} imageSize={props.imageSize}/>

    if (props.isLoggedIn === "true") {
      afterLogin = <span className="searchBar">
                    <SearchBar/>
                    <span className="profileIcon">
                        <DropDownMenu profileIcon={profileIcon}/>
                    </span>
                </span>
    } else {
      afterLogin = <span></span>;
    }

    return (
        <div className="header">
            {props.heading}
            {afterLogin}
        </div>
    )
}

export default Header;