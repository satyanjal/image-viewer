import React from 'react';
import './Header.css';
import SearchBar from '../../common/searchBar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Header = function (props) {

    const classes = useStyles();
    return (
        <div className="header">
            {props.heading}

            <span className="searchBar">
                <SearchBar/>
                <span className="profileIcon">
                    <IconButton aria-label="delete">
                        <Avatar alt="Remy Sharp"
                        src="https://analyttica-website-static-content.s3.amazonaws.com/leaps-logo/Text+analytics.jpg"
                        className={classes.large} />
                    </IconButton>
                </span>
            </span>

        </div>
    )
}

export default Header;