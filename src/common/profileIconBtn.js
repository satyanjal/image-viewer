import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';



export default function ProfileIconBtn(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        large: {
            width: theme.spacing(parseInt(props.imageSize)),
            height: theme.spacing(parseInt(props.imageSize)),
        },
    }));

    const classes = useStyles();

    return (
        <IconButton aria-label="delete">
            <Avatar src={props.imageSrc} className={classes.large} />
        </IconButton>
    );
}