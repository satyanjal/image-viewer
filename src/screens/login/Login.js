import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../common/header/Header';
import './Login.css';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import FormHelperText from '@material-ui/core/FormHelperText';


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },

    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
    }
});

class Login extends Component {

    constructor() {
        super();
        this.state = {
            usernameRequired: "dispNone",
            userName: "",
            loginPasswordRequired: "dispNone",
            password: "",
            incorrectCreds: "dispNone"
        }
    }

    userNameChangeHandler = event => {
        this.setState({ userName: event.target.value });
    }

    passwordChangeHandler = event => {
        this.setState({ password: event.target.value });
    }

    loginClickHandler = () => {
        console.log("btn clicked");
        this.state.userName === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.password === "" ? this.setState({ loginPasswordRequired: "dispBlock" }) : this.setState({ loginPasswordRequired: "dispNone" });


        if (this.state.userName === "admin" && this.state.password === "admin") {
            this.setState({ incorrectCreds: "dispNone" })
            sessionStorage.setItem("access-token", "8661035776.d0fcd39.39f63ab2f88d4f9c92b0862729ee2784");
        } else {
            if (this.state.userName !== "" && this.state.password !== "") {
                this.setState({ incorrectCreds: "dispBlock" })
            }
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header heading="Image Viewer" />

                <div className="flex-container">
                    <div className="right">
                        <Card>
                            <CardContent>
                                <FormControl className={classes.formControl}>
                                    <span className="title">
                                        LOGIN
                                    </span>
                                </FormControl>
                                <br /><br />
                                <FormControl required>
                                    <InputLabel htmlFor="userName">Username</InputLabel>
                                    <Input id="userName" type="text" username={this.state.userName} onChange={this.userNameChangeHandler} />
                                    <FormHelperText className={this.state.usernameRequired}>
                                        <span className="red">required</span>
                                    </FormHelperText>
                                </FormControl>
                                <br /><br />
                                <FormControl required>
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <Input id="password" type="password" loginpassword={this.state.password} onChange={this.passwordChangeHandler} />
                                    <FormHelperText className={this.state.loginPasswordRequired}>
                                        <span className="red">required</span>
                                    </FormHelperText>
                                </FormControl>

                                <FormHelperText className={this.state.incorrectCreds}>
                                    <span className="red">Incorrect username and/or password</span>
                                </FormHelperText>
                                <br /><br />
                                <FormControl className="login-btn">
                                    <Button onClick={this.loginClickHandler} variant="contained" color="primary">
                                        LOGIN
                                    </Button>
                                </FormControl>
                                <br /><br />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Login);