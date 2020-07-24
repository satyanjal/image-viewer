import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: "#c7c7c7",
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: "black",
      },
    },
  },
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
  horizontalLine: {
    backgroundColor:"gray",
    color:"gray",
    border: '1px solid #d3d4d5',
    width:100,
    marginLeft: 5,
    marginTop:0,
    marginBottom:0
  },
}));

export default function DropDownMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const logoutClick = (event) => {
    sessionStorage.removeItem("access-token");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <span onClick={handleClick}>
        {props.profileIcon}
      </span>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>

        <StyledMenuItem>
          <ListItemText primary="My Account" />
        </StyledMenuItem>
        <hr className={classes.horizontalLine}/>
        <StyledMenuItem>
          <ListItemText primary="Logout" onClick={logoutClick}/>
        </StyledMenuItem>

      </StyledMenu>
    </div>
  );
}
