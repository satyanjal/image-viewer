import React, { Component } from 'react';
import Header from '../../common/header/Header';
import './Login.css';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import PropTypes from 'prop-types';

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

    static contextTypes = {
        router: PropTypes.object
    }

    userNameChangeHandler = event => {
        this.setState({ userName: event.target.value });
    }

    passwordChangeHandler = event => {
        this.setState({ password: event.target.value });
    }

    loginClickHandler = () => {
        this.state.userName === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.password === "" ? this.setState({ loginPasswordRequired: "dispBlock" }) : this.setState({ loginPasswordRequired: "dispNone" });


        if (this.state.userName === "admin" && this.state.password === "admin") {
            this.setState({ incorrectCreds: "dispNone" })
            sessionStorage.setItem("access-token", "8661035776.d0fcd39.39f63ab2f88d4f9c92b0862729ee2784");
//            this.context.router.history.push(`/home`)
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
                <Header heading="Image Viewer" isLoggedIn="false" />

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