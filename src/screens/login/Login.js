import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../common/header/Header';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    }
});

class Login extends Component {

    constructor() {
        super();
        this.state = {
            userName: "",
            password: ""
        }
    }

    render() {
        return (
            <div>
                <Header heading="Image Viewer" />
            </div>
        )
    }
}

export default withStyles(styles)(Login);