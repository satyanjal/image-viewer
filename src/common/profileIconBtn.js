import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function ProfileIconBtn(props) {

    const classes = useStyles();
    return (
        <IconButton aria-label="delete">
            <Avatar src={props.imageSrc} className={classes.large} />
        </IconButton>
    );
}