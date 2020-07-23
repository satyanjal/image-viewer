import React from 'react';
import './Header.css';
import SearchBar from '../../common/searchBar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Header = function (props) {

    const classes = useStyles();
    let afterLogin;
    if (props.isLoggedIn === "true") {
      afterLogin = <span className="searchBar">
                    <SearchBar/>
                    <span className="profileIcon">
                        <IconButton aria-label="delete">
                            <Avatar src={props.imageSrc} className={classes.large} />
                        </IconButton>
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