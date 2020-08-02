import React from 'react';
import './Header.css';
import DropDownMenu from '../../common/dropDown';
import SearchBar from '../../common/searchBar';
import ProfileIconBtn from '../../common/profileIconBtn';
import { useHistory } from "react-router-dom";


const Header = function (props) {

    function MyHeaderName(name) {
        let history = useHistory();
        function handleClick() {
            history.push("/home");
        }
        return <a className="headerName" href="/home" onClick={handleClick}>{name}</a>
      }

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
            {MyHeaderName(props.heading)}
            {afterLogin}
        </div>
    )
}

export default Header;