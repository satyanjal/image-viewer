import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

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
          <ListItemText primary="Logout" />
        </StyledMenuItem>

      </StyledMenu>
    </div>
  );
}
