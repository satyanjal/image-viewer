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
        this.state.userName === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.password === "" ? this.setState({ loginPasswordRequired: "dispBlock" }) : this.setState({ loginPasswordRequired: "dispNone" });


        if (this.state.userName === "admin" && this.state.password === "admin") {
            this.setState({ incorrectCreds: "dispNone" })
            sessionStorage.setItem("access-token", "8661035776.d0fcd39.39f63ab2f88d4f9c92b0862729ee2784");
            this.props.history.push({
            pathname : '/home',
            data : [
                    {
                       "id": "17971864432107472",
                       "media_type": "CAROUSEL_ALBUM",
                       "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/41975221_1930245020331477_1376127851087837738_n.jpg?_nc_cat=111&_nc_sid=8ae9d6&_nc_ohc=soUJ8Ev0NnAAX_yyNrQ&_nc_ht=scontent.cdninstagram.com&oh=b1a37e91deb56550d908c7864ac0ff98&oe=5F3FDD8F",
                       "username": "satyanjalprakash",
                       "timestamp": "2018-10-06T19:20:04+0000",
                       "caption": "Party #finally",
                       "likes": 8,
                       "profile_pic": "https://scontent.cdninstagram.com/v/t51.2885-15/44843566_2258719704414956_2636245074743740266_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_ohc=gr4K5b7mC6gAX9J1rsa&_nc_ht=scontent.cdninstagram.com&oh=32414f6dab91e8ada795e200eead89ba&oe=5F3D2FD6"

                    },
                    {
                       "id": "17997132736018682",
                       "media_type": "IMAGE",
                       "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/44843566_2258719704414956_2636245074743740266_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_ohc=DGz5W7rTPHIAX-jduLy&_nc_ht=scontent.cdninstagram.com&oh=3ddcbc774d0f7a345098ccf34c2fd5cc&oe=5F412456",
                       "username": "satyanjalprakash",
                       "timestamp": "2018-11-08T09:07:38+0000",
                       "caption": "Ethnic Diwali.. #withfamily",
                       "likes": 4,
                       "profile_pic": "https://scontent.cdninstagram.com/v/t51.2885-15/44843566_2258719704414956_2636245074743740266_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_ohc=gr4K5b7mC6gAX9J1rsa&_nc_ht=scontent.cdninstagram.com&oh=32414f6dab91e8ada795e200eead89ba&oe=5F3D2FD6"
                    },
                    {
                       "id": "17954880856130250",
                       "media_type": "IMAGE",
                       "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/41312553_534194313686938_6917261105722864467_n.jpg?_nc_cat=103&_nc_sid=8ae9d6&_nc_ohc=-5NcaMZKm1wAX8An49t&_nc_ht=scontent.cdninstagram.com&oh=95d6e474bde0b01fb922d15cdfabc3ae&oe=5F403793",
                       "username": "satyanjalprakash",
                       "timestamp": "2018-09-23T15:19:16+0000",
                       "caption": "With Gautam #longdrive \n#rastacafe",
                       "likes": 2,
                       "profile_pic": "https://scontent.cdninstagram.com/v/t51.2885-15/44843566_2258719704414956_2636245074743740266_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_ohc=gr4K5b7mC6gAX9J1rsa&_nc_ht=scontent.cdninstagram.com&oh=32414f6dab91e8ada795e200eead89ba&oe=5F3D2FD6"
                    },
                    {
                       "id": "17850152125171288",
                       "media_type": "IMAGE",
                       "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/16789533_597214953812848_4151504354542616576_n.jpg?_nc_cat=104&_nc_sid=8ae9d6&_nc_ohc=0kKwXCVpewQAX_vP3DI&_nc_ht=scontent.cdninstagram.com&oh=6b8a93cddb0007d823a40bb08db42ddd&oe=5F41D950",
                       "username": "satyanjalprakash",
                       "timestamp": "2017-02-26T14:25:17+0000",
                       "caption": "Adieu  Ranchi.. #bhaikishaadi \n#friends",
                       "likes": 5,
                       "profile_pic": "https://scontent.cdninstagram.com/v/t51.2885-15/44843566_2258719704414956_2636245074743740266_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_ohc=gr4K5b7mC6gAX9J1rsa&_nc_ht=scontent.cdninstagram.com&oh=32414f6dab91e8ada795e200eead89ba&oe=5F3D2FD6"
                    }
                ]
            });

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