import React, { Component } from 'react';
import Header from '../../common/header/Header';
import ProfileIconBtn from '../../common/profileIconBtn';
import './Profile.css';
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: 0, textAlign: 'center' }}>
            {props.children}
        </Typography>
    )
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}


class Profile extends Component {

    constructor() {
        super();
        this.state = {
            insta: [],
            username: "Satyanjal Prakash",
            modalIsOpen: false,
        }
    }

    //    this.props.location.data
    componentWillMount() { //TODO - Remove HARDCODEED DATA
        this.setState({ insta: [
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
                ] });
    }

    openModalHandler = () => {
        this.setState({
            modalIsOpen: true,
        });
    }

    closeModalHandler = () => {
        this.setState({ modalIsOpen: false });
    }

    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    render() {

        const imageSrc = "https://scontent.cdninstagram.com/v/t51.2885-15/" +
        "44843566_2258719704414956_2636245074743740266_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_ohc=" +
        "gr4K5b7mC6gAX9J1rsa&_nc_ht=scontent.cdninstagram.com&oh=32414f6dab91e8ada795e200eead89ba&oe=5F3D2FD6"

        return (
            <div>
                <Header heading="Image Viewer"
                imageSrc={imageSrc} imageSize="7"
                isLoggedIn="true"/>

                <span className="profileHeader">
                    <ProfileIconBtn imageSrc={imageSrc} imageSize="20"/>

                    <button className="card-test">
                        <span className="profileHeaderNameAlignment">
                            {this.state.insta[0].username}
                        </span>
                        <br/><br/>
                        <span className="profileHeaderDetailsAlignment">
                            Posts : {this.state.insta.length} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Follows : 500  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Followed By : 1000
                        </span>
                        <br/><br/><br/>
                        <span className="profileHeaderUserName">
                            {this.state.username} &nbsp;
                            <Fab color="secondary" aria-label="Edit" onClick={this.openModalHandler}><EditIcon/></Fab>
                        </span>
                    </button>
                </span>
                <div className="all-photos">
                    {this.state.insta.map((post, index)  => (
                        <span key={index}>
                            <img className="img-size" alt="" src={post.media_url}/>
                        </span>
                    ))}
                </div>

                <Modal
                    ariaHideApp={false}
                    isOpen={this.state.modalIsOpen}
                    contentLabel="Login"
                    onRequestClose={this.closeModalHandler}
                    style={customStyles}
                >
                    <TabContainer>
                        <div>
                            <FormControl className="modalHeader">
                                <Typography color="textPrimary" className="modalHeaderSize">
                                    Edit
                                </Typography>
                            </FormControl>
                        </div>
                        <FormControl required>
                            <InputLabel htmlFor="username">Full Name</InputLabel>
                            <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler} />
                        </FormControl>
                        <br /><br />
                        <Button className="modalUpdateBtn" variant="contained" color="primary" onClick={this.closeModalHandler}>UPDATE</Button>
                    </TabContainer>
                </Modal>
            </div>
        )
    }
}

export default Profile;